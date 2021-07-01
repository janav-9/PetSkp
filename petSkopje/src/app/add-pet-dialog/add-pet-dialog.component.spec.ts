import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetDialogComponent } from './add-pet-dialog.component';

describe('AddPetDialogComponent', () => {
  let component: AddPetDialogComponent;
  let fixture: ComponentFixture<AddPetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
