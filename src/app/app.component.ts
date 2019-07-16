import { Component } from '@angular/core';
import { col } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'collegues-front';
  unCollegue = col;
}
