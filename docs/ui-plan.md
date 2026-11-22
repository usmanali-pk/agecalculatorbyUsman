# Age Calculator — UI Implementation Plan

**Document type:** UI implementation handoff  
**Product:** Age Calculator  
**Version:** 1.0  
**Source of truth:** `age-calculator-prd.md`  
**Primary implementation sequence:** HTML → testing → CSS → testing → JavaScript → testing

---

## 1. Purpose and Scope

This document converts the Product Requirements Document into an implementation-ready UI plan. It defines page structure, component markup, visual hierarchy, interaction states, responsive behavior, accessibility, and step-by-step build order.

This plan does not generate the application's HTML, CSS, JavaScript, or visual assets. It is the handoff specification for implementation.

### 1.1 Locked Product Decisions

- The application will use original branding and will not copy Calculator.net's visual identity.
- The MVP is one responsive page.
- The calculator form remains visible on desktop during and after calculation.
- The target date defaults to today's local calendar date.
- The February 29 common-year convention is February 28.
- The month-end convention is the fixed calendar anchor: February 28 to March 31 produces 1 month and 3 days.
- MVP calculations run locally in the browser.
- No birth-date values are sent to a server or analytics service.
- Copy, share, history, dark mode, and print/download are Phase 2 enhancements.

### 1.2 Build Strategy

Implementation must proceed in this strict order:

1. Create semantic HTML for the complete page.
2. Test HTML structure, names, labels, keyboard order, and accessibility.
3. Add CSS for the complete responsive design system.
4. Test layout, breakpoints, states, and visual accessibility.
5. Add JavaScript for validation, calculation, reset, and announcements.
6. Test all behavior and edge cases.

Do not add JavaScript behavior while first creating the HTML. Do not visually complete CSS before the HTML structure passes structural testing.

---

## 2. Page Information Architecture

The page has one route and six main content regions.

```text
/
├── Header
├── Hero
├── Calculator
│   ├── Form
│   └── Results Dashboard
├── Calculation Explanation
├── Frequently Asked Questions
└── Footer
```

### 2.1 Screen Inventory

| Section ID | Name | Required in MVP | Priority |
|---|---|---|---|
| HDR-01 | Header and navigation | Yes | P0 |
| HERO-01 | Hero heading and summary | Yes | P0 |
| CALC-01 | Calculator form | Yes | P0 |
| ERR-01 | Validation summary | Yes | P0 |
| RES-01 | Main age result card | Yes | P0 |
| RES-02 | Total units grid | Yes | P0 |
| RES-03 | Next birthday card | Yes | P0 |
| EXP-01 | Calculation explanation | Yes | P1 |
| FAQ-01 | FAQ accordion | Yes | P1 |
| FTR-01 | Footer | Yes | P1 |

---

## 3. Component Hierarchy

```text
Page
├── AppHeader
│   ├── Brand
│   └── Navigation
├── Main
│   ├── HeroSection
│   │   ├── Eyebrow
│   │   ├── H1
│   │   └── Description
│   ├── CalculatorSection
│   │   ├── SectionHeading
│   │   ├── ErrorSummary
│   │   ├── DateField — Date of Birth
│   │   ├── DateField — Calculate Age At
│   │   └── ActionRow
│   │       ├── PrimaryButton — Calculate Age
│   │       └── SecondaryButton — Reset
│   ├── ResultsDashboard
│   │   ├── ResultsHeading
│   │   ├── MainAgeCard
│   │   ├── TotalMetricsGrid
│   │   │   ├── MetricCard — Total days
│   │   │   ├── MetricCard — Total weeks
│   │   │   ├── MetricCard — Total hours
│   │   │   ├── MetricCard — Total minutes
│   │   │   └── MetricCard — Total seconds
│   │   └── NextBirthdayCard
│   ├── CalculationExplanation
│   └── FAQSection
│       └── FAQItem × 5
└── Footer
```

---

## 4. Section-by-Section Specifications

## 4.1 Header — HDR-01

### Content

- Brand name to be selected during visual implementation.
- A simple calculator or calendar icon.
- Navigation:
  - `Calculator`
  - `How it works`
  - `FAQs`

No marketing CTA is required.

### Layout

- Desktop:
  - Brand at left.
  - Navigation at right.
  - Container maximum width: 1280 px.
  - Header height: 72 px.
- Mobile:
  - Brand at left.
  - Optional compact text navigation or accessible menu at right.
  - Header height: 64 px.

