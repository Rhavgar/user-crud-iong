import { Component, Renderer2 } from '@angular/core';

@Component
({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page
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
