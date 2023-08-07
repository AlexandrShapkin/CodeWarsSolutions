import SimulatedTown from "./SimulatedTown/SimulatedTown";
import Simulation from "./Simulation/Simulation";

function solve(
  population: number,
  growthPercent: number,
  growthAugmentation: number,
  targetPopulation: number
): number {
  const town = new SimulatedTown(population, growthPercent, growthAugmentation);
  const stopSimulationCallback = (target: SimulatedTown): boolean => {
    if (target.population >= targetPopulation) {
      return true;
    }
    return false;
  };

  const grownTown: SimulatedTown = Simulation.simulate(
    town,
    stopSimulationCallback
  );
  const years: number = grownTown.simulationCount;

  return years;
}

export const nbYear = solve;
