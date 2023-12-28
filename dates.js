
// getDate()
// getDay()
// getFullYear()
// getHours()
// getMilliseconds()
// getMintues()
// getMonths()
// getSeconds()
// getTime()
// getUTCDate()
// getUTCDay()
// getUTCFullYear()
// getUTCHours()
// getUTCMilliseconds()
// getUTCMinutes()
// getUTCMonth()
// getUTCSeconds()
// now()
// parse()
// setDate()
// setFullYear()
// setHours()
// setMilliseconds()
// setMinutes()
// setMonth()
// setSeconds()
// setTime()
// setUTCDate()


const today = new Date();
console.log(today.getDate());
console.log(today.getTime());
console.log(today.getUTCDate());
console.log(today.getUTCDay());
console.log(today.getUTCFullYear());
console.log(today.getUTCHours());
console.log(today.getUTCMilliseconds());
console.log(today.getUTCMinutes());
console.log(today.getUTCMonth());
console.log(today.getUTCSeconds());


// 18. now()
const millisecondsSince1970 = Date.now();
console.log(millisecondsSince1970);

// 19. parse()
const dateString = 'December 17, 2023 03:24:00';
const millisecondsFromDate = Date.parse(dateString);
console.log(millisecondsFromDate); 

// 20. setDate()
// 21. setFullYear()
// 22. setHours()
// 23. setMilliseconds()
// 24. setMinutes()
// 25. setMonth()
// 26. setSeconds()
// 27. setTime()

const date = new Date("2023-11-22");

date.setDate(15); 
date.setFullYear(2024); 
date.setMonth(6); 
date.setHours(12); 
date.setMinutes(30); 
date.setSeconds(45); 
date.setMilliseconds(500); 
console.log(date)