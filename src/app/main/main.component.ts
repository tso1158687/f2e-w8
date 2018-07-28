import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import { TweenMax } from 'gsap';
import { TweenLite } from 'gsap';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  $square = $('.square');
  $circle = $('.circle');
  $star = $('.star');
  screenConfig = {
    opening: {
      duration: 5,
      phase2Duratiin: 1.6
    }
  };
  step1 = true;
  step2 = false;
  constructor() {}

  ngOnInit() {
    this.openning();
  }
  openning() {
    console.log('open');
    console.log(this.$circle);
    console.log($('.circle'));

    TweenLite.to($('.square'), this.screenConfig.opening.duration, {
      rotation: 360
      // ease: Power2.easeOut
    });
    TweenLite.to($('.circle'), this.screenConfig.opening.duration, {
      rotation: 360
      // ease: Power2.easeOut
    });
    TweenLite.to($('.star'), this.screenConfig.opening.duration, {
      rotation: -360
      // ease: Power2.easeOut
    });
    console.log('openning end');
    setTimeout(() => {
     this.step1 = false;
     this.step2 = true;
    }, 5000);
    // TweenLite.to(this.$circle, this.screenConfig.opening.duration / 2, {css: {scale: 1.1}});
    // TweenLite.to(this.$circle, this.screenConfig.opening.duration / 2, {css: {scale: 1}, delay: screenConfig.opening.duration / 2});

    // TweenLite.to($square, screenConfig.opening.phase2Duratiin, {css: {scale: 7}, ease: Power2.easeOut, delay: screenConfig.opening.duration - 1});
    // TweenLite.to($circle, 1.6, {css: {scale: 7}, ease: Power2.easeOut, delay: screenConfig.opening.duration - 0.7});
    // TweenLite.to($star, 0.6, {css: {scale: 7}, ease: Power2.easeOut, delay: screenConfig.opening.duration - 0.4, onComplete: function() {
    //   $('.opening').remove();
    //   screenQ1Start();
    // }});
  }
}
