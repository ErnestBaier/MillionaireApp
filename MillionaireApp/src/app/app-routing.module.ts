import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputsComponentComponent } from './inputs-component/inputs-component.component';
import { CalculationInfoComponentComponent } from './calculation-info-component/calculation-info-component.component';
import { AdditionalResourcesComponentComponent } from './additional-resources-component/additional-resources-component.component';
const routes: Routes = [  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: InputsComponentComponent },
  { path: 'info', component: CalculationInfoComponentComponent },
  { path: 'resrouces', component: AdditionalResourcesComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
