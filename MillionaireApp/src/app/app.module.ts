import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsComponentComponent } from './inputs-component/inputs-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrowthTableComponentComponent } from './growth-table-component/growth-table-component.component';
import { GraphComponentComponent } from './graph-component/graph-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalculationInfoComponentComponent } from './calculation-info-component/calculation-info-component.component';
import { AdditionalResourcesComponentComponent } from './additional-resources-component/additional-resources-component.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponentComponent,
    GrowthTableComponentComponent,
    GraphComponentComponent,
    CalculationInfoComponentComponent,
    AdditionalResourcesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
