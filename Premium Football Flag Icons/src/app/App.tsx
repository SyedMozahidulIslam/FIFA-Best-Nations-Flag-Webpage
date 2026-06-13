function ArgentinaFlag({ size = 120 }: { size?: number }) {
  const r = size / 2;
  const id = "arg";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="54" /></clipPath>
        <radialGradient id={`gloss-${id}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
        <filter id={`ring-shadow-${id}`}>
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Metallic ring */}
      <circle cx="60" cy="60" r="57" fill="url(#ring-grad)" filter={`url(#ring-shadow-${id})`} />
      <defs>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#ring-${id})`} />
      {/* Flag stripes clipped to circle */}
      <g clipPath={`url(#clip-${id})`}>
        {/* Argentina: light blue, white, light blue */}
        <rect x="6" y="6" width="108" height="36" fill="#74ACDF" />
        <rect x="6" y="42" width="108" height="36" fill="#FFFFFF" />
        <rect x="6" y="78" width="108" height="36" fill="#74ACDF" />
        {/* Sun of May */}
        <g transform="translate(60,60)">
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5) * Math.PI / 180;
            const inner = i % 2 === 0 ? 10 : 9;
            const outer = i % 2 === 0 ? 18 : 16;
            return (
              <line
                key={i}
                x1={Math.cos(angle) * inner}
                y1={Math.sin(angle) * inner}
                x2={Math.cos(angle) * outer}
                y2={Math.sin(angle) * outer}
                stroke="#F6B40E"
                strokeWidth={i % 2 === 0 ? 3 : 2}
                strokeLinecap="round"
              />
            );
          })}
          <circle cx="0" cy="0" r="9" fill="#F6B40E" />
          <circle cx="0" cy="0" r="6" fill="#843511" opacity="0.15" />
          {/* Face */}
          <circle cx="-2.5" cy="-1.5" r="1.2" fill="#843511" opacity="0.6" />
          <circle cx="2.5" cy="-1.5" r="1.2" fill="#843511" opacity="0.6" />
          <path d="M -2.5 2 Q 0 4 2.5 2" fill="none" stroke="#843511" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
        </g>
      </g>
      {/* Gloss overlay */}
      <circle cx="60" cy="60" r="54" fill={`url(#gloss-${id})`} />
      <circle cx="60" cy="60" r="54" fill={`url(#shadow-${id})`} />
      {/* Inner ring border */}
      <circle cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function BrazilFlag({ size = 120 }: { size?: number }) {
  const id = "bra";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="54" /></clipPath>
        <radialGradient id={`gloss-${id}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <filter id={`rs-${id}`}><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" /></filter>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#ring-${id})`} filter={`url(#rs-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        <rect x="6" y="6" width="108" height="108" fill="#009C3B" />
        {/* Yellow diamond */}
        <polygon points="60,18 102,60 60,102 18,60" fill="#FFDF00" />
        {/* Blue circle */}
        <circle cx="60" cy="60" r="22" fill="#002776" />
        {/* White band */}
        <path d="M 38 54 Q 60 48 82 54" fill="none" stroke="#fff" strokeWidth="3.5" />
        {/* Stars */}
        {[
          [60, 52], [52, 58], [68, 58], [56, 64], [64, 64],
          [60, 70], [48, 64], [72, 64], [54, 70], [66, 70]
        ].slice(0, 5).map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.8" fill="#fff" />
        ))}
        <circle cx="60" cy="52" r="1.8" fill="#fff" />
        <circle cx="52" cy="58" r="1.8" fill="#fff" />
        <circle cx="68" cy="58" r="1.8" fill="#fff" />
        <circle cx="60" cy="67" r="1.8" fill="#fff" />
        <circle cx="54" cy="63" r="1.8" fill="#fff" />
        <circle cx="66" cy="63" r="1.8" fill="#fff" />
        <circle cx="57" cy="70" r="1.8" fill="#fff" />
        <circle cx="63" cy="70" r="1.8" fill="#fff" />
      </g>
      <circle cx="60" cy="60" r="54" fill={`url(#gloss-${id})`} />
      <circle cx="60" cy="60" r="54" fill={`url(#shadow-${id})`} />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function GermanyFlag({ size = 120 }: { size?: number }) {
  const id = "ger";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="54" /></clipPath>
        <radialGradient id={`gloss-${id}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <filter id={`rs-${id}`}><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" /></filter>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#ring-${id})`} filter={`url(#rs-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        <rect x="6" y="6" width="108" height="36" fill="#000000" />
        <rect x="6" y="42" width="108" height="36" fill="#DD0000" />
        <rect x="6" y="78" width="108" height="36" fill="#FFCE00" />
      </g>
      <circle cx="60" cy="60" r="54" fill={`url(#gloss-${id})`} />
      <circle cx="60" cy="60" r="54" fill={`url(#shadow-${id})`} />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function FranceFlag({ size = 120 }: { size?: number }) {
  const id = "fra";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="54" /></clipPath>
        <radialGradient id={`gloss-${id}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <filter id={`rs-${id}`}><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" /></filter>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#ring-${id})`} filter={`url(#rs-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        <rect x="6" y="6" width="36" height="108" fill="#002395" />
        <rect x="42" y="6" width="36" height="108" fill="#FFFFFF" />
        <rect x="78" y="6" width="36" height="108" fill="#ED2939" />
      </g>
      <circle cx="60" cy="60" r="54" fill={`url(#gloss-${id})`} />
      <circle cx="60" cy="60" r="54" fill={`url(#shadow-${id})`} />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function SpainFlag({ size = 120 }: { size?: number }) {
  const id = "esp";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="54" /></clipPath>
        <radialGradient id={`gloss-${id}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <filter id={`rs-${id}`}><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" /></filter>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#ring-${id})`} filter={`url(#rs-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        {/* Spain: red, yellow (double height), red */}
        <rect x="6" y="6" width="108" height="27" fill="#AA151B" />
        <rect x="6" y="33" width="108" height="54" fill="#F1BF00" />
        <rect x="6" y="87" width="108" height="27" fill="#AA151B" />
        {/* Coat of arms simplified shield */}
        <rect x="47" y="46" width="14" height="18" rx="2" fill="#AA151B" stroke="#8B0000" strokeWidth="0.5" />
        <rect x="59" y="46" width="14" height="18" rx="2" fill="#AA151B" stroke="#8B0000" strokeWidth="0.5" />
        <rect x="47" y="46" width="14" height="18" rx="2" fill="#c41e26" />
        <rect x="59" y="46" width="14" height="18" rx="2" fill="#c41e26" />
        {/* Pillars */}
        <rect x="44" y="44" width="4" height="22" rx="1" fill="#C8A951" />
        <rect x="72" y="44" width="4" height="22" rx="1" fill="#C8A951" />
        {/* Crown */}
        <path d="M46 44 L50 38 L54 44" fill="#C8A951" />
        <path d="M70 44 L74 38 L78 44" fill="#C8A951" />
      </g>
      <circle cx="60" cy="60" r="54" fill={`url(#gloss-${id})`} />
      <circle cx="60" cy="60" r="54" fill={`url(#shadow-${id})`} />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function NetherlandsFlag({ size = 120 }: { size?: number }) {
  const id = "ned";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="54" /></clipPath>
        <radialGradient id={`gloss-${id}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <filter id={`rs-${id}`}><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" /></filter>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#ring-${id})`} filter={`url(#rs-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        <rect x="6" y="6" width="108" height="36" fill="#AE1C28" />
        <rect x="6" y="42" width="108" height="36" fill="#FFFFFF" />
        <rect x="6" y="78" width="108" height="36" fill="#21468B" />
      </g>
      <circle cx="60" cy="60" r="54" fill={`url(#gloss-${id})`} />
      <circle cx="60" cy="60" r="54" fill={`url(#shadow-${id})`} />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function UruguayFlag({ size = 120 }: { size?: number }) {
  const id = "uru";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="54" /></clipPath>
        <radialGradient id={`gloss-${id}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <filter id={`rs-${id}`}><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" /></filter>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#ring-${id})`} filter={`url(#rs-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        {/* 9 horizontal stripes white/blue */}
        {[...Array(9)].map((_, i) => (
          <rect key={i} x="6" y={6 + i * 12} width="108" height="12" fill={i % 2 === 0 ? "#FFFFFF" : "#5EB6E4"} />
        ))}
        {/* White canton */}
        <rect x="6" y="6" width="48" height="48" fill="#FFFFFF" />
        {/* Sun of May */}
        <g transform="translate(30,30)">
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5) * Math.PI / 180;
            const inner = i % 2 === 0 ? 8 : 7;
            const outer = i % 2 === 0 ? 15 : 13;
            return (
              <line
                key={i}
                x1={Math.cos(angle) * inner}
                y1={Math.sin(angle) * inner}
                x2={Math.cos(angle) * outer}
                y2={Math.sin(angle) * outer}
                stroke="#F6B40E"
                strokeWidth={i % 2 === 0 ? 2.5 : 1.8}
                strokeLinecap="round"
              />
            );
          })}
          <circle cx="0" cy="0" r="8" fill="#F6B40E" />
          <circle cx="-2" cy="-1" r="1" fill="#843511" opacity="0.6" />
          <circle cx="2" cy="-1" r="1" fill="#843511" opacity="0.6" />
          <path d="M -2 2 Q 0 3.5 2 2" fill="none" stroke="#843511" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
        </g>
      </g>
      <circle cx="60" cy="60" r="54" fill={`url(#gloss-${id})`} />
      <circle cx="60" cy="60" r="54" fill={`url(#shadow-${id})`} />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function PortugalFlag({ size = 120 }: { size?: number }) {
  const id = "por";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="54" /></clipPath>
        <radialGradient id={`gloss-${id}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <filter id={`rs-${id}`}><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" /></filter>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#ring-${id})`} filter={`url(#rs-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        {/* Green left 2/5, red right 3/5 */}
        <rect x="6" y="6" width="43" height="108" fill="#006600" />
        <rect x="49" y="6" width="65" height="108" fill="#FF0000" />
        {/* Yellow shield/armillary sphere simplified */}
        <circle cx="49" cy="60" r="16" fill="#FFD700" stroke="#FFBF00" strokeWidth="1" />
        <circle cx="49" cy="60" r="10" fill="#0032A0" />
        {/* 5 shields on blue */}
        {[[-4, 0], [4, 0], [0, -4], [0, 4], [0, 0]].map(([dx, dy], i) => (
          <rect key={i} x={49 + dx - 1.5} y={60 + dy - 2} width="3" height="4" rx="1" fill="#fff" />
        ))}
        {/* Red border dots */}
        {[[-8, -6], [8, -6], [-8, 6], [8, 6], [0, -9.5], [0, 9.5], [-9.5, 0], [9.5, 0]].slice(0, 6).map(([dx, dy], i) => (
          <circle key={i} cx={49 + dx} cy={60 + dy} r="1.2" fill="#FF0000" />
        ))}
      </g>
      <circle cx="60" cy="60" r="54" fill={`url(#gloss-${id})`} />
      <circle cx="60" cy="60" r="54" fill={`url(#shadow-${id})`} />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function BelgiumFlag({ size = 120 }: { size?: number }) {
  const id = "bel";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="54" /></clipPath>
        <radialGradient id={`gloss-${id}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <filter id={`rs-${id}`}><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" /></filter>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#ring-${id})`} filter={`url(#rs-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        <rect x="6" y="6" width="36" height="108" fill="#000000" />
        <rect x="42" y="6" width="36" height="108" fill="#FAE042" />
        <rect x="78" y="6" width="36" height="108" fill="#EF3340" />
      </g>
      <circle cx="60" cy="60" r="54" fill={`url(#gloss-${id})`} />
      <circle cx="60" cy="60" r="54" fill={`url(#shadow-${id})`} />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function ColombiaFlag({ size = 120 }: { size?: number }) {
  const id = "col";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="54" /></clipPath>
        <radialGradient id={`gloss-${id}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shadow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="75%" stopColor="transparent" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <filter id={`rs-${id}`}><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" /></filter>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#ring-${id})`} filter={`url(#rs-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        {/* Colombia: yellow (half), blue (quarter), red (quarter) */}
        <rect x="6" y="6" width="108" height="54" fill="#FCD116" />
        <rect x="6" y="60" width="108" height="27" fill="#003087" />
        <rect x="6" y="87" width="108" height="27" fill="#CE1126" />
      </g>
      <circle cx="60" cy="60" r="54" fill={`url(#gloss-${id})`} />
      <circle cx="60" cy="60" r="54" fill={`url(#shadow-${id})`} />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

const flags = [
  { component: ArgentinaFlag, name: "Argentina", abbr: "ARG", accent: "#74ACDF" },
  { component: BrazilFlag, name: "Brazil", abbr: "BRA", accent: "#009C3B" },
  { component: GermanyFlag, name: "Germany", abbr: "GER", accent: "#DD0000" },
  { component: FranceFlag, name: "France", abbr: "FRA", accent: "#002395" },
  { component: SpainFlag, name: "Spain", abbr: "ESP", accent: "#AA151B" },
  { component: NetherlandsFlag, name: "Netherlands", abbr: "NED", accent: "#21468B" },
  { component: UruguayFlag, name: "Uruguay", abbr: "URU", accent: "#5EB6E4" },
  { component: PortugalFlag, name: "Portugal", abbr: "POR", accent: "#006600" },
  { component: BelgiumFlag, name: "Belgium", abbr: "BEL", accent: "#EF3340" },
  { component: ColombiaFlag, name: "Colombia", abbr: "COL", accent: "#FCD116" },
];

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0e1a 0%, #131929 50%, #0d1520 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
          <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" strokeWidth="1" />
            <circle cx="14" cy="14" r="8" fill="none" stroke="#C9A84C" strokeWidth="1.5" />
            <path d="M14 6 Q17 10 14 14 Q11 10 14 6Z" fill="#C9A84C" opacity="0.7" />
            <path d="M14 22 Q11 18 14 14 Q17 18 14 22Z" fill="#C9A84C" opacity="0.7" />
            <path d="M6 14 Q10 11 14 14 Q10 17 6 14Z" fill="#C9A84C" opacity="0.7" />
            <path d="M22 14 Q18 17 14 14 Q18 11 22 14Z" fill="#C9A84C" opacity="0.7" />
          </svg>
          <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
        </div>
        <h1 style={{
          color: "#ffffff",
          fontSize: "28px",
          fontWeight: "700",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          margin: "0 0 6px",
          background: "linear-gradient(135deg, #ffffff 0%, #C9A84C 50%, #ffffff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          FIFA World Cup
        </h1>
        <p style={{ color: "#8899aa", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
          National Team Icons
        </p>
      </div>

      {/* Flag Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "32px 28px",
        maxWidth: "700px",
        width: "100%",
      }}>
        {flags.map(({ component: FlagComp, name, abbr, accent }) => (
          <div
            key={abbr}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                padding: "3px",
                background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.08), transparent 70%)`,
                filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.5))",
                transition: "transform 0.2s, filter 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.06)";
                (e.currentTarget as HTMLElement).style.filter = `drop-shadow(0 12px 28px rgba(0,0,0,0.6)) drop-shadow(0 0 16px ${accent}55)`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 6px 18px rgba(0,0,0,0.5))";
              }}
            >
              <FlagComp size={110} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "2px",
              }}>{abbr}</div>
              <div style={{ color: "#667788", fontSize: "10px", letterSpacing: "0.05em" }}>{name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ marginTop: "52px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "24px", height: "1px", background: "#334455" }} />
        <span style={{ color: "#445566", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Premium Tournament Edition
        </span>
        <div style={{ width: "24px", height: "1px", background: "#334455" }} />
      </div>
    </div>
  );
}
