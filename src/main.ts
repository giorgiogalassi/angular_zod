import 'zone.js/dist/zone';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { ApiService } from './providers/api.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class App implements OnInit {
  private apiService = inject(ApiService);

  ngOnInit() {
    this.apiService.get(1).subscribe((d) => console.log(d));
  }
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
