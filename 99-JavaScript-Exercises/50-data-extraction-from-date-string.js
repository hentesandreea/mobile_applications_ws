// Print the day, the month and the year from a given date string with the format dd-mm-yyyy.
function printDateStats(dateString) {
  const arr = dateString.split('-')
    console.log('Day:', arr[0])
    console.log('Month:',arr[1])
    console.log('Year:', arr[2])




}

printDateStats('27-04-2019')
/* Expected output:
Day: 27
Month: 4
Year: 2019
*/
