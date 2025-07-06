import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'events';

  handleEvent(event:Event){
    console.log(event);
   console.log(event.target);
  console.log("value",(event.target as HTMLInputElement).value);

  }
}
