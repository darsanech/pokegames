import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponslistComponent } from './weaponslist.component';

describe('WeaponslistComponent', () => {
  let component: WeaponslistComponent;
  let fixture: ComponentFixture<WeaponslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
