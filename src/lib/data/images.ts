/**
 * Centralized image registry for Newton Lake House guest guide.
 *
 * All paths are relative to /public. Use with next/image:
 *   src={images.hero.src}  →  "/images/hero/lakefront-property-overview.png"
 */

export type ImageCategory =
  | "hero"
  | "exterior"
  | "interior"
  | "scenic";

export type ImageEntry = {
  id: string;
  src: string;
  alt: string;
  category: ImageCategory;
  tags: readonly string[];
  /** Original UUID filename from /images/raw */
  originalFile: string;
};

export type PageImageRecommendations = {
  hero: ImageEntry;
  alternates: ImageEntry[];
  notes: string;
};

const base = "/images";

export const images = {
  hero: {
    lakefrontOverview: {
      id: "hero-lakefront-overview",
      src: `${base}/hero/lakefront-property-overview.png`,
      alt: "Newton Lake House viewed from the water — two-story lakefront home with private dock and boat lift",
      category: "hero",
      tags: ["lakefront", "property", "dock", "overview", "landscape"],
      originalFile: "83679482-E45E-457A-A32A-1A00D70AFFEC.PNG",
    },
  },

  exterior: {
    arrival: {
      frontEntrance: {
        id: "exterior-front-entrance",
        src: `${base}/exterior/arrival/front-entrance-walkway.jpg`,
        alt: "Front entrance of Newton Lake House with walkway and covered porch",
        category: "exterior",
        tags: ["arrival", "check-in", "front", "entrance"],
        originalFile: "AFACB417-549B-476E-ADF7-5F6FD91697A4.jpg",
      },
      drivewayGarage: {
        id: "exterior-driveway-garage",
        src: `${base}/exterior/arrival/driveway-garage.jpg`,
        alt: "Driveway and two-car garage at Newton Lake House",
        category: "exterior",
        tags: ["arrival", "parking", "garage", "driveway"],
        originalFile: "CD184A9A-80F4-4D3A-B15F-8AFC038B1E91.jpg",
      },
    },
    property: {
      backyardDeck: {
        id: "exterior-backyard-deck",
        src: `${base}/exterior/property/backyard-deck-landscaping.jpg`,
        alt: "Rear exterior showing elevated deck, lower patio, and landscaped lawn",
        category: "exterior",
        tags: ["property", "deck", "landscaping", "map"],
        originalFile: "3CF236D2-EEAA-4D95-BF10-AC5154AD41A8.jpg",
      },
    },
    backyard: {
      gazeboLakeView: {
        id: "exterior-gazebo-lake",
        src: `${base}/exterior/backyard/gazebo-lawn-lake-view.jpg`,
        alt: "Backyard lawn with white gazebo, dock, and lake view",
        category: "exterior",
        tags: ["backyard", "gazebo", "lake", "landscape"],
        originalFile: "A997249C-DFE1-4B8C-BCFB-BAA57BA9F1D7.jpg",
      },
    },
    deck: {
      upperFirePit: {
        id: "exterior-upper-deck-fire-pit",
        src: `${base}/exterior/deck/upper-deck-fire-pit-lake-view.png`,
        alt: "Upper deck lounge with fire pit table and panoramic lake view through glass railing",
        category: "exterior",
        tags: ["deck", "fire-pit", "amenities", "lake-view"],
        originalFile: "3BF4AD0B-EB1F-4589-B4E0-88A8EED6FF34.PNG",
      },
      firePitLounge: {
        id: "exterior-deck-fire-pit-lounge",
        src: `${base}/exterior/deck/deck-fire-pit-lounge.png`,
        alt: "Covered deck seating area with fire pit and striped outdoor rug",
        category: "exterior",
        tags: ["deck", "fire-pit", "amenities", "seating"],
        originalFile: "5B67F305-C50A-433D-AF15-AB577DA15FFF.PNG",
      },
      firePitPanorama: {
        id: "exterior-deck-fire-pit-panorama",
        src: `${base}/exterior/deck/deck-fire-pit-panorama.png`,
        alt: "Wide deck view with fire pit lounge overlooking the lake",
        category: "exterior",
        tags: ["deck", "fire-pit", "panorama", "lake-view"],
        originalFile: "B204BD31-B406-4D33-94B4-F967FF2062E7.PNG",
      },
    },
    patio: {
      lowerLounge: {
        id: "exterior-lower-patio-lounge",
        src: `${base}/exterior/patio/lower-patio-lounge-lake-view.jpg`,
        alt: "Lower covered patio with wicker lounge, fire pit, gazebo, and dock in background",
        category: "exterior",
        tags: ["patio", "lounge", "fire-pit", "gazebo", "amenities"],
        originalFile: "7244E5A3-EC01-43A8-B68B-E508E469B1B1.jpg",
      },
      lowerFirePit: {
        id: "exterior-lower-patio-fire-pit",
        src: `${base}/exterior/patio/lower-patio-fire-pit-lounge.jpg`,
        alt: "Lower patio under the deck with sectional seating and fire pit table",
        category: "exterior",
        tags: ["patio", "fire-pit", "seating", "amenities"],
        originalFile: "370654F1-AA5C-4378-8238-5CE1CB76D889.jpg",
      },
      coveredDining: {
        id: "exterior-covered-dining",
        src: `${base}/exterior/patio/covered-dining-kayaks.jpg`,
        alt: "Covered patio dining table with lake view and kayaks on the lawn",
        category: "exterior",
        tags: ["patio", "dining", "kayaks", "lake-activities"],
        originalFile: "26E67D9E-94D8-4B5C-A127-2D168DE0A2D8.jpg",
      },
    },
    dock: {
      boatLiftAerial: {
        id: "exterior-dock-boat-lift",
        src: `${base}/exterior/dock/dock-boat-lift-aerial.jpg`,
        alt: "Private dock with boat on lift, American flag, and lake panorama",
        category: "exterior",
        tags: ["dock", "boat", "lake-activities", "waterfront"],
        originalFile: "88860945-8F6B-4763-85B1-4342696EF8F1.jpg",
      },
      seatingSwimLadder: {
        id: "exterior-dock-seating",
        src: `${base}/exterior/dock/dock-seating-swim-ladder.jpg`,
        alt: "Dock with patio table, chairs, umbrella, and swim ladder in clear water",
        category: "exterior",
        tags: ["dock", "swimming", "seating", "lake-activities"],
        originalFile: "0FD0B324-6C12-4FBA-B096-2C7FFC2D4EAD.jpg",
      },
    },
  },

  interior: {
    kitchen: {
      graniteStainless: {
        id: "interior-kitchen",
        src: `${base}/interior/kitchen/kitchen-granite-stainless.png`,
        alt: "Kitchen with granite countertops, wood cabinets, and stainless steel appliances",
        category: "interior",
        tags: ["kitchen", "amenities", "cooking"],
        originalFile: "230CDD8D-C5A9-4643-A540-F19017CC0551.PNG",
      },
    },
    livingRoom: {
      lakeView: {
        id: "interior-living-room",
        src: `${base}/interior/living-room/living-room-lake-view.png`,
        alt: "Living room with leather seating, fireplace, and floor-to-ceiling lake views",
        category: "interior",
        tags: ["living-room", "fireplace", "lake-view", "amenities"],
        originalFile: "6787A075-831D-45D8-BC2D-CEC5452917A6.PNG",
      },
      greatRoomKitchen: {
        id: "interior-great-room-kitchen",
        src: `${base}/interior/living-room/great-room-kitchen-living.jpg`,
        alt: "Open-concept great room with kitchen, dining table, and living area facing the lake",
        category: "interior",
        tags: ["great-room", "kitchen", "dining", "lake-view"],
        originalFile: "A4A5888B-A47A-4C15-87FE-3971D014A05B.jpg",
      },
      greatRoomOpenConcept: {
        id: "interior-great-room-open",
        src: `${base}/interior/living-room/great-room-open-concept.png`,
        alt: "Wide-angle view of the open kitchen, dining, and living spaces",
        category: "interior",
        tags: ["great-room", "kitchen", "dining", "open-concept"],
        originalFile: "88318D86-4C49-4698-8B21-5607F773D465.PNG",
      },
    },
    bedrooms: {
      masterSuite: {
        id: "interior-master-suite",
        src: `${base}/interior/bedrooms/master-suite.jpg`,
        alt: "Master bedroom with teal upholstered bed, sitting area, and abstract artwork",
        category: "interior",
        tags: ["bedroom", "master-suite", "amenities"],
        originalFile: "D0049A98-11AE-48B2-880D-DD1AB3F2E597.jpg",
      },
      guestCoastal: {
        id: "interior-guest-bedroom-coastal",
        src: `${base}/interior/bedrooms/guest-bedroom-coastal-art.png`,
        alt: "Guest bedroom with coastal artwork and red leather bench",
        category: "interior",
        tags: ["bedroom", "guest-room"],
        originalFile: "575F7615-6CC7-43AF-9B22-630F6A085B5A.PNG",
      },
      guestBeach: {
        id: "interior-guest-bedroom-beach",
        src: `${base}/interior/bedrooms/guest-bedroom-beach-theme.png`,
        alt: "Guest bedroom with beach-themed wall art and sage green bedding",
        category: "interior",
        tags: ["bedroom", "guest-room", "coastal"],
        originalFile: "830AA394-0FD7-4DFF-A981-24947D06D70F.PNG",
      },
      guestPier: {
        id: "interior-guest-bedroom-pier",
        src: `${base}/interior/bedrooms/guest-bedroom-pier-artwork.png`,
        alt: "Guest bedroom with pier artwork above the bed and wall-mounted TV",
        category: "interior",
        tags: ["bedroom", "guest-room"],
        originalFile: "E899A4BD-C499-49C9-AEDF-200FF122A932.PNG",
      },
    },
    bathrooms: {
      primarySpa: {
        id: "interior-primary-bathroom",
        src: `${base}/interior/bathrooms/primary-bathroom-spa.png`,
        alt: "Primary bathroom with walk-in shower, floating vanity, and spa-like finishes",
        category: "interior",
        tags: ["bathroom", "primary-suite", "amenities"],
        originalFile: "921D2F86-D29B-465D-9216-1D48B333D120.PNG",
      },
    },
    office: {
      lakeView: {
        id: "interior-home-office",
        src: `${base}/interior/office/home-office-lake-view.png`,
        alt: "Home office with arched window overlooking the lake",
        category: "interior",
        tags: ["office", "workspace", "lake-view", "amenities"],
        originalFile: "BFE542B0-7B18-463B-A9E1-82A97D74E048.PNG",
      },
    },
  },

  scenic: {
    twilightFireworks: {
      id: "scenic-twilight-fireworks",
      src: `${base}/scenic/twilight-fireworks-lakefront.jpg`,
      alt: "Newton Lake House at twilight with fireworks over the lake",
      category: "scenic",
      tags: ["twilight", "fireworks", "special-occasion", "vertical"],
      originalFile: "259399B2-9A36-4789-A941-4D33F8860908.jpg",
    },
    doubleRainbow: {
      id: "scenic-double-rainbow",
      src: `${base}/scenic/double-rainbow-lakefront.jpg`,
      alt: "Double rainbow over Newton Lake with dock and boats",
      category: "scenic",
      tags: ["rainbow", "scenic", "dock", "vertical"],
      originalFile: "9AAF52FE-04C0-442C-8C82-3C921CE0E1FC.jpg",
    },
    doubleRainbowGolden: {
      id: "scenic-double-rainbow-golden",
      src: `${base}/scenic/double-rainbow-golden-hour.jpg`,
      alt: "Golden hour double rainbow over the lakefront property",
      category: "scenic",
      tags: ["rainbow", "golden-hour", "scenic", "vertical"],
      originalFile: "IMG_5864.jpg",
    },
  },
} as const;

