import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidosClienteComponent } from './contenidos-cliente.component';

describe('ContenidosClienteComponent', () => {
  let component: ContenidosClienteComponent;
  let fixture: ComponentFixture<ContenidosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
