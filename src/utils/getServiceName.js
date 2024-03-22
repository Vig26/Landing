const getServiceName = (code) => {
  switch (code) {
    case "REV-102":
      return "Nativity certificate";
    case "REV-103":
      return "Income Certificate";
    case "REV-101":
      return "Community Certificate";
    case "REV-115":
      return "OBC Certificate";
    case "REV-114":
      return "Legal Heir Certificate";
    case "REV-117":
      return "Small / Marginal Farmer Certificate";
    case "REV-113":
      return "Inter-caste Marriage Certificate";
    case "REV-111":
      return "Certificate for Loss of Educational Records due to disasters";
    case "REV-119":
      return "No Male Child Certificate";
    case "REV-108":
      return "Unemployment Certificate";
    case "REV-116":
      return "Residence Certificate";
    case "REV-109":
      return "Widow Certificate";
    case "REV-118":
      return "Solvency Certificate";
    case "REV-104":
      return "First Graduate Certificate";
    case "REV-402":
      return "Money Lender License";
    case "REV-401":
      return "License under Pawn Broker Act";
    case "REV-120":
      return "Unmarried Certificate";
    case "REV-106":
      return "Agricultural Income Certificate";
    case "REV-105":
      return "Deserted Women Certificate";
    case "REV-107":
      return "Family Migration Certificate";
    case "REV-122":
      return "Issuance of Jain Religious Minority Certificate";
    case "REV-121":
      return "Economically Weaker Sections(Income and Assets)";
    case "REV-404":
      return "Issuance of Public Building License";
    case "REV-123":
      return "Destitute Widow Certificate";
    default:
      return "Certificate";
  }
};
export default getServiceName;
