import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '@app/core/http';
import { NewChatting } from '@app/core/model/chatting';
import { isNotNil } from 'rambda';
import { filter, first, firstValueFrom, skipWhile, tap } from 'rxjs';

@Component({
  selector: 'app-chattings-edit-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chattings-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingsEditFormComponent {
  readonly #authService = inject(AuthService);
  editForm = new FormGroup({
    title: new FormControl('', { validators: [Validators.required] }),
  });

  get title() {
    return this.editForm.controls['title'];
  }

  update = output<NewChatting>();

  protected async onSubmit(e: SubmitEvent) {
    this.editForm.disable();
    const user = await firstValueFrom(this.#authService.authState$);

    if (isNotNil(user)) {
      const newChatting = {
        uid: user?.uid,
        title: this.title.value as string,
      };
      this.update.emit(newChatting);
    }
  }
}
