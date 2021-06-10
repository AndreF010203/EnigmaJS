import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnigmaSimComponent } from './enigma-sim.component';
import { CoreComponent } from './core/core.component';
import { FormsModule } from '@angular/forms';
import { ConfigComponent } from './config/config.component';
import { MatSelectModule } from '@angular/material/select';
import { RotorConfigComponent } from './rotor-config/rotor-config.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DebugModeComponent } from './debug-mode/debug-mode.component';

@NgModule({
  declarations: [
    CoreComponent,
    EnigmaSimComponent,
    ConfigComponent,
    RotorConfigComponent,
    DebugModeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [EnigmaSimComponent]
})
export class EnigmaSimModule { }
