import { rotorIC } from "../rotors/realRotors/rotorIC";
import { rotorIIC } from "../rotors/realRotors/rotorIIC";
import { rotorIIIC } from "../rotors/realRotors/rotorIIIC";
import { reflectorNull } from "../stators/realReflectors/reflectorNull";
import { EnigmaConfig } from "./enigmaConfig";

export class EnigmaCommercialB implements EnigmaConfig {
  availableRotors = [
    rotorIC,
    rotorIIC,
    rotorIIIC, 
  ]; 
  availableReflectors = [
    reflectorNull,
  ];
  availablePlugboard = false;
  name = 'Commercial Enigma B';
  rotors = 3;
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}