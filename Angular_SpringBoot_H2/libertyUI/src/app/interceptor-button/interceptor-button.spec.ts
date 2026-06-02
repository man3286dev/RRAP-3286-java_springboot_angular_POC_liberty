import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorButton } from './interceptor-button';

describe('InterceptorButton', () => {
  let component: InterceptorButton;
  let fixture: ComponentFixture<InterceptorButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterceptorButton],
    }).compileComponents();

    fixture = TestBed.createComponent(InterceptorButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
