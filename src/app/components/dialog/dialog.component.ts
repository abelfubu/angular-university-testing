import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'au-test-dialog',
  template: `
    <p>
      dialog works!
    </p>
  `,
  styles: [
  ]
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
