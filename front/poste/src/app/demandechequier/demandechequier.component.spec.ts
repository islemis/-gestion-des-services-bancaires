import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandechequierComponent } from './demandechequier.component';

describe('DemandechequierComponent', () => {
  let component: DemandechequierComponent;
  let fixture: ComponentFixture<DemandechequierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandechequierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandechequierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
