import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuddlyPhotoTemplateComponent } from './cuddly-photo-template.component';

describe('CuddlyPhotoTemplateComponent', () => {
  let component: CuddlyPhotoTemplateComponent;
  let fixture: ComponentFixture<CuddlyPhotoTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuddlyPhotoTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CuddlyPhotoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
