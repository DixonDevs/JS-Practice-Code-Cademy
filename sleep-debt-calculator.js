// Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. 
// If we don’t sleep enough, we accumulate sleep debt.
// In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
let hoursSlept = 8;

function getSleepHours(day) {

day = day.toLowerCase();

  if (day === 'monday') {
    return hoursSlept
  } else if (day === 'tuesday') {
    return hoursSlept
  } else if (day === 'wednesday') {
    return hoursSlept
  } else if (day === 'thursday') {
    return hoursSlept
  } else if (day === 'friday') {
    return hoursSlept
  } else if (day === 'saturday') {
    return hoursSlept
  } else if (day === 'sunday') {
    return hoursSlept
  } else {
    return 'Error! Please enter a valid day.'
  }
}

console.log(getSleepHours('aff'))
