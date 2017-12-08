import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { PageNotFoundComponent } from '../shared/not-found.component';
import { MessageComponent} from '../shared/message.component';

/* Feature Modules */
import { DashboardModule } from '../dashboard/dashboard.module';

export const routes: Routes = [
    { path: 'message', component: MessageComponent, outlet: 'popup' },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },    
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})

export class AppRoutingModule { }