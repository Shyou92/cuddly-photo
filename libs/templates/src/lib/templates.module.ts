import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CuddlyPhotoTemplateComponent } from './cuddly-photo/cuddly-photo-template.component';

@NgModule({
  imports: [CommonModule, CuddlyPhotoTemplateComponent],
  exports: [CuddlyPhotoTemplateComponent]
})
export class TemplatesModule {}
