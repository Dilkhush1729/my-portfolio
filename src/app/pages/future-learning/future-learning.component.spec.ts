import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureLearningComponent } from './future-learning.component';

describe('FutureLearningComponent', () => {
  let component: FutureLearningComponent;
  let fixture: ComponentFixture<FutureLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
