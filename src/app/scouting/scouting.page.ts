import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

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
    // Implement additional logic to handle the end of scouting
  }
}