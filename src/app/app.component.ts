import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id: string){
    console.log('Selected user with id', id);
  }
}
