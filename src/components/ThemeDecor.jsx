import { img } from '../asset'

// Theme elements for each Janam page. Everything sits behind the text, clear of
// the garland (top-left) and peacock (bottom-left), and only animates once the
// page is in view (see `.is-inview` rules in index.css).

// Colours per theme, exposed to the page as CSS variables
export const THEMES = {
  forest: { accent: '#3f6b2a', accent2: '#b54226', ink: '#321d0f' },
  rajputana: { accent: '#8c1d2f', accent2: '#b07a1f', ink: '#321d0f' },
  mughal: { accent: '#a8325f', accent2: '#01424e', ink: '#321d0f' },
  temple: { accent: '#b54226', accent2: '#a86d08', ink: '#321d0f' },
  village: { accent: '#6b4f9a', accent2: '#2f7f79', ink: '#321d0f' },
  golden: { accent: '#e8c26a', accent2: '#c9d6ff', ink: '#f3ead6', night: true },
  eternity: { accent: '#b22d2f', accent2: '#a8741a', ink: '#321d0f' },
}

function Diya({ className = '', delay = 0 }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="diya-flame" cx="50%" cy="70%" r="60%">
          <stop offset="0" stopColor="#fff6c2" />
          <stop offset="0.45" stopColor="#ffc23a" />
          <stop offset="1" stopColor="#e2541b" />
        </radialGradient>
      </defs>
      <circle cx="30" cy="22" r="16" fill="#ffb53a" opacity="0.18" className="decor-glow" style={{ animationDelay: `${delay}ms` }} />
      <path d="M30 6 C36 16 38 24 30 30 C22 24 24 16 30 6 Z" fill="url(#diya-flame)" className="decor-flame" style={{ animationDelay: `${delay}ms` }} />
      <path d="M8 34 Q30 56 52 34 Q41 40 30 40 Q19 40 8 34 Z" fill="#9a4a1c" />
      <path d="M8 34 Q19 40 30 40 Q41 40 52 34" fill="none" stroke="#e0a14a" strokeWidth="1.2" />
    </svg>
  )
}

function Bell({ className = '', delay = 0, length = 60 }) {
  return (
    <div className={`decor-bell ${className}`} style={{ animationDelay: `${delay}ms` }} aria-hidden="true">
      <svg viewBox={`0 0 40 ${length + 46}`} className="w-full">
        <line x1="20" y1="0" x2="20" y2={length} stroke="#a86d08" strokeWidth="1.2" />
        <circle cx="20" cy={length + 2} r="3" fill="none" stroke="#a86d08" strokeWidth="1.2" />
        <path d={`M8 ${length + 36} Q8 ${length + 8} 20 ${length + 6} Q32 ${length + 8} 32 ${length + 36} Q36 ${length + 38} 36 ${length + 40} H4 Q4 ${length + 38} 8 ${length + 36} Z`} fill="#d29a2a" stroke="#8a560a" strokeWidth="1" />
        <circle cx="20" cy={length + 43} r="3" fill="#8a560a" />
      </svg>
    </div>
  )
}

function FerrisWheel({ className = '' }) {
  const cabins = Array.from({ length: 8 }, (_, i) => (i * Math.PI * 2) / 8)
  const colors = ['#f6a5b8', '#f9d27a', '#9fd7b5', '#9cc7ec', '#c8b0ea']
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 200 220" className="h-full w-full overflow-visible">
        <path d="M100 100 L60 210 M100 100 L140 210 M50 210 H150" stroke="#8a6a52" strokeWidth="3" fill="none" />
        <g className="decor-wheel" style={{ transformOrigin: '100px 100px' }}>
          <circle cx="100" cy="100" r="80" fill="none" stroke="#b08a6a" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="66" fill="none" stroke="#b08a6a" strokeWidth="1" strokeDasharray="3 4" />
          {cabins.map((a, i) => (
            <line key={i} x1="100" y1="100" x2={100 + 80 * Math.cos(a)} y2={100 + 80 * Math.sin(a)} stroke="#b08a6a" strokeWidth="1.2" />
          ))}
          {cabins.map((a, i) => (
            <g key={`c${i}`} transform={`translate(${100 + 80 * Math.cos(a)} ${100 + 80 * Math.sin(a)})`}>
              <g className="decor-cabin">
                <path d="M-9 2 H9 V12 Q0 17 -9 12 Z" fill={colors[i % colors.length]} stroke="#8a6a52" strokeWidth="1" />
                <line x1="0" y1="0" x2="0" y2="2" stroke="#8a6a52" />
              </g>
            </g>
          ))}
          <circle cx="100" cy="100" r="6" fill="#8a6a52" />
        </g>
      </svg>
    </div>
  )
}

