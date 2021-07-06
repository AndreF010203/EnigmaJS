import { rotorIG } from "../rotors/realRotors/enigmaG/rotorIG";
import { rotorIIG } from "../rotors/realRotors/enigmaG/rotorIIG";
import { rotorIIIG } from "../rotors/realRotors/enigmaG/rotorIIIG";
import { reflectorD } from "../stators/realReflectors/reflectorD";
import { statorETWD } from "../stators/realReflectors/statorETWD";
import { EnigmaConfig } from "./enigmaConfig";

export class EnigmaG implements EnigmaConfig {
  availableRotors = [
    rotorIG,
    rotorIIG,
    rotorIIIG,
  ]; 
  availableReflectors = [
    reflectorD,
  ];
  staticETW = statorETWD;
  availablePlugboard = true;
  name = 'Enigma G';
  rotors = 3;
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}