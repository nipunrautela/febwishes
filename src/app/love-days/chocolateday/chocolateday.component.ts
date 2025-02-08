import { Component, ElementRef, ViewChild } from '@angular/core';
import Chocolate, { chocolatesList } from './chocolate.model';
import { Base64 } from 'js-base64';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chocolateday',
  templateUrl: './chocolateday.component.html',
  styleUrl: './chocolateday.component.css'
})
export class ChocolatedayComponent {

  sender = '';
  chocolates: Chocolate[] = chocolatesList;
  cart: {
    [chocolateId: number]: {
      chocolate: Chocolate;
      qty: number;
    } | undefined;
  } = {};

  selectedChocolate: Chocolate | null = null;
  selectedChocolateQty: number | null = null;

  imgTouched(cKey: number, dKey: number) {
    this.selectedChocolate = this.chocolates[cKey];
    this.selectedChocolateQty = this.data.chocolates[dKey].qty;
    this.data.chocolates.forEach((element: any) => {
      document.getElementById(`choco-${element.chocolateKey}`)!.style.zIndex = '0';
    });
    const id = `choco-${cKey}`;
    document.getElementById(id)!.style.zIndex = '10';
  }

  data: any | undefined
  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      if (!!params['data']) {
        const decodedPayload = Base64.decode(params['data'])
        this.data = JSON.parse(decodedPayload);
      }
    })
  }

  budget = 0;

  calculateBudget() {
    let budget = 0;
    for (const cartKey in this.cart) {
      budget += this.cart[cartKey]!.chocolate.price * this.cart[cartKey]!.qty;
    }
    this.budget = budget;
  }

  @ViewChild('linkContainerRef') linkContainerRef!: ElementRef;
  linkGenerated = false;

  generateLink() {
    const payload = JSON.stringify({
      chocolates: Object.keys(this.cart).map(cartKey => {
        let nCartkey = this.asNumber(cartKey);
        return { chocolateKey: this.cart[nCartkey]!.chocolate.id - 1, qty: this.cart[nCartkey]!.qty }
      }),
      sender: this.sender
    });
    console.log(payload);
    const encodedPayload = Base64.encodeURI(payload);
    this.route.url.subscribe(url => {
      this.linkContainerRef.nativeElement.innerHTML = `http://febraury.love/lovedays/${url}?data=${encodedPayload}`;
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

  addChocolateToCart(index: number) {
    this.cart[index] = {
      chocolate: this.chocolates[index],
      qty: (this.cart[index]?.qty ?? 0) + 1,
    };
    this.calculateBudget();
  }

  deleteItemFromCart(key: number) {
    delete this.cart[key];
    this.calculateBudget();
  }

  decreaseItemQtyInCart(key: number) {
    if (this.cart[key]?.qty === 1)
      this.deleteItemFromCart(key);
    else
      this.cart[key]!.qty -= 1;
    this.calculateBudget();
  }

  increaseItemQtyInCart(key: number) {
    this.cart[key]!.qty += 1;
    this.calculateBudget();
  }

  asNumber(value: string) {
    return Number(value);
  }


}
