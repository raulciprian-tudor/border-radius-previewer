import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  topLeft: string = '0';
  topRight: string =  '0';
  bottomLeft: string =  '0';
  bottomRight: string =  '0';

  topLeftV: string =  '0';
  topRightV: string =  '0';
  bottomLeftV: string =  '0';
  bottomRightV: string =  '0';

  applyChanges() {
    return `${this.topLeft}em ${this.topRight}em ${this.bottomRight}em ${this.bottomLeft}em / ${this.topLeftV}em ${this.topRightV}em ${this.bottomRightV}em ${this.bottomLeftV}em`;
  }

  applyChangesBorder() {
    return `${this.topLeft}em ${this.topRight}em ${this.bottomRight}em ${this.bottomLeft}em`;
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

  onScrollChangeTLVertical(event: any) {
    event.preventDefault();
    const step = 0.25;

    if(event.deltaY < 0) {
      this.topLeftV = (parseFloat(this.topLeftV) + step).toFixed(2);
    } else {
      this.topLeftV = (parseFloat(this.topLeftV) - step).toFixed(2);
    }
  }
  onScrollChangeTRVertical(event: any) {
    event.preventDefault();
    const step = 0.25;

    if(event.deltaY < 0) {
      this.topRightV = (parseFloat(this.topRightV) + step).toFixed(2);
    } else {
      this.topRightV = (parseFloat(this.topRightV) - step).toFixed(2);
    }
  }
  onScrollChangeBRVertical(event: any) {
    event.preventDefault();
    const step = 0.25;

    if(event.deltaY < 0) {
      this.bottomRightV = (parseFloat(this.bottomRightV) + step).toFixed(2);
    } else {
      this.bottomRightV = (parseFloat(this.bottomRightV) - step).toFixed(2);
    }
  }
  onScrollChangeBLVertical(event: any) {
    event.preventDefault();
    const step = 0.25;

    if(event.deltaY < 0) {
      this.bottomLeftV = (parseFloat(this.bottomLeftV) + step).toFixed(2);
    } else {
      this.bottomLeftV = (parseFloat(this.bottomLeftV) - step).toFixed(2);
    }
  }
}
