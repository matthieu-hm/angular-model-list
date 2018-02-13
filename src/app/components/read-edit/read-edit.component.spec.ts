import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEditComponent } from './read-edit.component';

describe('ReadEditComponent', () => {
  let component: ReadEditComponent;
  let fixture: ComponentFixture<ReadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
