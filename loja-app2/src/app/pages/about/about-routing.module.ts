import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: 'sobre',
    children: [
      {
        path: '',
        component: AboutComponent,
      },
      {
        path: 'tv',
        component: AboutComponent,
        data: { status: 'tv' }
      },
      {
        path: 'ventilador',
        component: AboutComponent,
        data: { status: 'ventilador' }
      },
      {
        path: 'secadora',
        component: AboutComponent,
        data: { status: 'secadora' }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
