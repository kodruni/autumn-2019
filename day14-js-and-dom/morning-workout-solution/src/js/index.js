const daysInMonth = [
  null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

const nidIsValid = (nid) => {
  const intNID = parseInt(nid, 10);

  if (Number.isNaN(intNID)) {
    return false;
  }

  if (intNID < 1000000000 || intNID > 9999999999) {
    return false;
  }

  if (intNID % 11 !== 0) {
    return false;
  }

  const month = parseInt(nid[2] + nid[3], 10);
  if (month < 51) {
    if (month < 1 || month > 12) {
      return false;
    }
  } else if (month > 62) {
    return false;
  }

  const day = parseInt(nid[4] + nid[5], 10);
  if (day < 1 || day > daysInMonth[month]) {
    return false;
  }

  const year = parseInt(nid[0] + nid[1], 10);
  if (year % 4 !== 0 && month === 2 && day === 29) {
    return false;
  }

  return true;
};
