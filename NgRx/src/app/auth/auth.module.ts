import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effect';
import { AuthReducer } from './state/auth.reducer';
import { AUTH_STATE_NAME } from './state/auth.selector';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer), 
    RouterModule.forChild(routes)],    
})
export class AuthModule {}