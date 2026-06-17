# Image Organization — Newton Lake House

All property photos have been renamed, categorized, and moved from `/public/images/raw/` into the structure below. Original UUID filenames are preserved in `src/lib/data/images.ts` for reference.

## Folder Structure

```
public/images/
├── hero/                          # Primary marketing & homepage shots
│   └── lakefront-property-overview.png
├── exterior/
│   ├── arrival/                   # Check-in, parking, front door
│   ├── property/                  # Full-property architectural views
│   ├── backyard/                  # Lawn, gazebo, rear grounds
│   ├── deck/                      # Upper deck & fire pit lounge
│   ├── patio/                     # Lower covered patio & dining
│   └── dock/                      # Waterfront, boats, swimming
├── interior/
│   ├── kitchen/
│   ├── living-room/               # Great room & living area
│   ├── bedrooms/
│   ├── bathrooms/
│   └── office/
├── scenic/                        # Atmospheric & special moments
└── raw/                           # Empty — originals relocated
```

## Page Recommendations

| Page | Primary Image | Path |
|------|--------------|------|
| **Homepage Hero** | Lakefront property overview | `hero/lakefront-property-overview.png` |
| **Amenities** | Upper deck fire pit + lake view | `exterior/deck/upper-deck-fire-pit-lake-view.png` |
| **Lake Activities** | Dock seating & swim ladder | `exterior/dock/dock-seating-swim-ladder.jpg` |
| **Property Map** | Backyard deck & landscaping | `exterior/property/backyard-deck-landscaping.jpg` |
| **Contact Host** | Front entrance & walkway | `exterior/arrival/front-entrance-walkway.jpg` |

## Usage

Import from the centralized registry:

```ts
import { images, pageImages } from "@/lib/data/images";

// Homepage hero
pageImages.home.hero.src;

// Any image by id
import { getImageById, getImagesByTag } from "@/lib/data/images";
getImagesByTag("fire-pit");
```

## Naming Convention

`{subject}-{descriptor}.{ext}` — lowercase kebab-case, descriptive of content (not room numbers). Extensions preserved from originals (.jpg for photos, .png for interior screenshots).

## Notes

- **Duplicates:** `great-room-kitchen-living.jpg` and `great-room-open-concept.png` are similar wide-angle shots; use one in the UI, keep both for flexibility.
- **Vertical shots:** `scenic/` images (rainbow, fireworks) are portrait-oriented — best for mobile story cards, not desktop heroes.
- **Next step:** Replace the Unsplash placeholder in `property.ts` with `pageImages.home.hero.src`.
