import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { LoginComponent } from './login/login.component';
import { CommoditiesComponent } from './commodity/commodities/commodities.component';
import { TopmenuComponent} from './common/topmenu/topmenu.component';

import { HeroService } from './services/hero.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard} from './services/auth-guard.service';
import { CommodityService } from './services/commodities.service';
import { NoopInterceptor } from './interceptor/noop.interceptor';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CommoditiesComponent,
    TopmenuComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthInterceptor,
    AuthService,
    HeroService,
    UserService,
    AuthGuard,
    CommodityService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
