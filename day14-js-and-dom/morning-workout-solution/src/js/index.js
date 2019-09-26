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
  console.log(month);
  if (month < 51) {
    if (month < 1 || month > 12) {
      return false;
    }
  } else if (month > 62) {
    return false;
  }

  const day = parseInt(nid[4] + nid[5], 10);
  if (day < 1 || day > 31) {
    return false;
  }

  return true;
};
