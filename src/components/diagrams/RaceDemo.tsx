import { useMemo, useState } from "react";

type Mode = "naive" | "atomic";
type Outcome = "admitted" | "denied";

const COST = 100;
const CAPACITY = 3; // the budget covers exactly three calls

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Each process either does read-then-write as two separate steps (naive) or one
// indivisible step (atomic). Steps from different processes are shuffled together,
// which is all "concurrent" means here.
function simulate(mode: Mode, procs: number) {
  let balance = COST * CAPACITY;
  const result: Outcome[] = Array(procs).fill("denied");
  const ids = Array.from({ length: procs }, (_, i) => i);

  if (mode === "atomic") {
    for (const p of shuffle(ids)) {
      if (balance >= COST) {
        balance -= COST;
        result[p] = "admitted";
      }
    }
  } else {
    const seen: (number | null)[] = Array(procs).fill(null);
    for (const p of shuffle([...ids, ...ids])) {
      if (seen[p] === null) {
        seen[p] = balance; // read
      } else if (seen[p]! >= COST) {
        balance -= COST; // write, based on a possibly stale read
        result[p] = "admitted";
      }
    }
  }
  return { balance, result };
}

export default function RaceDemo({ note }: { note: string }) {
  const [mode, setMode] = useState<Mode>("naive");
  const [procs, setProcs] = useState(6);
  const [run, setRun] = useState(0);
  const { balance, result } = useMemo(
    () => simulate(mode, procs),
    // `run` is the re-roll counter: same inputs, new interleaving.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode, procs, run],
  );
  const admitted = result.filter((r) => r === "admitted").length;
  const overspent = balance < 0;

  const seg = (m: Mode, label: string) => (
    <button
      type="button"
      aria-pressed={mode === m}
      onClick={() => setMode(m)}
      className={`px-4 py-2 font-mono text-xs tracking-wide transition-colors ${
        mode === m ? "bg-ink text-paper" : "bg-white text-ink hover:bg-paper"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="border border-ledger-line bg-white p-5 sm:p-7">
      <div className="flex flex-wrap items-center gap-4">
        <div className="inline-flex overflow-hidden rounded-sm border border-ink/20" role="group" aria-label="Admission strategy">
          {seg("naive", "Check, then write")}
          {seg("atomic", "One atomic script")}
        </div>
        <label className="flex items-center gap-2 font-mono text-xs text-slate">
          processes
          <select
            value={procs}
            onChange={(e) => setProcs(Number(e.target.value))}
            className="rounded-sm border border-ledger-line bg-paper px-2 py-1.5 text-ink"
          >
            {[4, 6, 10].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="rounded-sm bg-confirmed px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
        >
          Race again
        </button>
      </div>

      <p className="mt-5 text-sm text-slate">
        A shared budget of <span className="stat-figure text-ink">{COST * CAPACITY}</span>, each call costing{" "}
        <span className="stat-figure text-ink">{COST}</span>: it covers exactly {CAPACITY} calls.
      </p>

      <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5" aria-label="Per-process outcome">
        {result.map((r, i) => (
          <li
            key={i}
            className={`rounded-sm border px-3 py-2 font-mono text-xs ${
              r === "admitted"
                ? "border-confirmed/50 bg-confirmed-soft text-confirmed"
                : "border-ledger-line bg-paper text-slate"
            }`}
          >
            P{i + 1} · {r}
          </li>
        ))}
      </ul>

      <div
        aria-live="polite"
        className={`mt-5 border-l-2 py-3 pl-5 pr-4 ${
          overspent ? "border-pending/50 bg-pending-soft/60" : "border-confirmed/40 bg-confirmed-soft/50"
        }`}
      >
        <p className={`eyebrow mb-1 ${overspent ? "!text-pending" : "!text-confirmed"}`}>
          {admitted} admitted · final balance {balance}
        </p>
        <p className="text-sm leading-relaxed text-ink/80">
          {overspent
            ? `Overspent by ${-balance}. Each process read the balance before another had written, so several saw "enough" and all spent it.`
            : mode === "naive"
              ? "This interleaving happened to dodge the race. Race again; with more processes it rarely does."
              : "Never more than the budget covers, however the steps are ordered: the check and the write cannot be separated."}
        </p>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-soft">{note}</p>
    </div>
  );
}
