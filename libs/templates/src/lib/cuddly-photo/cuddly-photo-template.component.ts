import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopbarComponent, UserInfoComponent } from '@cp/features';

@Component({
  selector: 'cuddly-photo-template',
  standalone: true,
  imports: [CommonModule, TopbarComponent, UserInfoComponent],
  templateUrl: './cuddly-photo-template.component.html',
  styleUrls: ['./cuddly-photo-template.component.scss'],
})
export class CuddlyPhotoTemplateComponent {}
