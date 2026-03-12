import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { TodoListModule } from './features/todo-list/todo-list-module';
import { AuthModule } from './features/auth/auth-module';
import { BackendPrefixInterceptor } from './interceptor/interceptor';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, HttpClientModule, TodoListModule, AuthModule, AppRoutingModule],
  providers: [
    provideClientHydration(withEventReplay()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendPrefixInterceptor,
      multi: true,
    },
  ],
  bootstrap: [App],
})
export class AppModule {}