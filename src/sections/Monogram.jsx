import { useContext } from 'react'
import Card from '../components/Card'
import ThemeDecor from '../components/ThemeDecor'
import Reveal, { INK_LEAD_MS } from '../components/Reveal'
import SplitText from '../components/SplitText'
import { CardContext, useInViewOnce } from '../components/motion'
import { couple } from '../data/content'
import { img } from '../asset'

function Logo() {
  const [ref, inView] = useInViewOnce(0.2)
  const cardSince = useContext(CardContext)
  return (
    <div ref={ref} className="animate-float">
      <img
        src={img('logo.webp')}
        alt="Prarthana and Yatin monogram — Saptabandhan"
        className={`logo-in mx-auto w-56 sm:w-64 lg:w-72 ${inView && cardSince > 0 ? 'is-visible' : ''}`}
        style={{ transitionDelay: `${INK_LEAD_MS}ms` }}
      />
    </div>
  )
}

export default function Monogram() {
  return (
    <Card decor={<ThemeDecor theme="monogram" />} id="monogram" label="Prarthana and Yatin" cornerMantra="॥ શ્રી લલિતામ્બિકાય નમઃ ॥">
      <Logo />
      <h1 className="mt-6 flex flex-col items-center leading-tight">
        <SplitText
          chars={couple.bride.toUpperCase()}
          label={couple.bride}
          delay={900}
          className="tracking-name text-2xl text-teal-deep sm:text-4xl lg:text-5xl"
        />
        <SplitText
          chars={[{ ch: 'य', className: 'font-devanagari font-semibold' }, ...couple.groom.slice(1).toUpperCase()]}
          label={couple.groom}
          delay={900 + couple.bride.length * 90 + 150}
          className="tracking-name mt-2 text-2xl text-rust sm:mt-3 sm:text-4xl lg:text-5xl"
        />
      </h1>
      <Reveal delay={2400}>
        <p className="mt-4 text-xs tracking-wider text-teal-deep uppercase sm:text-sm">{couple.tagline}</p>
      </Reveal>
    </Card>
  )
}
