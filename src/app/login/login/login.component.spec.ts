import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let compFix: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    compFix = TestBed.createComponent(LoginComponent);
    component = compFix.componentInstance;
    router = TestBed.inject(Router);
    compFix.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error if fields are empty', () => {
    const usernameInput = compFix.debugElement.query(By.css('#username')).nativeElement;
    const passwordInput = compFix.debugElement.query(By.css('#password')).nativeElement;

    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    const submitButton = compFix.debugElement.query(By.css('.btn-submit')).nativeElement;
    submitButton.click();

    compFix.detectChanges();

    const errorMessages = compFix.debugElement.queryAll(By.css('.error-message'));
    console.log(errorMessages.length);
    expect(errorMessages.length).toBeGreaterThan(0);

    expect(usernameInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });

  it('should navigate to "bienvenida" path', () => {
    const usernameInput = compFix.debugElement.query(By.css('#username')).nativeElement;
    const passwordInput = compFix.debugElement.query(By.css('#password')).nativeElement;

    usernameInput.value = 'pruebusuario';
    passwordInput.value = 'pruebapassword';

    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    compFix.detectChanges();

    spyOn(router, 'navigate');
    const submitButton = compFix.debugElement.query(By.css('.btn-submit')).nativeElement;
    submitButton.click();

    expect(router.navigate).toHaveBeenCalledWith(['/login/bienvenida']);
  });
});
