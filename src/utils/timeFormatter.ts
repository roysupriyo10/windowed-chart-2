import { Time } from "lightweight-charts";

const weekdays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const timeFormatter = (timestamp: Time) => {
  if (typeof timestamp !== 'number') return "";

  const dateObj = new Date((timestamp * 1000));
  const weekday = weekdays[dateObj.getDay()];
  const date = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const smallYear = dateObj.getFullYear().toString().slice(2, 5);
  const timeHrsMin = `${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`;
  return `${weekday} ${date} ${month} '${smallYear} ${timeHrsMin}`;
};
