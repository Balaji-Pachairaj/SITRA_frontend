export const isUsernameValid = (val) => {
  if (val?.length == 0) return false;
  return true;
};

export const emailValid = (val) => {
  if (val.includes("@")) {
    return true;
  }
  return false;
};

export const passwordValid = (val) => {
  if (val?.length >= 6) return true;
  return false;
};

export const mobileNumberValid = (val) => {
  if (val?.length === 10) return true;
  return false;
};