### Behavior

- Navigation anchors scroll to the matching section.
- Header can remain in document flow or be lightly sticky.
- If a menu is used, it must expose visible labels and support Escape.
- Focus must return to the menu trigger when the menu closes.

### HTML Step 1

- Use `<header>`, `<a>`, `<nav>`, and an ordered list for navigation if appropriate.
- Do not use the header as a generic `<div>`.
- Brand link should point to `#top`.
- Give the page an `id="top"` target.

---

## 4.2 Hero — HERO-01

### Content

- Eyebrow: `Exact age calculator`
- H1: `Calculate your exact age`
- Supporting copy: `Enter two dates to see your age in years, months, days, and total time units.`

### Layout

- Desktop:
  - 8-column maximum text width.
  - Centered or left aligned.
  - 48–64 px bottom separation from the form.
- Mobile:
  - Full-width text.
  - H1 wraps naturally.
  - 32–40 px bottom separation.

### Typography

- H1: 44–52 px desktop, 34–40 px mobile.
- Eyebrow: 13–14 px, uppercase or all-small-caps styling.
- Supporting copy: 17–18 px.

### HTML Step 1

- One H1 only.
- The hero description may use a `<p>`.
- Do not place the form inside the hero heading group.

---

## 4.3 Calculator Section — CALC-01

### Purpose

Collect the birth date and target date and expose calculate/reset actions.

### Desktop Layout

- Place the form in a prominent white or elevated surface.
- Two date fields in a 2-column grid.
- Action row below both fields.
- Calculate button aligned left or at the right of the action row.
- Reset button adjacent but visually secondary.

### Mobile Layout

- One-column field layout.
- Fields full width.
- Calculate button full width.
- Reset button full width or text-style full-width beneath the primary action.
- Minimum control height: 48 px.

### Form

```text
Age Calculator
├── ErrorSummary (hidden until validation)
├── DateField — Date of Birth
├── DateField — Calculate Age At
└── ActionRow
    ├── PrimaryButton — Calculate Age
    └── SecondaryButton — Reset
```

### Section Heading

- H2: `Age Calculator`.
- Optional supporting text:
  `Choose a birth date and the date you want to calculate age at.`

---

## 4.4 Date Field — Birth Date

### Component Label

Permanent label: `Date of Birth`

### Input Requirements

- Native date input or accessible custom date field.
- Internal value format: `YYYY-MM-DD`.
- Human-readable value controlled by the browser or custom picker.
- Placeholder not used as a substitute for the label.
- Keyboard and pointer entry supported.
- Minimum 48 px height.

### Helper Text

- Optional: `Enter the date you were born.`
- Helper text remains associated through `aria-describedby`.

### States

| State | Requirement |
|---|---|
| Empty | Neutral border; no error |
| Focus | 2 px visible focus ring and accent border |
| Entered | Neutral border; value visible |
| Invalid | Red border; field error text; `aria-invalid="true"` |
| Disabled | Not used in MVP |

### Field Error

- Text: `Enter your date of birth.` for empty.
- Text: `Date of birth cannot be in the future.` for future input.
- Text: `Enter a valid date of birth.` for malformed or invalid calendar date.

### HTML Step 1

- Use `<label for="birth-date">`.
- Use `<input type="date" id="birth-date" name="birth-date">`.
- Include an adjacent `<p id="birth-date-error">` for error text.
- Include a live or empty error region without JavaScript later.

---

## 4.5 Date Field — Target Date

### Component Label

Permanent label: `Calculate Age At`

### Input Requirements

- Native date input or accessible custom date field.
- Internal value format: `YYYY-MM-DD`.
- Default value: today's local date.
- Minimum 48 px height.
- Future targets are allowed.

### Helper Text

- Optional: `Defaults to today's date.`

### States

Same as birth-date field:

- Empty
- Focus
- Entered
- Invalid
- Disabled not used

### Field Errors

- `Enter a date to calculate age at.`
- `Enter a valid target date.`
- `Age-at date must be on or after the date of birth.`

### HTML Step 1

- Use `<label for="target-date">`.
- Use `<input type="date" id="target-date" name="target-date">`.
- Include an adjacent error element.
- Do not hardcode today's date in HTML unless it is populated from JavaScript.
- On initial load before JavaScript, the field can be empty.

---

## 4.6 Validation Summary — ERR-01

### Trigger

