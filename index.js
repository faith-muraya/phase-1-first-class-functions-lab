const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(){
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return (fare) => {
        return fare * int;
    };
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3);   

const selectDifferentDrivers = (arrayOfDrivers, functionReturnDrivers) => {
    if (functionReturnDrivers === returnFirstTwoDrivers) {
      return arrayOfDrivers.slice(0, 2);
    }
    return arrayOfDrivers.slice(-2);
  };
