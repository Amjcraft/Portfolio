---
title: Electrical & Heater
status: in-progress
updated: 2026-07-24
---

## Overview

The single most consequential design area for an electric sauna: sizing the heater
to the room, and providing a safe, code-compliant circuit to power it. **Confirm
all electrical specifics against the heater manual and local code (see
`02-planning/permits-and-code.md`).**

## Preliminary spec

| Item | Value | Notes |
|---|---|---|
| Heater power | **~9.5 kW** | From early spec work (read as kW) |
| Element/heater footprint | **20 × 24″** | ~1.7 × 2.0 ft floor area — see layout |
| Available supply | **50 A circuit** | Confirmed available at the site |
| Voltage / phase | **TBD — must confirm** | Drives whether 50 A is enough (see below) |

## ⚠️ Heater vs. 50 A circuit — the key check

A 9.5 kW heater is **right at the limit** of a 50 A circuit, and whether it fits
depends entirely on **voltage**. Under the continuous-load rule (a sauna heater runs
continuously, so conductors/breaker must be sized to **125%** of the load):

| Supply | Current draw (9.5 kW) | ×1.25 (continuous) | Fits 50 A? |
|---|---|---|---|
| **240 V, 1-phase** | 39.6 A | **49.5 A** | ✅ Just barely — no headroom |
| **208 V, 1-phase** | 45.7 A | **57.1 A** | ❌ Exceeds 50 A → needs 60 A |

> **Decision / risk:** At **240 V** the heater fits a 50 A circuit but essentially
> maxes it (49.5 A of a 50 A breaker). At **208 V** it does **not** fit — you'd need
> a 60 A circuit. **Confirm the heater's nameplate voltage and the site's actual
> voltage before ordering anything.** If there's any doubt, a slightly smaller heater
> (e.g. ~8 kW) buys real margin on a 50 A line.

- **Conductors:** a 50 A circuit is typically **6 AWG copper** — verify against the
  heater nameplate current and local code / temperature rating.
- **GFCI / disconnect / wiring method:** per local code for a hot, damp environment.
- Verify whether local code requires a **licensed electrician** for the final hookup.

## Heater sizing check

Electric heaters are sized by hot-room **air volume**, with upward adjustments for
heat-losing surfaces (glass doors/windows, exposed stone, uninsulated area).

- Interior volume (preliminary): **~9.7–10.4 m³** (see `dimensions-and-layout.md`).
- Common manufacturer rule of thumb: roughly **1 kW per ~1.3 m³** for a fully
  insulated room → ≈ **7.5–8 kW** for this volume.

> **Note:** By that rule, **9.5 kW looks oversized** for ~9.7–10.4 m³ of fully
> insulated space. That's fine *if* justified by a large glass door, exposed stone
> mass, a taller ceiling, or a manufacturer chart that lands there — but an oversized
> heater can feel harsh and, here, it also maxes the 50 A circuit. Reconcile the
> 9.5 kW figure against the final volume and the specific heater's own sizing chart.

## Clearances & safety

- Maintain the manufacturer **clearance** from heater to benches, walls, and any
  combustible surface — this interacts with the guard rail and bench depth in `dimensions-and-layout.md`.
- Provide the specified non-combustible base/guard rail if required.
- Place the control/thermostat per the manual.

## Decisions & open items

- [ ] **Confirm heater voltage/phase (240 V vs. 208 V)** — gates the whole circuit design.
- [ ] Confirm the heater's nameplate current and required conductor gauge.
- [ ] Select the specific heater make/model; pull its sizing + clearance chart.
- [ ] Reconcile 9.5 kW vs. final insulated volume (consider ~8 kW for 50 A margin).
- [ ] Determine if local code requires a licensed electrician for hookup.

## Sources

- Heater manufacturer manual (add to `docs/assets/pdf/` and digest in research).
