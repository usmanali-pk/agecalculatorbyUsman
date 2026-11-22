# Age Calculator — Product Requirements Document

**Document type:** Product Requirements Document (PRD)  
**Product:** Modern Age Calculator web application  
**Version:** 1.0  
**Status:** Implementation-ready for UI/UX planning  
**Primary reference:** https://www.calculator.net/age-calculator.html  
**Deliverable scope:** Requirements and experience specification only; no implementation or visual code

---

## 1. Executive Summary

The Age Calculator is a responsive web application that calculates the exact elapsed age or interval between a user's date of birth and a selected target date. The experience will provide a clear calendar-based breakdown in years, months, and days, as well as totals in weeks, days, hours, minutes, and seconds. It will also provide a next-birthday countdown and explain the calculation rules in plain language.

The product is inspired by the Calculator.net age calculator only for functionality. It must not copy Calculator.net branding, layout, advertising, color treatment, or visual identity.

### 1.1 Goals

1. Let a user enter a birth date and target date quickly and confidently.
2. Display an accurate, understandable age result.
3. Make calendar edge cases predictable, including leap years and end-of-month dates.
4. Work well on phones, tablets, laptops, and desktop displays.
5. Meet accessible form, keyboard, screen-reader, and contrast requirements.
6. Produce a complete UI specification that can be handed to a separate UI-plan or design implementation tool.

### 1.2 Non-goals

- Zodiac, horoscope, biorhythm, or life-stage predictions.
- Countdown timers for arbitrary users or multiple saved profiles.
- Historical cultural age systems, such as East Asian age reckoning, in the MVP.
- Full calendar event generation or calendar integration.
- Data collection, account creation, analytics dashboards, or social sharing in the MVP.
- Currency, localization, or medical advice.

### 1.3 Success Metrics

| Metric | Target |
|---|---:|
| Successful calculation rate | >= 99% for valid input |
| Validation clarity | >= 95% of tested users identify the field with an error |
| Mobile task completion | >= 95% |
| Keyboard task completion | 100% for all primary actions |
| Core calculations | 100% pass required edge-case acceptance tests |
| Initial interaction | Calculate action available without scrolling on common mobile viewports |
| Accessibility | WCAG 2.2 AA conformance for MVP screens |

---

## 2. Reference Website Analysis

### 2.1 Observed Structure

The reference application is centered around a direct age-calculator task:

1. Breadcrumb-style navigation into the calculator category.
2. A prominent “Age Calculator” heading.
3. A short explanation of the calculator's purpose.
4. A compact form with date-of-birth and target-date inputs.
5. A calculate action.
6. A text-based results area.
7. Explanatory content about age systems and month-end ambiguity.
8. Related calculator links.

The reference is functionally clear but visually dense and text-oriented. It does not provide the modern dashboard-style hierarchy requested for this product.

### 2.2 Existing Main Functionality

- Determine elapsed age or interval between two dates.
- Present a conventional age in years, months, and days.
- Present totals in weeks, days, hours, minutes, and seconds.
- Explain the dominant Western age convention.
- Explain month-end boundary ambiguity.

### 2.3 Input and Controls in the Reference

The reference exposes:

- Date of Birth.
- Age at the Date of (the target date).
- A Calculate action.

The reference does not provide an equally clear reset affordance in the extracted content. This PRD requires an explicit reset control.

### 2.4 User Interaction and Workflow

1. User enters the birth date.
2. User enters or leaves the target date.
3. User submits the calculation.
4. The application displays an elapsed-age interpretation.
5. Supporting text explains calendar conventions.

### 2.5 Result Presentation

The reference presents results primarily as text. The new product must preserve the information while improving scannability through a hierarchy of cards and concise labels.

### 2.6 Information and Explanatory Content

The reference includes:

- The meaning of the most common age system.
- An example of elapsed age versus cultural age systems.
- A note that month-end date intervals can be calculated in more than one reasonable way.
- An explanation that the product uses the standard calendar-month rule rather than month totals of fixed length.

The new product should include a concise FAQ and calculation-explanation section, not an oversized content block.

### 2.7 Validation and Error Handling in the Reference

The reference presentation does not visibly implement a modern, field-specific validation state. The new product will improve this with:

- Inline field errors.
- A concise error summary where appropriate.
- Prevention of submission with missing or future-invalid dates.
- Clear correction guidance.

### 2.8 Responsive Behavior

The reference is suitable for narrow layouts but is not optimized as a modern mobile-first dashboard. The new product must use deliberate responsive breakpoints, touch-safe controls, and card reflow.

---

## 3. Personas and User Needs

### 3.1 Primary Persona: General User

**Need:** Quickly determine age on a date.  
**Typical context:** Phone or laptop, ad hoc use.  
**Priority:** Fast input, clear answer, minimal clutter.

### 3.2 Secondary Persona: Planner or Administrator

**Need:** Calculate an interval for records or planning.  
**Typical context:** Desktop, repeated calculations.  
**Priority:** Explicit target date, accurate totals, copyable or readable results.

### 3.3 Secondary Persona: Student or Educator

**Need:** Understand leap-year and date differences.  
**Typical context:** Desktop or tablet.  
**Priority:** Explanations and predictable edge cases.

---

## 4. Scope and Prioritization

### 4.1 MVP — Essential

- Date of Birth field.
- Calculate Age At field with current date default.
- Calculate action.
- Reset/Clear action.
- Inline and summary validation.
- Calendar-accurate years/months/days calculation.
- Total weeks and days.
- Total hours, minutes, and seconds.
- Next-birthday countdown.
- Days until next birthday.
- Results dashboard.
- Calculation explanation.
- Responsive and accessible UI.
- Footer with essential legal and informational links.