- Display after an invalid Calculate submission.
- May contain one or multiple linked errors.

### Content

- Heading: `Please correct the following`.
- A concise list of affected field names.
- Each item is a link to the associated field.

### Layout

- Positioned directly above the form fields.
- Light red or neutral-red warning surface.
- 12–16 px padding.
- Left border or icon plus heading.

### Behavior

- On multiple errors, move focus to the summary or first linked field.
- On a single error, move focus directly to that field.
- Remove the summary once no field errors remain.
- Do not announce stale validation text.

### HTML Step 1

- Use an element such as `<div role="alert" aria-live="assertive">`.
- Include an H3 or strong heading.
- Include an unordered list.
- Leave it empty and hidden in baseline HTML.

---

## 4.7 Calculate Button

### Label

`Calculate Age`

### Style

- Primary visual weight.
- Accent background.
- White text.
- 48–52 px height.
- 10–12 px radius.
- Strong hover, active, and focus states.

### Behavior

- Submits the form.
- No network loading state.
- Valid submit updates or reveals the results dashboard.
- Invalid submit shows field and summary errors.
- Enter key from date fields triggers submission in browsers that support it.

### HTML Step 1

- Use `<button type="submit">Calculate Age</button>`.
- Include no icon in the baseline markup unless decorative and hidden from accessibility tools.

---

## 4.8 Reset Button

### Label

`Reset`

### Style

- Secondary style.
- Neutral border or text-only button.
- 48–52 px height.
- 10–12 px radius.

### Behavior

- Clears Date of Birth.
- Sets Age at Date to today's date.
- Removes validation errors.
- Hides or removes result dashboard content.
- Moves focus to Date of Birth.
- No confirmation dialog.

### HTML Step 1

- Use `<button type="button">Reset</button>`.
- Never use `type="submit"`.

---

## 4.9 Results Dashboard — RES-01

### Default State

- Hidden until a valid calculation.
- No sample numbers should appear in the idle state.
- The form remains visible.

### Section Heading

- H2: `Your Results`.
- Optional live-region text:
  `Calculation complete.`

### Desktop Layout

- Results heading at top.
- Main age card spans the main row.
- Five metric cards in a 2–3 column grid.
- Next birthday card occupies a highlighted bottom or right card.

### Mobile Layout

- Main age card full width.
- Metric cards one or two columns depending on viewport.
- At 320 px, use one column.
- Next birthday card full width.

### HTML Step 1

- Use a `<section id="results" aria-labelledby="results-heading">`.
- Add the heading.
- Add main card and metric grid in semantic containers.
- Add `hidden` baseline attribute.
- Do not add placeholder fake values in production markup.

---

## 4.10 Main Age Card — RES-01

### Content

- Small label: `Your exact age`
- Large value: `X years, Y months, Z days`
- Context line: `As of [human-readable target date]`

### Layout

- One full-width card.
- 24–32 px padding desktop.
- 20–24 px padding mobile.
- Accent border or top highlight.
- Main value left aligned for readability.

### Typography

- Label: 14–16 px semibold.
- Value: 32–44 px desktop, 28–36 px mobile.
- Context: 14–16 px.

### Singularization

- 1 year, 2 years.
- 1 month, 0 months.
- 1 day, 0 days.

### HTML Step 1

- Use `<article>` or `<div>`.
- Label as `<p>`.
- Full result as `<p class="main-age-value">`.
- Context as `<p>`.

---

## 4.11 Metric Cards — RES-02

### Required Cards

| Card | Label | Primary value | Secondary text |
|---|---|---|---|
| Total days | `Total days` | Number | `days elapsed` |
| Total weeks | `Total weeks` | Whole weeks | `N remaining days` |
| Total hours | `Total hours` | Number | `based on calendar days` |
| Total minutes | `Total minutes` | Number | `converted from elapsed days` |
| Total seconds | `Total seconds` | Number | `whole elapsed units` |

### Layout

- 2-column grid at 640–767 px.
- 3-column grid from 768–1023 px.
- 5 cards wrap consistently at larger sizes.
- No card may force horizontal overflow.

### Typography

- Label: 13–15 px.
- Value: 24–32 px tabular numerals.
- Secondary text: 13–14 px.

### HTML Step 1

- Use `<article>` or `<dl>`.
- For `dl`, use `<dt>` for label and `<dd>` for value.
- Keep each card independently accessible.

---

## 4.12 Next Birthday Card — RES-03

