import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GreetingsComponent } from './greetings.component';
// Importa el componente GreetingsComponent


describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsComponent ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Todo fine', () => {
    expect(component).toBeTruthy();
  });

  it('Todo fine', () => {
    const mensajeElement = fixture.debugElement.query(By.css('.mensaje')).nativeElement;
    expect(mensajeElement.textContent).toContain(component.mensaje);
  });

  it('Todo fine', () => {
    const mensajeElement = fixture.debugElement.query(By.css('.mensaje')).nativeElement;
    expect(mensajeElement.textContent).toContain(component.mensaje);
  });
});