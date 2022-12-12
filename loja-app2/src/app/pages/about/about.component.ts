import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lja-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  itemEscolhido = '';

  filtros = [
    {
      label: 'Todos',
      path: 'todos'
    },
    {
      label: 'Lidos',
      path: 'lidos'
    },
    {
      label: 'Não lidos',
      path: 'nao-lidos'
    }
  ];

  // lidos
  // nao-lidos
  // todos

  constructor(private route: ActivatedRoute) {
  }

  listaFiltrada = [];

  ngOnInit(): void {
    // this.listaFiltrada = this.listaNotificacoes;
    console.log('ngOnInit AboutComponent');

    // console.log('Parametros: ', this.route.snapshot.params);
    // this.itemEscolhido = this.route.snapshot.params['produto'];
    // this.route.params.subscribe((params) => {
    //   console.log('Parametros: ', params);
    //   this.itemEscolhido = params['produto'];
    // });

    this.route.data.subscribe((data) => {
      console.log('Parametros: ', data);
      this.itemEscolhido = data['status'];
    });
  }


  navegarParaFiltro(filtro: string) {
    // roteamento -> naveguei até home/lidos
  }
}
