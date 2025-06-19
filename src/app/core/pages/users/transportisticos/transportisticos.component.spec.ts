import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportisticosComponent } from './transportisticos.component';

describe('TransportisticosComponent', () => {
  let component: TransportisticosComponent;
  let fixture: ComponentFixture<TransportisticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportisticosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
