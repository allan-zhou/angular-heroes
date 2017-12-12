import { NgModule } from '@angular/core';

/* Modules(Routing) */
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';

/* Component */
import { LayoutComponent as DemoLayoutComponent } from './layout/layout.component';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
  imports: [SharedModule, DemoRoutingModule],
  declarations: [DemoLayoutComponent, SizerComponent]
})

export class DemoModule { }