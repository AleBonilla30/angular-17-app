import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Input() username = '';//con esto enlazamos el user name de user
  @Output() addFavorite = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavorite.emit(gameName);//aqui cada vez que se haga click en cualquiera de la lista saldra el nombre del juego favorito

  }

  games = [
    {
      id: 1,
      name: 'Uncharted 4'

    },
    {
      id: 2,
      name: 'Mario party superStars'
    },
    {
      id: 3,
      name: 'Pokemon'
    }

  ];

}
