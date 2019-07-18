import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollegueComponent } from './create-collegue.component';

describe('CreateCollegueComponent', () => {
  let component: CreateCollegueComponent;
  let fixture: ComponentFixture<CreateCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
