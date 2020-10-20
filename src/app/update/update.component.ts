import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class updateComponent {
  title = 'Price Calculator';

  lhs = 0;
  rhs = 150;
  result = 0;
  operator = '*';

  recalc(): void {
    console.log(this.operator);
    const op = this.operator.charAt(0);
    console.log(op);
    while  (op === '*') {
      console.log('multiply');
      this.result = this.lhs * this.rhs;
    }
  }
}
