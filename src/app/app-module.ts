import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { AutoType } from './components/auto-type/auto-type';
import { About } from './components/sections/about/about';
import { Hero } from './components/sections/hero/hero';
import { Resume } from './components/sections/resume/resume';
import { Counter } from './components/share/counter/counter';
import { Progress } from './components/share/progress/progress';
import { Skills } from './components/sections/skills/skills';
import { Services } from './components/sections/services/services';
import { Projects } from './components/sections/projects/projects';
import { Achievement } from './components/sections/achievement/achievement';
import { Contact } from './components/sections/contact/contact';
import { Footer } from './components/footer/footer';
import { Dashboard } from './pages/dashboard/dashboard';
import { EditModalComponent } from './components/edit-modal/edit-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditableDirective } from './directive/editable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BioModel } from './components/edit-modal/bio-model/bio-model';
import { ImageModel } from './components/edit-modal/image-model/image-model';

@NgModule({
  declarations: [
    App,
    Header,
    Home,
    AutoType,
    About,
    Hero,
    Resume,
    Counter,
    Progress,
    Skills,
    Services,
    Projects,
    Achievement,
    Contact,
    Footer,
    Dashboard,
    EditModalComponent,
    EditableDirective,
    BioModel,
    ImageModel

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ✅ أضف هذا السطر هنا فقط
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
