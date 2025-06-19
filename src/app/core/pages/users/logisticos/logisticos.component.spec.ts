import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticosComponent } from './logisticos.component';

describe('LogisticosComponent', () => {
  let component: LogisticosComponent;
  let fixture: ComponentFixture<LogisticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
