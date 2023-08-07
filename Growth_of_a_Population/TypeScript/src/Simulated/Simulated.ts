interface Simulated<T> {
  _simulationCount: number;
  simulate(): T;
}

export default Simulated;