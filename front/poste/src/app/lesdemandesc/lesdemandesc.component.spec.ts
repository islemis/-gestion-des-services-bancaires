import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesdemandescComponent } from './lesdemandesc.component';

describe('LesdemandescComponent', () => {
  let component: LesdemandescComponent;
  let fixture: ComponentFixture<LesdemandescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesdemandescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesdemandescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
