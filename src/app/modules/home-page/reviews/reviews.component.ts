import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  @ViewChild('sliderEl') sliderEl: ElementRef;
  @ViewChild('start') start: ElementRef;
  @ViewChild('slickModal') slickModal: any;

  stars = [1, 2, 3, 4, 5];
  reviews: { quote: string, reviewerName: string }[] = [
    {
      quote: `There is nowhere I would trust more with my skin! I've been coming here for about a year now and will continue. Cinza and her team are professional but also like my agony aunts!`,
      reviewerName: 'Ruth'
    },
    {
      quote: `Cinzia is adorable. Excellent knowledge and made me feel amazing. Would thoroughly recommend Cinzia and her beauty salon to my family and friends`,
      reviewerName: 'Maggie'
    },
    {
      quote: `I always have a wonderful experience when I go here! Best clinic in south london, possibly in the whole of london!`,
      reviewerName: 'Louise'
    },
    {
      quote: `Cinzia is very knowledgeable about her trade. Totally dedicated and shows a passion for her desired outcomes. Very professional and person centred. Highly recommended`,
      reviewerName: 'Wendy'
    },
    {
      quote: `You really feel like you’re in good hands at this place! Everyone knows what they’re doing and you trust them to do a good job - and they do! Couldn’t recommend more`,
      reviewerName: 'Liberty'
    },
    {
      quote: `Another amazing facial with Cinzia, she really does work miracles with the facials she offers`,
      reviewerName: 'Angela'
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    focusOnSelect: false,
    touchThreshold: 200,
    autoplay: false,
    speed: 2500,
    touchMove: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          variableWidth: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  };

  swipe(): void {
    setTimeout(() => {
      this.slickModal.slickGoTo(this.slickModal.currentIndex);
    }, 0);
  }
}
