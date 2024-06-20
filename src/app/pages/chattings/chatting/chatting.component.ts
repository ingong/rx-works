import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-chatting',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './chatting.component.html',
  styleUrl: './chatting.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingComponent {
  chattingForm = new FormGroup({
    message: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  get message() {
    return this.chattingForm.controls.message;
  }

  message$ = this.message.valueChanges;

  protected onSubmit(e: SubmitEvent) {
    this.chattingForm.disable();
    console.log(this.chattingForm.value);
  }
}
