const renderLabel = (label, lang, data) => {
  switch (lang) {
    case "ADDRESS":
      return data.find((item) => item.fieldName === label)?.english;
    case "ADDRESS_TAMIL":
      return data.find((item) => item.fieldName === label)?.tamil;
    case "PERINFO":
      return data.find((item) => item.fieldName === label)?.english;
    case "PERINFO_TAMIL":
      return data.find((item) => item.fieldName === label)?.tamil;
    default:
      break;
  }
}

export default renderLabel;