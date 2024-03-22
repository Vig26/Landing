export const changeDateFormat = (date, format, delimeter = "-") => {
  switch (format) {
    case "DDMMYYYY":
      return convertDDMMYYYY(date, delimeter);
    case "YYYYMMDD":
      return;
    default:
  }
};

const convertDDMMYYYY = (date, delimeter) => {
  if (date !== "") {
    const arr = date.split(delimeter);
    return `${arr[2]}${delimeter}${arr[1]}${delimeter}${arr[0]}`;
  } else {
    return undefined;
  }
};

const convertYYYYMMDD = (date, delimeter) => {
  if (date !== "") {
    const arr = date.split(delimeter);
    return `${arr[0]}${delimeter}${arr[1]}${delimeter}${arr[2]}`;
  } else {
    return undefined;
  }
};