### Content

- Label: `Next birthday`
- Date: human-readable date.
- Countdown: `N days until your birthday`
- Birthday today:
  - `Happy birthday!`
  - `0 days to go`
- Optional February 29 note:
  `February 29 birthdays are observed on February 28 in common years.`

### Layout

- Highlighted card separate from ordinary metric cards.
- Calendar icon optional.
- 20–24 px padding.

### HTML Step 1

- Use `<article>`.
- Add a label and result elements.
- Include a separate text element for the February 29 note.
- Leave it hidden when not applicable.

---

## 4.13 Live Region

### Requirement

- One visually hidden region announces successful calculations and reset status.
- The region must use `aria-live="polite"` and `aria-atomic="true"`.

### Successful Text

`Calculation complete. Exact age is [full result] as of [target date].`

### Reset Text

`Calculator reset.`

### HTML Step 1

- Add `<p class="sr-only" id="status-message" aria-live="polite" aria-atomic="true"></p>`.

---

## 4.14 Calculation Explanation — EXP-01

### Content

Heading: `How this age is calculated`

Three concise steps:

1. Compare the birth date with the selected target date.
2. Count complete calendar years and months.
3. Count the remaining calendar days and convert the total.

Additional:

- The calculator uses real calendar lengths.
- It does not treat every month as 30 days.
- February 28 to March 31 is 1 month and 3 days under the fixed-calendar-anchor rule.
- Month-end examples use the selected birth-date anchor.

### Layout

- 2-column layout desktop:
  - left: heading and intro;
  - right: numbered explanation.
- Single column mobile.
- Use a bordered or neutral panel.

### HTML Step 1

- Use `<section id="how-it-works" aria-labelledby="how-it-works-heading">`.
- Use an ordered list for the three steps.
- Use a final paragraph for the month-end rule.

---

## 4.15 FAQ — FAQ-01

### Questions

1. What does exact age mean?
2. How are leap years handled?
3. How are February 29 birthdays handled?
4. Why can end-of-month calculations be confusing?
5. Does daylight saving time change the result?

### Accordion Behavior

- Only one or multiple items may be open. Multiple-open is acceptable.
- Default state: all collapsed.
- Button uses `aria-expanded="false"` and `aria-controls="faq-answer-N"`.
- Answer container uses matching ID.
- Chevron rotates or changes direction.

### Layout

- Maximum content width 920 px.
- Full-width accordion rows.
- Light border between rows.

### HTML Step 1

- Use `<section id="faqs" aria-labelledby="faqs-heading">`.
- Use `<h3><button type="button"...>Question</button></h3>`.
- Use `<div id="faq-answer-N" role="region" aria-labelledby="faq-button-N" hidden>`.

---

## 4.16 Footer — FTR-01

### Content

- Brand name.
- Privacy statement: `Your dates stay in your browser.`
- Optional links:
  - `About`
  - `Privacy`
  - `Terms`
- Copyright text.

No external service, ad, or account is required.

### Layout

- Desktop:
  - Brand and privacy left.
  - Links right.
- Mobile:
  - Stacked and centered or left aligned.

### HTML Step 1

- Use `<footer>`.
- Use `<nav aria-label="Footer">` if links exist.
- Keep information concise.

---

## 5. Design System

## 5.1 Page Shell

- Background: soft neutral.
- Content width:
  - small desktop: 960 px;
  - standard desktop: 1180–1280 px;
- Outer mobile padding: 16 px.
- Standard desktop padding: 32–48 px.

## 5.2 Typography

- Typeface: modern sans-serif with strong legibility.
- Body: 16 px minimum.
- Labels: 14–16 px semibold.
- H1: 44–52 px desktop.
- H2: 28–36 px.
- H3: 18–22 px.
- Metric values: 24–32 px.
- Main age: 32–44 px.
- Numeric values use tabular numerals.
- Body line height: 1.5.
- Heading line height: 1.1–1.2.

## 5.3 Recommended Color Roles

| Role | Usage |
|---|---|
| Page background | Soft warm gray or cool gray |
| Surface | White |
| Text | Deep neutral |
| Secondary text | Medium neutral |
| Accent | Accessible blue or teal |
| Button text | White |
| Border | Light neutral |
| Error | Strong red |
| Focus ring | High-contrast accent |
| Success | Deep green or accent-green |

Exact hex values must meet WCAG 2.2 AA contrast:

