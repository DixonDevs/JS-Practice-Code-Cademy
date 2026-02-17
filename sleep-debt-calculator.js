// Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. 
// If we don’t sleep enough, we accumulate sleep debt.
// In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
let hoursSlept = 8;

function getSleepHours(day) {

day = day.toLowerCase();

  if (day === 'monday') {
    return 8
  } else if (day === 'tuesday') {
    return 9
  } else if (day === 'wednesday') {
    return 7
  } else if (day === 'thursday') {
    return 6
  } else if (day === 'friday') {
    return 8
  } else if (day === 'saturday') {
    return 8
  } else if (day === 'sunday') {
    return 5
  } else {
    return 'Error! Please enter a valid day.'
  }
}

function getActualSleepHours () {
  let totalSleepHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

  return totalSleepHours;
}

getActualSleepHours();

function getIdealSleepHours () {
  let idealHours = 8;

  return idealHours * 7;
}

function calculateSleepDebt () {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepDifference = 0;
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    sleepDifference = actualSleepHours - idealSleepHours;
    console.log(`You got ${sleepDifference} more hours of sleep than needed!`);
  } else if (actualSleepHours < idealSleepHours) {
    sleepDifference = idealSleepHours - actualSleepHours;
    console.log(`You got ${sleepDifference} less hours of sleep than needed!`);
  } else {
    console.log('An error occurred');
  }
}

