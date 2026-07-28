---
title: Design
status: draft
updated: 2026-07-24
---

## Overview

The technical design of the sauna. Each subsystem gets its own document; this page
is the index and records the cross-cutting decisions and how the parts relate.

## Design documents

- **Construction drawings** — the visual plan set: floor plan, cross-section, and
  phased build sequence, with links to every list and design doc.
- **Dimensions & layout** — footprint, ceiling height, bench arrangement.
- **Foundation** — how the structure meets the ground.
- **Framing** — walls, roof, structural approach.
- **Insulation & vapor barrier** — the wall assembly that keeps heat in and moisture controlled.
- **Interior cladding** — wood species and finish for the hot room.
- **Electrical & heater** — heater sizing, circuit, controls, clearances.
- **Ventilation** — intake/exhaust scheme for airflow and moisture.
- **Benches & interior** — ergonomics, duckboard, door, lighting.

## Wall assembly (the key sauna detail)

From inside to outside, a typical electric-sauna wall reads:

```
[interior] cladding → air gap → foil vapor barrier → insulation (in stud bays)
          → sheathing → weather-resistive barrier → exterior siding [outdoor]
```

> **Decision:** The foil vapor barrier with taped seams is non-negotiable — it
> keeps the heat radiating back in and stops moisture from rotting the wall.

## Design order of operations

Dimensions drive heater kW; heater and layout drive clearances; the wall assembly
drives framing depth; all of it feeds the materials list and the build guide.

## Open decisions

- [ ] Final interior dimensions
- [ ] Heater make/model and kW
- [ ] Foundation type
- [ ] Cladding species
