import { rotorIIIZ } from "../rotors/realRotors/enigmaZ/rotorIIIZ";
import { rotorIIZ } from "../rotors/realRotors/enigmaZ/rotorIIZ";
import { rotorIZ } from "../rotors/realRotors/enigmaZ/rotorIZ";
import { reflectorZ } from "../stators/realReflectors/reflectorZ";
import { EnigmaConfig } from "./enigmaConfig";

export class EnigmaZ implements EnigmaConfig {
  availableRotors = [
    rotorIZ,
    rotorIIZ,
    rotorIIIZ,
  ]; 
  availableReflectors = [
    reflectorZ,
  ];
  availablePlugboard = true;
  name = 'Enigma Z';
  rotors = 3;
  alphabet = '1234567890';
}