### 4.2 Phase 2 Enhancements — Optional

- Copy results.
- Share link.
- Save recent calculations in local browser storage.
- Time-of-day support.
- Download or print result.
- Alternate start/end date use.
- Dark mode.
- Localization and multilingual dates.
- Birthday notifications.

### 4.3 Out of Scope

- User accounts.
- Server-side profiles.
- Medical or legal age determination.
- Time zones and DST-sensitive elapsed-time calculations.
- Alternative cultural age systems.
- Historical policy changes or business-date conventions.

---

## 5. User Stories

| ID | Story | Priority |
|---|---|---|
| US-01 | As a user, I can select my birth date so the calculator knows the start date. | Must |
| US-02 | As a user, I can select or confirm the age-at date so the result reflects the intended date. | Must |
| US-03 | As a user, I can calculate exact age without manually converting dates. | Must |
| US-04 | As a user, I can reset both fields and return to a clean starting state. | Must |
| US-05 | As a user, I can see the result in years, months, and days. | Must |
| US-06 | As a user, I can see total elapsed weeks and days. | Must |
| US-07 | As a user, I can see total elapsed hours, minutes, and seconds. | Must |
| US-08 | As a user, I can see my next birthday and the remaining days. | Must |
| US-09 | As a user, I receive clear correction guidance for invalid dates. | Must |
| US-10 | As a keyboard or screen-reader user, I can complete the flow independently. | Must |
| US-11 | As a mobile user, I can enter dates and read results without horizontal scrolling. | Must |
| US-12 | As a learner, I can understand the month-end calculation convention. | Should |
| US-13 | As a repeat user, I can copy or share the result. | Could |

---

## 6. Primary and Secondary User Journeys

### 6.1 Primary Journey: Calculate Age at Today

1. User opens the application.
2. The page presents an accessible heading and brief purpose statement.
3. The Date of Birth field is empty and focused only if no mobile keyboard conflict.
4. The Age at the Date field defaults to today's local calendar date.
5. User selects a valid birth date.
6. User activates Calculate.
7. The application validates both dates.
8. The result dashboard appears or updates.
9. The page scrolls or moves focus to the result heading on mobile if submit is from a compact form.
10. The dashboard displays the main age and supporting totals.

### 6.2 Secondary Journey: Calculate Age at a Past or Future Target Date

1. User opens or resets the calculator.
2. User enters a birth date.
3. User changes Age at the Date to another date.
4. The target date may be in the past or future, as long as it is not earlier than the birth date.
5. User calculates.
6. Results describe elapsed age as of that target date.
7. The next-birthday countdown is calculated from the target date, not necessarily today.

**Target-date interpretation:** Future target dates are allowed if they are not earlier than the birth date. The product does not prevent future targets solely because they are after today's date.

### 6.3 Secondary Journey: Reset

1. User activates Reset.
2. Date of Birth becomes empty.
3. Age at the Date resets to today's local date.
4. Validation messages and result cards are removed or hidden.
5. Empty state is restored.
6. Focus moves to the Date of Birth field.

### 6.4 Secondary Journey: Correction from Validation

1. User submits incomplete or invalid values.
2. Inline errors identify affected fields.
3. For more than one error, a compact error summary appears above the form.
4. The summary links to the first affected field.
5. The Calculate action remains available for retry.
6. Valid fields retain their values.
7. On correction, the related error clears immediately or after blur, before submission.

### 6.5 Secondary Journey: Copy or Share Result — Optional

1. User views a successful result.
2. User activates Copy Result.
3. The application copies a concise text summary.
4. A transient success confirmation appears.
5. The content remains available for screen readers through a live region.

---

## 7. Functional Requirements

### FR-01: Date of Birth Input

- Provide one date input labeled **Date of Birth**.
- Use a native, platform-accessible date picker when appropriate.
- Show placeholder guidance such as `MM/DD/YYYY` if the implementation uses an input mask.
- Accept keyboard entry and date-picker selection.
- Store the value internally as an ISO local-date value: `YYYY-MM-DD`.
- Prohibit target dates earlier than the birth date.
- Permit only real calendar dates.
- Do not accept a birth date after the current local date.
- Preserve zero-padded values in internal data.

### FR-02: Calculate Age At Input

- Provide one date input labeled **Calculate Age At**.
- Default to the user's current local calendar date.
- Allow past and future dates.
- Reject values earlier than the birth date.
- Permit only real calendar dates.
- Recalculate the default only on page load or reset, not while the user is editing.
- Store as `YYYY-MM-DD`.

### FR-03: Calculate Action

- Label the primary action **Calculate Age**.
- Validate both dates before calculation.
- Position as the visually primary action in the form.
- On valid submit:
  - calculate synchronously;
  - update result state;
  - announce completion;
  - reveal or update results;
  - animate a result transition subtly.
- On invalid submit:
  - do not display stale results;
  - show field errors;
  - move focus to the error summary or first invalid field;
  - keep values intact.
- Do not show a loading state for a local synchronous calculation longer than 100 ms.

### FR-04: Reset Action

- Label as **Reset** or **Clear**.
- Use a secondary, non-destructive style.
- Require no confirmation for the MVP.
- Clear Date of Birth.
- Restore Age at the Date to today's date.
- Clear result and error states.
- Move focus to Date of Birth.

### FR-05: Main Age Result

Display:

