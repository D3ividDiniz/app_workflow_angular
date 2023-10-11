import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingInComponent } from './page-sing-in.component';

describe('PageSingInComponent', () => {
  let component: PageSingInComponent;
  let fixture: ComponentFixture<PageSingInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSingInComponent]
    });
    fixture = TestBed.createComponent(PageSingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
