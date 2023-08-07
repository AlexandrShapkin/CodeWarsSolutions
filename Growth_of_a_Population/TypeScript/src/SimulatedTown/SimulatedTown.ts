import Population from "../Population/Population";
import Simulated from "../Simulated/Simulated";
import Town from "../Town/Town";

class SimulatedTown implements Simulated<SimulatedTown>, Town {
  _populatoin: Population;
  _simulationCount: number;

  constructor(
    population: number,
    growthPercent: number,
    growthAugmentation: number
  ) {
    this._populatoin = new Population(
      population,
      growthPercent,
      growthAugmentation
    );
    this._simulationCount = 0;
  }

  get simulationCount(): number {
    return this._simulationCount;
  }

  get population(): number {
    return this._populatoin.population;
  }

  static from(simulatedTown: SimulatedTown): SimulatedTown {
    const clone: SimulatedTown = new SimulatedTown(
      simulatedTown.population,
      simulatedTown._populatoin._growthPercent,
      simulatedTown._populatoin._growthAugmentation
    );
    clone._simulationCount = simulatedTown._simulationCount;
    return clone;
  }

  simulate(): SimulatedTown {
    const clone: SimulatedTown = SimulatedTown.from(this);
    clone._populatoin = clone._populatoin.incrementPopulation();
    clone._simulationCount += 1;
    return clone;
  }
}

export default SimulatedTown;
