
// const returnFirstTwoDrivers = function (drivers){
//     return drivers.slice (0, 2);

// }
// const returnLastTWoDrivers = function (drivers){
//     return drivers.slice(2);

// }
// const selectDrivers = [returnFirstTWoDrivers , returnLastTwoDrivers];

// const createFareMultiplier = function(fareMultiplier){
//     return function (fare){
//         return fare + fareMultiplier

//     }
// }
// const fareDoubler = createFareMultiplier (2)
// const fareTripler = createFareMultipler (3)

// const selectDifferentDrivers = function (drivers, returnDrivers){
//     return returnDrivers (drivers);
// }

// function Monday () {
//     console.log('Go for a five-milerun');
//     console.log('Pump iron');
// }

// function Tuesday() {
//     console.log('Go for a five-mile run')
//     console.log('Swim 40 laps')
// }

// function Wednesday() {
//     console.log('Go for a five-mile run')
//     console.log('Go for a five-mile run')
// }



// function Thursday() {
//     consoke.log("Go for a five mile run")
//     console.log("pump iron")
// }



// function Friday() {
//     console.log("Go for a five-mile run")
//     console.log("swim 40 laps")
// }




function runFiveMiles() {
    console.log("Go for a five-mile run")
}


function liftWeights() {
    console.log("Pump iron")

}

function swimFortyLaps() {
    console.log("Swim 40 laps")
}




function Monday() {
    runFiveMiles()
    liftWeights()
}




function Tuesday() {
    runFiveMiles()
    swimFortyLaps()
}



function exerciseRoutine(postRunActivity) {
    runFiveMiles()
    postRunActivity()

}



function Monday() {
    exerciseRoutine(liftWeights)

}


// exerciseRoutine(function () {
//     console.log("Stretch work that core!")
// })

// // exerciseRoutine(() => {
// //     console.log("Stretch! work that core!")
// // })



// const exercise = exerciseRoutine()



// console.log(exercise)


// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === liftWeights) {
//         breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps) {
//         breakfast = "kale smoothie";
//     }else{
//         breakfast = "granola";
//     }
//     exerciseRoutine(exercise)

//     return function () {
//         console.log(`Nom nom nom, this ${breakfast} is delicious`)
//     }
// }


// const afterExercise = morningRoutine(liftWeights)

// afterExercise()




function receivesAFunction(hey) {
    hey()
}

const returnsANamedFunction = ()=>{
    return function malcom_owilla(x) {
        return x
    }
}

const returnsAnAnonymousFunction = function () {
    return function () {
        
    }
}

var allUserData = [
    {
        name : "Rich",
        speciality : "javascript"
    },
    
    "mine"
]





function logtuff(allUserData) {
    if (typeof allUserData === "string") {
        console.log(allUserData)
    } else if(typeof allUserData === "object") {
        for (const key in allUserData) {
               console.log(  allUserData[key]);
                
            
        }
    }
}


logtuff(allUserData)






function getInput(logtuff) {
    logtuff()
}



// getInput()


function hey() {
    getInput()
}

