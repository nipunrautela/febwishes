import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Base64 } from 'js-base64';

import { Setup } from '../../shared/types';

@Component({
  selector: 'app-roseday',
  templateUrl: './roseday.component.html',
  styleUrl: './roseday.component.css',
})
export class RosedayComponent implements AfterViewInit {
  @ViewChild('linkContainerRef') linkContainerRef!: ElementRef;

  tabSelected: string = 'components';
  workingFile: string | null = null;

  loadedSetup: Setup | null = null;

  data: any | null = null;

  selectedRose: number = 0;
  roses: string[] = [
    'https://png.pngtree.com/png-vector/20240312/ourmid/pngtree-realistic-red-rose-white-background-png-image_11716749.png',
    'https://pngimg.com/d/rose_PNG66862.png',
    'https://png.pngtree.com/png-vector/20230907/ourmid/pngtree-pink-rose-decoration-png-image_10013932.png',
  ];

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      if (params['data'] !== undefined) {
        this.data = JSON.parse(Base64.decode(params['data']));
      }
    });
  }

  ngAfterViewInit() {
    if (this.linkContainerRef)
      this.linkContainerRef.nativeElement.innerHTML = "Enter details and press 'Generate Wish Link'";
  }

  linkGenerated: boolean = false;

  receiver: string = '';
  message: string = '';

  onSubmit(form: NgForm) {
    const payload = JSON.stringify({ ...form.value, roseLink: this.roses[this.selectedRose] });
    const encodedPayload = Base64.encodeURI(payload);
    this.route.url.subscribe(url => {
      this.linkContainerRef.nativeElement.innerHTML = `https://febraury.love/lovedays/${url}?data=${encodedPayload}`;
      this.linkGenerated = true;
    })
  }

  onClickLink() {
    if (!this.linkGenerated) return;

    const link = this.linkContainerRef.nativeElement.innerHTML;
    navigator.clipboard.writeText(link);
    this.linkContainerRef.nativeElement.innerHTML = "Copied!!";
    setTimeout(() => {
      this.linkContainerRef.nativeElement.innerHTML = link;
    }, 1000);
  }
}
