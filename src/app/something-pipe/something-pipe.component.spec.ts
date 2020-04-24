import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingPipeComponent } from './something-pipe.component';

describe('SomethingPipeComponent', () => {
  let component: SomethingPipeComponent;
  let fixture: ComponentFixture<SomethingPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomethingPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
