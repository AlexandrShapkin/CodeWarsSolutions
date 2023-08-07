import Simulated from "../Simulated/Simulated";

class Simulation {
  static simulate<T extends Simulated<T>>(simulated: T, stopTrigger: (target: T) => boolean): T {
    var target: T = simulated;
    while (true) {
      if (stopTrigger(target)) {
        break;
      }
      target = target.simulate();
    }
    return target;
  }
}


export default Simulation;