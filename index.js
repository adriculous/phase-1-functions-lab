// Code your solution in this file!

/* GIVEN INFO:
- Scuber HQ location = 42nd Street (42)
- Each street is represented by a number (43 = 43rd St., 50 = 50th St., etc.)
- Each block is 264 ft long
- Traveling uptown and downtown, not river to river.
 */

// returns the number of blocks given a value

function distanceFromHqInBlocks(streetNumber) {
  const hqStreet = 42;
  if (streetNumber > hqStreet) {
    return streetNumber - hqStreet;
  } else {
    return hqStreet - streetNumber;
  }
}

// returns the distance from the HQ street to its destination street in feet

function distanceFromHqInFeet(streetNumber) {
  const oneBlock = 264;
  return distanceFromHqInBlocks(streetNumber) * oneBlock;
}

// Calculates the number of feet using the given starting block and an ending block — it only calculates distance North and South (uptown/downtown).

function distanceTravelledInFeet(startBlock, arriveBlock) {
  const oneBlock = 264;
  return Math.abs(startBlock - arriveBlock) * oneBlock;
}

/* GIVEN NOTES FOR THE 4TH/FINAL FUNCTION CHALLENGE BELOW:
    - First 400 ft are free.
    - Distance between 400 - 2000 ft, the price is 2 cents/ft (0.02)
    - Flat fare ($25) over 2000 ft and under 2500 ft
    - Any distance over 2500 will return a message/string: "Cannot travel that far."
 */

function calculatesFarePrice(startBlock, arriveBlock) {
  const myRide = distanceTravelledInFeet(startBlock, arriveBlock);
  if (myRide > 400 && myRide <= 2000) {
    return (myRide - 400) * 0.02;
  } else if (myRide > 2000 && myRide <= 2500) {
    const fare = 25;
    return fare;
  } else if (myRide > 2500) {
    return "cannot travel that far";
  } else {
    return 0;
  }
}
