import { NgModule } from '@angular/core';

/* Modules */
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

/* Components */
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';


@NgModule({
    imports: [ContactRoutingModule, SharedModule],
    declarations: [ContactComponent],
    providers: [ContactService]
})
export class ContactModule { }
