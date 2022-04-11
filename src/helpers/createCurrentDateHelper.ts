export const createCurrentDateHelper = (date: Date) => {
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
};
