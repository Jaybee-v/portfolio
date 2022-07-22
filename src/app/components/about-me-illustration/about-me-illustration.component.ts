import { Component, OnInit } from '@angular/core';
import { delay, interval, map, Observable, timer } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'about-me-illustration',
  templateUrl: './about-me-illustration.component.html',
  styleUrls: ['./about-me-illustration.component.scss'],
  animations: [
    trigger('textShadow', [
      state(
        'inactive',
        style({
          textShadow: 'none',
        })
      ),
      state(
        'active',
        style({
          textShadow:
            '4px 4px 8px #ffce6b, -4px -4px 8px #ffce6b, 0px 0px 8px #ffce6b',
        })
      ),
      transition('inactive => active', animate('100ms ease-in-out')),
      transition('active => inactive', animate('100ms ease-in-out')),
    ]),
  ],
})
export class AboutMeIllustrationComponent implements OnInit {
  constructor() {}
  public firstArrow: string = 'inactive';
  public secondArrow: string = 'inactive';
  public thirdArrow: string = 'inactive';
  public lightOnComputer: string = 'inactive';

  ngOnInit() {
    this.arrowOne();
    this.arrowTwo();
    this.arrowThree();
    this.computer();
  }

  arrowOne() {
    let Timer = interval(500);

    Timer.pipe(delay(100)).subscribe((t) => {
      this.firstArrow = 'active';
      console.log('a');
    });

    let next = interval(1500);
    next.subscribe((t) => {
      this.firstArrow = 'inactive';
    });
  }

  arrowTwo() {
    let Timer = interval(500);

    Timer.pipe(delay(200)).subscribe((t) => {
      this.secondArrow = 'active';
      console.log('b');
    });

    let next = interval(1500);
    next.subscribe((t) => {
      this.secondArrow = 'inactive';
    });
  }

  arrowThree() {
    let Timer = interval(500);

    Timer.pipe(delay(300)).subscribe((t) => {
      this.thirdArrow = 'active';
      console.log('c');
    });

    let next = interval(1500);
    next.subscribe((t) => {
      this.thirdArrow = 'inactive';
    });
  }

  computer() {
    let Timer = interval(500);

    Timer.pipe(delay(400)).subscribe((t) => {
      this.lightOnComputer = 'active';
      console.log('a');
    });

    let next = interval(1500);
    next.subscribe((t) => {
      this.lightOnComputer = 'inactive';
    });
  }
}
