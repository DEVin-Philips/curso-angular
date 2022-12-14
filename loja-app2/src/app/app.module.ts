import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProdutosModule } from './pages/produtos/produtos.module';
import { BloqueadorGuard } from './guards/bloqueador.guard';
import { AboutModule } from './pages/about/about.module';


const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'entrar',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent,

  },
  {
    path: 'inicio/:nome/:sobrenome',
    component: HomeComponent
  },
  {
    path: 'entrar',
    component: LoginComponent
  },
  {
    path: 'sobre',
    component: AboutComponent,
    canActivate: [
      BloqueadorGuard
    ],
  },

  {
    path: 'contato',
    component: ContactComponent,
    canDeactivate: [
      BloqueadorGuard
    ]
  },
  {
    path: 'contato/:id',
    component: ContactComponent
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module')
      .then((modulo) => modulo.ProdutosModule)
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AboutModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
