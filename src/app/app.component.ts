import { Component, OnInit, inject } from '@angular/core';

import { ApiService } from './shared/providers/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular + Zod';

  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._apiService.get(1).subscribe((d) => console.log(d));
  }
}
