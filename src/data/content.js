// Wording for Bride Side (Bhatt Family) as per brideside.md
export const music = { src: 'audio/sajna.mp3', title: 'Sajna', volume: 0.6 }

export const couple = {
  bride: 'Prarthana',
  groom: 'Yatin',
  tagline: 'United as one - two souls, one journey.',
}

export const mantra = {
  shri: 'શ્રી',
  ganesh: 'શ્રી ગણેશાય નમઃ',
  lalitambika: 'શ્રી લલિતામ્બિકાય નમઃ',
}

// MAIN PAGE 1: GANESH
export const opening = {
  shloka: [
    'વક્રતુંડ મહાકાય સૂર્યકોટી સમપ્રભ ।',
    'નિર્વિઘ્નં કુરુ મે દેવ સર્વકાર્યેષુ સર્વદા ॥',
  ],
  intro: 'Wedding invitation of',
  bride: { name: 'Prarthana', parents: '(Daughter of Hema and Bhrugesh Bhatt)' },
  groom: { name: 'Yatin', parents: '(Son of Sona and Pritesh Karia)' },
}

// SAPTABANDHAN CONCEPT
export const description = {
  title: 'Saptabandhan',
  subtitle: 'Our Wedding Journey in Seven Sacred Chapters',
  paragraphs: [
    [
      { text: "Our wedding journey unfolds in seven sacred chapters beginning with the decision to celebrate our " },
      { text: "Lotus", type: "element" },
      { text: "-like souls' union with all of you in the " },
      { text: "Kankotri Lekhan", type: "function" },
      { text: ". The groom and his family then introduced the bride to their customs and bound the souls in a " },
      { text: "“Sacred Wedding Knot”", type: "element" },
      { text: " during the " },
      { text: "Chundadi Function", type: "function" },
      { text: " followed by the fragrant, love-filled " },
      { text: "Waves", type: "element" },
      { text: " of the " },
      { text: "Mehndi Celebration", type: "function" },
      { text: " to both families." },
    ],
    [
      { text: "We then sought auspicious planetary blessings to direct us through life, like the " },
      { text: "North Star", type: "element" },
      { text: " with the auspicious " },
      { text: "Grah Shanti", type: "function" },
      { text: " before we go back to our roots, where all near and dear ones bless us " },
      { text: "Infinity", type: "element" },
      { text: " with health and prosperity through the customary healthy " },
      { text: "Haldi", type: "function" },
      { text: "." },
    ],
    [
      { text: "In the penultimate stage, all of us gather under the stars to dance and celebrate to the " },
      { text: "Moon and back", type: "element" },
      { text: " in " },
      { text: "Sangeet Night", type: "function" },
      { text: " leading finally to the ultimate " },
      { text: "Vivah", type: "function" },
      { text: ", where " },
      { text: "Agnidev (Agni)", type: "element" },
      { text: " witnesses and blesses our eternal union." },
    ],
  ],
}

// SEQUENCE OF ELEMENTS
export const sequenceOfElements = [
  { icon: 'lotus', name: 'Lotus', meaning: 'Purity, spiritual awakening and divine blessings.' },
  { icon: 'knot', name: 'The Sacred Knot', meaning: 'The sacred knot of marriage, symbolizing unity and commitment.' },
  { icon: 'waves', name: 'Waves', meaning: 'Love that comes in fragrant, joyous waves.' },
  { icon: 'north-star', name: 'The North Star', meaning: 'Guidance and protection of celestial bodies.' },
  { icon: 'infinity', name: 'Infinity', meaning: 'Deep roots and an unending bond of health and prosperity.' },
  { icon: 'sun-moon', name: 'Sun-Moon', meaning: 'Harmonious celebration balancing energies in the galaxy.' },
  { icon: 'agni', name: 'Agni', meaning: 'The sacred fire witnessing and blessing our eternal union.' },
]

const BANSIDHAR_APT = [
  'A-19/20 Bansidhar Apartment, Opp. Mitramilan Soc.,',
  'Nr. Mirambika School, Naranpura, Ahmedabad 380013',
]
const KAMLA_AMRUT = ['Kamla Amrut Farm']
const KALYAN_PUSHTI = ['Kalyan Pushti Haveli, Vastrapur', 'Ahmedabad, Gujarat']

