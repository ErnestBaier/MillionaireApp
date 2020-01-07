import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsComponentComponent } from './inputs-component/inputs-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrowthTableComponentComponent } from './growth-table-component/growth-table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponentComponent,
    GrowthTableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
