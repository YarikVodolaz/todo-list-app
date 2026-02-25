import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Auth } from './components/auth.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [Auth],
  imports: [
    CommonModule,
    HttpClientModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule
  ],
  exports: [Auth]
})
export class AuthModule { }
