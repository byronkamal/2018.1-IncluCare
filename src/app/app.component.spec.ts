import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SidenavComponent } from './header/sidenav/sidenav.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { AuthService } from './shared/services/auth.service';

describe('AppComponent', () => {
  let tokenMock = jasmine.createSpyObj('tokenMock', ['init', 'validateToken', 'subscribe']);
  tokenMock.validateToken.and.returnValue(tokenMock);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        SidenavComponent,
        RegisterFormComponent
      ],
      imports: [
        RouterTestingModule,
        MaterializeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        AuthService,
        { provide: Angular2TokenService, useValue: tokenMock }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
