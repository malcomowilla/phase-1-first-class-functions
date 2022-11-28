
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice (0, 2);

}
const returnLastTWoDrivers = function (drivers){
    return drivers.slice(2);

}
const selectDrivers = [returnFirstTWoDrivers , returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier){
    return function (fare){
        return fare + fareMultiplier

    }
}
const fareDoubler = createFareMultiplier (2)
const fareTripler = createFareMultipler (3)

const selectDifferentDrivers = function (drivers, returnDrivers){
    return returnDrivers (drivers);
}
