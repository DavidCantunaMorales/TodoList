import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTareasComponent } from './listar-tareas.component';

describe('ListarTareasComponent', () => {
  let component: ListarTareasComponent;
  let fixture: ComponentFixture<ListarTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
