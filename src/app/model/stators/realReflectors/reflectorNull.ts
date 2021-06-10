import { ReflectorConfig } from "../reflectorConfig";

class ReflectorNull implements ReflectorConfig {
  wiring = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  name = 'No Reflector';
}

export const reflectorNull = new ReflectorNull();