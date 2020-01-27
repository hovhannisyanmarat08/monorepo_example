import { NgModule } from '@angular/core';
import { LoggerModule } from 'logger';
import { SharedServicesModule } from 'shared-services';
import { SharedComponentsComponent } from './shared-components.component';



@NgModule({
  declarations: [SharedComponentsComponent],
  imports: [
    LoggerModule,
    SharedServicesModule
  ],
  exports: [SharedComponentsComponent]
})
export class SharedComponentsModule { }
