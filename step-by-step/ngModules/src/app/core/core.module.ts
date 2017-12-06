import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Service */
import { UserService } from './user.service';

/* Components */
import { TitleComponent } from './title.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TitleComponent],
    exports: [TitleComponent],
    providers: [UserService]
})
export class CoreModule { }