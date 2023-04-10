export let CurrentDate = function () {
    const now = new Date();
      const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let month: number|string = now.getMonth();
      month = months[month];
      let date = `${now.getDate()} ${month} ${now.getFullYear()}`; 
      return date;
  }