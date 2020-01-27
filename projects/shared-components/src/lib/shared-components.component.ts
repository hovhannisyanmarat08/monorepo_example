import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-components',
  template: `
    <p>
      shared-components works!
    </p>
    <p>
      this uses logger module
    </p>
    <lib-logger></lib-logger>
    <p>
      this also uses shared services module
    </p>
    <lib-shared-services></lib-shared-services>
  `,
  styles: []
})
export class SharedComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
