import { Component, Input, OnInit } from '@angular/core';
import { DebuggerService } from 'src/app/services/debugger.service';
import { Enigma } from '../../model/enigma';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  @Input()
  enigma: Enigma;
  
  inputString: string;
  outputString: string;

  debugMode: boolean = false;

  constructor(private debugService: DebuggerService) { }

  ngOnInit(): void {
  }

  encrypt() {
    this.enigma.addDebugger(this.debugService);
    this.outputString = this.enigma.runString(this.inputString);
  }

  toggleDebugMode() {
    this.debugMode = !this.debugMode;
  }
}
