import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageListComponent } from './pages/page-list/page-list.component';


const routes: Routes = [
  {path: 'pages', component: PageListComponent},
  {path: 'dashboard', component: MainDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PageListComponent, MainDashboardComponent]
