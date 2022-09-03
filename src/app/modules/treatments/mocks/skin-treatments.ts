export const SKIN_TREATMENTS: any = [
  {
    title: 'Skin Consultation',
    hasShowcase: false,
    treatment: ``,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '30 mins' },
      { key: 'Single', value: '£50' }
    ],
    new: true
  },
  {
    title: 'Beauti Advanced Bespoke Facial',
    hasShowcase: false,
    treatment: ``,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    bespoke: false,
    options: [
      { key: 'Duration', value: '120 mins' },
      { key: 'Single', value: '£250' },
      {
        key: 'with Cinzia',
        value: '£300'
      }
    ],
    new: true
  },
  {
    title: 'Advanced Beauti Signature Relaxing Facial',
    hasShowcase: true,
    treatment: `
    Choose from Radio Frequency, Skin Rejuvenation, LED Light Therapy.<br /> Add Dermaplaning for £30, (extra 15 mins)`,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '75 mins' },
      { key: 'Single', value: '£150' },
      {
        key: '6 Courses',
        value: '£900'
      }
    ],
    new: true
  },
  {
    title: 'Aqua 3 Hydrotherapy Facial',
    hasShowcase: true,
    treatment: `
    Choose from Deep-cleaning, Anti-Aging. <br />Add Black Head Extraction for £10, (extra 10 mins)
    <br />Add LED Light Therapy for £20, (extra 15 mins)<br />Add Dermaplaning for £30, (extra 15 mins)`,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      {
        key: 'Duration',
        value: '60 mins'
      },
      {
        key: 'Single',
        value: '£130'
      },
      {
        key: '3 Courses',
        value: '£351'
      },
      {
        key: '6 Courses',
        value: '£663'
      }
    ]
  },
  {
    title: `Skin Peel`,
    hasShowcase: true,
    treatment: `Add LED Light Therapy for £20, (extra 15 mins)`,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '60 mins' },
      { key: 'Single', value: '£120' },
      { key: '3 Courses', value: '£324' },
      { key: '6 Courses', value: '£612' }
    ]
  },
  {
    title: `Radio Frequency Skin Tightening`,
    treatment: `Add LED Light Therapy for £20, (extra 15 mins)<br /> Add Dermaplaning for £30, (extra 15 mins)	`,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '60 mins' },
      { key: 'Single', value: '£120' },
      { key: '3 Courses', value: '£324' },
      { key: '6 Courses', value: '£612' }
    ]
  },
  {
    title: `Beauti Fusion Mesotherapy`,
    treatment: `Add Dermaplaning for £30, (extra 15 mins)<br />
     Add LED Light Therapy for £20, (extra 15 mins)`,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    orientation: 'row',
    fullOptions: 'true',
    options: [
      {
        treatment: '                            ',
        options: [
          { key: '   Duration', value: '' },
          { key: '   Single', value: '' },
          { key: '   4 courses', value: '' },
        ]
      },
      {
        treatment: `    Face Meso`,
        options: [
          { key: '', value: '    60 mins' },
          { key: '', value: '    £350' },
          { key: '', value: '    £1260' },
        ]
      },
      {
        treatment: `Neck & Decolletage`,
        options: [
          { key: '', value: '60 mins' },
          { key: '', value: '£400' },
          { key: '', value: '£1440' },
        ]
      },
    ]
  },
  {
    title: 'IPL Skin Rejuvenation',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '30 mins' },
      { key: 'Single', value: '£110' },
      { key: '3 Courses', value: '£297' },
      { key: '6 Courses', value: '£561' }
    ],
  },
  {
    title: 'Micro needling with Dermapen',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '60 mins' },
      { key: 'Single', value: '£350' },
      { key: '4 Courses', value: '£1260' }
    ]
  },
  {
    title: 'Anti-Wrinkle Injections',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    orientation: 'row',
    options: [
      {
        treatment: `One Area`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£200' },
        ]
      },
      {
        treatment: `Two Areas`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£280' },
        ]
      },
      {
        treatment: `Three Areas`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£320' },
        ]
      },
    ]
  },
  {
    title: 'Dermal Fillers',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    orientation: 'row',
    options: [
      {
        treatment: `0.5ml`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£190' },
        ]
      },
      {
        treatment: `1ml`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£250' },
        ]
      },
      {
        treatment: `2ml`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£350' },
        ]
      },
    ]
  },
  {
    title: 'Plasma Face Lift',
    hasShowcase: true,
    treatment: `Prices below include one free top up session`,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    orientation: 'row',
    options: [
      {
        treatment: `Upper Eye`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£450' },
        ]
      },
      {
        treatment: `Lower Eye`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£350' },
        ]
      },
      {
        treatment: `Upper and Lower Eye`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£600' },
        ]
      },
      {
        treatment: `Upper Lip`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£450' }
        ]
      },
      {
        treatment: `Lower Lip`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£350' },
        ]
      },
      {
        treatment: `Brow Lift`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£450' },
        ]
      },
      {
        treatment: `Nasal Labia`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£500' }
        ]
      },
      {
        treatment: `Crow Feet`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£550' },
        ]
      },
      {
        treatment: `Neck`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£900' }
        ]
      },
      {
        treatment: `Jawline`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£100' },
        ]
      },
      {
        treatment: `Full Face`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£2000' },
        ]
      }
    ]
  },
  {
    title: 'TriBella',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Single', value: '£520' },
      { key: '3 Courses', value: '£1404' },
    ]
  },
  {
    title: 'Skin Resurfacing',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Single', value: '£300' },
      { key: '3 Courses', value: '£810' },
    ]
  },
  {
    title: `Profhilo`,
    hasShowcase: true,
    treatment: ``,
    description: ``,
    orientation: 'row',
    fullOptions: 'true',
    options: [
      {
        treatment: '                            ',
        options: [
          { key: '   Duration', value: '' },
          { key: '   Single', value: '' },
          { key: '   2 Courses', value: '' },
        ]
      },
      {
        treatment: `    Face or Neck`,
        options: [
          { key: '', value: '    60 mins' },
          { key: '', value: '    £340' },
          { key: '', value: '    £646' },
        ]
      },
      {
        treatment: `Face and Neck`,
        options: [
          { key: '', value: '60 mins' },
          { key: '', value: '£646' },
          { key: '', value: '£1163' },
        ]
      },
    ]
  },
  {
    title: `PRP Vampire Facial`,
    hasShowcase: true,
    treatment: ``,
    description: ``,
    orientation: 'row',
    fullOptions: 'true',
    options: [
    {
        treatment: '',
        options: [
          { key: '   Duration', value: '' },
          { key: '   Single', value: '' },
          { key: '   3 Courses', value: '' },
        ]
      },
      {
        treatment: ``,
        options: [
          { key: '', value: '75 mins' },
          { key: '', value: '£475' },
          { key: '', value: '£1283' },
        ]
      },
    ]
  },
  {
    title: `PRP Hair Loss Treatment`,
    hasShowcase: true,
    treatment: ``,
    description: ``,
    orientation: 'row',
    fullOptions: 'true',
    options: [
      {
        treatment: '',
        options: [
          { key: '   Duration', value: '' },
          { key: '   Single', value: '' },
          { key: '   3 Courses', value: '' },
        ]
      },
      {
        treatment: '',
        options: [
          { key: '', value: '75 mins' },
          { key: '', value: '£475' },
          { key: '', value: '£1283' },
        ]
      },
    ]
  },
  {
    title: `Fat Dissolving Injections`,
    hasShowcase: false,
    treatment: ``,
    description: ``,
    orientation: 'row',
    fullOptions: 'true',
    options: [
      {
        treatment: '(One Area)',
        options: [
          { key: '   Duration', value: '' },
          { key: '   Single', value: '' },
          { key: '   Courses', value: '' },
        ]
      },
      {
        treatment: `Head and Neck`,
        options: [
          { key: '', value: '45 mins' },
          { key: '   Single', value: '£450' },
          { key: '   2 Courses', value: '£810' },
        ]
      },
      {
        treatment: `Body`,
        options: [
          { key: '', value: '45 mins' },
          { key: '   Single', value: '£500' },
          { key: '   3 Courses', value: '£1800' },
        ]
      },
    ]
  },
];
