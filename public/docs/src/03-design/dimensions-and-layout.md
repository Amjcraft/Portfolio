---
title: Dimensions & Layout
status: in-progress
updated: 2026-07-24
---

## Overview

Interior dimensions and bench arrangement. These numbers cascade into heater
sizing, framing, and materials, so settle them early. Values below are
**preliminary** from early spec work — refine as decisions firm up.

## Footprint (preliminary)

- **Exterior:** ~**9.5 × 8 ft**. Front/back walls at ~9.5 ft so the door still fits
  **beside the heater** after the deeper 2×6 walls eat into the interior. Side walls 8 ft.
- **Walls:** **2×6 @ 16″ OC** — build-up ~**8″ per side** (was ~6″ with 2×4).
- **Wall height:** **8 ft** low side, sloping up to **~9.5 ft** high side (shed roof
  — see `framing.md`).
- **Ceiling height (interior):** ~7–8 ft under the sloped ceiling. Lower is better
  for heating and löyly; the slope gives standing headroom on the high side and a
  cozier heat pocket over the upper bench on the low side.

### Exterior → interior estimate

A **2×6** outdoor sauna wall (siding + sheathing + 2×6 stud/mineral wool + foil
barrier + batten air-gap + cladding) consumes roughly **~8″ per side**.

| Exterior | Est. interior |
|---|---|
| Front/back 9.5 ft (114″) | ~98″ (~8.2 ft) |
| Sides 8 ft (96″) | ~80″ (~6.7 ft) |

> **Note:** These are estimates until `framing.md` and
> `insulation-and-vapor-barrier.md` lock the wall build-up. The interior clear
> dimension is what feeds heater sizing — not the exterior size.

### Air volume (drives heater kW)

| Interior L × W × H | Volume (ft³) | Volume (m³) |
|---|---|---|
| 8.2 × 6.7 × 7.0 ft | ~381 | ~10.8 |

See `electrical-and-heater.md` — by the handbook's ~1 kW/m³ rule, ~10.8 m³ wants
~11 kW; our **9.5 kW** is circuit-limited (50 A) and sits at the **low end**, so we
**upgraded the walls to 2×6/R-23** to compensate (exactly the handbook's advice for a
smaller-than-optimal heater). Net: 9.5 kW is workable in a well-insulated room.

## Bench layout — L-shaped, two tiers

Both tiers are **L-shaped, wrapping two adjacent walls** (full construction breakdown
and wood takeoff in `benches-and-interior.md`):

| Tier | Depth (front-to-back) | Height off floor | Notes |
|---|---|---|---|
| Upper | **24″** | ~40″ | Main heat zone; wraps two walls |
| Lower | **18″** (18–20 TBD) | ~18–20″ | Step up + cooler seat; wraps the same two walls |

- The two-wall L, with back-wall legs stretched to the wider ~96″ back wall, gives
  **~46 ft² of seat surface** — seats several people sitting and lets one lie down on
  a long leg. Good for a higher occupancy target.
- Combined tier projection ≈ 24″ + 18″ = **42″** from the walls; in a ~84″-deep room
  that leaves ~42″ of open floor **before** the heater + guard rail.
- The heater takes the **front-right corner** (not wrapped by the L); the **door sits
  on the front wall between the lower bench and the heater** (see `construction-drawings.md`).

## Heater placement, guard rail & door

- **Heater footprint:** the element is **20 × 24″** (~1.7 × 2.0 ft floor area), set in
  the **front-right corner** clear of the bench per manufacturer clearances.
- **Guard rail/fence:** stands only a **few inches off the heater** (it should *hug*
  the heater, not enclose a wide zone) — confirm the exact clearance in the heater
  manual. Protects bathers from the hot surfaces on the two exposed faces.
- **Door beside the heater:** the door is on the front wall **between the lower bench
  and the heater/guard rail**. Fitting a 24″ door there is why the front/back walls
  were widened to ~9 ft — an 8 ft front wall left only ~18″ of gap.

## Open items

- [ ] Confirm occupancy target → validates bench length / capacity.
- [ ] Lock ceiling height, then recompute interior volume.
- [ ] Confirm wall build-up thickness → firm interior clear dimensions.
- [ ] Reconcile 9.5 kW heater against final insulated volume (see electrical doc).
- [ ] Confirm guard-rail clearance from the chosen heater and whether it fits.
