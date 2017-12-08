import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Routing */
import { AppRoutingModule } from './routing/app-routing.module';

/* Component */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/not-found.component';
import { MessageComponent } from './shared/message.component';

/* service */
import { MenuService, UserService } from './service/index.service';

/* Feature Modules */
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule} from './login/login.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule,
    DashboardModule,
    LoginModule
  ],
  declarations: [
    AppComponent,

    PageNotFoundComponent,
    MessageComponent
  ],
  providers: [MenuService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }