import { rotorID } from "../rotors/realRotors/enigmaD/rotorID";
import { rotorIID } from "../rotors/realRotors/enigmaD/rotorIID";
import { rotorIIID } from "../rotors/realRotors/enigmaD/rotorIIID";
import { reflectorD } from "../stators/realReflectors/reflectorD";
import { statorETWD } from "../stators/realReflectors/statorETWD";
import { EnigmaConfig } from "./enigmaConfig";

export class EnigmaD implements EnigmaConfig {
  availableRotors = [
    rotorID,
    rotorIID,
    rotorIIID,
  ]; 
  availableReflectors = [
    reflectorD,
  ];
  staticETW = statorETWD;
  availablePlugboard = true;
  name = 'Enigma D';
  rotors = 3;
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}