`X years, Y months, Z days`

- `X`, `Y`, and `Z` must be calendar-based integers.
- Use singular labels for 1, plural labels otherwise.
- Example: `32 years, 4 months, 8 days`.
- A compact fallback label may show `32y 4m 8d` for narrow cards, but the full phrase remains the primary accessible text.

### FR-06: Age as of Date

Display the selected target date in human-readable form, for example `Age as of November 21, 2026`.

### FR-07: Total Days

Display the total number of whole elapsed calendar days from the birth date to the target date.

### FR-08: Total Weeks

Display:

- A whole-week count.
- A remaining-day count, if meaningful.

Examples:

- `173 weeks` for 1,211 full days.
- `173 weeks, 0 days`.

Use full 7-day weeks plus remaining calendar days. Do not round to a month or year approximation.

### FR-09: Total Hours

Display the elapsed whole 24-hour periods as an integer.

- MVP assumes midnight-to-midnight local calendar dates.
- No DST conversion and no time-of-day inputs are required.
- Formula: total calendar days × 24.

### FR-10: Total Minutes

Display total elapsed hours × 60.

### FR-11: Total Seconds

Display total elapsed minutes × 60.

### FR-12: Next Birthday

Display a next-birthday date based on the selected target date.

- Find the next birthday on or after the target date.
- If the target date is the person's birthday, next birthday may be today, with a result of `0 days` and a birthday-today state.
- The next birthday is the next occurrence of the birth month and birth day.
- For a February 29 birth date:
  - in a non-leap year, apply the February 29 policy consistently:
    - preferred MVP behavior: use February 28 as the celebratory date;
    - preserve the displayed convention in the explanation.
  - in a leap year, use February 29.

### FR-13: Days Until Next Birthday

Display:

- `0 days` on a birthday.
- `X days` for the whole elapsed difference to the next birthday.
- A human-readable countdown label.

### FR-14: Calculation Explanation

Show:

- Target date and birth date.
- Calendar-based years, months, and days approach.
- How month boundaries and end-of-month dates are handled.
- Why the product is not using fixed 30-day months.

### FR-15: Frequently Asked Questions

Include questions for:

- What does exact age mean?
- How are leap years handled?
- How are February 29 birthdays handled?
- Why can month-end calculations be confusing?
- Does the calculator count total hours with daylight-saving changes?

Use concise answers and an accessible accordion pattern.

### FR-16: Optional Copy Result

If Phase 2 implementation includes Copy Result:

- Copy a text summary of the main result and selected target date.
- Preserve singular/plural text.
- Display a transient success notification.
- Revert control label after 2–3 seconds.
- Fail gracefully with a visible error state.

---

## 8. Calculation Rules

### 8.1 Date Representation

- All form values must be represented as local civil dates.
- Internally use a year, month, and day tuple or a validated date type.
- Do not calculate with JavaScript floating-point approximations or naive string arithmetic.
- Validate year, month, and day ranges before calculation.
- Do not treat a user-entered date such as `2023-02-29` as valid.

### 8.2 Calendar Breakdown

Calculate whole elapsed years, months, and days using calendar boundaries.

**Required algorithm behavior:**

1. Reject invalid input.
2. Validate that target date is on or after birth date.
3. Determine whole years by comparing the target date to the birth date.
4. Increment the year count until the next birthday would pass the target date.
5. Advance to the date after the completed year boundary.
6. Calculate whole months from that boundary using calendar months.
7. Calculate remaining whole days.

### 8.3 End-of-Month Rule

Use the reference-consistent **fixed-calendar-anchor method**:

- From February 28, 2022 to March 31, 2022:
  - the next anchor is March 28;
  - the result is 1 month and 3 days.
- Do not use a rule that automatically changes all February-end results to March-end.
- This rule is predictable for April 30, May 31, June 30, and equivalent cases.

**Month-by-month algorithm:**

1. Start with the birth date.
2. When calculating whole years, add the birth year's anniversary plus leap-safe month/day handling.
3. For each whole month, move from the current anchor to the same day in the next month.
4. If that day is invalid in the destination month, clamp to the final valid day of that month.
5. From the end of a month, preserve the original clamped anchor for subsequent month advancement where possible.
6. Remaining date difference is calculated in actual calendar days.

### 8.4 Month and Year Arithmetic

- January, March, May, July, August, October, and December have 31 days.
- April, June, September, and November have 30 days.
- February has 28 days or 29 in a leap year.
- Leap years are divisible by 4, except divisible by 100 unless divisible by 400.
- Leap-year rules must apply to the Gregorian calendar.

### 8.5 Total Units

Given validated birth date `B` and target date `T`:

- Total days = difference between civil dates in whole local calendar days.
- Total weeks = floor(total days / 7).
- Remaining days = total days modulo 7.
- Total hours = total days × 24.
- Total minutes = total days × 24 × 60.
- Total seconds = total days × 24 × 60 × 60.

No approximation may treat all months or years as fixed lengths.

### 8.6 Next Birthday

Define a birthday occurrence for a target date:

1. Use birth month and an effective birthday day.
2. For birth month February and birth day 29:
   - if the target or candidate year is a leap year, candidate day is 29;
   - otherwise, candidate day is 28.
3. Find this candidate in the target year's civil calendar.
4. If candidate is before or equal to the target date:
   - evaluate the following year.
5. The date is the next birthday.
6. If it equals the target date, countdown is 0.

The next-birthday label must state whether February 29 is observed on February 28 in common years.

### 8.7 Time Zone and DST

