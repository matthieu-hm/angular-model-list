import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';

import { PersonsService } from './services/persons.service';
import { ReadOnlyComponent } from './components/read-only/read-only.component';
import { ReadEditComponent } from './components/read-edit/read-edit.component';
import { PersonEditorComponent } from './components/person-editor/person-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadOnlyComponent,
    ReadEditComponent,
    PersonEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PersonsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
