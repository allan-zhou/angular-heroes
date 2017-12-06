import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