function Bunting({ className = '' }) {
  const colors = ['#f6a5b8', '#f9d27a', '#9fd7b5', '#9cc7ec', '#c8b0ea', '#f7b98b']
  const flags = Array.from({ length: 14 }, (_, i) => i)
  return (
    <svg viewBox="0 0 700 80" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M0 6 Q350 50 700 6" fill="none" stroke="#8a6a52" strokeWidth="1.5" />
      {flags.map((i) => {
        const x = 25 + i * 47
        const t = x / 700
        const y = 6 + 88 * t * (1 - t) + 1
        return (
          <path
            key={i}
            d={`M${x - 15} ${y} L${x + 15} ${y} L${x} ${y + 30} Z`}
            fill={colors[i % colors.length]}
            className="decor-flag"
            style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${i * 160}ms` }}
          />
        )
      })}
    </svg>
  )
}

function Rays({ className = '' }) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true">
      {Array.from({ length: 36 }, (_, i) => (
        <path key={i} d="M0 -38 L3 -96 L-3 -96 Z" fill="currentColor" opacity={i % 2 ? 0.5 : 1} transform={`rotate(${i * 10})`} />
      ))}
      <circle r="34" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle r="28" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
    </svg>
  )
}

function Leaf({ className = '', style }) {
  return (
    <svg viewBox="0 0 40 60" className={className} style={style} aria-hidden="true">
      <path d="M20 2 C36 18 36 42 20 58 C4 42 4 18 20 2 Z" fill="#6f9a45" />
      <path d="M20 6 V56 M20 20 L28 14 M20 30 L30 24 M20 40 L28 34 M20 24 L12 18 M20 34 L10 28" stroke="#3f6b2a" strokeWidth="1" fill="none" />
    </svg>
  )
}

// deterministic scatter
const spread = (n, seed) =>
  Array.from({ length: n }, (_, i) => {
    const r = (k) => {
      const x = Math.sin((i + 1) * 12.9898 + seed * 78.233 + k * 37.719) * 43758.5453
      return x - Math.floor(x)
    }
    return { x: r(1), y: r(2), s: r(3), d: r(4) }
  })

const STARS = spread(46, 3)
const STAR_FALL = spread(12, 7)
const LEAVES = spread(8, 11)

// Something is always falling on every page: marigold flowers and/or coloured petals.
// `colors` are cycled for the petals; `marigolds` is how many real marigold flowers to add.
function Falling({ petals = 14, colors = ['#e69123'], marigolds = 0, seed = 7 }) {
  const P = spread(petals, seed)
  const M = spread(marigolds, seed + 5)
  return (
    <>
      {P.map((p, i) => (
        <span
          key={`p${i}`}
          className="decor-petal absolute block rounded-[60%_0_60%_0]"
          style={{
            left: `${p.x * 100}%`,
            top: '-6%',
            width: `${14 + p.s * 14}px`,
            height: `${14 + p.s * 14}px`,
            backgroundColor: colors[i % colors.length],
            boxShadow: '0 1px 3px rgba(60,30,10,0.25)',
            animationDuration: `${8 + p.d * 6}s`,
            animationDelay: `${p.y * 5}s`,
            '--drift': `${(p.x - 0.5) * 180}px`,
          }}
        />
      ))}
      {M.map((p, i) => (
        <img
          key={`m${i}`}
          src={img('marigold.webp')}
          alt=""
          className="decor-petal absolute"
          style={{
            left: `${p.x * 100}%`,
            top: '-8%',
            width: `${24 + p.s * 24}px`,
            animationDuration: `${9 + p.d * 6}s`,
            animationDelay: `${0.5 + p.y * 5}s`,
            '--drift': `${(p.x - 0.5) * 160}px`,
          }}
        />
      ))}
    </>
  )
}

// Things that float UP from the bottom: golden sparkles or little hearts
function Rising({ count = 14, kind = 'sparkle', colors = ['#d4a537'], seed = 3 }) {
  return spread(count, seed).map((p, i) => (
    <span
      key={i}
      className="decor-rise absolute block leading-none select-none"
      style={{
        left: `${p.x * 100}%`,
        bottom: '-6%',
        color: colors[i % colors.length],
        fontSize: `${(kind === 'heart' ? 14 : 10) + p.s * (kind === 'heart' ? 16 : 12)}px`,
        textShadow: kind === 'sparkle' ? '0 0 6px rgba(255,214,102,0.9)' : 'none',
        animationDuration: `${9 + p.d * 7}s`,
        animationDelay: `${p.y * 6}s`,
        '--drift': `${(p.x - 0.5) * 120}px`,
      }}
    >
      {kind === 'heart' ? '♥' : '✦'}
    </span>
  ))
}

const Layer = ({ children }) => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    {children}
  </div>
)

// Default page decor (Ganesh, monogram, Saptabandhan, family pages)
export function DefaultFalling() {
  return (
    <Layer>
      <Falling petals={6} colors={['#e69123', '#d4572a']} marigolds={9} seed={21} />
    </Layer>
  )
}

export default function ThemeDecor({ theme }) {
  switch (theme) {
    case 'ganesh': // Page 1: marigolds fall, gold sparkles twinkle around the emblem
      return (
        <Layer>
          <Falling petals={4} colors={['#e69123']} marigolds={9} seed={21} />
          {STARS.slice(0, 22).map((s, i) => (
            <span
              key={i}
              className="decor-star absolute block rounded-full bg-[#d4a537]"
              style={{ left: `${s.x * 100}%`, top: `${s.y * 100}%`, width: `${2 + s.s * 3}px`, height: `${2 + s.s * 3}px`, animationDelay: `${s.d * 4}s`, animationDuration: `${2.5 + s.s * 3}s` }}
            />
          ))}
        </Layer>
      )
    case 'monogram': // Page 2: golden sparkles drift upwards around the monogram
      return (
        <Layer>
          <Rising count={22} kind="sparkle" colors={['#d4a537', '#f4b946', '#e8c26a']} seed={13} />
        </Layer>
      )
    case 'sapta': // Saptabandhan: soft lotus petals fall, lotus floats bottom-right
      return (
        <Layer>
          <Falling petals={16} colors={['#f3b6cc', '#fbe3ec', '#e58fb0', '#fff1f5']} seed={81} />
          <div className="absolute right-[4%] bottom-[3%] flex items-end gap-1 opacity-80 sm:right-[6%]">
            <img src={img('icon-lotus.png')} alt="" className="decor-bob w-12 sm:w-16" />
            <img src={img('icon-lotus.png')} alt="" className="decor-bob w-8 sm:w-11" style={{ animationDelay: '1.2s' }} />
          </div>
        </Layer>
      )
    case 'family': // Family: hearts rise, a few marigolds fall
      return (
        <Layer>
          <Rising count={14} kind="heart" colors={['#b22d2f', '#e58fb0', '#b54226']} seed={91} />
          <Falling petals={0} marigolds={5} seed={95} />
        </Layer>
      )
    case 'forest':
      return (
        <Layer>
          {LEAVES.map((l, i) => (
            <Leaf
              key={i}
              className="decor-leaf absolute w-6 sm:w-8"
              style={{ left: `${30 + l.x * 68}%`, top: '-8%', animationDuration: `${11 + l.d * 8}s`, animationDelay: `${l.s * 6}s`, '--drift': `${(l.x - 0.5) * 120}px` }}
            />
          ))}
          <div className="absolute right-[4%] bottom-[3%] flex items-end gap-1 opacity-80 sm:right-[6%]">
            <img src={img('icon-lotus.png')} alt="" className="decor-bob w-12 sm:w-16" />
            <img src={img('icon-lotus.png')} alt="" className="decor-bob w-8 sm:w-11" style={{ animationDelay: '1.2s' }} />
          </div>
          <img src={img('icon-waves.png')} alt="" className="absolute right-[3%] bottom-[1%] w-24 opacity-40 sm:right-[5%] sm:w-32" />
        </Layer>
      )
    case 'rajputana': // Chundadi: red rose petals + marigolds
      return (
        <Layer>
          <Falling petals={14} colors={['#a82435', '#c0392b', '#d4a537']} marigolds={4} seed={31} />
          <div className="absolute right-[4%] bottom-[3%] flex items-end gap-2 sm:right-[6%]">
            <Diya className="w-10 sm:w-14" />
            <Diya className="w-12 sm:w-16" delay={300} />
            <Diya className="w-10 sm:w-14" delay={600} />
          </div>
        </Layer>
      )
    case 'mughal': // Mehndi: pink petals
      return (
        <Layer>
          <Falling petals={18} colors={['#e58fb0', '#d96a97', '#f3b6cc']} seed={41} />
          <img src={img('icon-waves.png')} alt="" className="decor-bob absolute right-[4%] bottom-[3%] w-20 opacity-60 sm:w-28" />
        </Layer>
      )
    case 'temple': // Grah Shanti: marigolds + saffron petals
      return (
        <Layer>
          <Falling petals={8} colors={['#e69123', '#f2c230']} marigolds={8} seed={51} />
          <Rising count={10} kind="sparkle" colors={['#f2a030', '#ffcf5a']} seed={55} />
          <div className="absolute top-0 right-[8%] flex gap-4 sm:right-[10%] sm:gap-8">
            <Bell className="w-6 sm:w-8" length={50} />
            <Bell className="w-8 sm:w-10" length={90} delay={400} />
            <Bell className="w-6 sm:w-8" length={60} delay={800} />
          </div>
          <div className="absolute right-[5%] bottom-[3%] sm:right-[7%]">
            <Diya className="w-12 sm:w-16" />
          </div>
        </Layer>
      )
    case 'village': // Haldi: marigolds + pastel petals
      return (
        <Layer>
          <Bunting className="absolute top-0 right-0 h-12 w-[70%] sm:h-16" />
          <Falling petals={10} colors={['#f9d27a', '#f6a5b8', '#9fd7b5', '#9cc7ec', '#c8b0ea']} marigolds={7} seed={61} />
          <FerrisWheel className="absolute right-[3%] bottom-[2%] h-32 w-28 opacity-70 sm:h-48 sm:w-44" />
        </Layer>
      )
    case 'golden': // Sangeet: twinkling stars + falling star-sparkles
      return (
        <Layer>
          {STARS.map((s, i) => (
            <span
              key={i}
              className="decor-star absolute block rounded-full bg-[#fff6d8]"
              style={{
                left: `${s.x * 100}%`,
                top: `${s.y * 100}%`,
                width: `${1 + s.s * 2.5}px`,
                height: `${1 + s.s * 2.5}px`,
                animationDelay: `${s.d * 4}s`,
                animationDuration: `${2.5 + s.s * 3}s`,
              }}
            />
          ))}
          {STAR_FALL.map((p, i) => (
            <span
              key={`star-fall-${i}`}
              className="decor-petal absolute block rotate-45 bg-[#fef08a] shadow-[0_0_8px_2px_rgba(255,236,170,0.4)]"
              style={{
                left: `${p.x * 100}%`,
                top: '-5%',
                width: `${4 + p.s * 5}px`,
                height: `${4 + p.s * 5}px`,
                opacity: 0.85,
                animationDuration: `${8 + p.d * 6}s`,
                animationDelay: `${p.y * 6}s`,
                '--drift': `${(p.x - 0.5) * 140}px`,
              }}
            />
          ))}
          <span className="decor-shooting absolute top-[12%] left-[30%] block h-px w-24 bg-gradient-to-r from-transparent to-[#fff6d8]" />
          <div className="absolute top-[5%] right-[6%] size-20 rounded-full shadow-[0_0_60px_20px_rgba(255,236,170,0.25)] sm:size-28">
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff8df,#f1d58c_60%,#c9a24e)] [mask-image:radial-gradient(circle_at_72%_32%,transparent_42%,#000_43%)]" />
          </div>
        </Layer>
      )
    case 'eternity': // Wedding: marigold toran + falling marigolds
      return (
        <Layer>
          <Rays className="decor-spin absolute top-[2%] left-1/2 w-[85%] max-w-[560px] -translate-x-1/2 text-[#d4a537] opacity-15" />
          <div className="absolute top-0 right-0 flex w-[70%] justify-between px-2">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="decor-toran flex flex-col items-center" style={{ animationDelay: `${i * 200}ms` }}>
                <span className="block w-px bg-[#8a6a2a]" style={{ height: `${14 + (i % 3) * 10}px` }} />
                <img src={img('marigold.webp')} alt="" className="w-5 sm:w-7" />
                <img src={img('marigold.webp')} alt="" className="-mt-1 w-4 sm:w-6" />
              </div>
            ))}
          </div>
          <Falling petals={0} marigolds={12} seed={71} />
        </Layer>
      )
    default:
      return null
  }
}
