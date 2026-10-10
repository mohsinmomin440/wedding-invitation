import Card from '../components/Card'
import { Divider, Icon } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import { description, sequenceOfElements } from '../data/content'

export default function Description() {
  return (
    <Card id="saptabandhan" label={description.title} cornerMantra="॥ શ્રી ગણેશાય નમઃ ॥">
      <h2 className="text-3xl font-semibold text-crimson uppercase sm:text-4xl lg:text-5xl">
        <SplitText chars={description.title} step={80} className="tracking-[0.2em]" />
      </h2>
      <Reveal delay={800}>
        <p className="mt-2 text-lg text-teal-deep italic sm:text-xl">{description.subtitle}</p>
        <Divider className="mt-4 text-rust" />
      </Reveal>
      <div className="mx-auto mt-4 max-w-2xl space-y-3">
        {description.paragraphs.map((p, i) => (
          <Reveal key={i} delay={1000 + i * 200}>
            <p className="text-sm leading-relaxed text-ink sm:text-base">{p}</p>
          </Reveal>
        ))}
      </div>
      {/* Sequence of Seven elements: LOTUS, the sacred knot, waves, the north star, infinity, sunmoon, agni */}
      <div className="mt-6">
        <p className="text-xs tracking-[0.25em] text-rust uppercase sm:text-sm font-semibold">Sequence of Elements</p>
        <ul className="mt-3 flex flex-wrap justify-center gap-3 sm:gap-6" aria-label="Seven elements">
          {sequenceOfElements.map((el, i) => (
            <Reveal as="li" key={el.icon} delay={1400 + i * 100} title={el.name} className="flex flex-col items-center">
              <span className="grid size-11 place-items-center rounded-full border border-teal-deep/30 bg-paper/60 p-1.5 shadow-sm sm:size-13">
                <Icon name={el.icon} className="size-6 sm:size-7" />
              </span>
              <span className="mt-1 max-w-[70px] text-center text-[10px] leading-tight text-teal-deep uppercase sm:text-xs">
                {el.name}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </Card>
  )
}
