import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserComponent } from './ui/user/user-profile.component';

@Component({
  selector: 'cp-user-info',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {}
