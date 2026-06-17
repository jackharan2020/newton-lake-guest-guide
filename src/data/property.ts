/**
 * =============================================================================
 * NEWTON LAKE HOUSE — IN-STAY GUEST GUIDE CONFIGURATION
 * =============================================================================
 * Single source of truth. Search "HOST:" for fields to update.
 * =============================================================================
 */

// -----------------------------------------------------------------------------
// Core interfaces
// -----------------------------------------------------------------------------

export interface PropertyAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  formatted: string;
}

export interface WifiConfig {
  networkName: string;
  password: string;
  /** Extra connection help shown on the home WiFi card */
  connectionSteps: string[];
}

export interface HostContact {
  name: string;
  phone: string;
  email: string;
  responseTime: string;
}

export interface EmergencyInfo {
  emergencyPhone: string;
  hospitalName: string;
  hospitalPhone: string;
  hospitalNote: string;
  /** Poison control, fire dept, etc. */
  additionalContacts: { label: string; phone: string }[];
  notes: string[];
}

export interface InstructionStep {
  text: string;
}

export interface InstructionTopic {
  id: string;
  title: string;
  /** One-line description for hub cards */
  summary: string;
  category: TopicCategory;
  /** URL path segment, e.g. "/systems/thermostat" */
  href: string;
  steps: InstructionStep[];
  troubleshooting?: string[];
  /** Override default "Troubleshooting" footer heading (e.g. "Important Notes") */
  footerSectionTitle?: string;
  footerSectionKicker?: string;
  /** Optional photo from /public/images — only when it helps complete a task */
  photoPath?: string;
  photoAlt?: string;
}

export type TopicCategory =
  | "systems"
  | "entertainment"
  | "fire"
  | "outdoor"
  | "checkout"
  | "emergency"
  | "rules";

export interface GarbageRecycling {
  /** HOST: Pickup day(s), e.g. "Tuesday morning" */
  pickupSchedule: string;
  /** Where bins are located */
  binLocation: string;
  instructions: string[];
  recyclingRules: string[];
}

export interface CheckoutGuide {
  time: string;
  checklist: string[];
  garbage: string[];
  dishwasher: string[];
  grill: string[];
}

export interface SmartLockInfo {
  location: string;
  steps: InstructionStep[];
  troubleshooting: string[];
}

export type ThermostatMode = "heating" | "cooling";
export type ThermostatType = "nest" | "standard";

export interface ThermostatZone {
  id: string;
  /** Short label for cards, e.g. "Kitchen Area Nest" */
  shortName: string;
  location: string;
  locationDetail: string;
  mode: ThermostatMode;
  /** Plain-language area controlled, e.g. "Main Floor" */
  controls: string;
  controlsDetail: string[];
  type: ThermostatType;
  /** Optional photo — HOST: replace with actual thermostat location photos */
  photoPath?: string;
  photoAlt?: string;
}

export interface ClimateSeasonGuide {
  season: "Summer" | "Winter";
  tips: string[];
}

export interface ClimateTroubleshootingItem {
  question: string;
  answer: string;
}

export interface ClimateControlGuide {
  intro: string;
  importantRule: string;
  importantRuleDetails: string[];
  nestSteps: InstructionStep[];
  thermostats: ThermostatZone[];
  seasonGuides: ClimateSeasonGuide[];
  troubleshooting: ClimateTroubleshootingItem[];
}

export interface SystemGuideSection {
  id: string;
  title: string;
  steps: InstructionStep[];
}

export interface SystemGuide {
  intro: string;
  sections: SystemGuideSection[];
  troubleshooting: ClimateTroubleshootingItem[];
}

export interface ShadeRemoteButton {
  label: string;
  description: string;
}

export interface ShadesArea {
  id: string;
  title: string;
  location: string;
  controlMethod: string;
  controlType: "remote" | "voice";
  /** Shown for voice-controlled blinds */
  defaultOperation?: string;
  remoteButtons?: ShadeRemoteButton[];
  voiceCommands?: string[];
  steps: InstructionStep[];
  photoPath?: string;
  photoAlt?: string;
}

export interface DeviceImage {
  path: string;
  alt: string;
  caption: string;
}

export interface ShadesGuide {
  overview: string;
  automaticNote: string;
  overrideNote: string;
  /** Shared product photo for handheld Lutron shade remotes */
  remoteDevice?: DeviceImage;
  /** Shared product photo for Google Nest Hub voice control */
  voiceDevice?: DeviceImage;
  /** Full voice command examples shown on the voice assistant card */
  voiceCommandExamples?: string[];
  areas: ShadesArea[];
  troubleshooting: ClimateTroubleshootingItem[];
}

export interface LightingZone {
  id: string;
  title: string;
  capabilities: string[];
  photoPath?: string;
  photoAlt?: string;
}

export interface LightingTip {
  title: string;
  description: string;
}

export interface LightingGuide {
  overview: string;
  smartControlNote: string;
  reassuringNote: string;
  wallSwitches: {
    description: string;
    examples: string[];
  };
  smartLighting: {
    description: string;
    capabilities: string[];
  };
  /** Shared product photo for Google Nest Hub voice control */
  voiceDevice?: DeviceImage;
  voiceCommandExamples: string[];
  zones: LightingZone[];
  tips: LightingTip[];
  troubleshooting: ClimateTroubleshootingItem[];
}

export interface SpeakerZone {
  id: string;
  title: string;
  location: string;
  photoPath?: string;
  photoAlt?: string;
}

export interface SpeakerControlMethod {
  id: string;
  title: string;
  description: string;
  features: string[];
  steps?: InstructionStep[];
}

export interface SpeakersGuide {
  overview: string;
  groupingNote: string;
  wifiRequiredNote: string;
  controlMethods: SpeakerControlMethod[];
  outdoorZones: SpeakerZone[];
  indoorZones: SpeakerZone[];
  groupingExamples: string[];
  courtesy: {
    title: string;
    intro: string;
    guidelines: string[];
    closing: string;
  };
  troubleshooting: ClimateTroubleshootingItem[];
}

export type SystemAccent =
  | "lake"
  | "gold"
  | "evergreen"
  | "amber"
  | "slate"
  | "teal"
  | "fire"
  | "rose";

export interface SystemCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: SystemAccent;
  href: string;
  includes: string[];
}

export type ExploreCategory =
  | "Restaurants"
  | "Grocery"
  | "Convenience"
  | "Activities"
  | "Golf";

export interface ExplorePlace {
  id: string;
  name: string;
  category: ExploreCategory;
  /** Street address used for Apple Maps directions */
  address: string;
  description: string;
  distance: string;
  highlight: string;
  /** Optional hero image under /public */
  photoPath?: string;
  photoAlt?: string;
}

export interface Property {
  name: string;
  /** Guest-facing brand name shown in hero and titles */
  displayName: string;
  welcomeMessage: string;
  /** Hero image path under /public */
  heroImagePath: string;
  heroImageAlt: string;
  address: PropertyAddress;
  checkIn: string;
  checkOut: string;
  wifi: WifiConfig;
  host: HostContact;
  emergency: EmergencyInfo;
  smartLock: SmartLockInfo;
  garbage: GarbageRecycling;
  checkout: CheckoutGuide;
  houseRules: string[];
  climateControl: ClimateControlGuide;
  shadesGuide: ShadesGuide;
  lightingGuide: LightingGuide;
  entertainmentGuide: SystemGuide;
  speakersGuide: SpeakersGuide;
  /** House systems hub categories — shown on /systems and home quick access */
  systemCategories: SystemCategory[];
  /** All task-based instruction topics */
  topics: InstructionTopic[];
  explore: ExplorePlace[];
}

