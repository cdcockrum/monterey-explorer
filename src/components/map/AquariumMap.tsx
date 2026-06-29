import { MapRegion } from "@/components/map/MapRegion";

type AquariumMapProps = {
  selectedId: string;
  onSelect: (id: string) => void;
};

export function AquariumMap({ selectedId, onSelect }: AquariumMapProps) {
  return (
    <svg
      viewBox="0 0 1000 700"
      className="h-[680px] w-full"
      role="img"
      aria-label="Stylized Monterey Bay Aquarium map"
    >
      <defs>
        <linearGradient id="water" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#083344" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1000" height="700" fill="url(#water)" />

      <path
        d="M100 140 C250 40, 520 70, 700 120 C860 165, 920 300, 860 460 C790 640, 520 660, 320 610 C130 560, 35 430, 70 260 C80 215, 88 175, 100 140Z"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="2"
      />

      <path
        d="M165 505 C285 420, 390 430, 515 500 C615 556, 720 552, 825 485"
        fill="none"
        stroke="rgba(34,211,238,0.55)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="14 18"
      />

      <MapRegion
        id="open-sea"
        selectedId={selectedId}
        onSelect={onSelect}
        label="Open Sea"
        icon="🦈"
        d="M515 115 C660 85, 805 155, 840 285 C875 420, 730 480, 595 430 C470 384, 415 270, 515 115Z"
        labelX={650}
        labelY={270}
      />

      <MapRegion
        id="kelp-forest"
        selectedId={selectedId}
        onSelect={onSelect}
        label="Kelp Forest"
        icon="🌿"
        d="M285 120 C405 80, 520 145, 505 285 C490 420, 325 420, 250 330 C175 240, 190 155, 285 120Z"
        labelX={365}
        labelY={265}
      />

      <MapRegion
        id="sea-otters"
        selectedId={selectedId}
        onSelect={onSelect}
        label="Sea Otters"
        icon="🦦"
        d="M120 320 C190 255, 310 285, 330 395 C350 510, 210 555, 125 490 C45 430, 55 375, 120 320Z"
        labelX={205}
        labelY={420}
      />

      <MapRegion
        id="jellies"
        selectedId={selectedId}
        onSelect={onSelect}
        label="Jellies"
        icon="🪼"
        d="M650 410 C755 365, 860 425, 855 540 C850 630, 715 650, 635 585 C560 525, 575 445, 650 410Z"
        labelX={735}
        labelY={530}
      />

      <MapRegion
        id="penguins"
        selectedId={selectedId}
        onSelect={onSelect}
        label="Splash Zone"
        icon="🐧"
        d="M270 455 C370 420, 510 470, 520 570 C528 650, 375 670, 280 620 C195 575, 190 490, 270 455Z"
        labelX={390}
        labelY={565}
      />

      <g>
        <circle cx="165" cy="505" r="11" fill="#22d3ee" filter="url(#glow)" />
        <text x="185" y="511" fill="#cffafe" fontSize="18" fontWeight="700">
          You are here
        </text>
      </g>

      <text
        x="50"
        y="55"
        fill="#cffafe"
        fontSize="28"
        fontWeight="800"
        letterSpacing="2"
      >
        MONTEREY BAY AQUARIUM
      </text>
    </svg>
  );
}