/** Flat list of every image for search, galleries, or CMS tooling */
export const allImages: ImageEntry[] = [
  images.hero.lakefrontOverview,
  images.exterior.arrival.frontEntrance,
  images.exterior.arrival.drivewayGarage,
  images.exterior.property.backyardDeck,
  images.exterior.backyard.gazeboLakeView,
  images.exterior.deck.upperFirePit,
  images.exterior.deck.firePitLounge,
  images.exterior.deck.firePitPanorama,
  images.exterior.patio.lowerLounge,
  images.exterior.patio.lowerFirePit,
  images.exterior.patio.coveredDining,
  images.exterior.dock.boatLiftAerial,
  images.exterior.dock.seatingSwimLadder,
  images.interior.kitchen.graniteStainless,
  images.interior.livingRoom.lakeView,
  images.interior.livingRoom.greatRoomKitchen,
  images.interior.livingRoom.greatRoomOpenConcept,
  images.interior.bedrooms.masterSuite,
  images.interior.bedrooms.guestCoastal,
  images.interior.bedrooms.guestBeach,
  images.interior.bedrooms.guestPier,
  images.interior.bathrooms.primarySpa,
  images.interior.office.lakeView,
  images.scenic.twilightFireworks,
  images.scenic.doubleRainbow,
  images.scenic.doubleRainbowGolden,
];

