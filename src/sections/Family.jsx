import Card from '../components/Card'
import { Divider } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import { family } from '../data/content'

export default function Family() {
  return (
    <Card id="family" label="A cordial invitation" cornerMantra="॥ શ્રી ગણેશાય નમઃ ॥">
      <Reveal delay={100} className="mt-2">
        <h2 className="text-2xl text-crimson uppercase sm:text-3xl">{family.title}</h2>
        <Divider className="mt-3 text-rust" />
      </Reveal>

      <ul className="mt-5 w-full max-w-2xl space-y-2 sm:space-y-1.5">
        {family.couples.map(([him, her], i) => (
          <Reveal as="li" key={him} delay={250 + i * 80} className="grid gap-0.5 sm:grid-cols-2 sm:gap-6">
            <span className="text-base text-teal-deep sm:text-right sm:text-lg">{him}</span>
            <span className="text-base text-teal-deep sm:text-left sm:text-lg">{her}</span>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={900} className="mt-6">
        <p className="text-lg font-semibold text-rust italic sm:text-xl">{family.awaits}</p>
      </Reveal>

      {family.tahuko.lines.length > 0 && (
        <Reveal delay={1050} className="mt-6">
          <h3 className="text-lg text-crimson uppercase sm:text-xl">{family.tahuko.title}</h3>
          {family.tahuko.lines.map((l) => (
            <p key={l} className="mt-1 text-base text-teal-deep">
              {l}
            </p>
          ))}
        </Reveal>
      )}

      <Reveal delay={1200} className="mt-6">
        <p className="border-y border-rust/40 px-5 py-2 text-sm tracking-[0.2em] text-crimson uppercase sm:text-base">{family.note}</p>
      </Reveal>
    </Card>
  )
}
