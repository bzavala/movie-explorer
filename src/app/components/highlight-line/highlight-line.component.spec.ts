import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightLineComponent } from './highlight-line.component';

describe('HighlightLineComponent', () => {
  let component: HighlightLineComponent;
  let fixture: ComponentFixture<HighlightLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
