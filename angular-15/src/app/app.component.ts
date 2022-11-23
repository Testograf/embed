import {Component} from '@angular/core';

const ttEmbedUrl = 'https://www.testograf.ru/embed/embed.js?v=1666522817'
const ttScriptId = 'ttEmbed';
const ttSurveyId = 512105;
const ttContainerId = `tte-i-${ttSurveyId}`;

@Component({
  selector: 'app-root',
  template: `
    <button *ngIf="!loaded" (click)="inject()">Force</button>
    <button *ngIf="loaded" (click)="clear()">Unload</button>
    <div *ngIf="!loaded">Loading...</div>
    <div id="${ttContainerId}"></div>
  `
})

export class AppComponent {
  loaded: boolean = false;

  public inject() {
    if (this.loaded) return;

    const script = document.createElement('script');
    const head = document.getElementsByTagName('head')[0];

    script.src = ttEmbedUrl;
    script.id = ttScriptId;
    script.type = 'text/javascript';
    script.async = true;
    head.appendChild(script);
    script.addEventListener('load', () => {
      window.ttgrafSetEmbedParams({
        id: ttSurveyId,
        scrollToInvalid: true
      });
      this.loaded = true;
    })
  }

  public clear() {
    const script = document.getElementById(ttScriptId);
    const container = document.getElementById(ttContainerId);

    if (script) {
      const head = document.getElementsByTagName('head')[0];
      head.removeChild(script);
    }

    if (container) {
      container.innerHTML = '';
      container.removeAttribute('style');
    }

    this.loaded = false;
  }
}
