import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondsComponent } from './fonds.component';

describe('FondsComponent', () => {
  let component: FondsComponent;
  let fixture: ComponentFixture<FondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
