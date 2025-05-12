// utils/helpers.js

module.exports = {
    generateStudentID: () => {
      return 'GS' + Date.now(); // Example: GS1683910982098
    },
  
    formatCurrency: (amount) => {
      return `₦${parseFloat(amount).toFixed(2)}`;
    },
  
    calculateGPA: (grades) => {
      const totalPoints = grades.reduce((acc, curr) => acc + curr.points, 0);
      const totalUnits = grades.reduce((acc, curr) => acc + curr.unit, 0);
      return totalUnits === 0 ? 0 : (totalPoints / totalUnits).toFixed(2);
    },
  };
  