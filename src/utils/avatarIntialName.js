const avatarName = (str) => {
  let arr = str.split(" ");
  return `${arr[0] ? arr[0].charAt(0) : ""}${
    arr[1] ? arr[1].charAt(0) : ""
  }`.trim();
};
export default avatarName;
