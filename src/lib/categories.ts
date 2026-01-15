export const STATE_DISPLAY_NAMES: Record<string, string> = {
  'alabama': 'Alabama',
  'alaska': 'Alaska',
  'arizona': 'Arizona',
  'arkansas': 'Arkansas',
  'california': 'California',
  'colorado': 'Colorado',
  'connecticut': 'Connecticut',
  'delaware': 'Delaware',
  'florida': 'Florida',
  'georgia': 'Georgia',
  'hawaii': 'Hawaii',
  'idaho': 'Idaho',
  'illinois': 'Illinois',
  'indiana': 'Indiana',
  'iowa': 'Iowa',
  'kansas': 'Kansas',
  'kentucky': 'Kentucky',
  'louisiana': 'Louisiana',
  'maine': 'Maine',
  'maryland': 'Maryland',
  'massachusetts': 'Massachusetts',
  'michigan': 'Michigan',
  'minnesota': 'Minnesota',
  'mississippi': 'Mississippi',
  'missouri': 'Missouri',
  'montana': 'Montana',
  'nebraska': 'Nebraska',
  'nevada': 'Nevada',
  'new-hampshire': 'New Hampshire',
  'new-jersey': 'New Jersey',
  'new-mexico': 'New Mexico',
  'new-york': 'New York',
  'north-carolina': 'North Carolina',
  'north-dakota': 'North Dakota',
  'ohio': 'Ohio',
  'oklahoma': 'Oklahoma',
  'oregon': 'Oregon',
  'pennsylvania': 'Pennsylvania',
  'rhode-island': 'Rhode Island',
  'south-carolina': 'South Carolina',
  'south-dakota': 'South Dakota',
  'tennessee': 'Tennessee',
  'texas': 'Texas',
  'utah': 'Utah',
  'vermont': 'Vermont',
  'virginia': 'Virginia',
  'washington': 'Washington',
  'west-virginia': 'West Virginia',
  'wisconsin': 'Wisconsin',
  'wyoming': 'Wyoming',
  'district-of-columbia': 'District of Columbia'
};

export const CATEGORIES = {
  'auto-insurance': {
    title: 'State Insurance Guides',
    description: 'State-by-state auto insurance requirements and guides',
    states: Object.keys(STATE_DISPLAY_NAMES)
  },
  'accidents': {
    title: 'Accident & Injury Help',
    description: 'What to do after an accident in your state',
    states: Object.keys(STATE_DISPLAY_NAMES)
  },
  'traffic-laws': {
    title: 'Traffic Tickets & Laws',
    description: 'State traffic laws and ticket information',
    states: Object.keys(STATE_DISPLAY_NAMES)
  },
  'find-help': {
    title: 'Find Local Help',
    description: 'Connect with local insurance professionals',
    states: Object.keys(STATE_DISPLAY_NAMES)
  }
};
