export const getCurrentAndPreviousDate = () => {
  const currentDate = new Date();
  const previousDate = new Date();

  // Subtract 4 months from the current date
  previousDate.setMonth(currentDate.getMonth() - 4);

  // Format the dates as strings (e.g., "YYYY-MM-DD")
  const currentDateString = currentDate.toISOString().split('T')[0];
  const previousDateString = previousDate.toISOString().split('T')[0];

  return {
    currentDate: currentDateString,
    previousDate: previousDateString,
  };
};

  