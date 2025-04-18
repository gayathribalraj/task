import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseComponent } from './practise.component';

describe('PractiseComponent', () => {
  let component: PractiseComponent;
  let fixture: ComponentFixture<PractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
