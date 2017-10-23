import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KylepComponent } from './kylep.component';

describe('KylepComponent', () => {
  let component: KylepComponent;
  let fixture: ComponentFixture<KylepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KylepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KylepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
