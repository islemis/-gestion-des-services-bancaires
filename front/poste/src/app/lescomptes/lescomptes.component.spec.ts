import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LescomptesComponent } from './lescomptes.component';

describe('LescomptesComponent', () => {
  let component: LescomptesComponent;
  let fixture: ComponentFixture<LescomptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LescomptesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LescomptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
