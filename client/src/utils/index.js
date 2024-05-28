export const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now(); // measured in milli-seconds
    if(difference < 0) return 0;
    
    const remainingDays = difference / (1000 * 3600 * 24); // converting to days
    if (remainingDays < 0) return 0;
    return remainingDays.toFixed(1);
};
  
export const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);
  
    return percentage;
};
  
export const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;
  
    if (img.complete) callback(true);
  
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
};