// -----------------------------------------------------------------------------
// Property data
// -----------------------------------------------------------------------------

export const property: Property = {
  name: "Newton Lake House",
  displayName: "Newton Lake Retreat",
  welcomeMessage:
    "Welcome to your lakeside escape. Everything you need is right here.",
  heroImagePath: "/images/exterior/dock/dock-boat-lift-aerial.jpg",
  heroImageAlt:
    "Private dock with boat on lift, American flag, and lake panorama",

  address: {
    street: "108 Willow Ave",
    city: "Greenfield Township",
    state: "PA",
    zip: "18407",
    formatted: "108 Willow Ave, Greenfield Township, PA 18407",
  },

  checkIn: "3:00 PM",
  checkOut: "12:00 PM",

  wifi: {
    // HOST: Guest network credentials
    networkName: "Newton Lake Guest",
    password: "Relax@lake1",
    connectionSteps: [
      "Open Settings → Wi-Fi on your phone.",
      "Select the network name shown below.",
      "Enter the password when asked — or copy it from below.",
    ],
  },

  host: {
    // HOST: Your contact info
    name: "Sarah & Michael",
    phone: "+1 (603) 555-0142",
    email: "hello@newtonlakehouse.com",
    responseTime: "Usually responds within an hour",
  },

  emergency: {
    emergencyPhone: "911",
    hospitalName: "Geisinger Community Medical Center",
    hospitalPhone: "+1 (570) 703-8000",
    hospitalNote: "Scranton — about 25 minutes south via PA-106 and I-81",
    additionalContacts: [
      { label: "Poison Control", phone: "1-800-222-1222" },
      // HOST: Add local fire/police non-emergency if desired
    ],
    notes: [
      "Fire extinguisher: kitchen and garage.",
      "First aid kit: master bathroom cabinet.",
      "Property address is on the refrigerator.",
    ],
  },

  smartLock: {
    location: "Front door and lake-side door",
    steps: [
      { text: "Your door code is in your Airbnb confirmation message." },
      { text: "Enter the code on the keypad, then press the checkmark button." },
      { text: "The lock will click — turn the handle to open." },
      { text: "The door auto-locks about 30 seconds after it closes." },
    ],
    troubleshooting: [
      "If the code doesn't work, make sure the keypad is awake — touch the screen first.",
      "Try entering the code slowly.",
      "Call or text your hosts if you're still locked out.",
    ],
  },

  garbage: {
    // HOST: Actual pickup schedule
    pickupSchedule: "Tuesday morning — place bins at the curb Monday evening",
    binLocation: "Side of the garage — gray trash, blue recycling",
    instructions: [
      "Trash (gray bin): bagged household waste only.",
      "Recycling (blue bin): rinse containers; no plastic bags inside.",
      "Pull bins to the curb Monday evening if you're here on pickup week.",
    ],
    recyclingRules: [
      "Cardboard: flatten boxes.",
      "Glass, metal cans, and plastic #1–2 accepted.",
      "No styrofoam or plastic bags in recycling.",
    ],
  },

  checkout: {
    time: "12:00 PM",
    checklist: [
      "Strip beds and leave linens in the laundry room basket.",
      "Load and start the dishwasher — or wash and put away dishes.",
      "Take trash to the bins by the garage.",
      "Turn off all fireplaces and fire tables.",
    ],
    garbage: [
      "Bag all trash and place in the gray bin by the garage.",
      "Recycling in the blue bin — see Garbage section for rules.",
    ],
    dishwasher: [
      "Load all used dishes, glasses, and utensils.",
      "Add one pod from under the sink.",
      "Press Start — you do not need to wait for it to finish.",
    ],
    grill: [
      "Brush the grates while the grill is still warm.",
      "Empty cold ashes into a bag and dispose in the trash.",
      "Close the grill lid.",
    ],
  },

  houseRules: [
    "No smoking inside.",
    "Quiet hours: 10:00 PM – 8:00 AM.",
    "Pets only with prior approval.",
    "No fireworks on the property.",
    "Do not feed wildlife.",
  ],

  climateControl: {
    intro:
      "This home has four thermostats in different spots. Each one controls a specific area. Use the right thermostat for the room you're in — never run heat and AC against each other.",
    importantRule: "Never run heating and cooling at the same time",
    importantRuleDetails: [
      "Do not set a heating thermostat very high while air conditioning is running in another zone.",
      "If the house feels off, check that you are using the correct thermostat for that floor.",
      "When in doubt, set unused thermostats so they are not actively calling for heat or cool air.",
    ],
    nestSteps: [
      { text: "Walk up to the Nest and tap the screen to wake it up." },
      { text: "Turn the outer ring clockwise to raise the temperature." },
      { text: "Turn the outer ring counter-clockwise to lower the temperature." },
      { text: "For cooling, make sure the blue snowflake icon is showing. For heat, look for the orange flame." },
    ],
    thermostats: [
      {
        id: "main-floor-ac",
        shortName: "Kitchen Area Nest",
        location: "Near the kitchen table",
        locationDetail:
          "At the top of the stairs leading down to the basement — on the main (middle) floor.",
        mode: "cooling",
        controls: "Main Floor",
        controlsDetail: [
          "Air conditioning for the main floor only.",
          "Use this in summer when the kitchen and living areas feel warm.",
        ],
        type: "nest",
      },
      {
        id: "upper-heat",
        shortName: "Stair Landing Nest",
        location: "Base of the stairs to the third floor",
        locationDetail:
          "On the landing where you go up to the second and third floors.",
        mode: "heating",
        controls: "Floors 2 & 3",
        controlsDetail: [
          "Heating for the second floor.",
          "Heating for the third floor.",
        ],
        type: "nest",
      },
      {
        id: "third-floor-ac",
        shortName: "Third Floor Nest",
        location: "On the third floor",
        locationDetail: "Look for the Nest on the wall on the third floor.",
        mode: "cooling",
        controls: "Third Floor",
        controlsDetail: ["Air conditioning for the third floor only."],
        type: "nest",
      },
      {
        id: "basement-heat",
        shortName: "Basement Thermostat",
        location: "In the basement",
        locationDetail:
          "Older dial-style thermostat (not a Nest) on the basement wall.",
        mode: "heating",
        controls: "Basement",
        controlsDetail: ["Heat for the basement only."],
        type: "standard",
      },
    ],
    seasonGuides: [
      {
        season: "Summer",
        tips: [
          "Use the Kitchen Area Nest to cool the main floor.",
          "Use the Third Floor Nest to cool the third floor.",
          "Keep heating thermostats at normal levels so they are not calling for heat while AC is running.",
        ],
      },
      {
        season: "Winter",
        tips: [
          "Use the Stair Landing Nest for heat on the second and third floors.",
          "Use the Basement Thermostat for basement heat.",
          "Do not run cooling thermostats in a way that fights the heating system.",
        ],
      },
    ],
    troubleshooting: [
      {
        question: "My upstairs is too warm.",
        answer:
          "In summer, use the Third Floor Nest to cool the third floor. Make sure the Stair Landing Nest is not set high enough to call for heat. Try closing blinds on sunny windows.",
      },
      {
        question: "My downstairs is too cold.",
        answer:
          "In winter, raise the heat on the Stair Landing Nest (for floors 2 and 3) or the Basement Thermostat if you are in the basement. In summer, use the Kitchen Area Nest for main-floor cooling — not the heating thermostats.",
      },
      {
        question: "I changed a thermostat and nothing happened.",
        answer:
          "You may be adjusting the wrong thermostat for that room. Check the cards above — each thermostat only controls its listed area. Wait 5–10 minutes; changes are not instant. Tap the Nest screen first if it looks asleep.",
      },
      {
        question: "Which thermostat controls this room?",
        answer:
          "Main floor rooms (kitchen, living room, dining): Kitchen Area Nest for cooling. Second and third floor bedrooms: Stair Landing Nest for heat, Third Floor Nest for third-floor cooling. Basement: Basement Thermostat only.",
      },
    ],
  },

  systemCategories: [
    {
      id: "climate",
      title: "Climate Control",
      description: "Control heating and cooling throughout the home.",
      icon: "thermometer",
      accent: "gold",
      href: "/systems/climate",
      includes: [
        "Heating",
        "Air Conditioning",
        "Nest Thermostats",
        "Thermostat Locations",
        "Temperature Troubleshooting",
      ],
    },
    {
      id: "shades",
      title: "Window Shades & Blinds",
      description:
        "Learn how to open, close, and adjust window shades and blinds throughout the property.",
      icon: "blinds",
      accent: "evergreen",
      href: "/systems/shades",
      includes: [
        "Automated Shades",
        "Remote Controls",
        "Manual Operation",
        "Room-by-Room Instructions",
        "Troubleshooting",
      ],
    },
    {
      id: "lighting",
      title: "Lighting",
      description:
        "Control lights with wall switches or optional voice commands — simple and flexible.",
      icon: "lightbulb",
      accent: "amber",
      href: "/systems/lighting",
      includes: [
        "Wall Switches",
        "Smart Lighting",
        "Voice Commands",
        "Lighting Zones",
        "Lighting Tips",
        "Troubleshooting",
      ],
    },
    {
      id: "entertainment",
      title: "Entertainment",
      description:
        "Learn how to use televisions and entertainment systems throughout the property.",
      icon: "tv",
      accent: "slate",
      href: "/systems/entertainment",
      includes: [
        "Smart TVs",
        "Streaming Services",
        "Home Theater System",
        "TV Remotes",
        "Input Selection",
        "Troubleshooting",
      ],
    },
    {
      id: "speakers",
      title: "Speakers & Music",
      description:
        "Play music throughout the property with Sonos and AirPlay.",
      icon: "speaker",
      accent: "teal",
      href: "/systems/speakers",
      includes: [
        "Sonos App",
        "Apple AirPlay",
        "Outdoor Zones",
        "Indoor Zones",
        "Speaker Grouping",
        "Troubleshooting",
      ],
    },
  ],

  shadesGuide: {
    overview:
      "Most shades and blinds run on a daily schedule — opening and closing on their own for light, lake views, privacy, and comfort.",
    automaticNote:
      "In most cases, you do not need to adjust anything. The shades take care of themselves.",
    overrideNote:
      "If you want a different setting, you can temporarily change any shade using the remotes or voice commands below.",
    remoteDevice: {
      path: "/images/devices/lutron-4-group-shade-remote-white.jpg",
      alt: "White Lutron 4-Group RF shade remote with Open, Close, and numbered shade group buttons",
      caption: "Lutron shade remote used throughout the property.",
    },
    voiceDevice: {
      path: "/images/devices/google-nest-hub-2nd-gen-chalk.jpg",
      alt: "Google Nest Hub smart display with Google Assistant on a white Chalk finish",
      caption:
        "Use any Google Nest Hub in the home by saying \"Hey Google\" followed by your command.",
    },
    voiceCommandExamples: [
      "Hey Google, open the kitchen blind",
      "Hey Google, close the kitchen blind",
      "Hey Google, open the couch blind",
      "Hey Google, close the couch blind",
    ],
    areas: [
      {
        id: "living-room",
        title: "Living Room Shades",
        location: "Living room, on both sides of the television",
        controlMethod: "White remote in the living room",
        controlType: "remote",
        remoteButtons: [
          { label: "1", description: "Left shade (left of the TV)" },
          { label: "2", description: "Right shade (right of the TV)" },
          { label: "ALL", description: "Both shades together" },
        ],
        steps: [
          { text: "Find the white remote in the living room." },
          { text: "Press 1 for the left shade, 2 for the right shade, or ALL for both." },
          { text: "Use the open and close buttons on the remote to raise or lower the shade(s) you selected." },
        ],
        photoPath: "/images/interior/living-room/living-room-lake-view.png",
        photoAlt: "Living room with shades on both sides of the television",
      },
      {
        id: "primary-bedroom",
        title: "Primary Bedroom Shades",
        location: "Primary bedroom",
        controlMethod: "White remote in the primary bedroom",
        controlType: "remote",
        remoteButtons: [
          { label: "1", description: "Smaller window" },
          { label: "2", description: "Larger window" },
        ],
        steps: [
          { text: "Find the white remote in the primary bedroom." },
          { text: "Press 1 for the smaller window or 2 for the larger window." },
          { text: "Use the open and close buttons to raise or lower the shade you selected." },
        ],
        photoPath: "/images/interior/bedrooms/guest-bedroom-coastal-art.png",
        photoAlt: "Primary bedroom with coastal artwork and red leather bench",
      },
      {
        id: "kitchen-blind",
        title: "Kitchen Blind",
        location: "Kitchen",
        controlMethod: "Voice — say \"Hey Google\" first",
        controlType: "voice",
        defaultOperation:
          "Adjusts on its own throughout the day based on sunlight. You only need to speak up if you want to change it.",
        voiceCommands: [
          "Hey Google, open the kitchen blind",
          "Hey Google, close the kitchen blind",
        ],
        steps: [
          { text: "Say \"Hey Google.\"" },
          { text: "Say \"Open the kitchen blind\" or \"Close the kitchen blind.\"" },
        ],
        photoPath: "/images/interior/kitchen/kitchen-granite-stainless.png",
        photoAlt: "Kitchen",
      },
      {
        id: "couch-blind",
        title: "Couch Blind",
        location: "Behind the living room couch",
        controlMethod: "Voice — say \"Hey Google\" first",
        controlType: "voice",
        defaultOperation:
          "Adjusts on its own throughout the day based on sunlight. You only need to speak up if you want to change it.",
        voiceCommands: [
          "Hey Google, open the couch blind",
          "Hey Google, close the couch blind",
        ],
        steps: [
          { text: "Say \"Hey Google.\"" },
          { text: "Say \"Open the couch blind\" or \"Close the couch blind.\"" },
        ],
        photoPath: "/images/interior/living-room/great-room-open-concept.png",
        photoAlt: "Living room behind the couch",
      },
    ],
    troubleshooting: [
      {
        question: "The blinds moved by themselves.",
        answer:
          "That is normal. Many shades and blinds adjust on their own throughout the day.",
      },
      {
        question: "The shades are not where I left them.",
        answer:
          "They may have returned to their usual position on the daily schedule.",
      },
      {
        question: "Can I still control them manually?",
        answer:
          "Yes. Use the white remote in that room, or say the voice commands listed above.",
      },
    ],
  },

  lightingGuide: {
    overview:
      "Most lighting throughout the home can be operated normally using wall switches.",
    smartControlNote:
      "For guests who want additional control, many lights throughout the property are smart lights that can also be controlled using Google Nest displays and voice commands using \"Hey Google.\" Guests do not need to use voice controls to operate the lights — wall switches will work for most situations.",
    reassuringNote:
      "For most guests, using the wall switches is the easiest option. Smart controls are available if you'd like additional control over brightness, color, or ambiance.",
    wallSwitches: {
      description:
        "Most lights throughout the property can be controlled using traditional wall switches.",
      examples: [
        "Bedroom lights",
        "Hallway lights",
        "Bathroom lights",
        "General room lighting",
      ],
    },
    smartLighting: {
      description:
        "Many lights throughout the property are connected to the smart home system and can be adjusted using Google Home voice commands.",
      capabilities: [
        "Turn lights on",
        "Turn lights off",
        "Adjust brightness",
        "Change color temperature",
        "Set warm white lighting",
        "Set cool white lighting",
        "Select custom colors (where supported)",
      ],
    },
    voiceDevice: {
      path: "/images/devices/google-nest-hub-2nd-gen-chalk.jpg",
      alt: "Google Nest Hub smart display with Google Assistant on a white Chalk finish",
      caption:
        "Use any Google Nest Hub in the home by saying \"Hey Google\" followed by your command.",
    },
    voiceCommandExamples: [
      "Hey Google, turn on the kitchen lights.",
      "Hey Google, turn off the kitchen lights.",
      "Hey Google, set the kitchen lights to full brightness.",
      "Hey Google, dim the kitchen lights to 25 percent.",
      "Hey Google, set the kitchen lights to warm white.",
      "Hey Google, set the kitchen lights to cool white.",
      "Hey Google, turn on the deck lights.",
      "Hey Google, turn off the deck lights.",
    ],
    zones: [
      {
        id: "kitchen-lights",
        title: "Kitchen Lights",
        capabilities: [
          "On / Off",
          "Brightness control",
          "Color temperature control",
        ],
        photoPath: "/images/interior/kitchen/kitchen-granite-stainless.png",
        photoAlt: "Kitchen with granite countertops and warm overhead lighting",
      },
      {
        id: "lamps",
        title: "Lamps",
        capabilities: [
          "On / Off",
          "Brightness control",
          "Color control (where available)",
        ],
        photoPath: "/images/interior/living-room/living-room-lake-view.png",
        photoAlt: "Living room with lamps and warm evening lighting",
      },
      {
        id: "deck-lights",
        title: "Deck Lights",
        capabilities: [
          "On / Off",
          "Brightness control",
          "Ambiance lighting",
        ],
        photoPath: "/images/exterior/deck/deck-fire-pit-lounge.png",
        photoAlt: "Deck lounge with ambient lighting and lake views",
      },
    ],
    tips: [
      {
        title: "Morning",
        description: "Use bright white lighting.",
      },
      {
        title: "Evening",
        description: "Use warm white lighting for a relaxing atmosphere.",
      },
      {
        title: "Outdoor Entertaining",
        description: "Use deck lighting for ambiance and lake views.",
      },
    ],
    troubleshooting: [
      {
        question: "The lights won't respond to my voice.",
        answer:
          "Try speaking clearly and using the room name exactly as shown in the examples.",
      },
      {
        question: "Do I have to use voice commands?",
        answer:
          "No. Most lights can be controlled normally using wall switches.",
      },
      {
        question: "What color should I use?",
        answer:
          "Warm white is recommended for most evening use and creates a comfortable lake house atmosphere.",
      },
    ],
  },

  entertainmentGuide: {
    intro:
      "Each TV uses a simple remote. Sign in with your own streaming apps — nothing is pre-logged in for privacy.",
    sections: [
      {
        id: "tvs",
        title: "Smart TVs",
        steps: [
          { text: "Great room TV: above the fireplace — remote on the coffee table." },
          { text: "Bedroom TVs: remote on the dresser or mounted on the wall." },
          { text: "Press Power once and wait a few seconds for the screen to wake up." },
        ],
      },
      {
        id: "streaming",
        title: "Streaming services",
        steps: [
          { text: "Press Home on the remote to open the app menu." },
          { text: "Select Netflix, Hulu, Disney+, YouTube, or other apps." },
          { text: "Sign in with your own account — sign out before you leave." },
        ],
      },
      {
        id: "remotes",
        title: "TV remotes",
        steps: [
          { text: "Use the black remote — not your phone — for power and volume." },
          { text: "Volume buttons are on the side or bottom of the remote." },
          { text: "If the remote stops working, check for batteries under the sliding cover." },
        ],
      },
      {
        id: "input",
        title: "Input selection",
        steps: [
          { text: "No picture? Press Input or Source on the remote." },
          { text: "Choose HDMI 1 or Streaming until you see the home screen." },
          { text: "Wait 5 seconds after changing input." },
        ],
      },
      {
        id: "theater",
        title: "Home theater",
        steps: [
          {
            text: "The living room is equipped with a home theater surround sound system, fully volume controlled by the same TV remote.",
          },
          {
            text: "Bedrooms with TVs use soundbars — volume is also controlled by the bedroom TV remote.",
          },
          { text: "Use the TV remote volume buttons for all sound — no separate speaker remote needed." },
        ],
      },
    ],
    troubleshooting: [
      {
        question: "No picture on the TV.",
        answer:
          "Press Power, then Input until you see the streaming home screen. Check that the TV plug is firmly in the wall.",
      },
      {
        question: "No sound.",
        answer:
          "Use the TV remote volume buttons. Make sure the TV is not muted. If no sound is playing, the speakers may still be connected to the Sonos music function — simply raise the volume using the remote and the TV sound should automatically switch over.",
      },
      {
        question: "An app asks me to sign in.",
        answer:
          "Use your own streaming account. Sign out when you leave.",
      },
    ],
  },

  speakersGuide: {
    overview:
      "The property is equipped with Sonos speakers throughout the home and outdoor spaces.",
    groupingNote:
      "Guests can enjoy music in individual areas or group multiple areas together to play music throughout the property.",
    wifiRequiredNote:
      "Before using the Sonos system, make sure your phone is connected to the house WiFi network.",
    controlMethods: [
      {
        id: "sonos-app",
        title: "Sonos App",
        description:
          "Guests may download and use the Sonos app on their smartphone.",
        features: [
          "Music services",
          "Volume",
          "Speaker grouping",
          "Room selection",
          "Playback controls",
        ],
      },
      {
        id: "airplay",
        title: "Apple AirPlay",
        description:
          "iPhone and Apple device users can use AirPlay to send music directly to Sonos speakers throughout the property.",
        features: [
          "Select a single room",
          "Select multiple rooms",
          "Group speakers together",
          "Play music throughout the property",
        ],
        steps: [
          { text: "Connect your device to the house WiFi." },
          {
            text: "Open Apple Music, Spotify, YouTube Music, or another audio app.",
          },
          { text: "Tap the AirPlay icon." },
          { text: "Select the room or rooms you would like to play music in." },
          { text: "Adjust volume as desired." },
        ],
      },
    ],
    outdoorZones: [
      {
        id: "deck",
        title: "Deck",
        location: "Upper deck overlooking the lake",
        photoPath: "/images/exterior/deck/upper-deck-fire-pit-lake-view.png",
        photoAlt: "Upper deck overlooking the lake",
      },
      {
        id: "patio",
        title: "Patio",
        location: "Lower patio by the water",
        photoPath: "/images/exterior/patio/lower-patio-lounge-lake-view.jpg",
        photoAlt: "Lower patio lounge by the water",
      },
      {
        id: "gazebo",
        title: "Gazebo",
        location: "Gazebo in the yard",
        photoPath: "/images/exterior/backyard/gazebo-lawn-lake-view.jpg",
        photoAlt: "Gazebo in the yard with lake view",
      },
    ],
    indoorZones: [
      {
        id: "living-room",
        title: "Living Room",
        location: "Main living room entertainment area",
        photoPath: "/images/interior/living-room/living-room-lake-view.png",
        photoAlt: "Main living room entertainment area",
      },
      {
        id: "bedrooms",
        title: "Additional Bedrooms",
        location: "Bedrooms equipped with Sonos soundbars or speakers",
        photoPath: "/images/interior/bedrooms/guest-bedroom-coastal-art.png",
        photoAlt: "Bedroom with Sonos soundbar",
      },
    ],
    groupingExamples: [
      "Deck + Patio",
      "Deck + Patio + Gazebo",
      "Living Room + Deck",
      "Entire Property",
    ],
    courtesy: {
      title: "Lake Community Etiquette",
      intro: "Please be respectful of the peaceful lake community.",
      guidelines: [
        "Turn music off before leaving the property.",
        "Turn music off when returning indoors.",
        "Keep outdoor music at reasonable levels.",
        "Be especially mindful during early mornings and evenings.",
      ],
      closing:
        "The goal is to preserve the relaxing atmosphere enjoyed by everyone on the lake.",
    },
    troubleshooting: [
      {
        question: "I don't see the speakers.",
        answer: "Confirm your phone is connected to the house WiFi.",
      },
      {
        question: "Can I play music outside?",
        answer:
          "Yes. Outdoor speaker zones include Deck, Patio, and Gazebo.",
      },
      {
        question: "Can I play music everywhere at once?",
        answer: "Yes. Multiple Sonos zones can be grouped together.",
      },
      {
        question: "Do I need the Sonos app?",
        answer: "No. iPhone users can also use Apple AirPlay.",
      },
    ],
  },

  topics: [
    // ── SYSTEMS (misc — not on main systems hub) ─────────────────────────
    {
      id: "heated-floors",
      title: "Heated Bathroom Floors",
      summary: "Warm tile in bathrooms",
      category: "systems",
      href: "/systems/heated-floors",
      steps: [
        // HOST: Confirm if property has heated floors and update
        { text: "Look for the timer switch on the bathroom wall (usually near the door)." },
        { text: "Flip up for ON — the floor warms in about 15–20 minutes." },
        { text: "Flip down for OFF when you leave or before bed." },
      ],
      troubleshooting: [
        "If floors don't warm, check that the switch is fully up.",
        "Heated floors turn off automatically on some timers — press again if needed.",
      ],
    },
    {
      id: "smart-lock",
      title: "Smart Lock",
      summary: "Front door keypad",
      category: "systems",
      href: "/systems/smart-lock",
      steps: [
        { text: "Your door code is in your Airbnb confirmation message." },
        { text: "Enter the code on the keypad, then press the checkmark button." },
        { text: "The lock will click — turn the handle to open." },
        { text: "The door auto-locks about 30 seconds after it closes." },
      ],
      troubleshooting: [
        "If the code doesn't work, touch the keypad to wake it first.",
        "Try entering the code slowly.",
        "Call or text your hosts if you're still locked out.",
      ],
    },
    {
      id: "smart-home",
      title: "Smart Home Controls",
      summary: "Cameras and voice assistant",
      category: "systems",
      href: "/systems/smart-home",
      steps: [
        { text: "Google Home speaker is in the kitchen — say 'Hey Google' for weather or timers." },
        { text: "Outdoor cameras cover the driveway only — not inside the home." },
        { text: "For door codes, see the Smart Lock page." },
      ],
      troubleshooting: [
        "If Google Home doesn't respond, check the mic mute switch on the back.",
      ],
    },

    // ── ENTERTAINMENT ────────────────────────────────────────────────────
    {
      id: "tv",
      title: "TVs",
      summary: "Watch streaming apps",
      category: "entertainment",
      href: "/entertainment/tv",
      photoPath: "/images/interior/living-room/living-room-lake-view.png",
      photoAlt: "Living room TV above the fireplace",
      steps: [
        { text: "Use the black remote on the coffee table." },
        { text: "Press the Power button once — wait a few seconds for the TV to turn on." },
        { text: "Press Home to see Netflix, Hulu, Disney+, and other apps." },
        { text: "Sign in with your own streaming accounts." },
        { text: "Bedroom TVs: remote is on the dresser or mounted on the wall." },
      ],
      troubleshooting: [
        "No picture? Press Input or Source until you see the streaming screen.",
        "No sound? Use volume buttons on the remote, not the phone.",
        "Unplug the TV from the wall for 10 seconds if it freezes, then plug back in.",
      ],
    },
    {
      id: "speakers",
      title: "Speaker System",
      summary: "Play music indoors and on the deck",
      category: "entertainment",
      href: "/entertainment/speakers",
      steps: [
        { text: "Speakers are built into the ceiling on the upper deck and in the great room." },
        { text: "Use AirPlay from your iPhone — see Speakers & Music in the guide." },
        { text: "Keep volume reasonable after 10 PM (quiet hours)." },
      ],
      troubleshooting: [
        "If no sound, check that your phone volume is up and Bluetooth/AirPlay is connected.",
        "Try turning speakers off and on at the wall switch if present.",
      ],
    },
    {
      id: "airplay",
      title: "AirPlay (iPhone / iPad)",
      summary: "Stream music to speakers or TV",
      category: "entertainment",
      href: "/entertainment/airplay",
      steps: [
        { text: "Connect your iPhone to the guest Wi-Fi first (see home screen)." },
        { text: "Open Music, Spotify, or any app playing audio." },
        { text: "Tap the AirPlay icon (rectangle with triangle) — top of the screen in most apps." },
        { text: "Select 'Newton Lake Speakers' or the room name shown." },
        { text: "Audio should play through the house speakers within a few seconds." },
      ],
      troubleshooting: [
        "Don't see the speaker? Confirm you're on the guest Wi-Fi network.",
        "Turn Wi-Fi off and on on your phone, then try again.",
        "Make sure your phone isn't on silent mode.",
      ],
    },
    {
      id: "google-home",
      title: "Google Home",
      summary: "Voice assistant in the kitchen",
      category: "entertainment",
      href: "/entertainment/google-home",
      steps: [
        { text: "Say 'Hey Google' followed by your request." },
        { text: "Try: 'Hey Google, what's the weather?'" },
        { text: "Try: 'Hey Google, set a timer for 10 minutes.'" },
        { text: "Try: 'Hey Google, play jazz music.'" },
      ],
      troubleshooting: [
        "If it doesn't respond, check the mute switch on the back of the device.",
        "Unplug for 10 seconds and plug back in if frozen.",
      ],
    },

    // ── FIRE ─────────────────────────────────────────────────────────────
    {
      id: "indoor-fireplace",
      title: "Indoor Gas Fireplace",
      summary: "Great room fireplace",
      category: "fire",
      href: "/fire/indoor",
      photoPath: "/images/interior/living-room/living-room-lake-view.png",
      photoAlt: "Gas fireplace in the great room",
      steps: [
        {
          text: "The fireplace remote is on the coffee table — a small gray remote with a screen.",
        },
        { text: "Press the ON button. Never press SET." },
        { text: "Turn OFF before leaving the house or going to bed." },
      ],
      footerSectionKicker: "Please note",
      footerSectionTitle: "Important Notes",
      troubleshooting: [
        "Do not leave running for more than 2 hours at a time.",
        "Do not leave unattended for long periods.",
      ],
    },
    {
      id: "outdoor-fire-table",
      title: "Outdoor Fire Tables",
      summary: "Deck and patio fire pits",
      category: "fire",
      href: "/fire/outdoor-table",
      photoPath: "/images/exterior/deck/upper-deck-fire-pit-lake-view.png",
      photoAlt: "Upper deck fire table",
      steps: [
        { text: "Upper deck: fire table is in the center of the seating area." },
        { text: "Lower patio: second fire table under the covered patio." },
        {
          text: "Press the knob in, turn it to Medium, then press and hold the Ignite button for 3–5 seconds until flames appear.",
        },
        { text: "Adjust flame with the same knob." },
        { text: "Turn fully OFF when finished — especially before going inside." },
      ],
      troubleshooting: [
        "If it won't ignite, check the propane tank valve is open (under the table).",
        "Wind may blow out flames — use the wind guard glass if provided.",
        "Never cover a hot fire table.",
      ],
    },
    {
      id: "charcoal-grill",
      title: "Outdoor Charcoal Grill",
      summary: "Lower patio charcoal grill",
      category: "fire",
      href: "/fire/charcoal-grill",
      photoPath: "/images/exterior/patio/lower-patio-lounge-lake-view.jpg",
      photoAlt: "Lower covered patio with charcoal grill",
      steps: [
        {
          text: "The charcoal grill is on the lower covered patio, near the seating area.",
        },
        {
          text: "Open the lid. If the ash tray is more than half full, empty cold ashes first.",
        },
        {
          text: "Add charcoal and light with a chimney starter or approved lighter fluid — never gasoline or other accelerants.",
        },
        {
          text: "Wait until coals are gray and ashed over before cooking (about 20–30 minutes).",
        },
        { text: "Never leave the grill unattended while coals are hot." },
        {
          text: "When finished, close the lid and vents. Let coals cool completely before disposing of ashes.",
        },
      ],
      footerSectionKicker: "Good to know",
      footerSectionTitle: "Tips",
      troubleshooting: [
        "Spread coals for lower heat; pile them on one side for direct searing.",
        "Brush the grates before and after cooking.",
        "Dispose of ashes only when fully cool — never in a plastic bin or while still warm.",
        "See Checkout for cleaning before you leave.",
      ],
    },

    // ── OUTDOOR ──────────────────────────────────────────────────────────
    {
      id: "deck",
      title: "Upper Deck",
      summary: "Lounge, fire table, lake views",
      category: "outdoor",
      href: "/outdoor/deck",
      photoPath: "/images/exterior/deck/upper-deck-fire-pit-lake-view.png",
      photoAlt: "Upper deck with seating and lake view",
      steps: [
        { text: "Access from the great room sliding doors or upstairs hallway." },
        { text: "Cushions are weather-resistant — clip covers on if rain is forecast." },
        { text: "Fire table instructions are on the Fire Features page." },
      ],
    },
    {
      id: "patio",
      title: "Lower Patio",
      summary: "Covered seating under the deck",
      category: "outdoor",
      href: "/outdoor/patio",
      photoPath: "/images/exterior/patio/lower-patio-lounge-lake-view.jpg",
      photoAlt: "Lower covered patio",
      steps: [
        { text: "Steps down from the back of the house, below the upper deck." },
        { text: "Charcoal grill is here — see Fire Features and Checkout for use and cleaning." },
        { text: "String lights turn on automatically at dusk." },
      ],
    },
    {
      id: "gazebo",
      title: "Gazebo",
      summary: "Shaded spot on the back lawn",
      category: "outdoor",
      href: "/outdoor/gazebo",
      photoPath: "/images/exterior/backyard/gazebo-lawn-lake-view.jpg",
      photoAlt: "White gazebo on the lawn",
      steps: [
        { text: "Walk across the lawn from the lower patio." },
        { text: "Furniture is fixed — please don't move the structure." },
      ],
    },
    {
      id: "dock",
      title: "Private Dock",
      summary: "Seating, swim ladder, and lake access",
      category: "outdoor",
      href: "/outdoor/dock",
      photoPath: "/images/exterior/dock/dock-seating-swim-ladder.jpg",
      photoAlt: "Dock with seating and swim ladder",
      steps: [
        { text: "Follow the path from the lawn down to the water." },
        { text: "Swim ladder is on the dock — swim at your own risk." },
        {
          text: "The boat and boat lift are off limits for guests — please do not use or operate them.",
        },
      ],
      troubleshooting: [
        "Life vests are in the boathouse or closet — ask your hosts.",
      ],
    },
    {
      id: "kayaks",
      title: "Kayaks",
      summary: "Two kayaks on the lawn",
      category: "outdoor",
      href: "/outdoor/kayaks",
      photoPath: "/images/exterior/patio/covered-dining-kayaks.jpg",
      photoAlt: "Kayaks stored near the patio",
      steps: [
        { text: "Two kayaks are stored on the grass near the covered dining patio." },
        { text: "Life vests are required — find them before launching." },
        { text: "Launch from the dock — carry kayaks carefully." },
        { text: "Return kayaks to the same spot when finished." },
      ],
    },
    {
      id: "fishing",
      title: "Fishing",
      summary: "Newton Lake fishing basics",
      category: "outdoor",
      href: "/outdoor/fishing",
      steps: [
        { text: "Pennsylvania fishing license required for anglers 16+ — purchase online at fishandboat.com or at Lake Mart on PA-247." },
        { text: "Fish from the dock or kayaks — no casting from the deck over neighbors." },
        { text: "Common catches in the area: largemouth bass, pickerel, sunfish, and trout in nearby streams." },
      ],
    },
    {
      id: "lake",
      title: "Lake Information",
      summary: "Safety and water conditions",
      category: "outdoor",
      href: "/outdoor/lake",
      steps: [
        { text: "No lifeguard — swim at your own risk." },
        { text: "Children must be supervised at all times near the water." },
        { text: "No glass containers on the dock." },
        { text: "Quiet hours apply to the waterfront: 10 PM – 8 AM." },
      ],
    },
  ],

  explore: [
    {
      id: "franks-place",
      name: "Frank's Place",
      category: "Restaurants",
      address: "57 Jefferson St, Simpson, PA 18407",
      photoPath: "/images/guides/franks-place.jpg",
      photoAlt: "Frank's Place restaurant in Simpson",
      description:
        "57 Jefferson St, Simpson — best restaurant in the area (~8 miles from the house). Family-owned since 1968 with American and Italian comfort food and a full bar. Menu is online.",
      distance: "~8 mi",
      highlight: "Delivers on orders over $45 — $8 delivery fee; call ahead on busy nights",
    },
    {
      id: "crystal-lake-hotel",
      name: "Oliveri's Crystal Lake Hotel",
      category: "Restaurants",
      address: "339 Crystal Lake Rd, Carbondale, PA 18407",
      photoPath: "/images/guides/crystal-lake-hotel.jpg",
      photoAlt: "Oliveri's Crystal Lake Hotel on Crystal Lake",
      description:
        "339 Crystal Lake Rd, Carbondale — great food with seating overlooking Crystal Lake (~2 miles from the house). Oliveri's has served Italian fare from family recipes here since 1946.",
      distance: "~2 mi",
      highlight: "Call for reservations — indoor dining late fall through spring; Lakeside Café May through October",
    },
    {
      id: "crystal-pines",
      name: "Crystal Pines Restaurant",
      category: "Restaurants",
      address: "1100 Crystal Lake Rd, Greenfield Township, PA 18407",
      description:
        "1100 Crystal Lake Rd, Greenfield Township — good homemade Italian restaurant (~3 miles from the house). Casual dining in a lakeside setting.",
      distance: "~3 mi",
      highlight: "No delivery — pickup available; call ahead for hours",
    },
    {
      id: "stonehouse",
      name: "The Stonehouse",
      category: "Restaurants",
      address: "473 Fallbrook Rd, Carbondale, PA 18407",
      photoPath: "/images/guides/stonehouse.jpg",
      photoAlt: "The Stonehouse bar and restaurant in Carbondale",
      description:
        "473 Fallbrook Rd, Carbondale — historic stone bar and restaurant with scratch-made pub fare, pan-fried Sicilian pizza, and live music several nights a week.",
      distance: "12 min",
      highlight: "Open daily 11 AM–2 AM — dog-friendly patio and weekday live bands",
    },
    {
      id: "finch-hill-restaurant",
      name: "Finch Hill Restaurant & Dairy Bar",
      category: "Restaurants",
      address: "393 PA-247, Greenfield Township, PA 18407",
      photoPath: "/images/guides/finch-hill-restaurant.jpg",
      photoAlt: "French toast at Finch Hill Restaurant and Dairy Bar",
      description:
        "393 PA-247, Greenfield Township — small diner (~1.5 miles from the lake) with simple breakfast and lunch offerings.",
      distance: "~1.5 mi",
      highlight: "Good breakfast — soft-serve ice cream bar open in summer",
    },
    {
      id: "orazzis-blue-ridge-inn",
      name: "Orazzi's Blue Ridge Inn",
      category: "Restaurants",
      address: "485 Route 106, Greenfield Township, PA 18407",
      photoPath: "/images/guides/orazzis-blue-ridge-inn.jpg",
      photoAlt: "Plated entrée at Orazzi's Blue Ridge Inn",
      description:
        "485 Route 106, Greenfield Township — casual dining and full bar right in town. Pizza, pierogies, and hearty plates.",
      distance: "5 min",
      highlight: "Closest sit-down dinner to the house",
    },
    {
      id: "china-wok",
      name: "China Wok",
      category: "Restaurants",
      address: "620 S Main St, Forest City, PA 18421",
      description:
        "620 S Main St, Forest City — Chinese takeout and dine-in (~8 miles from the lake).",
      distance: "~8 mi",
      highlight: "Forest City — easy stop on the way back from Elk Mountain",
    },
    {
      id: "foliage",
      name: "Foliage",
      category: "Restaurants",
      address: "43 7th Ave, Carbondale, PA 18407",
      description:
        "43 7th Ave, Carbondale — Chinese restaurant in downtown Carbondale (~8 miles from the lake).",
      distance: "~8 mi",
      highlight: "Carbondale — good option for takeout near Weis Markets",
    },
    {
      id: "lake-mart",
      name: "Lake Mart",
      category: "Convenience",
      address: "455 PA-247, Greenfield Township, PA 18407",
      description:
        "455 PA-247, Greenfield Township — closest gas station (~1 mile from the lake). Sells cold beer and spritzers with a short-order menu for sandwiches, pizza, hamburgers, and breakfast.",
      distance: "~1 mi",
      highlight: "Open daily 6 AM – 10 PM — also sells fishing licenses",
    },
    {
      id: "weis-carbondale",
      name: "Weis Markets",
      category: "Grocery",
      address: "97 Brooklyn St, Carbondale, PA 18407",
      description:
        "97 Brooklyn St, Carbondale — closest general supermarket (~8 miles from the lake) in Carbondale.",
      distance: "~8 mi",
      highlight: "Full grocery, bakery, and pharmacy for a bigger shop",
    },
    {
      id: "wegmans-dickson-city",
      name: "Wegmans",
      category: "Grocery",
      address: "1315 Cold Spring Rd, Dickson City, PA 18508",
      description:
        "1315 Cold Spring Rd, Dickson City — best quality offerings for fresh produce, bakery, dairy, and meats (~12 miles from the lake).",
      distance: "~12 mi",
      highlight: "Open daily 6 AM – midnight — great for stocking up or grab-and-go meals",
    },
    {
      id: "millers-orchards",
      name: "Miller's Orchards Farm Market",
      category: "Grocery",
      address: "1421 Fairview Rd, Scott Township, PA 18411",
      description:
        "1421 Fairview Rd, Scott Township — best homemade fresh pies (Wednesday through Sunday). Fresh-squeezed cider in fall, plus pumpkins, fruits, and vegetables in season (~8 miles from the lake).",
      distance: "~8 mi",
      highlight: "Seasonal farm market — pies Wed–Sun",
    },
    {
      id: "manning-farm-dairy",
      name: "Manning Farm Dairy",
      category: "Grocery",
      address: "131 Manning Rd, Dalton, PA 18414",
      description:
        "131 Manning Rd, Dalton — ice cream made fresh at the farm. A local favorite for a sweet stop after hiking or golf.",
      distance: "~15 min",
      highlight: "Farm-fresh ice cream — seasonal hours; check before you go",
    },
    {
      id: "elk-mountain",
      name: "Elk Mountain Ski Resort",
      category: "Activities",
      address: "344 Elk Mountain Rd, Union Dale, PA 18470",
      description:
        "344 Elk Mountain Rd, Union Dale — best ski resort in PA (~8 miles from the lake). Highest lift-served skiing in eastern PA with 27 trails and 100% snowmaking.",
      distance: "~8 mi",
      highlight: "In summer, ride the lift for sightseeing — terrain parks in winter",
    },
    {
      id: "lakeland-orchard",
      name: "Lakeland Orchard & Cidery",
      category: "Activities",
      address: "1649 Lakeland Drive, Scott Township, PA 18433",
      description:
        "1649 Lakeland Drive, Scott Township — family-owned apple orchard and cidery (~5 miles from the house). Over 30 kinds of apples across 20,000 trees with U-pick apples, axe throwing, live music, hard and sweet cider, and other family activities.",
      distance: "~5 mi",
      highlight: "Open August–November for fall activities; December for Christmas trees — U-pick sunflowers, zinnias, and flowering kale in season",
    },
    {
      id: "reapers-revenge",
      name: "Reaper's Revenge",
      category: "Activities",
      address: "460 Green Grove Rd, Olyphant, PA 18447",
      description:
        "460 Green Grove Rd, Olyphant — scary entertainment during the greater Halloween season. Haunted houses, haunted hayrides, clowns, mazes, and zombie attractions.",
      distance: "~20 min",
      highlight: "Open seasonally mid-September through Halloween — one of the best haunted events in PA",
    },
    {
      id: "merli-sarnoski-park",
      name: "Merli-Sarnoski Park",
      category: "Activities",
      address: "569 Lake Ariel Hwy, Hawley, PA 18428",
      photoPath: "/images/guides/merli-sarnoski-park.jpg",
      photoAlt: "Fall foliage at Merli-Sarnoski Park",
      description:
        "Fell Township — 840-acre county park with a 35-acre lake, sandy beach, hiking, mountain biking, and picnic areas.",
      distance: "20 min",
      highlight: "Swimming, fishing, and trails",
    },
    {
      id: "lackawanna-state-park",
      name: "Lackawanna State Park",
      category: "Activities",
      address: "1839 Abington Rd, North Abington Township, PA 18414",
      photoPath: "/images/guides/lackawanna-state-park.jpg",
      photoAlt: "Icy lake at Lackawanna State Park",
      description:
        "North Abington Twp — 198-acre lake with boating, swimming, camping, and 15+ miles of multi-use trails.",
      distance: "25 min",
      highlight: "I-81 Exit 199, then PA-524 west",
    },
    {
      id: "steamtown",
      name: "Steamtown National Historic Site",
      category: "Activities",
      address: "350 N Moosic St, Scranton, PA 18503",
      photoPath: "/images/guides/steamtown.jpg",
      photoAlt: "Steam locomotives in the Steamtown roundhouse, Scranton",
      description:
        "Scranton — working railroad museum with vintage locomotives, roundhouse tours, and seasonal train rides.",
      distance: "25 min",
      highlight: "Easy half-day trip on rainy days",
    },
    {
      id: "sleepy-hollow-golf",
      name: "Sleepy Hollow Golf Course",
      category: "Golf",
      address: "140 Sandy Banks Rd, Greenfield Township, PA 18407",
      photoPath: "/images/guides/sleepy-hollow-golf.jpg",
      photoAlt: "Aerial view of Sleepy Hollow Golf Course",
      description:
        "140 Sandy Banks Rd, Greenfield Township — public 19-hole course with rolling countryside views. Executive front nine and regulation back nine.",
      distance: "8 min",
      highlight: "Closest course to the house — walk-ins welcome; clubhouse bar on site",
    },
    {
      id: "homestead-golf",
      name: "Homestead Golf Course",
      category: "Golf",
      address: "524 Fallbrook Rd, Fell Township, PA 18407",
      photoPath: "/images/guides/homestead-golf.jpg",
      photoAlt: "Homestead Golf Course in Fell Township",
      description:
        "524 Fallbrook Rd, Fell Township — public 18-hole executive course on the historic Russell Homestead since 1962, with Endless Mountains views.",
      distance: "10 min",
      highlight: "Par-67 layout suited to all skill levels — walk-ins welcome",
    },
    {
      id: "wemberly-hills-golf",
      name: "Wemberly Hills Golf Course",
      category: "Golf",
      address: "66 Clubhouse Ln, Scott Township, PA 18447",
      photoPath: "/images/guides/wemberly-hills-golf.jpg",
      photoAlt: "Wemberly Hills Golf Course in Scott Township",
      description:
        "66 Clubhouse Ln, Scott Township — public 9-hole course with woodland terrain, plus a Trackman indoor simulator and bar and grill.",
      distance: "18 min",
      highlight: "Outdoor rounds in season — indoor simulator open year-round",
    },
    {
      id: "panorama-golf",
      name: "Panorama Golf Course",
      category: "Golf",
      address: "1124 State Route 2023, Clifford Township, PA 18421",
      photoPath: "/images/guides/panorama-golf.jpg",
      photoAlt: "Aerial view of Panorama Golf Course",
      description:
        "1124 State Route 2023, Clifford Township — public 18-hole championship course in a wooded valley since 1964, stretching over 7,200 yards from the back tees.",
      distance: "22 min",
      highlight: "Full-length layout with ponds and woodland views — The Tavern serves lunch and dinner",
    },
    {
      id: "rock-creek-golf",
      name: "Rock Creek Golf Course",
      category: "Golf",
      address: "2783 State Route 374, Nicholson, PA 18446",
      description:
        "2783 State Route 374, Nicholson — family-owned public 18-hole par-67 course open since 1991, with rolling hills, elevation changes, and a driving range.",
      distance: "25 min",
      highlight: "Relaxed country setting — call ahead for tee times and current rates",
    },
  ],
};

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

