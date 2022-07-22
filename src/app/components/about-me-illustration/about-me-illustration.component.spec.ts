import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeIllustrationComponent } from './about-me-illustration.component';

describe('AboutMeIllustrationComponent', () => {
  let component: AboutMeIllustrationComponent;
  let fixture: ComponentFixture<AboutMeIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeIllustrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
