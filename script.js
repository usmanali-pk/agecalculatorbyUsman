"use strict";

const birthDateInput = document.getElementById("birth-date");
const targetDateInput = document.getElementById("target-date");
const form = document.querySelector(".age-form");
const resetButton = document.getElementById("reset-button");
const errorSummary = document.querySelector(".error-summary");
const errorSummaryList = document.querySelector(".error-summary__list");
const results = document.getElementById("results");
const statusMessage = document.getElementById("status-message");

const birthError = document.getElementById("birth-date-error");
const targetError = document.getElementById("target-date-error");

const mainAgeValue = document.getElementById("main-age-value");
const ageAsOf = document.getElementById("age-as-of");
const totalDaysValue = document.getElementById("total-days-value");
const totalWeeksValue = document.getElementById("total-weeks-value");
const remainingDaysDetail = document.getElementById("remaining-days-detail");
const totalHoursValue = document.getElementById("total-hours-value");
const totalMinutesValue = document.getElementById("total-minutes-value");
const totalSecondsValue = document.getElementById("total-seconds-value");
const nextBirthdayDate = document.getElementById("next-birthday-date");
const birthdayCountdown = document.getElementById("birthday-countdown");
const februaryNote = document.getElementById("february-note");
const shareWhatsapp = document.getElementById("share-whatsapp");
const shareGmail = document.getElementById("share-gmail");
const copyResultButton = document.getElementById("copy-result");
let currentShareText = "";

const DAY_MS = 24 * 60 * 60 * 1000;

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatIsoDate(date) {
  return `${date.year}-${pad(date.month)}-${pad(date.day)}`;
}

function parseIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);

  if (year < 1 || month < 1 || month > 12 || day < 1) {
    return null;
  }

  const test = new Date(Date.UTC(year, month - 1, day));
  if (
    test.getUTCFullYear() !== year ||
    test.getUTCMonth() !== month - 1 ||
    test.getUTCDate() !== day
  ) {
    return null;
  }

  return { year, month, day };
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInMonth(year, month) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function compareDates(left, right) {
  if (left.year !== right.year) return left.year - right.year;
  if (left.month !== right.month) return left.month - right.month;
  return left.day - right.day;
}

function civilDateToUtc(date) {
  return Date.UTC(date.year, date.month - 1, date.day);
}

function utcToCivilDate(timestamp) {
  const date = new Date(timestamp);
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate()
  };
}

function totalCalendarDays(start, end) {
  return Math.round((civilDateToUtc(end) - civilDateToUtc(start)) / DAY_MS);
}

function effectiveBirthday(year, birth) {
  if (birth.month === 2 && birth.day === 29) {
    return {
      year,
      month: 2,
      day: isLeapYear(year) ? 29 : 28
    };
  }

  return {
    year,
    month: birth.month,
    day: birth.day
  };
}

function addMonthClamped(date) {
  const nextMonthIndex = date.month === 12 ? 1 : date.month + 1;
  const nextYear = date.month === 12 ? date.year + 1 : date.year;
  const nextDay = Math.min(date.day, daysInMonth(nextYear, nextMonthIndex));

  return {
    year: nextYear,
    month: nextMonthIndex,
    day: nextDay
  };
}

function calculateAge(birth, target) {
  let years = 0;
  let anchor = { year: birth.year, month: birth.month, day: birth.day };

  while (true) {
    const nextAnchor = effectiveBirthday(anchor.year + 1, birth);
    if (compareDates(nextAnchor, target) > 0) break;
    years += 1;
    anchor = nextAnchor;
  }

  let months = 0;
  while (true) {
    const nextAnchor = addMonthClamped(anchor);
    if (compareDates(nextAnchor, target) > 0) break;
    months += 1;
    anchor = nextAnchor;
  }

  const days = totalCalendarDays(anchor, target);
  const totalDays = totalCalendarDays(birth, target);
  const wholeWeeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;

  return {
    years,
    months,
    days,
    totalDays,
    wholeWeeks,
    remainingDays,
    totalHours: totalDays * 24,
    totalMinutes: totalDays * 24 * 60,
    totalSeconds: totalDays * 24 * 60 * 60
  };
}

