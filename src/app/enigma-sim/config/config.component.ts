import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Alphabet } from 'src/app/model/alphabet';
import { Enigma } from 'src/app/model/enigma';
import { EnigmaConfig } from 'src/app/model/enigmaConfig/enigmaConfig';
import { Rotor } from 'src/app/model/rotors/rotor';
import { Reflector } from 'src/app/model/stators/reflector';
import { ReflectorConfig } from 'src/app/model/stators/reflectorConfig';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit, OnChanges {

  @Input()
  enigmaConfig: EnigmaConfig;

  rotorsNumbers: number[];

  alphabet: string[];

  enigma: Enigma;

  rotors: Rotor[];

  rotor: Rotor;

  reflector: Reflector;

  reflectorConfig: ReflectorConfig;

  constructor() { }

  ngOnInit(): void {
    this.alphabet = Alphabet.list.split('');
  }

  ngOnChanges(changes) {
    if(changes.enigmaConfig && changes.enigmaConfig.currentValue && changes.enigmaConfig.currentValue.rotors) {
      this.rotorsNumbers = Array(changes.enigmaConfig.currentValue.rotors).fill(0).map((x,i)=>i+1);
      this.enigma = new Enigma();
      this.rotors = [];
      this.reflectorConfig = this.enigmaConfig.availableReflectors[0];
      this.reflector = new Reflector(this.reflectorConfig);
    }
  }

  setRotor(rotor: Rotor, index: number) {
    this.rotors[index] = rotor;
    this.buildEnigma();
  }

  setReflector($event) {
    this.reflector = new Reflector($event.value);
    this.buildEnigma();
  }

  buildEnigma() {
    this.enigma.setup(this.rotors, this.reflector);
  }
}
