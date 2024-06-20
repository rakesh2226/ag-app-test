import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupOverlayComponent } from './popup-overlay.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PopupOverlayComponent],
  exports: [PopupOverlayComponent]
})
export class OverlayModule {}
