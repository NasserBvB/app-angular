import { PostsService } from './services/posts.service';
import { ContactsService } from './services/contacts.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes:Routes =[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'posts',
    component:PostComponent
  },
  {
    path:'contacts',
    component: ContactComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PostComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactsService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
