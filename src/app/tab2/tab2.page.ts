import { Component, Renderer2 } from '@angular/core';

@Component
({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page
{
  constructor(private renderer: Renderer2) {}

  onToggleDarkMode(event)
  {
    if(event.detail.checked)
    {
      // document.body.setAttribute('color-theme', 'dark');
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    }
    else
    {
      // document.body.setAttribute('color-theme', 'light');
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }
  }
}
