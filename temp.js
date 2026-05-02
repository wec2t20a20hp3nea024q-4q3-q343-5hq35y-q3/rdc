// planning-data.js - Subject / Topic / Exercise structure
const PLANNING_DATA = [
  {
    id: 'math',
    code: 'MATH',
    name: 'Mathematics',
    topics: [
      {
        id:'wmp',
        code:'MOCKPAPER 1',
        exercises:[
          {code:'1A1',fullMark:105},
          {code:'2A1',fullMark:105},
          {code:'3A1',fullMark:105},
          {code:'3A2',fullMark:45},
          {code:'4A1',fullMark:105},
          {code:'4B1',fullMark:105},
          {code:'5A1',fullMark:105},
          {code:'6A1',fullMark:105},
          {code:'6B1',fullMark:105},
          {code:'7A1',fullMark:105},
          {code:'8A1',fullMark:105},
          {code:'8B1',fullMark:105},
          {code:'9A1',fullMark:105},
          {code:'10A1',fullMark:105},
          {code:'10B1',fullMark:105},
          {code:'11A1',fullMark:105},
          {code:'12A1',fullMark:105},
          {code:'12B1',fullMark:105},
          {code:'13A1',fullMark:105},
          {code:'13B1',fullMark:105},
          {code:'14A1',fullMark:105},
          {code:'15A1',fullMark:105},
          {code:'15B1',fullMark:105},
          {code:'16A1',fullMark:105},
          {code:'16B1',fullMark:105},
          {code:'19A1',fullMark:105},
          {code:'20A1',fullMark:105},
          {code:'21A1',fullMark:105},
          {code:'22A1',fullMark:105},
          {code:'23A1',fullMark:105},
          {code:'23B1',fullMark:105},
          {code:'24A1',fullMark:105},
          {code:'24B1',fullMark:105},
          {code:'PM1-1',fullMark:105},
          {code:'PM2-1',fullMark:105},
          {code:'PM3-1',fullMark:105},
          {code:'PM4-1',fullMark:105},
          {code:'PM5-1',fullMark:105},
          {code:'PM6-1',fullMark:105},
          {code:'PM7-1',fullMark:105},
          {code:'PM8-1',fullMark:105},
          {code:'PM9-1',fullMark:105},
          {code:'PM10-1',fullMark:105},
          {code:'PM11-1',fullMark:105},
        ]
      },
      {
        id:'wmp2',
        code:'MOCKPAPER2',
        exercises:[
          {code:'1A2',fullMark:45},
          {code:'2A2',fullMark:45},
          {code:'3A2',fullMark:45},
          {code:'3A2',fullMark:45},
          {code:'4A2',fullMark:45},
          {code:'4B2',fullMark:45},
          {code:'5A2',fullMark:45},
          {code:'6A2',fullMark:45},
          {code:'6B2',fullMark:45},
          {code:'7A2',fullMark:45},
          {code:'8A2',fullMark:45},
          {code:'8B2',fullMark:45},
          {code:'9A2',fullMark:45},
          {code:'10A2',fullMark:45},
          {code:'10B2',fullMark:45},
          {code:'11A2',fullMark:45},
          {code:'12A2',fullMark:45},
          {code:'12B2',fullMark:45},
          {code:'13A2',fullMark:45},
          {code:'13B2',fullMark:45},
          {code:'14A2',fullMark:45},
          {code:'15A2',fullMark:45},
          {code:'15B2',fullMark:45},
          {code:'16A2',fullMark:45},
          {code:'16B2',fullMark:45},
          {code:'19A2',fullMark:45},
          {code:'20A2',fullMark:45},
          {code:'21A2',fullMark:45},
          {code:'22A2',fullMark:45},
          {code:'23A2',fullMark:45},
          {code:'23B2',fullMark:45},
          {code:'24A2',fullMark:45},
          {code:'24B2',fullMark:45},
          {code:'PM1-2',fullMark:45},
          {code:'PM2-2',fullMark:45},
          {code:'PM3-2',fullMark:45},
          {code:'PM4-2',fullMark:45},
          {code:'PM5-2',fullMark:45},
          {code:'PM6-2',fullMark:45},
          {code:'PM7-2',fullMark:45},
          {code:'PM8-2',fullMark:45},
          {code:'PM9-2',fullMark:45},
          {code:'PM10-2',fullMark:45},
          {code:'PM11-2',fullMark:45},
        ]
      },
      {
        id: 'alg',
        code: 'ALG',
        name: 'Algebra',
        exercises: [
            { id: 'math-alg-1', code: 'ALG-001', fullMark: 100 },
            { id: 'math-alg-2', code: 'ALG-002', fullMark: 80 },
            { id: 'math-alg-3', code: 'ALG-003', fullMark: 120 }
        ]
      },
      {
        id: 'geom',
        code: 'GEOM',
        name: 'Geometry',
        exercises: [
            { id: 'math-geom-1', code: 'GEO-101', fullMark: 90 },
            { id: 'math-geom-2', code: 'GEO-102', fullMark: 100 }
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
              id: 'mech',
              code: 'MECH',
              name: 'Mechanics',
              exercises: [
                  { id: 'phy-mech-1', code: 'MECH-201', fullMark: 100 },
                  { id: 'phy-mech-2', code: 'MECH-202', fullMark: 90 }
              ]
          },
          {
              id: 'thermo',
              code: 'THERM',
              name: 'Thermodynamics',
              exercises: [
                  { id: 'phy-thermo-1', code: 'THR-301', fullMark: 80 }
              ]
          }
      ]
  },
  {
      id: 'cs',
      code: 'CS',
      name: 'Computer Science',
      topics: [
          {
              id: 'ds',
              code: 'DS',
              name: 'Data Structures',
              exercises: [
                  { id: 'cs-ds-1', code: 'DS-401', fullMark: 100 },
                  { id: 'cs-ds-2', code: 'DS-402', fullMark: 150 }
              ]
          }
      ]
  }
];