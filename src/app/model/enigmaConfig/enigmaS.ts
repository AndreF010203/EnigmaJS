import { rotorIIIS } from "../rotors/realRotors/enigmaSonder/rotorIIIS";
import { rotorIIS } from "../rotors/realRotors/enigmaSonder/rotorIIS";
import { rotorIS } from "../rotors/realRotors/enigmaSonder/rotorIS";
import { reflectorS } from "../stators/realReflectors/reflectorS";
import { EnigmaConfig } from "./enigmaConfig";

export class EnigmaS implements EnigmaConfig {
  availableRotors = [
    rotorIS,
    rotorIIS,
    rotorIIIS,
  ]; 
  availableReflectors = [
    reflectorS,
  ];
  availablePlugboard = true;
  name = 'Sonderenigma (Special Enigma)';
  rotors = 3;
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}