import { Component, OnInit } from '@angular/core';
import { EnigmaConfig } from '../model/enigmaConfig/enigmaConfig';
import { EnigmaConfigList } from '../model/enigmaConfig/enigmaConfigFactory';

@Component({
  selector: 'app-enigma-sim',
  templateUrl: './enigma-sim.component.html',
  styleUrls: ['./enigma-sim.component.css']
})
export class EnigmaSimComponent implements OnInit {

  enigmaList: EnigmaConfig[];

  enigmaConfig: EnigmaConfig;

  constructor() { }

  ngOnInit(): void {
    this.enigmaList = EnigmaConfigList.enigmaList;
    this.enigmaConfig = this.enigmaList[0];
  }
}
