import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Alphabet } from 'src/app/model/alphabet';
import { Rotor } from 'src/app/model/rotors/rotor';

@Component({
  selector: 'app-rotor-config',
  templateUrl: './rotor-config.component.html',
  styleUrls: ['./rotor-config.component.css']
})
export class RotorConfigComponent implements OnInit, OnChanges {

  @Input()
  index: number;

  @Input()
  rotorList: Rotor[];

  @Input()
  offset: number;

  @Output()
  rotorOut = new EventEmitter<Rotor>();

  rotor: Rotor;

  rotorConfig: Rotor;

  ringOffset: number;

  alphabet: string[];

  ngOnInit(): void {
    this.alphabet = Alphabet.list.split('');
    this.reset();
  }

  ngOnChanges(changes) {
    if(changes.rotorList) {
      this.reset();
    }
  }

  reset() {
    this.ringOffset = 0;
    this.rotorConfig = this.rotorList[this.index - 1];
    this.rotor = new Rotor(this.rotorConfig);
    this.rotorOut.emit(this.rotor);
  }

  changeRingOffset($event: any) {
    this.rotor.setRingShift($event.value);
    this.rotorOut.emit(this.rotor);
  }

  changeOffset($event: any) {
    this.rotor.setStep($event.value);
    this.rotorOut.emit(this.rotor);
  }

  changeRotor($event: any) {
    this.rotor = new Rotor($event.value, this.ringOffset, this.offset);
    this.rotorOut.emit(this.rotor);
  }
}
