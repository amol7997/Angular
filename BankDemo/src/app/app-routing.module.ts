import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceComponent } from './service/service.component';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './aboutus/aboutus.component';


  const routes: Routes = [
    {
      path:"homepage" ,component :HomepageComponent
    },
    {
      path:"register", component: RegistrationComponent
    },
    {
      path:"service", component: ServiceComponent
    },
    {
      path:"admin", component:AdminComponent
    },
    {
      path:"aboutus",component:AboutusComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
