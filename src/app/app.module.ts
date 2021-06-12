import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TabsModule } from 'projects/tabs/src/public-api'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodoListComponent } from './todo-list/todo-list.component'

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [BrowserModule, AppRoutingModule, TabsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
