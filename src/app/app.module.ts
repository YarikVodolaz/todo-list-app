import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { TodoListModule } from './features/todo-list/todo-list-module';
import { AuthModule } from './features/auth/auth-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, TodoListModule, AuthModule, AppRoutingModule],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App],
})
export class AppModule {}