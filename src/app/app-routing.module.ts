import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PlayersListComponent } from './players-list/players-list.component';
 


const routes: Routes =[ {path:'employee', component : EmployeeListComponent},
{path:'players', component : PlayersListComponent}]
@NgModule({
  
  exports: [ RouterModule  
  ],
  imports : [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

export const routingComponents=[ EmployeeListComponent, PlayersListComponent]