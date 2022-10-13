import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearexperienciaComponent } from './crearexperiencia.component';

describe('CrearexperienciaComponent', () => {
  let component: CrearexperienciaComponent;
  let fixture: ComponentFixture<CrearexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
