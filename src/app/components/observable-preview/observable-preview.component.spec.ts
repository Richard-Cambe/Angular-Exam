import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePreviewComponent } from './observable-preview.component';

describe('ObservablePreviewComponent', () => {
  let component: ObservablePreviewComponent;
  let fixture: ComponentFixture<ObservablePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
