import InlineDiagram from "./InlineDiagram";
import { Arrow, Box, Txt } from "./svgParts";

type DiagramProps = { title: string; desc: string; caption?: string; className?: string };

// ---------------------------------------------------------------------------
// 1. REQUEST_PERMISSION — check order, denial paths, writes
// ---------------------------------------------------------------------------
const gates = [
  { t: "Agent exists?", d: "EXISTS agent:{id}", deny: "unknown_agent" },
  { t: "Circuit open?", d: "state + probe draw", deny: "circuit_open" },
  { t: "Budget ≥ cost?", d: "GET budget:{key}", deny: "budget_exceeded" },
  { t: "In-flight < limit?", d: "GET concurrency:{…}", deny: "concurrency_exceeded" },
];
const gx = (i: number) => 20 + i * 146;

export function AdmissionDiagram(p: DiagramProps) {
  return (
    <InlineDiagram {...p} viewBox="0 0 900 256" minWidth={820}>
      <Box x={152} y={44} w={738} h={196} tone="paper" dashed />
      <Txt x={164} y={36} size={10} mono anchor="start" tone="slate">ONE LUA SCRIPT · ONE ROUND TRIP · NOTHING CAN INTERLEAVE</Txt>

      <Box x={gx(0)} y={70} w={126} h={60} tone="ink" />
      <Txt x={gx(0) + 63} y={96} size={10.5} weight={600} tone="paper">requestPermission</Txt>
      <Txt x={gx(0) + 63} y={114} size={9} mono tone="paper">agent, target, cost</Txt>
      <Arrow d={`M${gx(0) + 126} 100 H${gx(1)}`} />

      {gates.map((g, i) => {
        const x = gx(i + 1);
        return (
          <g key={g.t}>
            <Box x={x} y={70} w={126} h={60} tone="confirmed" />
            <Txt x={x + 63} y={94} size={11} weight={600}>{`${i + 1} · ${g.t}`}</Txt>
            <Txt x={x + 63} y={113} size={9} mono tone="slate">{g.d}</Txt>
            <Arrow d={`M${x + 126} 100 H${x + 146}`} />
            <Arrow d={`M${x + 63} 130 V190`} tone="pending" />
            <Box x={x} y={192} w={126} h={30} tone="pending" />
            <Txt x={x + 63} y={211} size={10} mono tone="pending">{g.deny}</Txt>
          </g>
        );
      })}

      <Box x={gx(5)} y={56} w={126} h={88} tone="confirmed" />
      <Txt x={gx(5) + 63} y={76} size={11} weight={600}>Reserve</Txt>
      {["DECRBY budget", "INCR in-flight", "HSET reservation", "ZADD expiry"].map((l, i) => (
        <Txt key={l} x={gx(5) + 63} y={94 + i * 14} size={9} mono tone="slate">{l}</Txt>
      ))}
      <Arrow d={`M${gx(5) + 63} 144 V190`} tone="confirmed" />
      <Box x={gx(5)} y={192} w={126} h={30} tone="confirmed" />
      <Txt x={gx(5) + 63} y={211} size={10} mono tone="confirmed">allowed: true</Txt>

    </InlineDiagram>
  );
}

// ---------------------------------------------------------------------------
// 2. RESOLVE_RESERVATION — one script, two callers
// ---------------------------------------------------------------------------
const steps = [
  "1  resolved already? → no-op",
  "2  refund = estimate − actual",
  "3  INCRBY pool · DECR in-flight",
  "4  mark resolved · ZREM expiry",
  "5  retryable failure → circuit",
];

export function ResolutionDiagram(p: DiagramProps) {
  return (
    <InlineDiagram {...p} viewBox="0 0 900 320" minWidth={780}>
      <Box x={20} y={50} w={230} h={74} tone="paper" />
      <Txt x={135} y={78} size={13} weight={600}>reportOutcome</Txt>
      <Txt x={135} y={98} size={10} mono tone="slate">success · retryable · actualCost</Txt>
      <Box x={20} y={196} w={230} h={74} tone="paper" />
      <Txt x={135} y={224} size={13} weight={600}>Lazy sweep</Txt>
      <Txt x={135} y={244} size={10} mono tone="slate">caller crashed, TTL passed</Txt>
      <Arrow d="M250 87 H320" />
      <Arrow d="M250 233 H320" />

      <Box x={320} y={28} w={310} h={264} tone="confirmed" />
      <Txt x={475} y={56} size={13} weight={600}>RESOLVE_RESERVATION</Txt>
      <Txt x={475} y={74} size={10} mono tone="slate">one Lua script · one idempotency check</Txt>
      {steps.map((l, i) => (
        <Txt key={l} x={344} y={110 + i * 30} size={11} mono anchor="start">{l}</Txt>
      ))}
      <Txt x={344} y={266} size={10} anchor="start" tone="slate">Step 5 runs only on the report path; the sweep never feeds the circuit.</Txt>

      <Arrow d="M630 100 H700" tone="confirmed" />
      <Box x={700} y={64} w={180} h={72} tone="confirmed" />
      <Txt x={790} y={92} size={12} weight={600}>Refunded + released</Txt>
      <Txt x={790} y={112} size={11} tone="confirmed">exactly once</Txt>
      <Arrow d="M630 220 H700" tone="pending" />
      <Box x={700} y={184} w={180} h={72} tone="pending" />
      <Txt x={790} y={212} size={12} weight={600}>Second attempt</Txt>
      <Txt x={790} y={232} size={10} mono tone="pending">already_resolved · no-op</Txt>
    </InlineDiagram>
  );
}

