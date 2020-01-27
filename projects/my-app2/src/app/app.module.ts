import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoggerModule } from 'logger';
import { SharedServicesModule } from 'shared-services';
import { SharedComponentsModule } from 'shared-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggerModule,
    SharedServicesModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
