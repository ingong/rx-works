import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewChatting } from '@app/core/model/chatting';
import { tap } from 'rxjs';

@Component({
  selector: 'app-chattings-edit-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chattings-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingsEditFormComponent {
  editForm = new FormGroup({
    title: new FormControl('', { validators: [Validators.required] }),
  });

  get title() {
    return this.editForm.controls['title'];
  }

  update = output<NewChatting>();

  protected onSubmit(e: SubmitEvent) {
    e.preventDefault();

    this.editForm.disable();
    const newChatting = {
      title: this.title.value as string,
    };

    this.update.emit(newChatting);
  }
}
