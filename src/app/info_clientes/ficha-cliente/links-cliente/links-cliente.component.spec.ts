import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksClienteComponent } from './links-cliente.component';

describe('LinksClienteComponent', () => {
  let component: LinksClienteComponent;
  let fixture: ComponentFixture<LinksClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
