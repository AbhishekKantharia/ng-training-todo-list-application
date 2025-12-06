import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';
import { InMemoryDataService } from './core/in-memory-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TasksModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 300 })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
