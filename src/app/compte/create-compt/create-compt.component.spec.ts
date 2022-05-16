import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComptComponent } from './create-compt.component';

describe('CreateComptComponent', () => {
  let component: CreateComptComponent;
  let fixture: ComponentFixture<CreateComptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
