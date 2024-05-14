import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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

  value$ = this.title.valueChanges.pipe(tap((v) => console.log(v)));

  get title() {
    return this.editForm.controls['title'];
  }

  protected onSubmit() {
    this.editForm.disable();
    const newChattings = {
      title: this.title.value,
    };
  }
}
