import Card from '../components/Card'
import ThemeDecor from '../components/ThemeDecor'
import { Divider } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import { family } from '../data/content'

export default function Family() {
  return (
    <Card decor={<ThemeDecor theme="family" />} id="family" label="A cordial invitation" cornerMantra="॥ શ્રી લલિતામ્બિકાય નમઃ ॥">
      <Reveal delay={100} className="mt-2">
        <h2 className="text-xl font-semibold leading-snug text-crimson uppercase sm:text-2xl lg:text-3xl">{family.title}</h2>
        <Divider className="mt-3 text-rust" />
      </Reveal>

      <div className="mt-6 w-full max-w-2xl space-y-5">
        {family.groups.map((group, gIdx) => (
          <Reveal key={gIdx} delay={250 + gIdx * 150} className="flex flex-col items-center gap-1">
            {group.members.map((member) => (
              <p key={member} className="text-base font-medium text-teal-deep sm:text-lg">
                {member}
              </p>
            ))}
          </Reveal>
        ))}
      </div>

      <Reveal delay={800} className="mt-8">
        <p className="text-lg font-semibold text-rust italic sm:text-xl">{family.awaits}</p>
      </Reveal>
    </Card>
  )
}
