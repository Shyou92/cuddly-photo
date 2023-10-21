import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '@cp/templates';

@Component({
  standalone: true,
  imports: [RouterModule, TemplatesModule],
  selector: 'cuddly-photo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cuddly-photo';
}
