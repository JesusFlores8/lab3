import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutloginComponent } from './layouts/layoutlogin/layoutlogin.component';
import { LayoutpanelComponent } from './layouts/layoutpanel/layoutpanel.component';
import { LayoutwebsiteComponent } from './layouts/layoutwebsite/layoutwebsite.component';

const routes: Routes = [
// para redireccionar al website siempre y cuando este vacio ''.
{path:'', redirectTo:'website', pathMatch:'full'},
  
{//todos los hijos de este modulo cargaran en este componente
  path:'', 
   component:LayoutwebsiteComponent,
   children:[
  

  {
    path: 'website', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) 
  }]
},

{//todos los hijos de este modulo cargaran en este componente
  path:'', 
   component:LayoutloginComponent,
   children:[
  

  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  }]
},


{//todos los hijos de este modulo cargaran en este componente
  path:'', 
   component:LayoutpanelComponent,
   children:[
  

  {
    path: 'panel', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule) 
  }]
},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
