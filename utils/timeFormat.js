export const timeFormat = (n) => {
  let hours = n / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return `${rhours} hr ${rminutes} mins`;
};
