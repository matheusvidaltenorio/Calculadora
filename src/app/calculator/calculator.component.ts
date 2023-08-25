import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '';
  numbers: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

  appendToDisplay(value: string) {
    this.display += value;
  }

  clearDisplay() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }
}

