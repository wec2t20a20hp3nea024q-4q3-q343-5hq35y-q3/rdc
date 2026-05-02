// planning-data.js - Subject / Topic / Exercise structure (unique IDs)

const PLANNING_DATA = [
  {
    id: 'math',
    code: 'MATH',
    name: 'Mathematics',
    topics: [
      {
        id: 'wmp',
        code: 'MOCKPAPER 1',
        name: 'Mock Paper 1',
        exercises: [
          { id: '1A1', code: '1A1', fullMark: 105 },
          { id: '2A1', code: '2A1', fullMark: 105 },
          { id: '3A1', code: '3A1', fullMark: 105 },
          { id: '3A2', code: '3A2', fullMark: 45 },
          { id: '4A1', code: '4A1', fullMark: 105 },
          { id: '4B1', code: '4B1', fullMark: 105 },
          { id: '5A1', code: '5A1', fullMark: 105 },
          { id: '6A1', code: '6A1', fullMark: 105 },
          { id: '6B1', code: '6B1', fullMark: 105 },
          { id: '7A1', code: '7A1', fullMark: 105 },
          { id: '8A1', code: '8A1', fullMark: 105 },
          { id: '8B1', code: '8B1', fullMark: 105 },
          { id: '9A1', code: '9A1', fullMark: 105 },
          { id: '10A1', code: '10A1', fullMark: 105 },
          { id: '10B1', code: '10B1', fullMark: 105 },
          { id: '11A1', code: '11A1', fullMark: 105 },
          { id: '12A1', code: '12A1', fullMark: 105 },
          { id: '12B1', code: '12B1', fullMark: 105 },
          { id: '13A1', code: '13A1', fullMark: 105 },
          { id: '13B1', code: '13B1', fullMark: 105 },
          { id: '14A1', code: '14A1', fullMark: 105 },
          { id: '15A1', code: '15A1', fullMark: 105 },
          { id: '15B1', code: '15B1', fullMark: 105 },
          { id: '16A1', code: '16A1', fullMark: 105 },
          { id: '16B1', code: '16B1', fullMark: 105 },
          { id: '19A1', code: '19A1', fullMark: 105 },
          { id: '20A1', code: '20A1', fullMark: 105 },
          { id: '21A1', code: '21A1', fullMark: 105 },
          { id: '22A1', code: '22A1', fullMark: 105 },
          { id: '23A1', code: '23A1', fullMark: 105 },
          { id: '23B1', code: '23B1', fullMark: 105 },
          { id: '24A1', code: '24A1', fullMark: 105 },
          { id: '24B1', code: '24B1', fullMark: 105 },
          { id: 'PM1-1', code: 'PM1-1', fullMark: 105 },
          { id: 'PM2-1', code: 'PM2-1', fullMark: 105 },
          { id: 'PM3-1', code: 'PM3-1', fullMark: 105 },
          { id: 'PM4-1', code: 'PM4-1', fullMark: 105 },
          { id: 'PM5-1', code: 'PM5-1', fullMark: 105 },
          { id: 'PM6-1', code: 'PM6-1', fullMark: 105 },
          { id: 'PM7-1', code: 'PM7-1', fullMark: 105 },
          { id: 'PM8-1', code: 'PM8-1', fullMark: 105 },
          { id: 'PM9-1', code: 'PM9-1', fullMark: 105 },
          { id: 'PM10-1', code: 'PM10-1', fullMark: 105 },
          { id: 'PM11-1', code: 'PM11-1', fullMark: 105 }
        ]
      },
      {
        id: 'wmp2',
        code: 'MOCKPAPER2',
        name: 'Mock Paper 2',
        exercises: [
          { id: '1A2', code: '1A2', fullMark: 45 },
          { id: '2A2', code: '2A2', fullMark: 45 },
          { id: '3A2', code: '3A2', fullMark: 45 },
          { id: '3B2', code: '3B2', fullMark: 45 },
          { id: '4A2', code: '4A2', fullMark: 45 },
          { id: '4B2', code: '4B2', fullMark: 45 },
          { id: '5A2', code: '5A2', fullMark: 45 },
          { id: '6A2', code: '6A2', fullMark: 45 },
          { id: '6B2', code: '6B2', fullMark: 45 },
          { id: '7A2', code: '7A2', fullMark: 45 },
          { id: '8A2', code: '8A2', fullMark: 45 },
          { id: '8B2', code: '8B2', fullMark: 45 },
          { id: '9A2', code: '9A2', fullMark: 45 },
          { id: '10A2', code: '10A2', fullMark: 45 },
          { id: '10B2', code: '10B2', fullMark: 45 },
          { id: '11A2', code: '11A2', fullMark: 45 },
          { id: '12A2', code: '12A2', fullMark: 45 },
          { id: '12B2', code: '12B2', fullMark: 45 },
          { id: '13A2', code: '13A2', fullMark: 45 },
          { id: '13B2', code: '13B2', fullMark: 45 },
          { id: '14A2', code: '14A2', fullMark: 45 },
          { id: '15A2', code: '15A2', fullMark: 45 },
          { id: '15B2', code: '15B2', fullMark: 45 },
          { id: '16A2', code: '16A2', fullMark: 45 },
          { id: '16B2', code: '16B2', fullMark: 45 },
          { id: '19A2', code: '19A2', fullMark: 45 },
          { id: '20A2', code: '20A2', fullMark: 45 },
          { id: '21A2', code: '21A2', fullMark: 45 },
          { id: '22A2', code: '22A2', fullMark: 45 },
          { id: '23A2', code: '23A2', fullMark: 45 },
          { id: '23B2', code: '23B2', fullMark: 45 },
          { id: '24A2', code: '24A2', fullMark: 45 },
          { id: '24B2', code: '24B2', fullMark: 45 },
          { id: 'PM1-2', code: 'PM1-2', fullMark: 45 },
          { id: 'PM2-2', code: 'PM2-2', fullMark: 45 },
          { id: 'PM3-2', code: 'PM3-2', fullMark: 45 },
          { id: 'PM4-2', code: 'PM4-2', fullMark: 45 },
          { id: 'PM5-2', code: 'PM5-2', fullMark: 45 },
          { id: 'PM6-2', code: 'PM6-2', fullMark: 45 },
          { id: 'PM7-2', code: 'PM7-2', fullMark: 45 },
          { id: 'PM8-2', code: 'PM8-2', fullMark: 45 },
          { id: 'PM9-2', code: 'PM9-2', fullMark: 45 },
          { id: 'PM10-2', code: 'PM10-2', fullMark: 45 },
          { id: 'PM11-2', code: 'PM11-2', fullMark: 45 }
        ]
      }
    ]
  },
  {
    id: 'physics',
    code: 'PHY',
    name: 'Physics',
    topics: [
      {
        id: 'book1t1',
        code: 'BOOK1T1',
        name: '///',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 100 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 70 }
        ]
      },
      {
        id: 'book2t2',
        code: 'BOOK2T2',
        name: '///',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 95 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 169 }
        ]
      },
      {
        id: 'book2t3',
        code: 'BOOK2T3',
        name: '///',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 161 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 136 }
        ]
      },
      {
        id: 'book2t4',
        code: 'BOOK2T4',
        name: '///',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 97 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 341 }
        ]
      },
      {
        id: 'book2t5',
        code: 'BOOK2T5',
        name: '///',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 113 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 333 }
        ]
      },
      {
        id: 'book2t6',
        code: 'BOOK2T6',
        name: '///',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 30 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 100 }
        ]
      },
      {
        id: 'book2t7',
        code: 'BOOK2T7',
        name: '///',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 27 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 62 }
        ]
      },
      {
        id: 'book2t8',
        code: 'BOOK2T8',
        name: '///',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 38 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 73 }
        ]
      },
      {
        id: 'book3t1',
        code: 'BOOK3T1',
        name: 'Basic properties of wave',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 68 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 45 }
        ]
      },
      {
        id: 'book3t2',
        code: 'BOOK3T2',
        name: 'Wave Phenomena',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 118 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 224 }
        ]
      },
      {
        id: 'book3t3a',
        code: 'BOOK3T3A',
        name: 'Light',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 98 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 116 }
        ]
      },
      {
        id: 'book3t3b',
        code: 'BOOK3T3B',
        name: 'Sound',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 92 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 136 }
        ]
      },
      {
        id: 'book3t4',
        code: 'BOOK3T4',
        name: 'reflexion',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 13 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 18 }
        ]
      },
      {
        id: 'book3t5',
        code: 'BOOK3T5',
        name: 'refraction',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 59 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 149 }
        ]
      },
      {
        id: 'book3t6',
        code: 'BOOK3T6',
        name: 'lenses',
        exercises: [
          { id: 'Notes', code: 'Notes', fullMark: 100 },
          { id: 'Classwork', code: 'Classwork', fullMark: 100 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 99 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 282 }
        ]
      }
    ]
  },
  {
    id: 'CHEM',
    code: 'CHEM',
    name: 'Chemistry',
    topics: [
      {
        id: 'ch14',
        code: 'Ch.14',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      },
      {
        id: 'ch15',
        code: 'Ch.15',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      },
      {
        id: 'ch16',
        code: 'Ch.16',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      },
      {
        id: 'ch17',
        code: 'Ch.17',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      },
      {
        id: 'ch18',
        code: 'Ch.18',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      },
      {
        id: 'ch19',
        code: 'Ch.19',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      },
      {
        id: 'ch28',
        code: 'Ch.28',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      },
      {
        id: 'ch29',
        code: 'Ch.29',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      },
      {
        id: 'ch30',
        code: 'Ch.30',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      },
      {
        id: 'ch31',
        code: 'Ch.31',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      },
      {
        id: 'ch32',
        code: 'Ch.32',
        name: 'Acid and Bases',
        exercises: [
          { id: 'Book Chapter Exercise', code: 'Book Ch. Exe', fullMark: 100 },
          { id: 'Book Exam Practice', code: 'Book EP', fullMark: 100 },
          { id: 'Question Bank', code: 'QB', fullMark: 500 },
          { id: 'DSEMC', code: 'DSEMC', fullMark: 200 },
          { id: 'DSELQ', code: 'DSELQ', fullMark: 200 }
        ]
      }
    ]
  }
];
