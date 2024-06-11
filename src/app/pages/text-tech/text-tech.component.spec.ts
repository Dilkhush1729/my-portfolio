import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTechComponent } from './text-tech.component';

describe('TextTechComponent', () => {
  let component: TextTechComponent;
  let fixture: ComponentFixture<TextTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
