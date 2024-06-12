import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-lib-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-lib-1.component.html',
  styleUrl: './my-lib-1.component.css',
})
export class MyLib1Component {}
