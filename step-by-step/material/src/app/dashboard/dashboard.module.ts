import { NgModule } from '@angular/core';

/* Modules */
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

/* Components */
import { LayoutTopLeftRightComponent } from '../shared/components/layout-top-left-right.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    imports: [
        DashboardRoutingModule,
        SharedModule
    ],
    declarations: [
        LayoutTopLeftRightComponent,
        DashboardComponent
    ]
})
export class DashboardModule { }
