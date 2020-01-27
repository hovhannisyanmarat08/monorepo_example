import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-services',
  template: `
    <p>
      shared-services works!
      this loads logger component from library
    </p>
    <lib-logger></lib-logger>
  `,
  styles: []
})
export class SharedServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
