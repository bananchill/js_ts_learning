function extractYear(date) {
    return date.slice(0,4);
  }
  
  function extractMonthDay(date) {
    return date.slice(5);
  }
  
  function groupByYear(operations) {
    return operations.reduce((acc, op) => {
      const year = extractYear(op.date);
      const monthDay = extractMonthDay(op.date);
  
      if (!acc[year]) {
        acc[year] = [];
      }
      
      acc[year].push(monthDay);
      return acc;
    }, {});
  }
  
  console.log(
    groupByYear([
      { date: "2023-07-10", amount: "100" },
      { date: "2023-06-25", amount: "200" },
      { date: "2023-05-30", amount: "400" },
      { date: "2024-01-31", amount: "800" },
      { date: "2024-01-20", amount: "900" }
    ])
  );
  