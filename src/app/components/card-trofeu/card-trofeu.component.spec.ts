import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrofeuComponent } from './card-trofeu.component';

describe('CardTrofeuComponent', () => {
  let component: CardTrofeuComponent;
  let fixture: ComponentFixture<CardTrofeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTrofeuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTrofeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
