---
title: PDF Research Digests
status: draft
updated: 2026-07-24
---

## Purpose

A running summary of the PDF materials the owner provides. Each PDF gets its own
subsection with the key takeaways and any figures/specs worth keeping, so design
docs can cite them without re-reading the source.

> **Note:** Put the source PDFs in `docs/assets/pdf/`. Reference them here by filename.

## Digest template

Copy this block per PDF:

### `filename.pdf` — Short title

- **What it is:** (manufacturer manual, build guide, code excerpt, …)
- **Relevant to:** (heater sizing / ventilation / framing / …)
- **Key takeaways:**
  - …
- **Specs / numbers to keep:**
  - …
- **Questions it raises:**
  - …

---

## Digests

### `969813002-SAUNA-CONSTRUCTION-HANDBOOK.pdf` — *Sauna Construction Handbook* (W. Kumik, 2024, 92 pp.)

- **What it is:** A practical, DIY-oriented handbook for building a small outdoor sauna, aimed at non-carpenters. Covers design principles, wall assembly, ventilation, heaters, foundation, framing, roofing, interior, and benches.
- **Relevant to:** essentially our whole design — used below as a benchmark to check our plan.

**Key recommendations captured:**

- **Wall assembly (ext→int):** charred/oiled shiplap siding · battens · ply air+water barrier (or Tyvek if braced) · 2×4 framing · **mineral wool ~4″ (100 mm)** · **paper-backed aluminum foil vapor barrier, seams taped** · **½–1″ furring (air gap)** · internal shiplap (spruce or **Western Red Cedar** 5/8″).
- **Stud size:** ≥ 8×8 ft → use **2×4**; **freezing climate or larger → use 2×6**.
- **Sheathing:** OSB works but **is not vapor-permeable** ("crucial for the wall to breathe"); prefers permeable options (Tyvek + bracing, or Zip/Defentex).
- **Foundation/floor:** raised **timber subfloor** — 2×6 joists @ 16″ OC, blocking, **mineral-wool insulated**, vapor-permeable membrane, **stainless steel animal mesh** underneath, 5/8″ OSB — on concrete-block-on-gravel or pier foundations. IBC frost-depth exemption applies to **freestanding buildings < 600 ft²** (most saunas), so frost depth is not a big worry.
- **Ventilation (electric heater):** **mechanical preferred** — intake ~2′ above the heater, exhaust fan on the far wall ~1′ off the floor, plus a closable **drying vent**. Natural/gravity is fine but gives more temperature layering with electric.
- **Heater sizing:** ~**1 kW per m³** rule of thumb (their 2×2×2.2 m ≈ 8.8 m³ + glass door → ~10 kW). If you can only fit a smaller heater than optimal, **add extra insulation**.
- **Benches:** **24″ wide** is ideal for lying down; top bench **39–47″ (100–120 cm) below the ceiling**; bench/step height 16–19″; ~2′ of bench per person. Material: WRC / aspen / alder / abachi — **knot- and sap-free**. Slats either solid 2×4 or ~3″-wide planks with ~¾″ gaps. **Prefers the "I" layout**; notes the **"L" layout creates an awkward, unusable corner** (use it when you want more seating).
- **Openings:** door/window ≤ 3 ft wide → **double 2×4 header**.

## Alignment check — our plan vs. the handbook

| Topic | Handbook | Our plan | Verdict |
|---|---|---|---|
| Vapor barrier | Paper-backed alu foil, taped, warm side | Foil barrier, taped seams | ✅ Aligned |
| Insulation | Mineral wool ~4″ | Mineral wool (R-15) in studs | ✅ Aligned |
| **Stud size** | 2×6 if freezing/large | **2×6 / R-23** | ✅ **Adopted** |
| Air gap behind cladding | ½–1″ furring | Batten air gap | ✅ Aligned |
| **Sheathing** | Prefers **permeable**; OSB impedes drying | OSB + house wrap (Zip/plywood priced) | ⚠️ Option priced in `cost-options.md` |
| Interior paneling | Spruce or WRC 5/8″ | **Hemlock** walls/ceiling, **cedar** benches | ✅ Hemlock is a common sauna wood (oil it) |
| Raised floor | 2×6 joists @16″, insulated, SS mesh, 5/8 OSB | Raised 2×6 on slab + drain cavity | ✅ Aligned (add insulation + SS mesh) |
| Frost | <600 ft² freestanding exempt | — | ✅ Can relax |
| **Ventilation** | **Mechanical** best for electric | Gravity (intake low / exhaust high) | ⚠️ Decide; mechanical mixes better |
| **Heater size** | ~1 kW/m³ → ~11 kW for our ~11 m³ | 9.5 kW (50 A limit) | ⚠️ Low end → now offset by 2×6/R-23 |
| Bench width | 24″ for lying | Upper 24″ | ✅ Aligned |
| Bench→ceiling | 39–47″ | ~44″ (7′ ceiling, 40″ bench) | ✅ Aligned |
| **Bench layout** | Prefers "I"; L = awkward corner | L-shaped both tiers | ⚠️ Valid for seating; note corner |
| Bench wood | WRC/aspen/alder, knot/sap-free | Clear VG WRC (aspen option) | ✅ Aligned |
| Door header | ≤3 ft → double 2×4 | 28″ RO | ✅ Add header to framing |

**Bottom line:** the core building science matches well — foil vapor barrier + taped seams, mineral wool, batten air gap, raised 2×6 insulated floor, WRC interior, 24″ lie-down bench, ~7′ ceiling.

**Status of the five flags:**
- **(1) 2×6 walls — ✅ ADOPTED** (R-23; ~cost-neutral since the smaller interior cuts cedar cladding). Also offsets flag (4).
- **(2) Permeable sheathing — priced separately** in `../02-planning/cost-options.md` (Zip +$310–390); decision pending.
- **(3) Mechanical vs. gravity ventilation — pending decision.**
- **(4) Heater at low end of sizing rule — mitigated** by the 2×6/R-23 upgrade.
- **(5) L-bench corner tradeoff — noted;** keeping L for the extra seating.

### Other PDFs on hand (not yet digested)
- `522534990-Sauna-Installation-Guide.pdf`
- `636822184-CONSTRUCTION-DETAILS-ON-PLATFORM-FRAMING.pdf`
- `321995152-2015-Shed-Construction-Drawings.pdf`