- The MVP does not accept time or zone inputs.
- Total units represent calendar elapsed duration.
- DST days must not change the count of calendar days.
- If a future implementation includes times, it must identify a timezone and DST policy before changing this requirement.

---

## 9. Input and Output Data Structures

### 9.1 Input State

| Field | Type | Required | Default | Constraints |
|---|---|---:|---|---|
| birthDate | ISO civil date string | Yes | Empty | Valid Gregorian date; on or before today; before or equal to target |
| targetDate | ISO civil date string | Yes | Today's local date | Valid Gregorian date; on or after birth date |

### 9.2 UI State

| State | Required Behavior |
|---|---|
| Idle | Empty birth date; target date default; no results; no errors |
| Editing | Values update; stale success state removed or clearly superseded |
| Validating | Field checks complete synchronously; no artificial delay |
| Invalid | Field errors and optional summary; no result cards |
| Success | Complete result state displayed |
| Reset | Idle state restored |
| Copy-success | Optional transient confirmation |
| Copy-error | Optional visible fallback |

### 9.3 Calculation Result

| Property | Type | Example |
|---|---|---|
| birthDate | ISO date | `1994-02-28` |
| targetDate | ISO date | `2026-11-21` |
| years | Integer >= 0 | `32` |
| months | Integer 0–11 | `8` |
| days | Integer 0–30 | `24` |
| totalDays | Integer >= 0 | `11939` |
| totalWeeks | Integer >= 0 | `1705` |
| remainingDays | Integer 0–6 | `4` |
| totalHours | Integer >= 0 | `286536` |
| totalMinutes | Integer >= 0 | `17,192,160` |
| totalSeconds | Integer >= 0 | `1,031,529,600` |
| nextBirthdayDate | ISO date | `2027-02-28` |
| daysUntilBirthday | Integer >= 0 | `99` |
| birthdayToday | Boolean | `false` |

**Formatting:** Internal calculations remain integers. Thousands separators are applied only for display.

---

## 10. Validation and Error Handling

| ID | Condition | Error Message | Field |
|---|---|---|---|
| VAL-01 | Birth date empty | `Enter your date of birth.` | Birth Date |
| VAL-02 | Target date empty | `Enter a date to calculate age at.` | Target Date |
| VAL-03 | Birth date is not a real date | `Enter a valid date of birth.` | Birth Date |
| VAL-04 | Target date is not a real date | `Enter a valid target date.` | Target Date |
| VAL-05 | Birth date is future relative to today | `Date of birth cannot be in the future.` | Birth Date |
| VAL-06 | Target date earlier than birth date | `Age-at date must be on or after the date of birth.` | Target Date |
| VAL-07 | February 29 invalid in common year | `Enter a valid calendar date.` | Relevant date |

### 10.1 Validation Behavior

- Validate on submit.
- Revalidate a field after its value changes if it previously had an error.
- Do not show future-birth or target-date errors before an explicit submit unless blur makes a clear validation failure.
- Show inline errors directly below the affected field.
- Use `aria-invalid="true"` and `aria-describedby` for each invalid field.
- Set focus to the error summary if more than one error, otherwise to the first invalid field.
- Preserve previously valid values.
- Never leave previous successful result cards visible as though they correspond to invalid input.

### 10.2 Empty State

- Show no dashboard cards before first valid calculation.
- The form area may show a concise helper card explaining the required inputs.
- The helper card must not compete visually with the primary form.

### 10.3 Loading State

- Calculation is synchronous and local.
- Do not display a spinner for normal calculations.
- Optional implementation may show a 150–300 ms button transition only if it does not imply network activity.
- Never block repeated submit attempts for invalid or long-form calculations.

### 10.4 Success State

- Show one unambiguous main age result.
- Group supporting totals in scannable cards.
- Announce the completion in a live region.
- Preserve form values.
- Do not hide the form by replacing it with results on desktop.

### 10.5 Error State

- Use a neutral red for validation only.
- Do not use alarming imagery or destructive wording.
- Clearly state the corrective action.
- Do not rely on color alone.

---

## 11. Screen Inventory

| ID | Screen/Section | Type | MVP |
|---|---|---|---|
| SCR-01 | Header / Navigation | Global | Yes |
| SCR-02 | Hero / Purpose Summary | Page section | Yes |
| SCR-03 | Age Calculator Form | Page section | Yes |
| SCR-04 | Results Dashboard | Page section | Yes |
| SCR-05 | Age Breakdown Card | Card component | Yes |
| SCR-06 | Total Metrics Grid | Card group | Yes |
| SCR-07 | Next Birthday Card | Card component | Yes |
| SCR-08 | Calculation Explanation | Page section | Yes |
| SCR-09 | Frequently Asked Questions | Page section | Yes |
| SCR-10 | Footer | Global | Yes |
| SCR-11 | Copy Success / Failure Feedback | Overlay/toast | Optional |
| SCR-12 | Privacy or About Modal/Page | Optional page | Optional |

---

## 12. Detailed Section Specifications

### 12.1 Header

**Purpose:** Establish product identity and provide minimal navigation.

**Required content:**

- Product name: a neutral brand name chosen during UI implementation; do not use “Calculator.net”.
- A small calculator icon or monogram.
- Optional navigation items: `Age Calculator`, `How it Works`, `FAQs`.
- A call-to-action is not required.

**Behavior:**

- Header remains in normal document flow or is lightly sticky on desktop.
- Navigation links move to in-page sections.
- Mobile uses a compact icon-only menu or a short horizontal navigation row.
- Mobile menu must expose all labels accessibly.

