import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCollegueComponent } from './gestion-collegue.component';

describe('GestionCollegueComponent', () => {
  let component: GestionCollegueComponent;
  let fixture: ComponentFixture<GestionCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
