import { Component, Input} from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})

export class TitleComponent {
  title = 'NgModules';
  @Input() subtitle = '';
  user = null;

  constructor(private userService: UserService){
      this.user = userService.user;
  }

}
