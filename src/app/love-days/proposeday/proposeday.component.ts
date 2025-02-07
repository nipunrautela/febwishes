import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-proposeday',
  templateUrl: './proposeday.component.html',
  styleUrl: './proposeday.component.css'
})
export class ProposedayComponent {
  @ViewChild('linkContainerRef') linkContainerRef!: ElementRef;
  messageData = '';
  hideMessage = true;

  data: any | null = null;

  messageTemplates: {
    name: string;
    content: string;
  }[] = [
      {
        name: 'Traditional',
        content: 'Since I met you, you are all I think about ❤️. You are what I see in my dreams, you are what I miss in my nightmares. I love you more than anything ❤️',
      },
      {
        name: 'Straight Forward',
        content: 'What if I said I want to share all my snacks with you?\n 😂 How about this: I hereby declare my undying love for pizza and you can be its topping! 🍕❤️',
      },
      {
        name: 'Brain Rot',
        content: 'Aight, so like, it\'s Propose Day or whatever, and lowkey, I\'ve been vibin\' with you for a minute now. You\'re like my main character energy, fr. Every time we\'re together, it\'s just chef\'s kiss—no cap. You got me feelin\' all soft and stuff, and I\'m not even mad about it. So like, here\'s the dealio: you wanna make this thing official? Like, ride-or-die, twin flame, forever-and-ever type beat? Cuz honestly, you\'re my glitch in the matrix, and I\'m tryna lock this down. Whatchu say? Let\'s level up, fam. 👉👈',
      },
      {
        name: 'Gemeni 2.0',
        content: 'Every moment we\'ve shared has felt like something truly special, a connection I cherish more than words can say. rom the beginning, there\'s been an undeniable spark between us, a feeling that I\'ve never experienced before.Today, on Propose Day, I want to take a chance and ask you something that\'s been in my heart for a long time.  Will you take my hand and explore where this connection can lead? Will you be mine?',
      },
      {
        name: 'Chat GPT',
        content: 'On this special day dedicated to love and new beginnings, I want to take a moment to tell you how much you mean to me. From the little things that make me smile to the way you\'ve brought light into my life, being with you feels like the best decision I\'ve ever made. Today, I want to ask if you\'d let me be the one who continues to make you laugh, supports you through every step, and cherishes you endlessly. Will you allow me to be your forever? Let\'s make this journey of love together, one beautiful moment at a time. ❤️'
      },
      {
        name: 'Rather Sus',
        content: 'Hey we have known each other for quite some time now, and honestly i think we connect on all levels. I\'m hopelessly free on 14th, you wanna go out for coffee ? And maybe some docking afterwards?'
      },
      {
        name: 'Placeholdered',
        content: 'My dearest [Name], every moment with you feels like a dream come true, a chapter in a beautiful story I never want to end.  From the first time our eyes met, I knew there was something truly special between us.  Your [mention a specific quality you admire - e.g., kindness, humor, spirit] shines brighter than any star, and you make me a better person just by being you.  Today, on Propose Day, I want to take a leap of faith and ask you to make this beautiful story our forever story.  Will you do me the incredible honor of becoming my [girlfriend/boyfriend/partner]?',
      },
      {
        name: 'PD Special',
        content: 'On this beautiful Propose Day, I find myself reflecting on the countless moments we\'ve shared—moments filled with laughter, understanding, and an unspoken connection that has grown stronger with time. Today, I want to take a step forward and put my feelings into words. You are the person who brings light to my days, who makes my heart beat a little faster, and who feels like home. With all my heart, I ask you to take this leap of faith with me. Will you make me the happiest person by saying yes to a future together? Let\'s turn this day into the beginning of our forever.',
      },
    ];

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      if (!!params['data']) {
        const payload = params['data'];
        const decodedPayload = Base64.decode(payload);

        this.data = JSON.parse(decodedPayload);
      }
    });
  }

  onFormSubmit(proposeForm: NgForm) {
    const payload = JSON.stringify(proposeForm.value);
    const encodedPayload = Base64.encodeURI(payload);

    this.linkContainerRef.nativeElement.innerHTML = `http://localhost:4200/lovedays/proposeday?data=${encodedPayload}`
  }

  copyLink() {
    const link = this.linkContainerRef.nativeElement.innerHTML;
    navigator.clipboard.writeText(link);
    this.linkContainerRef.nativeElement.innerHTML = "Copied!!";
    setTimeout(() => {
      this.linkContainerRef.nativeElement.innerHTML = link;
    }, 1000);
  }
}
