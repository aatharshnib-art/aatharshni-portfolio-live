import { useMemo } from 'react';

const ALIGNMENT_ROWS = [
  'ATGCGTACGTTAGCCTAGGA',
  'ATGCGAACGTTAGCCTAGGT',
  'ATGTGTACGATAGCCTCGGA',
  'ATGCGTACCTTAGGCTAGGA',
  'ATGCGTACGTTAGCCAAGGA',
  'ATGCGAACGTTAGCCTAGCA',
];

export function AlignmentGraphic() {
  const columns = useMemo(() => {
    const length = ALIGNMENT_ROWS[0].length;
    return Array.from({ length }, (_, col) => {
      const letters = ALIGNMENT_ROWS.map((row) => row[col]);
      const counts = letters.reduce<Record<string, number>>((acc, letter) => {
        acc[letter] = (acc[letter] ?? 0) + 1;
        return acc;
      }, {});
      const conservation = Math.max(...Object.values(counts)) / letters.length;
      return { letters, conservation };
    });
  }, []);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-6 p-6 md:p-10">
      <div className="flex flex-col gap-2 overflow-hidden">
        {ALIGNMENT_ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-between font-mono text-[11px] tracking-[0.2em] opacity-0 animate-fade-in"
            style={{ animationDelay: `${rowIndex * 120}ms` }}
          >
            {columns.map((col, colIndex) => (
              <span
                key={colIndex}
                className={col.conservation === 1 ? 'text-accent' : 'text-muted/70'}
              >
                {row[colIndex]}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="flex h-16 items-end justify-between gap-[3px]">
        {columns.map((col, index) => (
          <span
            key={index}
            className={`flex-1 origin-bottom transition-transform duration-700 ${
              col.conservation === 1 ? 'bg-accent' : 'bg-line'
            }`}
            style={{ height: `${Math.max(col.conservation, 0.2) * 100}%` }}
          />
        ))}
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        Illustrative alignment layout &middot; accent marks fully conserved positions
      </p>
    </div>
  );
}

const WAVE_WIDTH = 480;
const WAVE_HEIGHT = 240;
const WAVE_MID = WAVE_HEIGHT / 2;
const WAVE_AMP = 62;
const STEP = 6;

function wavePoints(phase: number) {
  const points: [number, number][] = [];
  for (let x = 0; x <= WAVE_WIDTH; x += STEP) {
    const y = WAVE_MID + WAVE_AMP * Math.sin((x / WAVE_WIDTH) * Math.PI * 4 + phase);
    points.push([x, y]);
  }
  return points;
}

const WAVE_A = wavePoints(0);
const WAVE_B = wavePoints(Math.PI);
const toPath = (points: [number, number][]) =>
  points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

const RUNGS = WAVE_A.filter((_, i) => i % 3 === 0).map((point, i) => ({
  key: i,
  x: point[0],
  y1: point[1],
  y2: WAVE_B[i * 3][1],
}));

const FREQUENCY_BARS = Array.from({ length: 48 }, (_, i) => 0.25 + Math.abs(Math.sin(i * 0.7)) * 0.75);

export function SonificationGraphic() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-8 p-6 md:p-10">
      <svg viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`} className="w-full" role="img" aria-label="Abstract double helix with sound waves">
        <path d={toPath(WAVE_A)} pathLength={1} fill="none" stroke="#F04B32" strokeWidth={2} strokeLinecap="round" className="draw-path" />
        <path d={toPath(WAVE_B)} pathLength={1} fill="none" stroke="#A3A3A3" strokeWidth={1.5} strokeLinecap="round" className="draw-path" />
        {RUNGS.map((rung) => (
          <line key={rung.key} x1={rung.x} x2={rung.x} y1={rung.y1} y2={rung.y2} stroke="#2A2A2A" strokeWidth={1.5} />
        ))}
      </svg>

      <div className="flex h-14 items-center gap-[3px]">
        {FREQUENCY_BARS.map((height, index) => (
          <span
            key={index}
            className="flex-1 origin-center bg-accent/80 animate-pulse-bar"
            style={{ height: `${height * 100}%`, animationDelay: `${index * 45}ms` }}
          />
        ))}
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        Sequence &rarr; notes &rarr; frequencies
      </p>
    </div>
  );
}

const FRAMEWORK_NODES = ['MAP', 'FIND', 'CONNECT', 'TEST', 'MEASURE'];

export function FrameworkGraphic() {
  const radius = 92;
  const cx = 200;
  const cy = 130;
  const nodes = FRAMEWORK_NODES.map((label, index) => {
    const angle = -Math.PI / 2 + (index / FRAMEWORK_NODES.length) * Math.PI * 2;
    return { label, x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
  });

  return (
    <div className="flex h-full w-full items-center justify-center p-6 md:p-10">
      <svg viewBox="0 0 400 260" className="w-full max-w-md" role="img" aria-label="Five-step framework: map, find, connect, test, measure">
        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#2A2A2A" strokeWidth={1} />
        <circle cx={cx} cy={cy} r={radius * 0.5} fill="none" stroke="#2A2A2A" strokeDasharray="3 6" />
        <circle cx={cx} cy={cy} r={4} fill="#F04B32" />
        {nodes.map((node) => (
          <g key={node.label}>
            <line x1={cx} y1={cy} x2={node.x} y2={node.y} stroke="#2A2A2A" strokeWidth={1} />
            <circle cx={node.x} cy={node.y} r={18} fill="#161616" stroke="#F04B32" strokeWidth={1.5} />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              className="font-mono"
              fontSize={node.label.length > 4 ? 7 : 9}
              fill="#FFFFFF"
              letterSpacing="0.5"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
