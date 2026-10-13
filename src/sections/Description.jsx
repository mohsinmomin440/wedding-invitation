import Card from '../components/Card'
import ThemeDecor from '../components/ThemeDecor'
import { Divider } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import { description } from '../data/content'

// Symbol names get their own colour, same as on the event pages
const SYMBOLS = /(“?sacred wedding knot”?|lotus|waves|north star|infinity|moon|agnidev)/gi

function Highlighted({ text }) {
  return text.split(SYMBOLS).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="box-decoration-clone rounded-sm border-b-2 border-gold bg-gold/40 px-1.5 py-0.5 font-bold text-teal-deep not-italic">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

export default function Description() {
  return (
    <Card decor={<ThemeDecor theme="sapta" />} id="saptabandhan" label={description.title} cornerMantra="॥ શ્રી ગણેશાય નમઃ ॥">
      <h2 className="text-3xl font-semibold text-crimson uppercase sm:text-4xl lg:text-5xl">
        <SplitText chars={description.title} step={80} className="tracking-[0.2em]" />
      </h2>
      <Reveal delay={800}>
        <p className="mt-2 text-lg text-teal-deep italic sm:text-xl">{description.subtitle}</p>
        <Divider className="mt-4 text-rust" />
      </Reveal>
      <div className="mx-auto mt-4 w-full max-w-2xl space-y-3 px-2">
        {description.paragraphs.map((p, i) => (
          <Reveal key={i} delay={1000 + i * 200}>
            <div className="rounded-lg border border-rust/25 bg-paper/90 px-4 py-3 shadow-xs backdrop-blur-xs sm:px-6 sm:py-3.5">
              <p className="text-sm leading-relaxed text-ink sm:text-base">
                <Highlighted text={p} />
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Card>
  )
}
