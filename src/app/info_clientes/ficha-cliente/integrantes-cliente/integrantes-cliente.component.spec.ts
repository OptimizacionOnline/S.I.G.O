import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrantesClienteComponent } from './integrantes-cliente.component';

describe('IntegrantesClienteComponent', () => {
  let component: IntegrantesClienteComponent;
  let fixture: ComponentFixture<IntegrantesClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrantesClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrantesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