- Normal text: at least 4.5:1.
- Large text: at least 3:1.
- UI boundaries and focus indicators: at least 3:1.

## 5.4 Spacing Scale

Use an 4 px or 8 px scale:

- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48
- 64
- 80

## 5.5 Radius

- Inputs: 10–12 px.
- Buttons: 10–12 px.
- Cards: 16–20 px.
- Validation summary: 10–12 px.
- Pills: 999 px only for optional compact labels.

## 5.6 Shadow

- Cards: low elevation only.
- Form: low elevation or neutral border.
- Header: no shadow or a 1 px bottom border.
- Avoid oversized diffuse shadows.

## 5.7 Motion

- Result reveal: opacity and 8 px vertical movement.
- Duration: 160–220 ms.
- Color/outline transitions: 120–180 ms.
- Accordion answer: 180–240 ms if animated.
- Respect `prefers-reduced-motion`.
- No bouncing, looping, or celebratory animations.

---

## 6. Responsive Breakpoints

| Name | Width | Layout |
|---|---:|---|
| Small mobile | 320–479 px | 1 column; 16 px padding |
| Large mobile | 480–639 px | 1 column; 20 px padding |
| Tablet | 640–767 px | 2 date fields if enough width |
| Small desktop | 768–1023 px | 2-column form; 2-column metrics |
| Desktop | 1024–1439 px | 2-column form; 3-column metrics |
| Wide desktop | >= 1440 px | Centered 1280 px shell |

### Responsive Rules

- No horizontal scrolling at 320 px.
- Date inputs remain full width on narrow screens.
- Main age value wraps naturally.
- Metric values use tabular numerals and wrap only if exceptionally long.
- FAQ controls remain full width.
- Navigation must not overlap content.
- Footer wraps into single-column content on mobile.

---

## 7. UI States

## 7.1 Idle State

- Birth date empty.
- Target date today's date.
- No field errors.
- Results section hidden.
- FAQ default collapsed.
- Footer visible.

## 7.2 Editing State

- Entered values remain visible.
- A stale result, if retained, must not appear authoritative.
- Preferred behavior: hide stale results as soon as one input changes.
- Clear the previous result announcement.
- Any existing field error may clear after valid correction.

## 7.3 Invalid State

- Invalid fields receive red border and icon/text where possible.
- Error summary appears.
- Results remain hidden.
- Focus moves to summary or first invalid field.
- No stale result remains visible.

## 7.4 Success State

- Results section becomes visible.
- Main age card uses full date context.
- Metric cards show formatted numbers.
- Next birthday card shows date and countdown.
- Status live region announces success.
- On mobile, the result heading or dashboard may receive scroll/focus treatment.

## 7.5 Reset State

- Birth date value is empty.
- Target date is today's date.
- Errors are cleared.
- Summary is hidden.
- Results are hidden.
- Status announces reset.
- Focus moves to birth date field.

## 7.6 Loading State

- No loading state is required for normal local calculation.
- Do not show a network-style spinner.
- Button may show a temporary pressed state.

## 7.7 February 29 State

- Show next-birthday date according to the policy.
- Show the February 29 explanation only for relevant birth dates.

## 7.8 Birthday-Today State

- Main age remains accurate for the selected target date.
- Birthday card uses `0 days`.
- Optional label:
  `Happy birthday!`

---

## 8. Interaction and Focus Behavior

| Action | Expected UI Behavior |
|---|---|
| Page load | No focus steal; target date populated |
| Tab to birth field | Visible focus ring |
| Enter birth date | Field value updates |
| Tab to target | Visible focus ring |
| Enter in field | Submit form if native behavior allows |
| Calculate valid | Reveal/update results; announce success |
| Calculate invalid | Show summary/errors; move focus |
| Reset | Clear values/results/errors; focus birth date |
| Change invalid field | Clear related error after correction |
| Expand FAQ | Expand answer; update chevron and ARIA |
| Collapse FAQ | Hide answer; update chevron and ARIA |
| Escape in menu | Close menu; focus menu trigger |

### Focus Rule

- Initial page load must not move focus.
- Mobile submit may scroll to results.
- Desktop submit should not cause disruptive scroll unless the result is off-screen.
- Reset must always restore focus to birth date.

---

## 9. Accessibility Specifications

### 9.1 Semantic Requirements

