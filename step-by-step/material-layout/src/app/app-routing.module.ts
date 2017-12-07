import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ChartsComponent } from './charts/charts.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { ContactListComponent } from './contact/contact-list.component';
import { ContactEditComponent } from './contact/contact-edit.component';
import { ContactDetailComponent } from './contact/contact-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: LayoutComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },
  {
    path: 'contact',
    children: [
      { path: '', component: ContactListComponent },
      { path: ':id', component: ContactDetailComponent },
      { path: 'edit/:id', component: ContactEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }