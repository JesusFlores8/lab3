import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutpanelComponent } from './layoutpanel.component';

describe('LayoutpanelComponent', () => {
  let component: LayoutpanelComponent;
  let fixture: ComponentFixture<LayoutpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
