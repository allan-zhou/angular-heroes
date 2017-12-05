import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent} from './hero/heroes/heroes.component';
import { HeroDetailComponent} from './hero/hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { CommoditiesComponent } from './commodity/commodities/commodities.component';

import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/detail/:id', component: HeroDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'commodities', component: CommoditiesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})

export class AppRoutingModule { }