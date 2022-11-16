export const ConvertedSalary = (salary) => {
  return salary.replaceAll("k", " 000").replace("-", "—");
};
