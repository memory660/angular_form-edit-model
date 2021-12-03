import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() vm!: User;
  @Output() save: EventEmitter<User> = new EventEmitter<User>();

  onSave() {
    this.save.emit(this.vm);
  }

  ngOnInit(): void {}
}
