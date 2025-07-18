import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarrosComponent } from './card-carros.component';

describe('CardCarrosComponent', () => {
  let component: CardCarrosComponent;
  let fixture: ComponentFixture<CardCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCarrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
