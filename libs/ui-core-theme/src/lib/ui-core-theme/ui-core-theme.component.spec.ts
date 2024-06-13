import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCoreThemeComponent } from './ui-core-theme.component';

describe('UiCoreThemeComponent', () => {
  let component: UiCoreThemeComponent;
  let fixture: ComponentFixture<UiCoreThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCoreThemeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCoreThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
