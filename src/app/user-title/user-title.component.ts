import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-title',
  templateUrl: './user-title.component.html',
  styleUrls: ['./user-title.component.scss'],
})
export class UserTitleComponent implements OnInit {
  @Input() vm!: {
    name: string;
    lastName: string;
    tags: string[];
  };
  @Input() active!: boolean;
  @Output() selected: EventEmitter<void> = new EventEmitter<void>();

  select() {
    this.selected.emit();
  }

  ngOnInit(): void {}
}
