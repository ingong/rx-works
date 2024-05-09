import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChattingsEditFormComponent } from '../chattings-edit-form/chattings-edit-form.component';

@Component({
  selector: 'app-chattings-write',
  standalone: true,
  imports: [CommonModule, ChattingsEditFormComponent],
  templateUrl: './chattings-write.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingsWriteComponent {}
