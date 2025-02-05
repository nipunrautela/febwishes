import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input('cardTitle') cardTitle!: string;
  @Input('cardDate') cardDate!: string;
  @Input('cardBody') cardBody!: string;
  @Input('cardLink') cardLink: string | null = null;
  @Input('cardDisabled') cardDisabled: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  handleCardClick() {
    if (this.cardLink !== null)
      this.router.navigate(this.cardLink.split('/'), { relativeTo: this.route });
  }
}
