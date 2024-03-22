const months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const convertDate = (str) => {
  let date = new Date(str);
  // console.log("date", str);
  // let m = date.getMonth();
  // let y = date.getFullYear();
  // let d = date.getDate();
  // let h = date.getHours();
  // let minutes = date.getMinutes();
  // let time = "A.M.";

  // if (h > 12) {
  //   h = h - 12;
  //   time = "P.M.";
  // }

  // let dateString = `${d} ${months[m]} ${y}, ${h}:${minutes} ${time}`;
  const dateString = str.substr(0, 10);

  return dateString;
};

export default convertDate;