/**
 * Recommended images per app page.
 * Import these in page components instead of hardcoding paths.
 */
export const pageImages = {
  home: {
    hero: images.hero.lakefrontOverview,
    alternates: [
      images.exterior.patio.lowerLounge,
      images.exterior.deck.upperFirePit,
      images.exterior.backyard.gazeboLakeView,
    ],
    notes:
      "Primary hero shows the full property from the lake — house, lawn, dock, and boat lift in one aspirational wide shot. Alternates work for seasonal swaps or A/B testing.",
  },

  amenities: {
    hero: images.exterior.deck.upperFirePit,
    gallery: [
      images.exterior.patio.lowerLounge,
      images.exterior.patio.lowerFirePit,
      images.exterior.deck.firePitLounge,
      images.interior.kitchen.graniteStainless,
      images.interior.livingRoom.lakeView,
      images.interior.bedrooms.masterSuite,
      images.interior.bathrooms.primarySpa,
      images.interior.office.lakeView,
    ],
    notes:
      "Lead with the upper deck fire pit — it reads as premium resort living. Gallery covers outdoor lounges, kitchen, great room, sleeping, spa bath, and workspace.",
  },

  lakeActivities: {
    hero: images.exterior.dock.seatingSwimLadder,
    gallery: [
      images.exterior.dock.boatLiftAerial,
      images.exterior.patio.coveredDining,
      images.exterior.dock.boatLiftAerial,
      images.scenic.doubleRainbow,
    ],
    notes:
      "Dock seating image invites swimming and lounging on the water. Pair with boat-lift shot and kayaks visible in the covered dining photo.",
  },

  propertyMap: {
    hero: images.exterior.property.backyardDeck,
    alternates: [
      images.exterior.backyard.gazeboLakeView,
      images.hero.lakefrontOverview,
    ],
    notes:
      "Backyard deck photo best shows the vertical layout — upper deck, lower patio, lawn tiers, and dock path. Use as a photographic reference alongside the interactive SVG map.",
  },

  contact: {
    hero: images.exterior.arrival.frontEntrance,
    alternates: [
      images.scenic.twilightFireworks,
      images.exterior.arrival.drivewayGarage,
    ],
    notes:
      "Front entrance feels welcoming and helps guests recognize the home on arrival. Twilight fireworks alternate adds warmth for a 'your hosts' emotional tone.",
  },
} as const satisfies Record<string, PageImageRecommendations | { hero: ImageEntry; gallery: ImageEntry[]; notes: string }>;

/** Lookup an image by its registry id */
export function getImageById(id: string): ImageEntry | undefined {
  return allImages.find((img) => img.id === id);
}

/** Filter images by tag (e.g. "fire-pit", "lake-activities") */
export function getImagesByTag(tag: string): ImageEntry[] {
  return allImages.filter((img) => img.tags.includes(tag));
}
