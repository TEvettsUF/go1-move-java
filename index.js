import { Go1, Go1Mode } from "@droneblocks/go1-js"

let dog = new Go1();
dog.init(); // version 0.1.4+ requirement

// while (true) {
//        dog.setMode(Go1Mode.standDown);
//        await dog.wait(2000);
//        dog.setMode(Go1Mode.standUp);
//        await dog.wait(2000);
//      }

// dog.setMode(Go1Mode.walk);
// dog.goBackward(0.25, 2000);
// await dog.wait(3000);
// dog.goForward(0.25, 2000);
//await dog.wait(3000)

// function main() {
//   dog.setMode(Go1Mode.standDown);
//   await dog.wait(2000);
//   dog.setMode(Go1Mode.standUp);
//   await dog.wait(2000);
// }
// function handleBattery(state) {
//   const batt = state.bms.soc;

//   console.log(`battery is at ${batt}%`);

//   if (batt >= 75) {
//     dog.setLedColor(0, 255, 0); // green
//   } else if (batt >= 50 && batt < 75) {
//     dog.setLedColor(255, 127, 0); // orange
//   } else if (batt < 25) {
//     dog.setLedColor(255, 0, 0); // red
//   }
// }

// async function main() {
//   dog = new Go1();

//   dog.on("go1StateChange", (state) => {
//     handleBattery(state);
//   });

//   // Normally you would navigate Go1 around
//   // this infinite loop is just to demonstrate
//   // the battery handler above
//   while (true) {
//     dog.setMode(Go1Mode.standDown);
//     await dog.wait(2000);
//     dog.setMode(Go1Mode.standUp);
//     await dog.wait(2000);
//   }
// }

//main();

async function run() {

  // dog.setMode(Go1Mode.walk);
  // await dog.goForward(0.1, 2000);
  // await dog.goRight(0.1, 2000);
  // await dog.goBackward(0.1, 2000);
  // await dog.goLeft(0.1, 2000);
  // dog.disconnect();
  // console.log("done!");

  dog.setMode(Go1Mode.stand);

  await dog.wait(1000);

  await dog.lookUp(0.5, 1000);
  await dog.lookDown(0.5, 1000);
  await dog.leanLeft(0.5, 1000);
  await dog.leanRight(0.5, 1000);
  await dog.twistLeft(0.5, 1000);
  await dog.twistRight(0.5, 1000);

  await dog.resetBody();

  await dog.lookUp(1, 1000);
  await dog.lookDown(1, 1000);
  await dog.leanLeft(1, 1000);//in walk mode, this makes her walk left
  await dog.leanRight(1, 1000);//in walk mode, this makes her walk right
  await dog.twistLeft(1, 1000); //in walk mode, this makes her turn left
  await dog.twistRight(1, 1000);//in walk mode, this makes her turn right

  await dog.resetBody();

  dog.setMode(Go1Mode.walk);

  console.log("done");
}

run();