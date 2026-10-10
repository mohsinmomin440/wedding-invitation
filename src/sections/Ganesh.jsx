import { useState } from 'react'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import { mantra, opening } from '../data/content'
import { img } from '../asset'

export default function Ganesh() {
  const [hasPhoto, setHasPhoto] = useState(true)

  return (
    <Card id="ganesh" label="Shri Ganeshay Namah">
      <Reveal className="flex flex-col items-center">
        <div className="relative grid size-36 place-items-center sm:size-48 lg:size-52">
          <span className="absolute inset-0 rounded-full border border-rust/60" />
          <span className="animate-spin-slow absolute inset-2 rounded-full border border-dashed border-teal-deep/40" />
          {hasPhoto ? (
            <img
              src={img('ganesh.png')}
              alt="Shri Ganesh"
              onError={() => setHasPhoto(false)}
              className="size-[86%] rounded-full object-cover"
            />
          ) : (
            <span lang="gu" className="font-gujarati text-7xl font-bold text-rust sm:text-8xl">
              {mantra.shri}
            </span>
          )}
        </div>
      </Reveal>

      {/* Main page 1 invocations: Shloka + Shree Ganeshay Namah + Kuldevi */}
      <Reveal delay={200} lang="gu" className="mt-4 font-gujarati text-base leading-relaxed font-semibold text-rust sm:text-xl">
        {opening.shloka.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </Reveal>

      <Reveal delay={350} lang="gu" className="mt-3 font-gujarati text-sm font-bold text-teal-deep sm:text-base">
        <p className="text-base font-semibold text-rust sm:text-lg">{mantra.ganesh}</p>
        <p className="mt-1">
          {mantra.kuldevi.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </Reveal>

      <Reveal delay={450} className="mt-6">
        <p className="text-xs tracking-[0.35em] text-teal-deep uppercase sm:text-sm">{opening.intro}</p>
      </Reveal>
      <div className="mt-3 flex flex-col items-center">
        <SplitText chars={opening.groom.name.toUpperCase()} label={opening.groom.name} delay={650} className="tracking-name text-2xl font-semibold text-crimson sm:text-4xl" />
        <Reveal delay={1100}>
          <p className="mt-0.5 text-xs tracking-wider text-teal-deep uppercase sm:text-sm">{opening.groom.parents}</p>
        </Reveal>
        <Reveal delay={1250}>
          <img src={img('ampersand.webp')} alt="and" className="my-2 w-8 sm:w-12" />
        </Reveal>
        <SplitText chars={opening.bride.name.toUpperCase()} label={opening.bride.name} delay={1400} className="tracking-name text-2xl font-semibold text-crimson sm:text-4xl" />
        <Reveal delay={2000}>
          <p className="mt-0.5 text-xs tracking-wider text-teal-deep uppercase sm:text-sm">{opening.bride.parents}</p>
        </Reveal>
      </div>

      {/* Scroll indicator prompt */}
      <Reveal delay={2400} className="mt-6 flex flex-col items-center text-teal-deep/70">
        <span className="text-[10px] tracking-[0.3em] uppercase sm:text-xs">Scroll to explore</span>
        <svg className="mt-1 size-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </Reveal>
    </Card>
  )
}
