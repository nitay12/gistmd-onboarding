export const ageCalculator = (date) => {
  const birthDate = new Date(date);
  const today = new Date();
  const ageByYear = today.getFullYear() - birthDate.getFullYear();
  const ageByMonth = today.getMonth() + 1 - birthDate.getMonth() + 1;
  if (ageByYear > 0) return ageByYear;
  else {
    return ageByMonth + " mo."
  }
  //TODO: check for days?
};
