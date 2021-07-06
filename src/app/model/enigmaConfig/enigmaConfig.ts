import { RotorConfig } from "../rotors/rotorConfig";
import { ReflectorConfig } from "../stators/reflectorConfig";

export interface EnigmaConfig {
  availableRotors: RotorConfig[];
  availablePlugboard: boolean;
  availableReflectors: ReflectorConfig[];
  staticETW?: ReflectorConfig;
  rotors: number;
  name: string;
  alphabet: string;
}