- Exactly one H1.
- H2 for each major section.
- H3 for cards or FAQ questions where applicable.
- `<form>` wraps the calculator fields and actions.
- `<label>` is associated with every date input.
- Use `aria-describedby` for helper/error text.
- Use `aria-invalid="true"` only on invalid fields.
- Use native controls whenever possible.

### 9.2 Keyboard Requirements

- Every control is reachable using Tab.
- Every control has visible focus.
- Enter activates the primary form submission.
- Space activates buttons and accordions.
- Escape closes optional mobile menu or native picker behavior remains platform-managed.
- No keyboard trap.

### 9.3 Screen Reader Requirements

- Main result is in normal heading/text order.
- Every metric label is associated with its value.
- Validation summary is announced once.
- Successful result is announced once via live region.
- FAQ answer relationship is linked with `aria-controls`.

### 9.4 Contrast and Touch

- 4.5:1 normal text contrast.
- 3:1 large text and UI boundaries.
- Minimum touch target: 44×44 px.
- Recommended target: 48×48 px.
- No interaction relies on hover.

---

## 10. HTML Step 1 — Delivery Checklist

At the end of the HTML-only phase, the following must exist:

### Page Structure

- Header.
- Hero.
- Calculator form.
- Hidden results section.
- Calculation explanation.
- FAQ section.
- Footer.

### Required Elements

- One H1.
- Accessible H2 headings.
- Two labeled date inputs.
- Submit button.
- Reset button.
- Validation summary container.
- Inline error containers.
- Results heading and cards.
- Five metric cards.
- Next birthday card.
- Live region.
- FAQ buttons and answer regions.

### Required Baseline Attributes

- Form has an accessible name or heading association.
- Date inputs have names and IDs.
- Labels use `for`.
- Error elements have IDs.
- Invalid attributes are absent at baseline.
- Results section is `hidden`.
- FAQ answer regions are `hidden`.
- Live region exists even before JavaScript.

### HTML Phase Test Cases

1. Page passes heading-level inspection.
2. Every form control has an accessible label.
3. Every button has a visible, non-repeated label.
4. Tab order follows visual order.
5. Results are absent from the accessibility tree while hidden.
6. FAQ answers are absent from the accessibility tree while collapsed.
7. No broken IDs or `aria-controls` references.
8. The page has no duplicate IDs.
9. The HTML has no inline JavaScript.
10. The HTML has no layout-dependent inline styles.

---

## 11. CSS Step 2 — Delivery Checklist

After the HTML passes testing, add CSS for:

### Layout

- Header and page shell.
- Hero.
- Form.
- Desktop 2-column date grid.
- Mobile stacked layout.
- Results cards.
- Metrics grid.
- Next birthday card.
- Explanation.
- FAQ.
- Footer.

### Design Tokens

- Colors.
- Typography.
- Spacing.
- Radius.
- Shadow.
- Focus ring.
- Transition duration.

### States

- Hover.
- Focus.
- Active.
- Invalid.
- Success.
- Hidden.
- Accordion expanded.
- Optional menu open.

### CSS Phase Test Cases

1. No horizontal overflow at 320 px.
2. No overlap at 480 px, 768 px, 1024 px, and 1440 px.
3. Buttons remain at least 44 px tall.
4. Date inputs remain readable.
5. Main age value wraps naturally.
6. Metric cards have consistent height or alignment.
7. Focus ring is visible on every interactive element.
8. Error state is not communicated by color alone.
9. Reduced-motion mode removes movement.
10. Print layout is not required in MVP.

---

## 12. JavaScript Step 3 — Delivery Checklist

JavaScript will be added only after HTML and CSS pass testing.

### Required Modules or Functions

- Initialize target date.
- Read and validate birth date.
- Read and validate target date.
- Validate real Gregorian calendar dates.
- Reject future birth dates.
- Reject targets before birth dates.
- Calculate years, months, and remaining days.
- Calculate totals.
- Calculate next birthday.
- Format result values.
- Render main and supporting cards.
- Show and clear validation.
- Reset form state.
- Announce live-region updates.
- Initialize FAQ accordion behavior.

### State Changes

- Idle.
- Editing.
- Invalid.
- Success.
- Reset.

### JavaScript Phase Test Cases

Use all PRD acceptance criteria plus:

