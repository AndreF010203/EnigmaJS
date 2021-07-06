import { rotorBeta } from "../rotors/realRotors/enigmaArmy/rotorBeta";
import { rotorGamma } from "../rotors/realRotors/enigmaArmy/rotorGamma";
import { rotorI } from "../rotors/realRotors/enigmaArmy/rotorI";
import { rotorII } from "../rotors/realRotors/enigmaArmy/rotorII";
import { rotorIII } from "../rotors/realRotors/enigmaArmy/rotorIII";
import { rotorIV } from "../rotors/realRotors/enigmaArmy/rotorIV";
import { rotorV } from "../rotors/realRotors/enigmaArmy/rotorV";
import { rotorVI } from "../rotors/realRotors/enigmaArmy/rotorVI";
import { rotorVII } from "../rotors/realRotors/enigmaArmy/rotorVII";
import { rotorVIII } from "../rotors/realRotors/enigmaArmy/rotorVIII";
import { reflectorBthin } from "../stators/realReflectors/reflectorBthin";
import { reflectorCthin } from "../stators/realReflectors/reflectorCthin";
import { EnigmaConfig } from "./enigmaConfig";

export class EnigmaM4 implements EnigmaConfig {
  availableRotors = [
    rotorI,
    rotorII,
    rotorIII,
    rotorIV,
    rotorV,
    rotorVI,
    rotorVII,
    rotorVIII,
    rotorBeta,
    rotorGamma,
  ]; 
  availableReflectors = [
    reflectorBthin,
    reflectorCthin,
  ];
  availablePlugboard = true;
  name = 'Enigma M4';
  rotors = 4;
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}