function calculateNextBirthday(birth, target) {
  let candidate = effectiveBirthday(target.year, birth);

  if (compareDates(candidate, target) < 0) {
    candidate = effectiveBirthday(target.year + 1, birth);
  }

  return {
    date: candidate,
    days: totalCalendarDays(target, candidate)
  };
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatHumanDate(date) {
  const utcDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(utcDate);
}

function plural(value, singular, pluralForm) {
  return `${value} ${value === 1 ? singular : pluralForm}`;
}

function getTodayCivilDate() {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };
}

function setTodayAsTarget() {
  targetDateInput.value = formatIsoDate(getTodayCivilDate());
}

function clearFieldError(input, errorElement) {
  input.removeAttribute("aria-invalid");
  errorElement.textContent = "";
  errorElement.hidden = true;
}

function setFieldError(input, errorElement, message) {
  input.setAttribute("aria-invalid", "true");
  errorElement.textContent = message;
  errorElement.hidden = false;
}

function clearValidation() {
  clearFieldError(birthDateInput, birthError);
  clearFieldError(targetDateInput, targetError);
  errorSummary.hidden = true;
  errorSummaryList.replaceChildren();
}

function hideResults() {
  results.hidden = true;
}

function showValidationSummary(errors) {
  errorSummaryList.replaceChildren();

  errors.forEach((error) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${error.input.id}`;
    link.textContent = error.message;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      error.input.focus();
    });
    item.append(link);
    errorSummaryList.append(item);
  });

  errorSummary.hidden = false;

  if (errors.length === 1) {
    errors[0].input.focus();
  } else {
    errorSummary.focus?.();
  }
}

function validateDates() {
  clearValidation();
  hideResults();

  const errors = [];
  const birthText = birthDateInput.value;
  const targetText = targetDateInput.value;
  const birth = parseIsoDate(birthText);
  const target = parseIsoDate(targetText);
  const today = getTodayCivilDate();

  if (!birthText) {
    setFieldError(birthDateInput, birthError, "Enter your date of birth.");
    errors.push({
      input: birthDateInput,
      message: "Enter your date of birth."
    });
  } else if (!birth) {
    setFieldError(birthDateInput, birthError, "Enter a valid date of birth.");
    errors.push({
      input: birthDateInput,
      message: "Enter a valid date of birth."
    });
  } else if (compareDates(birth, today) > 0) {
    setFieldError(
      birthDateInput,
      birthError,
      "Date of birth cannot be in the future."
    );
    errors.push({
      input: birthDateInput,
      message: "Date of birth cannot be in the future."
    });
  }

  if (!targetText) {
    setFieldError(targetDateInput, targetError, "Enter a date to calculate age at.");
    errors.push({
      input: targetDateInput,
      message: "Enter a date to calculate age at."
    });
  } else if (!target) {
    setFieldError(targetDateInput, targetError, "Enter a valid target date.");
    errors.push({
      input: targetDateInput,
      message: "Enter a valid target date."
    });
  } else if (birth && compareDates(target, birth) < 0) {
    setFieldError(
      targetDateInput,
      targetError,
      "Age-at date must be on or after the date of birth."
    );
    errors.push({
      input: targetDateInput,
      message: "Age-at date must be on or after the date of birth."
    });
  }

  if (errors.length) {
    showValidationSummary(errors);
    return null;
  }

  return { birth, target };
}

function renderResult(birth, target) {
  const age = calculateAge(birth, target);
  const birthday = calculateNextBirthday(birth, target);
  const mainText =
    `${plural(age.years, "year", "years")}, ` +
    `${plural(age.months, "month", "months")}, ` +
    `${plural(age.days, "day", "days")}`;

  mainAgeValue.textContent = mainText;
  ageAsOf.textContent = `As of ${formatHumanDate(target)}`;
  totalDaysValue.textContent = formatNumber(age.totalDays);
  totalWeeksValue.textContent = formatNumber(age.wholeWeeks);
  remainingDaysDetail.textContent =
    `${plural(age.remainingDays, "remaining day", "remaining days")}`;
  totalHoursValue.textContent = formatNumber(age.totalHours);
  totalMinutesValue.textContent = formatNumber(age.totalMinutes);
  totalSecondsValue.textContent = formatNumber(age.totalSeconds);

  nextBirthdayDate.textContent = formatHumanDate(birthday.date);
  if (birthday.days === 0) {
    birthdayCountdown.textContent = "Happy birthday! 0 days to go";
  } else {
    birthdayCountdown.textContent =
      `${plural(birthday.days, "day", "days")} until your birthday`;
  }

  februaryNote.hidden = !(birth.month === 2 && birth.day === 29);
  currentShareText =
    `Age Calculator result: ${mainText}. ` +
    `As of ${formatHumanDate(target)}. ` +
    `Total days: ${formatNumber(age.totalDays)}. ` +
    `Next birthday: ${formatHumanDate(birthday.date)} ` +
    `(${plural(birthday.days, "day", "days")} away).`;

  shareWhatsapp.href =
    `https://wa.me/?text=${encodeURIComponent(currentShareText)}`;
  shareGmail.href =
    `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent("My Age Calculator result")}` +
    `&body=${encodeURIComponent(currentShareText)}`;

  results.hidden = false;

  statusMessage.textContent =
    `Calculation complete. Exact age is ${mainText} as of ${formatHumanDate(target)}.`;

  if (window.matchMedia("(max-width: 639px)").matches) {
    document.getElementById("results-heading").scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const values = validateDates();
  if (values) {
    renderResult(values.birth, values.target);
  }
});

resetButton.addEventListener("click", () => {
  form.reset();
  birthDateInput.value = "";
  setTodayAsTarget();
  clearValidation();
  hideResults();
  statusMessage.textContent = "Calculator reset.";
  birthDateInput.focus();
});

birthDateInput.addEventListener("input", () => {
  if (birthDateInput.hasAttribute("aria-invalid")) {
    const birth = parseIsoDate(birthDateInput.value);
    const today = getTodayCivilDate();

    if (
      birth &&
      compareDates(birth, today) <= 0
    ) {
      clearFieldError(birthDateInput, birthError);
      birthDateInput.removeAttribute("aria-invalid");
    }
  }
  hideResults();
});

targetDateInput.addEventListener("input", () => {
  if (targetDateInput.hasAttribute("aria-invalid")) {
    const birth = parseIsoDate(birthDateInput.value);
    const target = parseIsoDate(targetDateInput.value);

    if (target && (!birth || compareDates(target, birth) >= 0)) {
      clearFieldError(targetDateInput, targetError);
    }
  }
  hideResults();
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const answer = document.getElementById(button.getAttribute("aria-controls"));

    button.setAttribute("aria-expanded", String(!expanded));
    answer.hidden = expanded;
  });

  copyResultButton.addEventListener("click", async () => {
    if (!currentShareText) return;

    try {
      await navigator.clipboard.writeText(currentShareText);
      copyResultButton.textContent = "Copied";
      statusMessage.textContent = "Age calculator result copied.";
      window.setTimeout(() => {
        copyResultButton.textContent = "Copy";
      }, 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = currentShareText;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();

      if (copied) {
        copyResultButton.textContent = "Copied";
        statusMessage.textContent = "Age calculator result copied.";
        window.setTimeout(() => {
          copyResultButton.textContent = "Copy";
        }, 2000);
      } else {
        statusMessage.textContent =
          "Copy failed. Select and copy the result manually.";
      }
    }
  });
});

setTodayAsTarget();