// ---------------------------------------------------------------------------
// 3. Circuit breaker — two states
// ---------------------------------------------------------------------------
export function CircuitDiagram(p: DiagramProps) {
  return (
    <InlineDiagram {...p} viewBox="0 70 900 250" minWidth={780}>
      <Box x={50} y={100} w={230} h={120} tone="confirmed" />
      <Txt x={165} y={130} size={14} weight={600} tone="confirmed">CLOSED</Txt>
      <Txt x={165} y={154} size={11}>calls admitted</Txt>
      <Txt x={165} y={176} size={10} mono tone="slate">soft threshold (5):</Txt>
      <Txt x={165} y={192} size={10} mono tone="slate">admitted + retryAfter</Txt>

      <Box x={620} y={100} w={230} h={120} tone="pending" />
      <Txt x={735} y={130} size={14} weight={600} tone="pending">OPEN</Txt>
      <Txt x={735} y={154} size={11}>most calls: circuit_open</Txt>
      <Txt x={735} y={176} size={10} mono tone="slate">~probeRate (10%)</Txt>
      <Txt x={735} y={192} size={10} mono tone="slate">admitted as probes</Txt>

      <Arrow d="M280 130 H620" tone="pending" />
      <Txt x={450} y={104} size={11} weight={600}>retryable failures in window ≥ hardThreshold</Txt>
      <Txt x={450} y={120} size={10} mono tone="slate">default 20 within 60 s</Txt>

      <Arrow d="M620 190 H280" tone="confirmed" />
      <Txt x={450} y={212} size={11} weight={600}>one successful probe</Txt>
      <Txt x={450} y={228} size={10} mono tone="slate">clears the whole window · ADR-0010</Txt>

      <Txt x={20} y={282} size={11} anchor="start" tone="slate">
        State lives in Redis, so a process with no failures of its own is denied because of another process's.
      </Txt>
      <Txt x={20} y={300} size={11} anchor="start" tone="slate">
        A crashed caller's abandoned reservation never counts as a failure of the target.
      </Txt>
    </InlineDiagram>
  );
}

// ---------------------------------------------------------------------------
// 4. Two implementations, one Redis
// ---------------------------------------------------------------------------
export function LanguagesDiagram(p: DiagramProps) {
  return (
    <InlineDiagram {...p} viewBox="0 0 900 300" minWidth={780}>
      <Box x={20} y={40} w={240} h={92} tone="paper" />
      <Txt x={140} y={68} size={13} weight={600}>Process A · TypeScript</Txt>
      <Txt x={140} y={88} size={10} mono tone="slate">npm: agent-broker 0.1.1</Txt>
      <Txt x={140} y={108} size={10} mono tone="slate">ioredis 5 or 6</Txt>

      <Box x={20} y={168} w={240} h={92} tone="paper" />
      <Txt x={140} y={196} size={13} weight={600}>Process B · Python</Txt>
      <Txt x={140} y={216} size={10} mono tone="slate">not yet on PyPI · async</Txt>
      <Txt x={140} y={236} size={10} mono tone="slate">redis-py 5+</Txt>

      <Arrow d="M260 86 H400" tone="confirmed" />
      <Arrow d="M260 214 H400" tone="confirmed" />
      <Box x={400} y={90} w={200} h={120} tone="confirmed" />
      <Txt x={500} y={122} size={14} weight={600}>Redis</Txt>
      <Txt x={500} y={146} size={10} mono tone="slate">same four Lua scripts</Txt>
      <Txt x={500} y={162} size={10} mono tone="slate">same keys</Txt>
      <Txt x={500} y={186} size={10} mono tone="confirmed">one budget · one circuit</Txt>

      <Box x={650} y={52} w={230} h={74} tone="paper" dashed />
      <Txt x={765} y={76} size={11} weight={600}>CI guard</Txt>
      <Txt x={765} y={94} size={10} tone="slate">byte-diffs every Lua script</Txt>
      <Txt x={765} y={110} size={10} tone="slate">against the TypeScript source</Txt>
      <Box x={650} y={174} w={230} h={74} tone="paper" dashed />
      <Txt x={765} y={198} size={11} weight={600}>CI guard</Txt>
      <Txt x={765} y={216} size={10} tone="slate">fails if Python exports drift</Txt>
      <Txt x={765} y={232} size={10} tone="slate">from typescript/src/index.ts</Txt>
      <Arrow d="M650 90 H620 V120 H600" dashed />
      <Arrow d="M650 212 H620 V180 H600" dashed />
    </InlineDiagram>
  );
}
