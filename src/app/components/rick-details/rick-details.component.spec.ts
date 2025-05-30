import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickDetailsComponent } from './rick-details.component';

describe('RickDetailsComponent', () => {
  let component: RickDetailsComponent;
  let fixture: ComponentFixture<RickDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
