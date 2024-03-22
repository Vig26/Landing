export const convertDateObject = (val) => {
  let d = new Date(val);
  return d;
};

export const getCreatedTime = (val) => {
  const d = convertDateObject(val);
  return d.getTime();
};
