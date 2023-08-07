class Population {
  private _population: number;
  _growthPercent: number;
  _growthAugmentation: number;

  constructor(
    population: number,
    growthPercent: number,
    growthAugmentation: number
  ) {
    this._population = population;
    this._growthPercent = growthPercent;
    this._growthAugmentation = growthAugmentation;
  }

  static from(population: Population): Population {
    const newPopulation = new Population(population._population, population._growthPercent, population._growthAugmentation);
    return newPopulation;
  }

  get population(): number {
    return this._population;
  }

  get growthPercent(): number {
    return this._growthPercent;
  }

  get growthAugmentation(): number {
    return this._growthAugmentation;
  }

  incrementPopulation(): Population {
    const clone: Population = Population.from(this);
    clone._population += Math.floor(this._population * (this._growthPercent / 100)) + this._growthAugmentation;
    return clone;
  }
}

export default Population;
