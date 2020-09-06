export const detectMobile = () => {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

export const getDayFromDate = date => {
  const stdDate =
    date.substring(0, 4) +
    "-" +
    date.substring(4, 6) +
    "-" +
    date.substring(6, 8);
  const d = new Date(stdDate);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[d.getDay()];
};

export const getDatesArray = result => {
  let dates = {};
  let index = 0;
  let selectedDate = 0;
  Object.keys(result).forEach(key => {
    dates[key] = {
      day: getDayFromDate(key),
      date: parseInt(key.slice(-2)),
      index: index
    };
    if (index === 0) {
      selectedDate = key;
    }
    index++;
  });
  return { selectedDate, dates };
};

export const getFormattedTime = timeString => {
  let H = +timeString.substr(0, 2);
  let h = H % 12 || 12;
  let ampm = H < 12 ? "AM" : "PM";
  return h + ":" + timeString.substr(2, 3) + " " + ampm;
};
