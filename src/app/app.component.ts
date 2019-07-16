import { Component } from '@angular/core';
import { col } from './mock/collegues.mock';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'collegues-front';
  unCollegue;

  constructor(private dataService: DataService) {
    this.unCollegue = this.dataService.recupererCollegueCourant();
  }
}