1. Target date initializes from the local calendar date.
2. Invalid date strings cannot be parsed partially.
3. Birth date future prevention is enforced.
4. Target-before-birth prevention is enforced.
5. Month-end calculations use the fixed anchor.
6. February 29 common-year birthdays use February 28.
7. DST interval changes do not affect calendar-day totals.
8. Repeated valid calculations replace, not duplicate, results.
9. Reset restores initial UI.
10. Escape and menu behavior remain accessible if a custom menu is used.

---

## 13. Full User Flow

### Flow A: Successful Calculation

1. Page load.
2. Target date equals today.
3. Birth date is empty.
4. User selects birth date.
5. User confirms or changes target date.
6. User activates Calculate.
7. Form validates.
8. Results dashboard appears.
9. Main age card is visible.
10. Metric cards are visible.
11. Next birthday card is visible.
12. Status live region announces success.

### Flow B: Invalid Submission

1. User activates Calculate.
2. Birth date may be empty or invalid.
3. Target date may be empty or invalid.
4. Error summary appears.
5. Inline errors appear.
6. Focus moves to summary or first invalid field.
7. Results remain hidden.
8. User corrects input.
9. Related errors clear.
10. User submits again.

### Flow C: Reset

1. User activates Reset.
2. Birth date becomes empty.
3. Target date becomes today.
4. Errors clear.
5. Results hide.
6. Status announces reset.
7. Focus moves to birth date.

### Flow D: Edit After Success

1. User changes birth or target date.
2. Existing result is immediately hidden or marked stale.
3. User submits again.
4. Existing cards update rather than duplicate.

---

## 14. Component State Matrix

| Component | Idle | Editing | Invalid | Success | Reset |
|---|---|---|---|---|---|
| Birth field | Empty | Value | Error | Value | Empty |
| Target field | Today | Value | Error | Value | Today |
| Calculate | Enabled | Enabled | Enabled | Enabled | Enabled |
| Reset | Enabled | Enabled | Enabled | Enabled | Enabled |
| Error summary | Hidden | Hidden | Visible | Hidden | Hidden |
| Results | Hidden | Hidden | Hidden | Visible | Hidden |
| Main age card | Hidden | Hidden | Hidden | Visible | Hidden |
| Metrics | Hidden | Hidden | Hidden | Visible | Hidden |
| Next birthday | Hidden | Hidden | Hidden | Visible | Hidden |
| Status region | Empty | Optional | Error summary text | Success text | Reset text |

---

## 15. Acceptance Test Checklist for UI

### HTML and Structure

- [ ] Complete semantic page structure.
- [ ] One H1.
- [ ] Two date labels.
- [ ] Submit and reset buttons.
- [ ] Hidden results baseline.
- [ ] Hidden FAQ answers baseline.
- [ ] No duplicate IDs.

### CSS and Layout

- [ ] 320 px viewport has no horizontal overflow.
- [ ] Form is one column on mobile.
- [ ] Results are readable on mobile.
- [ ] Desktop form and results remain clear.
- [ ] Focus is visible.
- [ ] Contrast meets AA.
- [ ] Reduced motion is honored.

### JavaScript and Behavior

- [ ] Target date defaults today.
- [ ] Valid result appears.
- [ ] Invalid result is blocked.
- [ ] Reset restores state.
- [ ] February 29 behavior is consistent.
- [ ] Month-end behavior follows fixed anchor.
- [ ] Keyboard submission works.
- [ ] Live announcements work.

### Regression Cases

- [ ] Normal dates.
- [ ] Leap years.
- [ ] February 29 birthdays.
- [ ] Month-end dates.
- [ ] Empty fields.
- [ ] Future birth date.
- [ ] Target before birth.
- [ ] Identical birth and target dates.
- [ ] Future target date.
- [ ] DST-spanning intervals.

---

## 16. Optional Phase 2 UI

Do not include these in the MVP markup unless explicitly approved:

- Copy Result button.
- Toast container.
- Share button.
- Recent calculations panel.
- Dark mode toggle.
- Print/download button.
- Local history clear control.
- Time-of-day controls.
- Alternate interval direction.

---

## 17. Final Build Sequence

1. Create `index.html` from the HTML structure in this document.
2. Run HTML structural and accessibility tests.
3. Fix markup issues before CSS.
4. Create the design-system CSS.
5. Apply responsive page layouts.
6. Test idle, invalid, success, and reset states visually.
7. Add JavaScript behavior.
8. Test validation and calculation edge cases.
9. Run final keyboard and screen-reader checks.
10. Complete browser and responsive verification.

No application code should be added until the user directs the next step.
