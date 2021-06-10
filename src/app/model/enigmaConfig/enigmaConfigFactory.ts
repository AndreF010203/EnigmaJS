
import { EnigmaCommercialB } from "./enigmaCommercialB";
import { EnigmaConfig } from "./enigmaConfig";
import { EnigmaI } from "./enigmaI";
import { EnigmaM3 } from "./enigmaM3";
import { EnigmaNorway } from "./enigmaNorway";
import { EnigmaS } from "./enigmaS";

export class EnigmaConfigList {
  static enigmaList: EnigmaConfig[] = [
    new EnigmaI(),
    new EnigmaM3(),
    new EnigmaCommercialB(),
    new EnigmaNorway(),
    new EnigmaS(),
  ];
}

