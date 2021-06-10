import { rotorI } from "../rotors/realRotors/enigmaArmy/rotorI";
import { rotorII } from "../rotors/realRotors/enigmaArmy/rotorII";
import { rotorIII } from "../rotors/realRotors/enigmaArmy/rotorIII";
import { rotorIV } from "../rotors/realRotors/enigmaArmy/rotorIV";
import { rotorV } from "../rotors/realRotors/enigmaArmy/rotorV";
import { rotorVI } from "../rotors/realRotors/enigmaArmy/rotorVI";
import { rotorVII } from "../rotors/realRotors/enigmaArmy/rotorVII";
import { rotorVIII } from "../rotors/realRotors/enigmaArmy/rotorVIII";
import { reflectorB } from "../stators/realReflectors/reflectorB";
import { reflectorC } from "../stators/realReflectors/reflectorC";
import { EnigmaConfig } from "./enigmaConfig";

export class EnigmaM3 implements EnigmaConfig {
  availableRotors = [
    rotorI,
    rotorII,
    rotorIII,
    rotorIV,
    rotorV,
    rotorVI,
    rotorVII,
    rotorVIII,
  ]; 
  availableReflectors = [
    reflectorB,
    reflectorC,
  ];
  availablePlugboard = true;
  name = 'Enigma M3';
  rotors = 3;
}