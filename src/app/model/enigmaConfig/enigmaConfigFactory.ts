
import { EnigmaCommercialB } from "./enigmaCommercialB";
import { EnigmaConfig } from "./enigmaConfig";
import { EnigmaI } from "./enigmaI";
import { EnigmaM3 } from "./enigmaM3";
import { EnigmaM4 } from "./enigmaM4";
import { EnigmaNorway } from "./enigmaNorway";
import { EnigmaS } from "./enigmaS";
import { EnigmaD } from "./enigmaD";
import { EnigmaG } from "./enigmaG";
import { EnigmaZ } from "./enigmaZ";

export class EnigmaConfigList {
  static enigmaList: EnigmaConfig[] = [
    new EnigmaI(),
    new EnigmaM3(),
    new EnigmaM4(),
    new EnigmaCommercialB(),
    new EnigmaNorway(),
    new EnigmaS(),
    new EnigmaD(),
    new EnigmaG(),
    new EnigmaZ(),
  ];
}

