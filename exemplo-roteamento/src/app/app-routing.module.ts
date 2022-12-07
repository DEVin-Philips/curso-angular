import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './paginas/contato/contato.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { SobreComponent } from './paginas/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'sobre',
    component: SobreComponent,
    children: [
      {
        path: ':nome',
        component: SobreComponent,
      },
      {
        path: ':nome/:categoria',
        component: SobreComponent
      },
      {
        path: ':nome/:categoria/ano',
        component: SobreComponent
      }
    ]
  },

  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
