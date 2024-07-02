import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChattingsEditFormComponent } from '../chattings-edit-form/chattings-edit-form.component';
import { NewChatting } from '@app/core/model';
import { ChattingsService } from '@app/core/http/chattings.service';

@Component({
  selector: 'app-chattings-write',
  standalone: true,
  imports: [CommonModule, ChattingsEditFormComponent],
  templateUrl: './chattings-write.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingsWriteComponent {
  readonly $chattingService = inject(ChattingsService);
  protected async onUpdateForm(chatting: NewChatting) {
    const result = await this.$chattingService.addChattings(chatting);
    // console.log('result ===>', result);
  }
}
