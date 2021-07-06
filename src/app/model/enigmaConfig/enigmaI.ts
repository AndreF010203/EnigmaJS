import { rotorI } from "../rotors/realRotors/enigmaArmy/rotorI";
import { rotorII } from "../rotors/realRotors/enigmaArmy/rotorII";
import { rotorIII } from "../rotors/realRotors/enigmaArmy/rotorIII";
import { rotorIV } from "../rotors/realRotors/enigmaArmy/rotorIV";
import { rotorV } from "../rotors/realRotors/enigmaArmy/rotorV";
import { reflectorA } from "../stators/realReflectors/reflectorA";
import { reflectorB } from "../stators/realReflectors/reflectorB";
import { reflectorC } from "../stators/realReflectors/reflectorC";
import { EnigmaConfig } from "./enigmaConfig";

export class EnigmaI implements EnigmaConfig {
  availableRotors = [
    rotorI,
    rotorII,
    rotorIII, 
    rotorIV,
    rotorV,
  ]; 
  availableReflectors = [
    reflectorA,
    reflectorB,
    reflectorC,
  ];
  availablePlugboard = true;
  name = 'Enigma I';
  rotors = 3;
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}