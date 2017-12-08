import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/* Routing */
import { DashboardRoutingModule } from '../routing/dashboard-routing.module';

/* Component */
import { LayoutComponent } from '../shared/index.component';
import { ProjectListComponent } from './project-list.component';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule],
    declarations: [LayoutComponent, ProjectListComponent]
})

export class DashboardModule { };