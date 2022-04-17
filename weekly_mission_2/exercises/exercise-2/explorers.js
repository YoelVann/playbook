
const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
      isFinished: false,
      exercisesFinished: false
    }
    }
  }
]

explorers.forEach(explorer => console.log('Nombre: '+ explorer.name));
explorers.forEach(explorer => console.log('Stack: ' + explorer.stack));

const explorersStack = explorers.map( ({ stack }) => stack);
console.log(explorersStack);

const stackJs = explorers.filter( ({ stack }) => stack.includes('js'))
console.log(stackJs);

const explorerCdmx = explorers.find( ({ city }) => city === 'CDMX');
console.log("Primer explorer de CDMX: ", explorerCdmx);

const completedExercises = explorers.reduce((prevExplorer, nextExplorer) => prevExplorer + nextExplorer.exercises_completed, 0);
console.log("All exercices completed: " + completedExercises);

const exercicesFinished = explorers.some(explorer => explorer.missions.frontend.isFinished === true);
console.log("Some explorer has finihed his frontend mission exercies? " + exercicesFinished);


const onBoardingFinished = explorers.every(explorer => explorer.missions.onboarding.isFinished === true);
console.log("All explorers has finished the on boarding mission? "+ onBoardingFinished);