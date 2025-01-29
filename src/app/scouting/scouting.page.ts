import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Scout  from '../model/Scout';
import { Router } from '@angular/router';

interface Button {
  label: string;
  counter: number;
}

interface Card {
  title: string;
  buttons: Button[];
}

@Component({
  selector: 'app-scouting',
  templateUrl: './scouting.page.html',
  styleUrls: ['./scouting.page.scss'],
})
export class ScoutingPage implements OnInit {
  scoutingName: string = '';
  cards: Card[] = [
    { title: 'Saque', buttons: [{ label: 'Ace', counter: 0 }, { label: 'Quebra', counter: 0 }, { label: 'Normal', counter: 0 }, { label: 'Erro', counter: 0 }] },
    { title: 'Bloqueio', buttons: [{ label: 'Ponto', counter: 0 }, { label: 'Continuidade', counter: 0 }, { label: 'Erro', counter: 0 }] },
    { title: 'Ataque', buttons: [{ label: 'Ponto', counter: 0 }, { label: '+', counter: 0 }, { label: '-', counter: 0 }, { label: 'Erro', counter: 0 }, { label: 'Bloqueio', counter: 0 }] },
    { title: 'Contra Ataque', buttons: [{ label: 'Ponto', counter: 0 }, { label: 'Continuidade', counter: 0 }, { label: 'Erro', counter: 0 }] },
    { title: 'Recepção', buttons: [{ label: 'Perfeita', counter: 0 }, { label: '+', counter: 0 }, { label: '-', counter: 0 }, { label: 'Erro', counter: 0 }, { label: 'Ace', counter: 0 }] }
  ];

  
  saqueAceCounter: number = 0;
  saqueQuebraCounter: number = 0;
  saqueNormalCounter: number = 0;
  saqueErroCounter: number = 0;

  bloqueioPontoCounter: number = 0;
  bloqueioContinuidadeCounter: number = 0;
  bloqueioErroCounter: number = 0;

  ataquePontoCounter: number = 0;
  ataquePlusCounter: number = 0;
  ataqueMinusCounter: number = 0;
  ataqueErroCounter: number = 0;
  ataqueBloqueioCounter: number = 0;

  contraAtaquePontoCounter: number = 0;
  contraAtaqueContinuidadeCounter: number = 0;
  contraAtaqueErroCounter: number = 0;

  recepcaoPerfeitaCounter: number = 0;
  recepcaoPlusCounter: number = 0;
  recepcaoMinusCounter: number = 0;
  recepcaoErroCounter: number = 0;
  recepcaoAceCounter: number = 0;
  dataAtual: Date = new Date();

  
    
  

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.scoutingName = params['name'] || '';
    });
  }

  incrementCounter(card: Card, button: Button) {
    button.counter++;
  }

  endScouting() {
    console.log('Scouting ended');
    this.saqueAceCounter = this.cards[0].buttons[0].counter;
    this.saqueQuebraCounter = this.cards[0].buttons[1].counter;
    this.saqueNormalCounter = this.cards[0].buttons[2].counter;
    this.saqueErroCounter = this.cards[0].buttons[3].counter;

    this.bloqueioPontoCounter = this.cards[1].buttons[0].counter;
    this.bloqueioContinuidadeCounter = this.cards[1].buttons[1].counter;
    this.bloqueioErroCounter = this.cards[1].buttons[2].counter;

    this.ataquePontoCounter = this.cards[2].buttons[0].counter;
    this.ataquePlusCounter = this.cards[2].buttons[1].counter;
    this.ataqueMinusCounter = this.cards[2].buttons[2].counter;
    this.ataqueErroCounter = this.cards[2].buttons[3].counter;
    this.ataqueBloqueioCounter = this.cards[2].buttons[4].counter;

    this.contraAtaquePontoCounter = this.cards[3].buttons[0].counter;
    this.contraAtaqueContinuidadeCounter = this.cards[3].buttons[1].counter;
    this.contraAtaqueErroCounter = this.cards[3].buttons[2].counter;

    this.recepcaoPerfeitaCounter = this.cards[4].buttons[0].counter;
    this.recepcaoPlusCounter = this.cards[4].buttons[1].counter;
    this.recepcaoMinusCounter = this.cards[4].buttons[2].counter;
    this.recepcaoErroCounter = this.cards[4].buttons[3].counter;
    this.recepcaoAceCounter = this.cards[4].buttons[4].counter;
    
    const scout = new Scout(this.scoutingName, this.saqueAceCounter, this.saqueQuebraCounter, this.saqueNormalCounter, this.saqueErroCounter, this.bloqueioPontoCounter, this.bloqueioContinuidadeCounter, this.bloqueioErroCounter, this.ataquePontoCounter, this.ataquePlusCounter, this.ataqueMinusCounter, this.ataqueErroCounter, this.ataqueBloqueioCounter, this.contraAtaquePontoCounter, this.contraAtaqueContinuidadeCounter, this.contraAtaqueErroCounter, this.recepcaoPerfeitaCounter, this.recepcaoPlusCounter, this.recepcaoMinusCounter, this.recepcaoErroCounter, this.recepcaoAceCounter, this.dataAtual);
    console.log(scout);
    this.router.navigate(['/home']);
  }
}