### 12.2 Hero Section

**Required content:**

- Eyebrow: `Exact age calculator`.
- Heading: `Calculate your exact age`.
- Short subheading: `Enter two dates to see your age in years, months, days, and total time units.`
- No promotional claims or unverified statistics.

**Desktop layout:**

- Heading and subheading may occupy the left or top center.
- Form appears directly below or in the adjacent right panel.

**Mobile layout:**

- Heading, subheading, and form stack.

### 12.3 Age Calculator Form

**Form fields:**

1. Date of Birth.
2. Calculate Age At.

**Desktop layout:**

- Two date fields in a 2-column grid.
- Calculate and Reset actions below or in a shared action row.

**Mobile layout:**

- Fields stack vertically.
- Primary Calculate button full-width.
- Reset button full-width or a text-style secondary button.
- Each date input has at least 48 px height.

**Field specification:**

- Label is permanently visible.
- Helper text appears only when needed.
- Native picker icon remains available.
- Placeholder text, where used, is visible and does not replace the label.
- Browser autocomplete may be disabled for birth date if privacy or UX requirements call for a fresh start.

### 12.4 Results Dashboard

**Desktop layout:**

- Main result card spans the top row.
- Metrics cards appear below in 2–3 columns.
- Next-birthday card appears as a highlighted compact card.

**Mobile layout:**

- Cards stack in one column.
- Metric values remain visible without horizontal scrolling.
- Main result uses a large, readable value.

**Behavior:**

- Hidden in idle and error states.
- Fades/slides in on first success.
- Updates in place on later valid submissions.
- Scrolls to or focuses the result heading for mobile submit.

### 12.5 Age Breakdown Card

**Required content:**

- Label: `Your exact age`.
- Main value: `X years, Y months, Z days`.
- Context: `As of [human-readable target date]`.
- Optional visual milestone marker, with no false-life-stage implication.

### 12.6 Total Metrics Grid

Minimum cards:

| Card | Label | Value | Secondary text |
|---|---|---|---|
| 1 | Total days | `[number]` | `days lived / elapsed` |
| 2 | Total weeks | `[number]` | `[remaining] remaining days` |
| 3 | Total hours | `[number]` | `based on calendar days` |
| 4 | Total minutes | `[number]` | `converted from elapsed days` |
| 5 | Total seconds | `[number]` | `whole elapsed units` |

**Optional card:** Years/months/days already shown by main card.

### 12.7 Next Birthday Card

**Required content:**

- Label: `Next birthday`.
- Human-readable date.
- Countdown: `[X] days until birthday`.
- Birthday-today state: `Happy birthday! 0 days to go`.
- Short note for February 29 births.

### 12.8 Calculation Explanation

**Required content:**

- Heading: `How this result is calculated`.
- Three short steps:
  1. Compare birth date with target date.
  2. Count whole calendar years and months.
  3. Count remaining days and convert the total into units.
- Month-end rule with a real example.
- Link or anchor to February 29 FAQ.

### 12.9 FAQ Section

- Use one heading and accessible accordion rows.
- Default to all collapsed or first FAQ expanded.
- Each row has a button with chevron and `aria-expanded`.
- Answers remain in the DOM or are correctly linked; do not rely on hover.

### 12.10 Footer

**Required content:**

- Product name.
- Short privacy statement, for example `Your dates stay in your browser.`
- Optional links: About, Privacy, Terms.
- Copyright year.

**Privacy requirement:** No birth date should be submitted to a backend or persisted remotely by the MVP.

---

## 13. Component Inventory

### 13.1 Required Components

| Component | Variants/States |
|---|---|
| AppHeader | Default, mobile menu open |
| BrandLogo | Header, footer |
| SectionHeading | Small, large |
| DateField | Empty, entered, focus, hover, invalid, disabled |
| Button | Primary calculate, secondary reset, icon-only optional |
| ErrorSummary | Hidden, 1 error, multiple errors |
| FieldError | Hidden/visible |
| ResultHeroCard | Idle, loading not used, success |
| MetricCard | Day, week, hour, minute, second |
| BirthdayCard | Future countdown, birthday-today |
| EmptyState | Initial form area |
| FAQAccordion | Collapsed, expanded |
| Toast/StatusMessage | Success, error |
| Footer | Desktop, mobile |

### 13.2 Component Hierarchy

```text
Page
├── Header
│   ├── Brand
│   └── Navigation
├── Main
│   ├── Hero
│   ├── CalculatorSection
│   │   ├── ErrorSummary
│   │   ├── DateField — Birth
│   │   ├── DateField — Target
│   │   └── ActionRow
│   │       ├── PrimaryButton — Calculate
│   │       └── SecondaryButton — Reset
│   ├── ResultsDashboard
│   │   ├── MainAgeCard
│   │   ├── MetricsGrid
│   │   │   └── MetricCard × 5
│   │   └── NextBirthdayCard
│   ├── CalculationExplanation
│   └── FAQSection
│       └── FAQAccordion
└── Footer
```

---

## 14. Interaction Specifications

| Trigger | Expected Behavior |
|---|---|
| Tab enters Date of Birth | Field receives visible keyboard focus |
| Date value is selected | Field updates, invalid state clears after field-level revalidation |
| Tab enters Age at Date | Field receives visible keyboard focus |
| Press Enter in date field | Submits form if no modal/native picker conflict |
| Calculate activation | Validates, calculates, updates or reveals result |
| Reset activation | Clears birth date, resets target to today, removes results/errors |
| Escape in date picker | Closes native picker and leaves field |
| Invalid submit | Moves focus to summary or first invalid field |
| Successful submit | Announces result and reveals dashboard |
| Repeated valid submit | Updates existing dashboard without duplicate cards |
| FAQ row activation | Expands/collapses answer; updates chevron and ARIA state |

