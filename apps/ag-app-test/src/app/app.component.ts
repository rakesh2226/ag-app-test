import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from 'my-lib-1';
import {ButtonModule} from '@connect/ui-core/button';
import {OverlayModule} from '@connect/ui-core/overlay';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ButtonModule, OverlayModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ag-app-test';
}