export function getTopic(id: string): InstructionTopic | undefined {
  return property.topics.find((t) => t.id === id);
}

/** Resolve a topic from a URL slug segment, e.g. "thermostat" from /systems/thermostat */
export function getTopicBySlug(
  slug: string,
  category?: TopicCategory,
): InstructionTopic | undefined {
  return property.topics.find(
    (t) =>
      t.href.endsWith(`/${slug}`) && (!category || t.category === category),
  );
}

export function getTopicsByCategory(
  category: TopicCategory,
): InstructionTopic[] {
  return property.topics.filter((t) => t.category === category);
}

/** Quick-access buttons on the home screen — ordered by guest priority */
export const homeQuickAccess: {
  label: string;
  href: string;
  icon: string;
  description: string;
  accent: SystemAccent;
}[] = [
  {
    label: "Climate Control",
    href: "/systems/climate",
    icon: "thermometer",
    description: "Heat & air conditioning",
    accent: "gold",
  },
  {
    label: "Shades & Blinds",
    href: "/systems/shades",
    icon: "blinds",
    description: "Open & close windows",
    accent: "evergreen",
  },
  {
    label: "Lighting",
    href: "/systems/lighting",
    icon: "lightbulb",
    description: "Switches & accent lights",
    accent: "amber",
  },
  {
    label: "TVs & Entertainment",
    href: "/systems/entertainment",
    icon: "tv",
    description: "Streaming & remotes",
    accent: "slate",
  },
  {
    label: "Speakers & Music",
    href: "/systems/speakers",
    icon: "speaker",
    description: "AirPlay & whole-home audio",
    accent: "teal",
  },
  {
    label: "Fire Features",
    href: "/outdoor",
    icon: "flame",
    description: "Indoor & outdoor fire",
    accent: "fire",
  },
  {
    label: "Checkout",
    href: "/checkout",
    icon: "checkout",
    description: "Departure checklist",
    accent: "slate",
  },
  {
    label: "Emergency",
    href: "/emergency",
    icon: "emergency",
    description: "Hosts & 911",
    accent: "rose",
  },
];

export function getSystemCategory(id: string): SystemCategory | undefined {
  return property.systemCategories.find((c) => c.id === id);
}

export const hubPages = [
  {
    label: "House Systems",
    href: "/systems",
    description: "Climate, shades, lighting, TV, and speakers",
  },
  {
    label: "Outdoor",
    href: "/outdoor",
    description: "Fire features, deck, dock, kayaks, and lake",
  },
  {
    label: "Guides",
    href: "/guides",
    description: "Restaurants, activities, golf, groceries, and convenience stores",
  },
] as const;

export function getExploreByCategory(category: ExploreCategory) {
  return property.explore.filter((p) => p.category === category);
}

export const guideCategories = [
  "Restaurants",
  "Grocery",
  "Convenience",
  "Activities",
  "Golf",
] as const satisfies readonly ExploreCategory[];

export const guideCategoryLabels: Record<
  (typeof guideCategories)[number],
  string
> = {
  Restaurants: "Restaurants",
  Activities: "Activities",
  Golf: "Golf",
  Grocery: "Grocery Stores",
  Convenience: "Convenience Stores",
};

export const exploreCategories: ExploreCategory[] = [
  "Restaurants",
  "Grocery",
  "Convenience",
  "Activities",
  "Golf",
];
