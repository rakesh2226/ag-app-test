import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupOverlayComponent } from './popup-overlay.component';
import {UiCoreThemeComponent} from '@connect/ui-core-theme';

@NgModule({
  imports: [CommonModule, UiCoreThemeComponent],
  declarations: [PopupOverlayComponent],
  exports: [PopupOverlayComponent]
})
export class OverlayModule {}
