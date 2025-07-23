import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCarroComponent } from './game-carro.component';

describe('GameCarroComponent', () => {
  let component: GameCarroComponent;
  let fixture: ComponentFixture<GameCarroComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCarroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
