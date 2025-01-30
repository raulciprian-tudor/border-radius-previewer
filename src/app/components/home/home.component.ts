import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  topLeft: string = '0.25';
  topRight: string = '0.25';
  bottomLeft: string = '0.25';
  bottomRight: string = '0.25';

  applyChanges() {
    return `${this.topLeft}em ${this.topRight}em ${this.bottomLeft}em ${this.bottomRight}em`;
  }

  onScrollChangeTL(event: any) {
    event.preventDefault();
    const step = 0.25;

    if(event.deltaY < 0) {
      this.topLeft = (parseFloat(this.topLeft) + step).toFixed(2);
    } else {
      this.topLeft = (parseFloat(this.topLeft) - step).toFixed(2);
    }
  }

  onScrollChangeTR(event: any) {
    event.preventDefault();
    const step = 0.25;

    if(event.deltaY < 0) {
      this.topRight = (parseFloat(this.topRight) + step).toFixed(2);
    } else {
      this.topRight = (parseFloat(this.topRight) - step).toFixed(2);
    }
  }


  // check why bottom left and bottom right are reversed
  onScrollChangeBL(event: any) { 
    event.preventDefault();
    const step = 0.25;

    if(event.deltaY < 0) {
      this.bottomLeft = (parseFloat(this.bottomLeft) + step).toFixed(2);
    } else {
      this.bottomLeft = (parseFloat(this.bottomLeft) - step).toFixed(2);
    }
  }

  onScrollChangeBR(event: any) {
    event.preventDefault();
    const step = 0.25;

    if(event.deltaY < 0) {
      this.bottomRight = (parseFloat(this.bottomRight) + step).toFixed(2);
    } else {
      this.bottomRight = (parseFloat(this.bottomRight) - step).toFixed(2);
    }
  }
}
