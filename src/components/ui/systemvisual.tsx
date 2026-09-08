"use client";

import { motion, useReducedMotion } from "motion/react";

const nodes = [
  { id: "web", label: "Web", x: 120, y: 90 },
  { id: "mobile", label: "Mobile", x: 340, y: 60 },
  { id: "backend", label: "Backend", x: 260, y: 260 },
  { id: "data", label: "Data", x: 60, y: 240 },
];

const links: [string, string][] = [
  ["web", "backend"],
  ["mobile", "backend"],
  ["backend", "data"],
  ["web", "mobile"],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

/**
 * The site's signature visual: web, mobile, and backend rendered as a
 * literal connected system — the thing Musa actually builds — rather
 * than an abstract decorative graphic. Reused (smaller, quieter) in the
 * Technology Ecosystem section; kept out of every other section.
 */
export function SystemVisual({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 400 320"
      className={className}
      role="img"
      aria-label="Diagram of connected web, mobile, and backend systems"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </radialGradient>
      </defs>

      {links.map(([a, b], i) => {
        const from = nodeMap[a];
        const to = nodeMap[b];
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="url(#lineGradient)"
            strokeWidth={1}
            strokeOpacity={0.5}
            initial={shouldReduceMotion ? undefined : { pathLength: 0 }}
            whileInView={shouldReduceMotion ? undefined : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.2 + i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        );
      })}

      {nodes.map((node, i) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={26}
            fill="url(#nodeGlow)"
            opacity={0.5}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={5}
            fill="#F5F5F5"
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
            className={shouldReduceMotion ? undefined : "origin-center"}
          />
          <text
            x={node.x}
            y={node.y - 16}
            textAnchor="middle"
            className="fill-text-secondary font-body text-[11px] uppercase tracking-[0.15em]"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
