export function getYearAndMonth() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.toLocaleString("default", { month: "long" });

  return { year, month };
}

export function getLastDayOfMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  return new Date(year, month + 1, 0);
}

export function getMiddleOfNextMonth() {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth() + 1, 15);
}

export function formatDate(date: Date) {
  const f = new Intl.DateTimeFormat("default", { dateStyle: "medium" });

  return f.format(date);
}
