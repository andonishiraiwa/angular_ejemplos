import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaListafrutasComponent } from './pagina-listafrutas.component';

describe('PaginaListafrutasComponent', () => {
  let component: PaginaListafrutasComponent;
  let fixture: ComponentFixture<PaginaListafrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaListafrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaListafrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
