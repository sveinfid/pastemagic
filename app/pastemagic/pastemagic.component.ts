import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'pastemagic',
  template: require('./pastemagic.component.html')
})

export default class PasteMagicComponent implements OnInit, OnDestroy {
  public pastearea: string;
  constructor() {
    this.pastearea = 'Paste some datetime values here';
  }

  ngOnInit() { console.log('Pastemagic::ngOnInit'); }
  ngOnDestroy() { console.log('Pastemagic::ngOnDestroy'); }
}
