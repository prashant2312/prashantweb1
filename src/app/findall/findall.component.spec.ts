import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallComponent } from './findall.component';

describe('FindallComponent', () => {
  let component: FindallComponent;
  let fixture: ComponentFixture<FindallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
