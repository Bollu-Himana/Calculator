import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ResulttComponent } from './resultt/resultt.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CalculateComponent,
    ResulttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  exports:[
    DisplayComponent,
    CalculateComponent,
    ResulttComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
