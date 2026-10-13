import Card from '../components/Card'
import { Divider, Icon } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import ThemeDecor, { THEMES } from '../components/ThemeDecor'
import { mapsLink } from '../data/content'

const LANG_FONT = { sa: 'font-devanagari', hi: 'font-devanagari' }

function HighlightedDescription({ text, night }) {
  if (!text) return null
  const parts = text.split(/(“[^”]+”|"[^"]+")/g)
  return (
    <p className="text-xs leading-relaxed italic opacity-95 sm:text-sm">
      {parts.map((part, i) => {
        if (/^[“"][^”"]+[”"]$/.test(part)) {
          return (
            <span
              key={i}
              className={`box-decoration-clone rounded-sm border-b-2 px-1.5 py-0.5 font-bold not-italic ${
                night
                  ? 'border-amber-300 bg-amber-300/25 text-amber-200'
                  : 'border-gold bg-gold/40 text-teal-deep'
              }`}
            >
              {part}
            </span>
          )
        }
        return part
      })}
    </p>
  )
}

export default function EventPage({ event }) {
  const theme = THEMES[event.theme]
  const { blessing } = event
  const cornerMantra = event.invocation?.text || '॥ શ્રી ગણેશાય નમઃ ॥'

  return (
    <Card
      id={event.id}
      label={event.title}
      theme={theme}
      cornerMantra={cornerMantra}
      decor={<ThemeDecor theme={event.theme} />}
    >
      <div className="flex w-full flex-col items-center text-(--page-ink)">
        {/* Element representation logo / icon */}
        <Reveal delay={100} className="flex flex-col items-center">
          <span className="relative grid size-16 place-items-center sm:size-20">
            <span className="absolute inset-0 rounded-full border border-(--accent)/40" />
            <span className="animate-spin-slow absolute inset-1 rounded-full border border-dashed border-(--accent-2)/40" />
            <Icon
              name={event.element}
              className={`${event.element === 'knot' ? 'size-11 sm:size-14' : 'size-9 sm:size-11'} ${theme.night ? 'brightness-0 invert sepia-[.6] saturate-[2.5] drop-shadow-sm' : 'brightness-[0.38] contrast-150 saturate-150 drop-shadow-[0_0_0.7px_#2a0d05]'}`}
            />
          </span>
        </Reveal>

        {/* Event Title */}
        <Reveal delay={200} className="mt-2 text-center">
          <h2 className="max-w-2xl text-2xl font-bold text-(--accent) sm:text-3xl lg:text-4xl">
            {event.title}
          </h2>
          {event.subtitle && <p className="mt-0.5 text-base text-(--accent-2) italic sm:text-lg">{event.subtitle}</p>}
        </Reveal>

        {/* Blessing verse / lines if any */}
        {blessing?.verse && (
          <Reveal delay={350} lang={blessing.verse.lang} className={`mt-3 ${LANG_FONT[blessing.verse.lang]} text-base font-semibold leading-relaxed text-(--accent) sm:text-lg`}>
            {blessing.verse.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </Reveal>
        )}
        {blessing?.lines && (
          <Reveal
            delay={450}
            lang={blessing.lang}
            className={`mx-auto mt-2 max-w-xl text-sm leading-relaxed sm:text-base ${
              blessing.lang ? `${LANG_FONT[blessing.lang]} font-semibold text-(--accent)` : 'text-(--accent-2) italic'
            }`}
          >
            {blessing.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </Reveal>
        )}

        <Reveal delay={600} className="mt-4">
          <Divider className="text-(--accent)" />
          <p className="mt-3 text-base font-semibold tracking-[0.15em] text-(--accent) uppercase sm:text-lg">{event.date}</p>
          {event.dateNote && <p className="mt-0.5 text-xs tracking-[0.18em] text-(--accent-2) uppercase sm:text-sm">{event.dateNote}</p>}
        </Reveal>

        {/* Timings */}
        <Reveal
          delay={750}
          className={`mt-4 grid w-full max-w-2xl gap-2 sm:gap-3 ${event.schedule.length === 2 ? 'sm:grid-cols-2' : event.schedule.length > 2 ? 'sm:grid-cols-3' : 'max-w-xs'}`}
        >
          {event.schedule.map((s) => (
            <div
              key={s.label}
              className={`rounded-sm border border-(--accent)/30 px-3 py-2.5 sm:px-4 sm:py-3 ${theme.night ? 'bg-white/5' : 'bg-paper/70'}`}
            >
              <p className="text-xs tracking-[0.15em] text-(--accent-2) uppercase sm:text-sm">{s.label}</p>
              <p className="mt-0.5 text-base font-semibold tracking-wider text-(--accent) uppercase sm:text-lg">{s.time}</p>
              {s.note && <p className="text-xs opacity-90 sm:text-sm">{s.note}</p>}
            </div>
          ))}
        </Reveal>

        {/* Dress code */}
        <Reveal delay={900} className="mt-4 flex flex-col items-center">
          <p className="text-xs tracking-[0.18em] text-(--accent-2) uppercase sm:text-sm">
            Dress code: <span className="font-semibold text-(--accent)">{event.dressCode.label}</span>
          </p>
          {event.dressCode.colors.length > 0 && (
            <ul className="mt-1.5 flex gap-2" aria-hidden="true">
              {event.dressCode.colors.map((c) => (
                <li key={c} className="size-5 rounded-full border border-black/15 shadow-inner sm:size-6" style={{ backgroundColor: c }} />
              ))}
            </ul>
          )}
        </Reveal>

        {/* Venue */}
        <Reveal delay={1050} className="mt-4">
          <p className="text-xs tracking-[0.25em] text-(--accent) uppercase">Venue:</p>
          <address className="mt-0.5 text-sm text-(--accent-2) not-italic sm:text-base">
            {event.venue.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={mapsLink(event.venue)}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block border border-(--accent) px-4 py-1 text-xs tracking-[0.18em] text-(--accent) uppercase transition hover:bg-(--accent) hover:text-paper"
          >
            View on map
          </a>
        </Reveal>

        {/* Description at the end of the page */}
        {event.description && (
          <Reveal delay={1200} as="footer" className="relative z-20 mt-6 w-full max-w-xl px-2">
            <div
              className={`rounded-lg border border-(--accent)/25 px-4 py-3 text-center shadow-xs sm:px-6 sm:py-3.5 ${
                theme.night
                  ? 'bg-ink/80 text-paper/95 backdrop-blur-md'
                  : 'bg-paper/90 text-(--page-ink) backdrop-blur-xs'
              }`}
            >
              <HighlightedDescription text={event.description} night={theme.night} />
            </div>
          </Reveal>
        )}
      </div>
    </Card>
  )
}
