import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TweenLite } from 'gsap';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // ps:非常奇怪，angular綁定物件後，就不是jquery物件了
  // $square = $('.square');
  // $circle = $('.circle');
  // $star = $('.star');

  screenConfig = {
    opening: {
      duration: 5,
      phase2Duratiin: 1.6
    }
  };
  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  constructor() {}

  ngOnInit() {
    this.openning();
  }
  openning() {
    const $square = $('.square');
    const $circle = $('.circle');
    const $star = $('.star');
    TweenLite.to($square, this.screenConfig.opening.duration, {
      rotation: 360,
      ease: Power1.easeOut
    });
    TweenLite.to($circle, this.screenConfig.opening.duration, {
      rotation: 360,
      ease: Power2.easeOut
    });
    TweenLite.to($star, this.screenConfig.opening.duration, {
      rotation: -360,
      ease: Power2.easeOut
    });

    TweenLite.to($circle, this.screenConfig.opening.duration / 2, {
      css: { scale: 1.1 }
    });
    TweenLite.to($circle, this.screenConfig.opening.duration / 2, {
      css: { scale: 1 },
      delay: this.screenConfig.opening.duration / 2
    });

    TweenLite.to($square, this.screenConfig.opening.phase2Duratiin, {
      css: { scale: 7 },
      delay: this.screenConfig.opening.duration - 1
    });
    TweenLite.to($circle, 1.6, {
      css: { scale: 7 },
      delay: this.screenConfig.opening.duration - 0.7
    });
    TweenLite.to($star, 0.6, {
      css: { scale: 7 },
      delay: this.screenConfig.opening.duration - 0.4,
      onComplete: () => {
        $('#openning').fadeOut('fast');
        $('#question1').fadeIn('slow');
        this.question1();
      }
    });
  }
  question1() {
    const $square = $('.q1-square'); // top: 100
    const $triangle = $('.q1-triangle'); // top: 300
    const $circle = $('.q1-circle'); // bottom: -100
    TweenLite.to($('.q1-left'), 2, {css: {backgroundColor: '#1469FF'}, delay: 0.5});
    // TweenLite.to($('.screenQ1 .animate-section'), 1, {css: {left: '60%'}, delay: 1});
    TweenLite.to($square, 2, {css: {top: '100px'}, ease: Power3.easeOut, delay: 2});
    TweenLite.to($triangle, 2, {css: {top: '300px'}, ease: Power2.easeOut, delay: 2});
    TweenLite.to($circle, 2, {css: {bottom: '-100px'}, ease: Power2.easeOut, delay: 2});

    TweenLite.to($square, 4, {rotation: 360, ease: Power3.easeOut, delay: 4});
    TweenLite.to($triangle, 4, {rotation: -360, ease: Power2.easeOut, delay: 4});
    TweenLite.to($circle, 4, {css: {x: '+=20', y: '+=30'}, ease: Power2.easeOut, delay: 4});
  }
  goToQ2() {
    $('#question1').fadeOut('fast');
    $('#question2').fadeIn('slow');
    this.question2();
  }
  question2() {
    const $square = $('.q2-square'); // top: 100
    const $triangle = $('.q2-triangle'); // top: 300
    const $circle = $('.q2-circle'); // bottom: -100
    TweenLite.to($('.q2-left'), 2, {css: {backgroundColor: '#1469FF'}, delay: 0.5});
    // TweenLite.to($('.screenQ1 .animate-section'), 1, {css: {left: '60%'}, delay: 1});
    TweenLite.to($square, 2, {css: {top: '100px'}, ease: Power3.easeOut, delay: 2});
    TweenLite.to($triangle, 2, {css: {top: '300px'}, ease: Power2.easeOut, delay: 2});
    TweenLite.to($circle, 2, {css: {bottom: '-100px'}, ease: Power2.easeOut, delay: 2});

    TweenLite.to($square, 4, {rotation: 360, ease: Power3.easeOut, delay: 4});
    TweenLite.to($triangle, 4, {rotation: -360, ease: Power2.easeOut, delay: 4});
    TweenLite.to($circle, 4, {css: {x: '+=20', y: '+=30'}, ease: Power2.easeOut, delay: 4});
  }
  goToQ3() {
    $('#question2').fadeOut('fast');
    $('#question3').fadeIn('slow');
    this.question3();
  }
  question3() {
    const $square = $('.q3-square'); // top: 100
    const $triangle = $('.q3-triangle'); // top: 300
    const $circle = $('.q3-circle'); // bottom: -100
    TweenLite.to($('.q3-left'), 2, {css: {backgroundColor: '#1469FF'}, delay: 0.5});
    // TweenLite.to($('.screenQ1 .animate-section'), 1, {css: {left: '60%'}, delay: 1});
    TweenLite.to($square, 2, {css: {top: '100px'}, ease: Power3.easeOut, delay: 2});
    TweenLite.to($triangle, 2, {css: {top: '300px'}, ease: Power2.easeOut, delay: 2});
    TweenLite.to($circle, 2, {css: {bottom: '-100px'}, ease: Power2.easeOut, delay: 2});

    TweenLite.to($square, 4, {rotation: 360, ease: Power3.easeOut, delay: 4});
    TweenLite.to($triangle, 4, {rotation: -360, ease: Power2.easeOut, delay: 4});
    TweenLite.to($circle, 4, {css: {x: '+=20', y: '+=30'}, ease: Power2.easeOut, delay: 4});
  }
}
