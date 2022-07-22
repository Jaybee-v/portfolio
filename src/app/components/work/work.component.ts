import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  @ViewChild('video') videoplayer!: ElementRef;
  @ViewChild('video2') videoplayer2!: ElementRef;

  mouseover(event: any) {
    this.videoplayer.nativeElement.play();
  }
  mouseout(video: any) {
    this.videoplayer.nativeElement.pause();
  }

  mouseover2(event: any) {
    this.videoplayer2.nativeElement.play();
  }

  mouseout2(event: any) {
    this.videoplayer2.nativeElement.pause();
  }
}
