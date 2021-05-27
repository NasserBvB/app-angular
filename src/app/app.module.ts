import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { ContactsService } from './services/contacts.service';
import { PostsService } from './services/posts.service';


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
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ContactsService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
