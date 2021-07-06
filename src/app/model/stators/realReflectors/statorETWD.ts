import { ReflectorConfig } from "../reflectorConfig";

class StatorETWD implements ReflectorConfig {
  wiring = 'QWERTZUIOASDFGHJKPYXCVBNML';
  name = 'ETW-D';
}

export const statorETWD = new StatorETWD();