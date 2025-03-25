import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input.required<string>();// Can also do input<string>(''). 
  @Input({required: true}) name!: string;

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })

  onSelectUser(){

  }
}
