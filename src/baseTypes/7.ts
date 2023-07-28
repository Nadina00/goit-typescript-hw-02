/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  Monday ,
  Sanday ,
  Thursday,
  Tuesday,
  Saturday,
 }
 
 function isWeekend (day: WeekDay) {
  if(day === WeekDay.Monday || WeekDay.Thursday || WeekDay.Tuesday){
    return true
  } else{
    return false
  }
 }
