import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { serverTimestamp } from '@angular/fire/firestore';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { filter, map, first, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ChattingsService } from '@app/core/http';
import { NewMessage } from '@app/core/model/message';
import { isNil, isNotNil } from 'rambda';

@Component({
  selector: 'app-chatting',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './chatting.component.html',
  styleUrl: './chatting.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingComponent {
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #chattingsService = inject(ChattingsService);

  chattingForm = new FormGroup({
    body: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  get body() {
    return this.chattingForm.controls.body;
  }

  message$ = this.#activatedRoute.paramMap.pipe(
    map((e) => e.get('chattingId')),
    filter(isNotNil),
    switchMap((chattingId) => this.#chattingsService.getMessages(chattingId))
  );

  protected async onSubmit(e: SubmitEvent) {
    this.chattingForm.disable();
    const chattingId = this.#activatedRoute.snapshot.paramMap.get('chattingId');
    if (chattingId) {
      const newMessage = {
        ...this.chattingForm.value,
        chattingId: '',
        created: serverTimestamp(),
      } as NewMessage;

      await this.#chattingsService.addMessage(chattingId, newMessage);

      this.chattingForm.reset();
      this.chattingForm.enable();
    }
  }
}
