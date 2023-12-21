export const getWorkingDate = () => {
  const currentDate = new Date();
  const startDate = new Date(2021, 10, 15);
  let yearDifference = currentDate.getFullYear() - startDate.getFullYear();

  if (
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() < startDate.getDate())
  ) {
    yearDifference--;
  }
  return yearDifference;
};
