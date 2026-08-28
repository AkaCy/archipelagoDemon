import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Archipelago } from './archipelago';

describe('Archipelago', () => {
  let component: Archipelago;
  let fixture: ComponentFixture<Archipelago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Archipelago],
    }).compileComponents();

    fixture = TestBed.createComponent(Archipelago);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