export const events = [
  {
    id: 'chundadi',
    title: 'Chundadi – The Royal Life',
    theme: 'rajputana',
    element: 'knot',
    invocation: { lang: 'gu', text: '॥ શ્રી લલિતામ્બિકાય નમઃ ॥' },
    date: 'Saturday, 20th November 2026',
    schedule: [{ label: 'Timing', time: '6:00 PM onwards', note: '(followed by Dinner)' }],
    dressCode: { label: 'Green', colors: ['#2f7d4a'] },
    venue: KALYAN_PUSHTI,
    description:
      'A royal introduction and welcome of the bride into the family fold and customs in a larger-than-life fashion. The customary “sacred wedding knot” binds the souls together.',
  },
  {
    id: 'mehndi',
    title: 'Mehandi - The garden of Love',
    theme: 'mughal',
    element: 'waves',
    invocation: { lang: 'gu', text: '॥ શ્રી લલિતામ્બિકાય નમઃ ॥' },
    blessing: {
      lines: [
        'As the colours of Mehendi bring joy, tradition and celebration to this beautiful occasion,',
        'may we gather to bless the bride with love, laughter and cherished memories.',
      ],
    },
    date: 'Saturday, 21st November 2026',
    schedule: [{ label: 'Mehandi ceremony', time: '5:00 PM onwards', note: '(followed by dinner)' }],
    dressCode: { label: 'Pink', colors: ['#e58fb0'] },
    venue: BANSIDHAR_APT,
    description:
      'The love story unfolds as henna adorns and beautifies the bride and all the magnificent guests who come in “waves” to bless the bride and groom.',
  },
  {
    id: 'grah-shanti',
    title: 'Grah Shanti – The sacred blessings of all planetary Gods',
    theme: 'temple',
    element: 'north-star',
    invocation: { lang: 'gu', text: '॥ શ્રી લલિતામ્બિકાય નમઃ ॥' },
    blessing: {
      lines: [
        'As sacred mantras echo through the home and blessings fill every corner,',
        'we invite you to join us as this Grah Shanti marks a blessed beginning to the celebrations that follow.',
      ],
    },
    date: 'Sunday, 22nd November 2026',
    schedule: [
      { label: 'Ganesh Sthapana', time: '8:05 AM' },
      { label: 'Mandap Muhurat', time: '8:25 AM' },
      { label: 'Grah Shanti Yagya', time: '9:15 AM', note: '(followed by Lunch)' },
    ],
    dressCode: { label: 'Yellow/Red/Gharchola', colors: ['#f2c230', '#c0272d'] },
    venue: BANSIDHAR_APT,
    description:
      'The couple seeks blessings of all the celestial bodies and protection and guidance in life, just as sailors seek direction from the “North Star”.',
  },
  {
    id: 'haldi',
    title: 'Haldi - The roots of love',
    theme: 'village',
    element: 'infinity',
    invocation: { lang: 'gu', text: '॥ શ્રી લલિતામ્બિકાય નમઃ ॥' },
    blessing: {
      lines: [
        'Amidst rustic charm, vibrant colours, and the joy of a village carnival,',
        'join us for a Haldi celebration filled with laughter, love, and festive cheer.',
      ],
    },
    date: 'Monday, 23rd November 2026',
    schedule: [{ label: 'Haldi', time: '10:00 AM onwards', note: '(followed by Lunch)' }],
    dressCode: { label: 'Shades of Pastel', colors: ['#f6c6d0', '#fde3a7', '#c8e6c9', '#bfdcf2', '#d9c8ef'] },
    venue: KAMLA_AMRUT,
    description:
      'Love stems stronger and bonds of relations deepen like the roots during this ceremony, where all relatives bless the couple with “Infinity” in love, health, prosperity and married life.',
  },
  {
    id: 'sangeet',
    title: 'Sangeet – Walking to the moon',
    theme: 'golden',
    element: 'sun-moon',
    invocation: { lang: 'gu', text: '॥ શ્રી લલિતામ્બિકાય નમઃ ॥' },
    blessing: {
      lines: [
        'Where galaxies glow beneath a moonlit sky,',
        'join us for a Sufi night where soulful melodies meet a celebration written in the stars.',
      ],
    },
    date: 'Monday, 23rd November 2026',
    schedule: [{ label: 'Sangeet', time: '7:00 PM onwards', note: '(followed by DINNER)' }],
    dressCode: { label: 'Blue/Black', colors: ['#1f3c88', '#111111'] },
    venue: KAMLA_AMRUT,
    description:
      'It is probably the peak of festivities where everyone celebrates with music in our galaxy, right among “the Sun and the Moon”, balancing their energies.',
  },
  {
    id: 'wedding',
    title: 'Wedding – Eternity',
    theme: 'eternity',
    element: 'agni',
    invocation: { lang: 'gu', text: '॥ શ્રી લલિતામ્બિકાય નમઃ ॥' },
    blessing: {
      verse: { lang: 'hi', lines: ['जेहि कें जेहि पर सत्य सनेहू।', 'सो तेहि मिलइ न कछु संदेहू॥'] },
      lines: [
        'With mantras in the air, blessings in our hearts, and the grace of the divine,',
        'we invite you to witness the sacred union of two hearts and two families.',
      ],
    },
    date: 'Tuesday, 24th November 2026',
    dateNote: 'Shukla Purnima, Vikram Samvant 2083',
    schedule: [
      { label: 'Hastmelap', time: '6:35 PM', note: '(followed by DINNER)' },
    ],
    dressCode: { label: 'Indian Traditional', colors: [] },
    venue: KAMLA_AMRUT,
    description:
      'The souls unite again in their eternal journey and vow togetherness in the presence of the most efficient purifiers – “The Agni”. The bond continues…',
  },
]

// PAGE: FAMILY (Bhatt Family)
export const family = {
  title: 'A cordial invitation from',
  groups: [
    {
      members: [
        'Heavenly abode Mrs. Hema Bhrugeshbhai Bhatt',
        'Mr. Bhrugeshbhai Prasannakumar Bhatt',
      ],
    },
    {
      members: [
        'Late Mr. Prasannakumar Veniram Bhatt',
        'Late Mrs. Sharmishtaben Prasannakumar Bhatt',
      ],
    },
    {
      members: [
        'Mr. Gaurav Janakkumar Bhatt',
        'Mrs. Stuti Gaurav Bhatt',
        'Ms. Parthi Gaurav Bhatt',
      ],
    },
  ],
  awaits: 'Entire Bhatt Family awaits your presence',
  note: '',
}

export const mapsLink = (lines) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lines.join(' '))}`
