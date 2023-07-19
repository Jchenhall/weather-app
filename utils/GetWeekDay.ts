export const getWeekday = (s: any) => {
  const [yyyy, mm, dd] = s.split("-"),
    date = new Date(yyyy, mm - 1, dd);
  return date.toLocaleDateString("en-Uk", { weekday: "short" });
};
