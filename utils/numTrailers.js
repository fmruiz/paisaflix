export const numTrailers = (n) => {
  let result;
  if (n < 10) {
    result = `0${n}`;
    return result;
  } else {
    result = `${n}`;
    return result;
  }
};
