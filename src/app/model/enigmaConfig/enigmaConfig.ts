import { RotorConfig } from "../rotors/rotorConfig";
import { ReflectorConfig } from "../stators/reflectorConfig";

export interface EnigmaConfig {
  availableRotors: RotorConfig[];
  availablePlugboard: boolean;
  availableReflectors: ReflectorConfig[];
  rotors: number;
  name: string;
}