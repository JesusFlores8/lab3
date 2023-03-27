import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutloginComponent } from './layoutlogin.component';

describe('LayoutloginComponent', () => {
  let component: LayoutloginComponent;
  let fixture: ComponentFixture<LayoutloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
