import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerpsClienteComponent } from './serps-cliente.component';

describe('SerpsClienteComponent', () => {
  let component: SerpsClienteComponent;
  let fixture: ComponentFixture<SerpsClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerpsClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerpsClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
