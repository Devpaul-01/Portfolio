import type { ReactNode } from "react";

export type Tone = "paper" | "confirmed" | "pending" | "ink";

const toneClass: Record<Tone, string> = {
  paper: "fill-paper stroke-ledger-line",
  confirmed: "fill-confirmed-soft stroke-confirmed",
  pending: "fill-pending-soft stroke-pending",
  ink: "fill-ink stroke-ink",
};

export function Box({ x, y, w, h, tone = "paper", dashed = false }: {
  x: number; y: number; w: number; h: number; tone?: Tone; dashed?: boolean;
}) {
  return (
    <rect x={x} y={y} width={w} height={h} rx={3} strokeWidth={1.25}
      strokeDasharray={dashed ? "5 4" : undefined} className={toneClass[tone]} />
  );
}

export function Txt({ x, y, children, size = 12, mono = false, anchor = "middle", weight = 400, tone = "ink" }: {
  x: number; y: number; children: ReactNode; size?: number; mono?: boolean;
  anchor?: "start" | "middle" | "end"; weight?: number; tone?: "ink" | "slate" | "confirmed" | "pending" | "paper";
}) {
  const fill = { ink: "fill-ink", slate: "fill-slate", confirmed: "fill-confirmed", pending: "fill-pending", paper: "fill-paper" }[tone];
  return (
    <text x={x} y={y} fontSize={size} fontWeight={weight} textAnchor={anchor}
      className={`${mono ? "font-mono" : "font-body"} ${fill}`}>
      {children}
    </text>
  );
}

export function Arrow({ d, dashed = false, tone = "slate" }: { d: string; dashed?: boolean; tone?: "slate" | "confirmed" | "pending" }) {
  const stroke = { slate: "stroke-slate", confirmed: "stroke-confirmed", pending: "stroke-pending" }[tone];
  return (
    <path d={d} fill="none" strokeWidth={1.5} strokeDasharray={dashed ? "5 4" : undefined}
      className={stroke} markerEnd="url(#arrow-marker)" />
  );
}
