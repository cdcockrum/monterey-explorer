type MapRegionProps = {
  id: string;
  selectedId: string;
  onSelect: (id: string) => void;
  label: string;
  icon: string;
  d: string;
  labelX: number;
  labelY: number;
};

export function MapRegion({
  id,
  selectedId,
  onSelect,
  label,
  icon,
  d,
  labelX,
  labelY,
}: MapRegionProps) {
  const selected = selectedId === id;

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={() => onSelect(id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onSelect(id);
        }
      }}
      className="cursor-pointer outline-none"
    >
      <path
        d={d}
        fill={selected ? "rgba(34,211,238,0.22)" : "rgba(255,255,255,0.07)"}
        stroke={selected ? "#22d3ee" : "rgba(255,255,255,0.18)"}
        strokeWidth={selected ? 4 : 2}
        className="transition-all duration-300 hover:fill-cyan-300/15"
      />

      {selected && (
        <path
          d={d}
          fill="none"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="10"
          filter="url(#glow)"
        />
      )}

      <text x={labelX} y={labelY - 18} textAnchor="middle" fontSize="34">
        {icon}
      </text>

      <text
        x={labelX}
        y={labelY + 18}
        textAnchor="middle"
        fill="#f8fafc"
        fontSize="22"
        fontWeight="800"
      >
        {label}
      </text>

      <text
        x={labelX}
        y={labelY + 45}
        textAnchor="middle"
        fill="#67e8f9"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
      >
        MISSION
      </text>
    </g>
  );
}