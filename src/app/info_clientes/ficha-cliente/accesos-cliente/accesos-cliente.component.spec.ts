import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesosClienteComponent } from './accesos-cliente.component';

describe('AccesosClienteComponent', () => {
  let component: AccesosClienteComponent;
  let fixture: ComponentFixture<AccesosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
