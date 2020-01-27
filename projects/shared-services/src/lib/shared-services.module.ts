import { NgModule } from '@angular/core';
import { LoggerModule } from 'logger';
import { SharedServicesComponent } from './shared-services.component';



@NgModule({
  declarations: [SharedServicesComponent],
  imports: [
    LoggerModule
  ],
  exports: [SharedServicesComponent]
})
export class SharedServicesModule { }
