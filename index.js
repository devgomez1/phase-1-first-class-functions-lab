// Code your solution in this file!


const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
};

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(integer) {
return function(fare) {
    return fare * integer;
  }
};

const fareDoubleDouble = createFareMultiplier(2);
const fareDoubler = fareDoubleDouble;
const fareTripleTriple = createFareMultiplier(3);
const fareTripler = fareTripleTriple; 

function selectDifferentDrivers(drivers, fn) {
     const selectedDrivers = fn(drivers);
     return selectedDrivers;
      }
