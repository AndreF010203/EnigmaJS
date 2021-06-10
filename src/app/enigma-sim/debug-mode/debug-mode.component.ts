import { Component, Input, OnInit } from '@angular/core';
import { DebuggerService } from 'src/app/services/debugger.service';

@Component({
  selector: 'app-debug-mode',
  templateUrl: './debug-mode.component.html',
  styleUrls: ['./debug-mode.component.css']
})
export class DebugModeComponent implements OnInit {

  @Input()
  display: boolean;

  consoleMsg: string = "";

  constructor(private debuggerSvc: DebuggerService) { }

  ngOnInit(): void {
    this.debuggerSvc.getLogs().subscribe(msg => this.consoleMsg += this.consoleMsg ? "<br>" + msg : msg);
  }

  ngOnDestroy() {
    this.debuggerSvc.getLogs().unsubscribe();
  }
}
