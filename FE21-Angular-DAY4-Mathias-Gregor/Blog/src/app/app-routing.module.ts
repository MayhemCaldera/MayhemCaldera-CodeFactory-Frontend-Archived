import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { FormSiteComponent } from './form-site/form-site.component';

const routes: Routes = [{

  path: "", component: BlogPageComponent

}, {

  path: "about", component: AboutPageComponent

}, {

  path: "form", component: FormSiteComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
