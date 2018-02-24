import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestComponent } from './oldest.component';

describe('OldestComponent', () => {
  let component: OldestComponent;
  let fixture: ComponentFixture<OldestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
