import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameeComponent } from './namee.component';

describe('NameeComponent', () => {
  let component: NameeComponent;
  let fixture: ComponentFixture<NameeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
