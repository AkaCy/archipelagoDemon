import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Akaall } from './akaall';

describe('Akaall', () => {
  let component: Akaall;
  let fixture: ComponentFixture<Akaall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Akaall],
    }).compileComponents();

    fixture = TestBed.createComponent(Akaall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