---

## 15. UI and Visual System

### 15.1 Visual Direction

- Modern, calm, trustworthy, and task-focused.
- Avoid decorative imagery that competes with date entry.
- Use a soft neutral page background and clear white or pale elevated surfaces.
- Use a restrained accent color for primary actions and active states.
- Avoid gradients, crowded cards, stock avatars, and countdown gimmicks.

### 15.2 Typography

- Use a modern, legible sans-serif family.
- Body: 16 px minimum.
- Labels: 14–16 px, medium or semibold.
- Main age result: 32–44 px desktop, 28–36 px mobile.
- Metric values: 24–32 px.
- Line heights:
  - Headings: 1.1–1.2.
  - Body: 1.5.
- Use tabular numerals for numeric values.

### 15.3 Color Palette

The final implementation should define exact tokens, but recommended roles:

| Role | Suggested Attribute |
|---|---|
| Page background | Soft warm neutral or cool gray |
| Surface | White or near-white |
| Primary text | Deep neutral |
| Secondary text | Medium neutral |
| Primary accent | Accessible blue or teal |
| Primary button text | White |
| Success | Deep green or accent success variant |
| Error | Strong red meeting contrast |
| Border | Light neutral |
| Focus ring | High-contrast accent ring with offset |

Every text/background combination must meet WCAG 2.2 AA contrast requirements.

### 15.4 Spacing

- Use a 4 px or 8 px spacing scale.
- Cards use 20–32 px padding.
- Page sections use 64–96 px vertical spacing desktop and 40–56 px mobile.
- Form field spacing is 16–20 px.
- Action spacing is 12–16 px.

### 15.5 Radius and Elevation

- Buttons: 10–12 px radius.
- Cards: 16–20 px radius.
- Inputs: 10–12 px radius.
- Use shallow borders plus subtle shadow; avoid large diffuse shadows.

### 15.6 Motion

- Use 150–250 ms transitions.
- Animate opacity and vertical translation only.
- Respect `prefers-reduced-motion`.
- Do not animate live numeric values unless each value remains accessible.
- Do not use perpetual motion or distracting celebration effects.

---

## 16. Responsive Layout

| Breakpoint | Viewport | Layout |
|---|---|---|
| Small mobile | 320–479 px | 1 column; full-width inputs and buttons; 16 px page padding |
| Large mobile | 480–639 px | 1 column; 20 px page padding |
| Tablet | 640–767 px | 1 column form or 2-column date fields if width permits |
| Small desktop | 768–1023 px | 2-column date fields; 2-column metric grid |
| Desktop | 1024–1439 px | Main form and results dashboard with up to 3 metric columns |
| Wide desktop | >= 1440 px | Centered 1180–1280 px content width |

### 16.1 Responsive Rules

- No horizontal page scroll.
- Results cards wrap rather than become tiny.
- Main result wraps naturally.
- Target and birth dates use full label/field width on narrow screens.
- Date picker must remain usable without overflowing.
- Footer links wrap and stack as needed.
- Header navigation must not cover page content.

---

## 17. Accessibility Requirements

### 17.1 WCAG Conformance

- Target WCAG 2.2 AA.
- Accessible name for every form field.
- Visible focus indicator on all controls.
- Keyboard operability for all links, buttons, fields, and accordion rows.
- Do not rely on color for errors or success.
- Preserve accessible reading order in responsive layouts.

### 17.2 Semantic Structure

- One H1 in the page.
- H2 for calculator, results, explanation, and FAQ sections.
- H3 for cards or accordion groups where needed.
- Use `<form>` for submission behavior.
- Use `<label>` for date inputs.
- Use `<button type="submit">` for calculation.
- Use `<button type="button">` for reset.

### 17.3 ARIA and Live Regions

- Add `aria-live="polite"` to a visually hidden result-announcement region.
- Add `role="alert"` or a summary status only for submission errors.
- Add `aria-invalid="true"` and `aria-describedby` to invalid fields.
- Use `aria-expanded` and `aria-controls` for FAQ and optional mobile navigation.

### 17.4 Focus Behavior

- Initial load does not steal focus.
- Reset moves focus to Date of Birth.
- Invalid submit moves focus to error summary or first invalid field.
- Successful submit may move focus to result heading on mobile but must not create a disruptive desktop scroll.
- Closing a menu returns focus to the menu trigger.

### 17.5 Screen Reader Output

The live result should include, at minimum:

`Calculation complete. Exact age is [full result] as of [target date].`

Each metric card label must be read with its value.

---

## 18. Performance Requirements

- Initial page content should become usable within 2 seconds on a mid-tier mobile connection.
- JavaScript bundle for the MVP should remain as small as practical.
- Calculation should complete locally in under 100 ms.
- UI update and result paint should complete in under 500 ms.
- No remote API should be required for core calculation.
- Page layout must not shift significantly when results appear.
- Images should be optional and use intrinsic dimensions or CSS placeholders.

---

## 19. Browser Compatibility

Support current stable versions of:

- Chrome
- Edge
- Firefox
- Safari
- Safari on iOS
- Chrome on Android

Support reasonable fallback behavior for date inputs where a native date picker is unavailable:

