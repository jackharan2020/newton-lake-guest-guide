import type { ImageEntry } from "@/lib/data/images";
import { images } from "@/lib/data/images";

export type MapZone = {
  id: string;
  name: string;
  description: string;
  tips: string[];
  x: number;
  y: number;
  width: number;
  height: number;
  image?: ImageEntry;
};

export const mapZones: MapZone[] = [
  {
    id: "upper-deck",
    name: "Upper Deck",
    description:
      "Covered deck with wicker lounge, gas fire pit table, and glass railing overlooking the lake.",
    tips: [
      "Best sunset views from here",
      "Outdoor speakers in the ceiling",
      "Propane fire pit — controls on the table",
    ],
    x: 10,
    y: 8,
    width: 62,
    height: 14,
    image: images.exterior.deck.upperFirePit,
  },
  {
    id: "great-room",
    name: "Great Room",
    description:
      "Open kitchen, dining, and living area with floor-to-ceiling windows facing the water.",
    tips: [
      "TV remote on the coffee table",
      "Fireplace remote beside the sofa",
      "Dining table seats the full group",
    ],
    x: 18,
    y: 28,
    width: 28,
    height: 22,
    image: images.interior.livingRoom.lakeView,
  },
  {
    id: "kitchen",
    name: "Kitchen",
    description:
      "Granite counters, stainless gas range, and a view over the sink to the backyard.",
    tips: [
      "Dishwasher pods under the sink",
      "Grill tools in the lower drawer",
      "Island has extra prep space",
    ],
    x: 48,
    y: 28,
    width: 22,
    height: 22,
    image: images.interior.kitchen.graniteStainless,
  },
  {
    id: "lower-patio",
    name: "Lower Patio",
    description:
      "Covered lounge under the deck with sectional seating, fire pit, and string lights.",
    tips: [
      "Cooler shade on hot afternoons",
      "Second gas fire pit for evenings",
      "Steps down to the lawn",
    ],
    x: 10,
    y: 24,
    width: 30,
    height: 10,
    image: images.exterior.patio.lowerLounge,
  },
  {
    id: "master",
    name: "Master Suite",
    description:
      "King bed, sitting area, lake-view windows, and spa-style ensuite bath.",
    tips: [
      "Ceiling fan on the wall switch",
      "Extra towels in the closet",
      "Ensuite has walk-in shower",
    ],
    x: 18,
    y: 54,
    width: 20,
    height: 18,
    image: images.interior.bedrooms.masterSuite,
  },
  {
    id: "bedrooms",
    name: "Guest Bedrooms",
    description:
      "Two guest rooms with comfortable beds and coastal-themed décor.",
    tips: [
      "Ceiling fans in each room",
      "Shared hall bath between rooms",
      "Pack-n-play in the hall closet",
    ],
    x: 42,
    y: 54,
    width: 28,
    height: 18,
    image: images.interior.bedrooms.guestBeach,
  },
  {
    id: "gazebo",
    name: "Back Lawn & Gazebo",
    description:
      "Open lawn with a white gazebo — a quiet spot away from the water's edge.",
    tips: [
      "Flat path from the lower patio",
      "Flower beds along the shoreline",
      "Great for morning coffee",
    ],
    x: 58,
    y: 48,
    width: 22,
    height: 16,
    image: images.exterior.backyard.gazeboLakeView,
  },
  {
    id: "dock",
    name: "Private Dock",
    description:
      "Wooden dock with boat lift, seating area, kayaks, and swim ladder.",
    tips: [
      "Kayaks on the lawn nearby",
      "Life vests — ask your host",
      "Outdoor shower on the path to the dock",
    ],
    x: 28,
    y: 76,
    width: 28,
    height: 12,
    image: images.exterior.dock.seatingSwimLadder,
  },
];
