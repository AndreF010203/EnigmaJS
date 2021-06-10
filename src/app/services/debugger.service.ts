import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebuggerService {

  private $logs: Subject<string> = new Subject();

  constructor() { }

  log(msg: string) {
    this.$logs.next(msg);
  }

  getLogs() {
    return this.$logs;
  }
}
