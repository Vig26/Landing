const pickColor = (val) => {
  switch (val) {
    case "Rejected":
      return {
        btnBg: "#FFF7F7",
        color: "#FF0505",
        contentBg: "#fffcfc",
      };
    case "Approved":
      return {
        btnBg: "#F8FBFD",
        color: "#0584F2",
        contentBg: "#f8fbfd",
      };
    default:
      return {
        btnBg: "#FFFCF7",
        color: "#FFC13B",
        contentBg: "#FFFCF7",
      };
  }
};

export default pickColor;
