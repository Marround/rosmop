import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdviewComponent } from './prodview.component';

describe('ProdviewComponent', () => {
  let component: ProdviewComponent;
  let fixture: ComponentFixture<ProdviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
