import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GameComponent,],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  username = 'AleBo';
  isLoggedIn = false;
  favGame = '';

  getFavorite(gameName: string){
      this.favGame = gameName;
  }

  greet(){
    Swal.fire("Hola!");
  }
}
