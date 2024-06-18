import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chatting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatting.component.html',
  styleUrl: './chatting.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingComponent {}
