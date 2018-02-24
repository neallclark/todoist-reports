import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeCountChartComponent } from './cumulative-count-chart.component';

describe('CumulativeCountChartComponent', () => {
  let component: CumulativeCountChartComponent;
  let fixture: ComponentFixture<CumulativeCountChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativeCountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
