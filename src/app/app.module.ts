import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TabsModule } from 'projects/tabs/src/public-api'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodoListComponent } from './todo-list/todo-list.component'
import { ReactiveFormsModule } from '@angular/forms'
import { CheckboxModule } from 'projects/checkbox/src/public-api'
import { HeaderComponent } from '@components/header/header.component'

@NgModule({
  declarations: [AppComponent, TodoListComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule,
    CheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
