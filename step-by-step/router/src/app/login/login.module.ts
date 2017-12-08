import { NgModule } from '@angular/core';

import { LoginRoutingModule } from '../routing/login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [LoginRoutingModule],
    declarations: [LoginComponent]
})

export class LoginModule { }