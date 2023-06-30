import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequierComponent } from './chequier.component';

describe('ChequierComponent', () => {
  let component: ChequierComponent;
  let fixture: ComponentFixture<ChequierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
