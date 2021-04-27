import { Component, OnInit } from '@angular/core';
import { Enigma } from '../model/enigma';
import { rotorI } from '../model/rotors/realRotors/rotorI';
import { rotorII } from '../model/rotors/realRotors/rotorII';
import { rotorIII } from '../model/rotors/realRotors/rotorIII';
import { Rotor } from '../model/rotors/rotor';
import { reflectorB } from '../model/stators/realReflectors/reflectorB';
import { Reflector } from '../model/stators/reflector';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  enigma: Enigma;
  inputString: string;
  outputString: string;

  constructor() { }

  ngOnInit(): void {
    this.enigma = new Enigma();

    const rotors = [
      new Rotor(rotorIII, 1),
      new Rotor(rotorII, 1),
      new Rotor(rotorI, 1),
    ];

    this.enigma.setup(rotors, new Reflector(reflectorB));
  }

  encrypt() {
    this.outputString = this.enigma.runString(this.inputString);
  }

}