- Use ISO-safe text entry.
- Validate and normalize input.
- Provide clear `YYYY-MM-DD` or locale-specific guidance.
- Do not use a custom picker that traps keyboard focus.

---

## 20. Functional Dependencies

The MVP has no required backend dependency.

**Local browser dependencies:**

- Date parsing.
- Calendar validation.
- Local date handling.
- Responsive CSS.
- Optional analytics must not collect birth dates.

**Optional future dependencies:**

- Copy API or fallback clipboard.
- Local storage for history.
- Download/print API.
- Sharing API.

---

## 21. Privacy and Security

- Birth dates and target dates must remain in browser memory for the MVP.
- Do not send date values to analytics or third-party systems.
- Do not persist values in local storage unless the user opts in to history.
- Do not include entered dates in URL query parameters unless sharing is explicitly enabled.
- Do not expose data in browser console logs or telemetry.
- Reset must remove results and input values from visible UI; optional local history must have a separate clear action.

---

## 22. Edge Cases and Business Rules

### 22.1 Required Edge Cases

| ID | Scenario | Required Behavior |
|---|---|---|
| EC-01 | Birth date equals target date | Main age 0 years, 0 months, 0 days; totals 0 |
| EC-02 | Birth date is tomorrow | Invalid: future birth date |
| EC-03 | Target date before birth date | Invalid target date |
| EC-04 | Target date in future | Calculate normally |
| EC-05 | Birth date in leap year, non-leap target | Calendar rules apply |
| EC-06 | Feb. 29 birth, Feb. 28 common-year target | Use Feb. 28 observation policy |
| EC-07 | Feb. 29 birth, Feb. 29 leap-year target | 0 years? Recalculate by anniversary |
| EC-08 | Birth Jan. 31 to Feb. 28 | One month plus remaining-day rule according to clamped anchor |
| EC-09 | Birth Feb. 28 to Mar. 31 | 1 month, 3 days |
| EC-10 | Birth Feb. 29 to Feb. 28 common year | 1? or 0? based on exact anniversary policy |
| EC-11 | Birth Apr. 30 to May 31 | 1 month, 1 day under fixed-anchor rule |
| EC-12 | Birth Apr. 30 to Jun. 30 | 2 months, 0 days |
| EC-13 | Invalid day for month | Rejected by date validation |
| EC-14 | First day vs. last day of month | Calendar arithmetic, no fixed month lengths |
| EC-15 | DST transition during interval | Calendar-day count unchanged |
| EC-16 | Very old birth date | Valid if date is supported by Gregorian implementation and not beyond UI constraints |
| EC-17 | Very future target date | Valid if on/after birth date |
| EC-18 | Daylight saving and 23/25-hour civil days | MVP uses 24 hours per calendar day |
| EC-19 | Target date today | Current local date and next-birthday countdown computed today |

### 22.2 Birth-Date/Target-Date Validation

- Birth date cannot be in the future relative to the local current date.
- Target date may be in the future relative to today.
- Target date cannot precede birth date.
- Empty values receive field-specific errors.
- Invalid strings are rejected, not partially parsed.

### 22.3 Long-Range Dates

- The UI should support common legal, personal, and planning dates.
- A reasonable minimum year may be configured, such as 1900, only with explicit product approval.
- The MVP should not silently show an arbitrary limit.
- The implementation must not overflow standard integer ranges for realistic life spans.

---

## 23. Acceptance Criteria

### AC-01: Normal Birth Date

**Given** birth date `1994-11-21` and target date `2026-11-21`.  
**When** the user calculates.  
**Then** the main age is `32 years, 0 months, 0 days`.  
**And** total days equal the exact number of calendar days from birth to target.

### AC-02: Different Month Length

**Given** birth date `2024-01-31` and target date `2024-03-31`.  
**When** the user calculates.  
**Then** the result follows the clamped calendar-anchor month rule.  
**And** the total result is not based on 30-day months.

### AC-03: Leap Year

**Given** birth date `2020-02-29` and target date `2024-02-29`.  
**When** the user calculates.  
**Then** the main age is `4 years, 0 months, 0 days`.

### AC-04: February 28 in a Common Year

**Given** birth date `2020-02-29` and target date `2023-02-28`.  
**When** the user calculates.  
**Then** the product observes the February 29 policy consistently and states that February 28 is used in common years.  
**And** no invalid February 29 date is created.

### AC-05: Birthday on Target Date

**Given** birth date `2000-06-15` and target date `2026-06-15`.  
**When** the user calculates.  
**Then** the next-birthday state is today or 0 days.  
**And** next birthday means the next annual occurrence only if today's state is presented separately.

### AC-06: End-of-Month Rule

**Given** birth date `2022-02-28` and target date `2022-03-31`.  
**When** the user calculates.  
**Then** the calendar breakdown is `1 month, 3 days` under the fixed-anchor month rule.  
**And** the explanation identifies the selected convention.

### AC-07: April 30 to May 31

**Given** birth date `2024-04-30` and target date `2024-05-31`.  
**When** the user calculates.  
**Then** the result is `1 month, 1 day` under the fixed-anchor rule.

### AC-08: April 30 to June 30

**Given** birth date `2024-04-30` and target date `2024-06-30`.  
**When** the user calculates.  
**Then** the result is `2 months, 0 days`.

### AC-09: Empty Birth Date

**Given** an empty Date of Birth.  
**When** the user activates Calculate.  
**Then** no result is displayed.  
**And** `Enter your date of birth.` is shown.

### AC-10: Empty Target Date

