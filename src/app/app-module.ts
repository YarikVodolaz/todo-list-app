import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { TodoListModule } from './components/todo-list/todo-list-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, TodoListModule, AppRoutingModule],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App],
})
export class AppModule {}