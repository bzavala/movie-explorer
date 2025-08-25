import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLineComponent } from './by-line.component';

describe('ByLineComponent', () => {
  let component: ByLineComponent;
  let fixture: ComponentFixture<ByLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
