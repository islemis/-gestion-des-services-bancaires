import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandecarteComponent } from './demandecarte.component';

describe('DemandecarteComponent', () => {
  let component: DemandecarteComponent;
  let fixture: ComponentFixture<DemandecarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandecarteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandecarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
