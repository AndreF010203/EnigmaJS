import { RotorConfig } from "../../rotorConfig";

class RotorVIII implements RotorConfig {
  wiring = 'FKQHTLXOCBJSPDZRAMEWNIUYGV';
  notch = 'ZM';
  name = 'Rotor VIII';
}

export const rotorVIII = new RotorVIII();