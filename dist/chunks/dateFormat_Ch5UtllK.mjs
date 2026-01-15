import { format } from 'date-fns';

function dateFormat(dateInput) {
  if (!dateInput) return "No date";
  let date;
  if (typeof dateInput === "string") {
    date = new Date(dateInput);
  } else {
    date = dateInput;
  }
  if (isNaN(date.getTime())) return "Invalid date";
  return format(date, "dd MMM yyyy");
}

export { dateFormat as d };
