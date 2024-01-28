export const getCurrentAndPreviousDate = () => {
    const currentDate = new Date();
    const previousDate = new Date();
    
    // Subtract 10 years from the current date
    previousDate.setFullYear(previousDate.getFullYear() - 1);
  
    // Format the dates as strings (e.g., "YYYY-MM-DD")
    const currentDateString = currentDate.toISOString().split('T')[0];
    const previousDateString = previousDate.toISOString().split('T')[0];
  
    return {
      currentDate: currentDateString,
      previousDate: previousDateString,
    };
  };
  
  