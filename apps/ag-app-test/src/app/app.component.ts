import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from 'my-lib-1';
import {UiCoreComponent} from '@connect/ui-core';
import {ButtonModule} from '@connect/ui-core/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, UiCoreComponent, ButtonModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ag-app-test';
}