**Given** a valid birth date and an empty target date.  
**When** the user activates Calculate.  
**Then** no result is displayed.  
**And** `Enter a date to calculate age at.` is shown.

### AC-11: Future Birth Date

**Given** a birth date later than today's local date.  
**When** the user calculates.  
**Then** no result is displayed.  
**And** `Date of birth cannot be in the future.` is shown.

### AC-12: Target Before Birth

**Given** birth date `2024-10-10` and target date `2024-10-09`.  
**When** the user calculates.  
**Then** no result is displayed.  
**And** `Age-at date must be on or after the date of birth.` is shown.

### AC-13: Invalid Calendar Date

**Given** `2023-02-29` as an entered date.  
**When** the user submits.  
**Then** it is rejected as invalid.  
**And** no result is displayed.

### AC-14: Same-Date Calculation

**Given** identical birth and target dates.  
**When** the user calculates.  
**Then** all totals are zero.  
**And** next-birthday countdown is zero only if the date is the person's birthday.

### AC-15: Default Target Date

**Given** the user loads or resets the application.  
**When** no target date override is made.  
**Then** Age at the Date equals today's local calendar date.

### AC-16: Reset

**Given** a successful result and entered values.  
**When** the user activates Reset.  
**Then** birth date is empty.  
**And** target date equals today.  
**And** results and errors are removed.  
**And** focus moves to Date of Birth.

### AC-17: Total Unit Conversion

**Given** a valid interval of 10 calendar days.  
**When** the user calculates.  
**Then** total weeks is `1 week, 3 days`.  
**And** total hours is `240`, minutes `14,400`, and seconds `864,000`.

### AC-18: DST Edge

**Given** an interval spanning a daylight-saving change.  
**When** the user calculates.  
**Then** total calendar days remain based on date differences.  
**And** the result must not change the calendar month/day breakdown due to DST.

### AC-19: Keyboard Flow

**Given** a keyboard-only user.  
**When** the user tabs through the form, calculates, resets, and opens FAQs.  
**Then** every control has a visible focus state.  
**And** no control requires a pointer.

### AC-20: Mobile Layout

**Given** a 320 px viewport.  
**When** idle and success states are shown.  
**Then** no horizontal page overflow occurs.  
**And** all controls and values are readable.

### AC-21: Successful Result Announcement

**Given** a valid result.  
**When** calculation completes.  
**Then** a live-region announcement includes the full main age and target date.

### AC-22: Next Birthday

**Given** a valid birth date and target date.  
**When** the user calculates.  
**Then** the next birthday is not earlier than the target date.  
**And** days until it equal the exact civil-date difference.

---

## 24. UI States

| State | Visual Requirements |
|---|---|
| Idle | Form visible; results hidden; target date default |
| Editing | Entered values visible; stale result maybe remains but marked as superseded or removed |
| Invalid submit | Inline red errors; error summary; stale result hidden |
| Valid submit | Main result and cards visible; live region announced |
| Reset | Empty birth field; target today; no result; focus birth field |
| Loading | No artificial loading; optional button pressed state |
| Copy success | Optional toast; label changes briefly |
| Copy failure | Optional visible inline error and fallback text |
| FAQ collapsed | Chevron down; answer hidden |
| FAQ expanded | Chevron up; answer visible |

---

## 25. SEO and Content Requirements

- Page title: `Age Calculator - Calculate Exact Age`.
- H1: `Age Calculator`.
- Include a concise meta description describing exact age calculations.
- Use descriptive heading hierarchy.
- Do not keyword-stuff.
- FAQ content may use standard FAQ structured data only if content remains visible and accurate.
- Avoid claims that the calculator provides legal or official age determinations.

---

## 26. Analytics and Measurement — Optional

If approved:

- Track Calculate button activation with no date values.
- Track validation error categories with no personally identifying values.
- Track reset activation.
- Track FAQ expansion.
- Do not record birth dates or target dates.
- Use privacy-preserving aggregate events only.

---

## 27. MVP Implementation Checklist

1. Build semantic page shell.
2. Implement Date of Birth and target date fields.
3. Set target date to current local date.
4. Implement validation.
5. Implement calendar breakdown.
6. Implement totals.
7. Implement next birthday.
8. Build main result card.
9. Build metrics grid.
10. Build month-end and leap-year explanation.
11. Build FAQ section.
12. Implement responsive layout.
13. Implement keyboard and screen-reader behavior.
14. Test required acceptance cases.
15. Verify browser compatibility.
16. Verify no date data leaves the browser.

---

## 28. Open Questions for Final UI Implementation

The following details do not block a UI-plan, but must be resolved in a product implementation pass:

1. Should the February 29 policy use February 28 or the last day of February in all common years? The PRD recommends February 28.
2. What is the final brand name and brand voice?
3. Are About, Privacy, and Terms pages required?
4. Is Copy Result included in MVP or Phase 2?
5. Is future target-date selection always allowed?
6. Is a minimum supported year required?
7. Should long-lived values use abbreviations on very narrow screens?

---

## 29. Final Requirement Summary

The delivered application must:

- Be original and visually distinct from the reference.
- Provide a two-date, exact-age calculation.
- Default the target date to today.
- Use real Gregorian calendar rules.
- Never treat a month or year as a fixed average length.
- Handle leap years and end-of-month dates consistently.
- Display complete main and supporting results.
- Provide clear next-birthday information.
- Validate every major invalid input combination.
- Deliver a mobile-first, responsive, accessible experience.
- Keep the core calculation fully local and private.
- Include implementation-ready components, states, flows, and acceptance criteria.
