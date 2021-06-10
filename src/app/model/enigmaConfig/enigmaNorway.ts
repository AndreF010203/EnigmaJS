import { rotorIIIN } from "../rotors/realRotors/enigmaNorway/rotorIIIN";
import { rotorIIN } from "../rotors/realRotors/enigmaNorway/rotorIIN";
import { rotorIN } from "../rotors/realRotors/enigmaNorway/rotorIN";
import { rotorIVN } from "../rotors/realRotors/enigmaNorway/rotorIVN";
import { rotorVN } from "../rotors/realRotors/enigmaNorway/rotorVN";
import { reflectorN } from "../stators/realReflectors/reflectorN";
import { EnigmaConfig } from "./enigmaConfig";

export class EnigmaNorway implements EnigmaConfig {
  availableRotors = [
    rotorIN,
    rotorIIN,
    rotorIIIN, 
    rotorIVN,
    rotorVN,
  ]; 
  availableReflectors = [
    reflectorN,
  ];
  availablePlugboard = true;
  name = 'Norway Enigma';
  rotors = 3;
}