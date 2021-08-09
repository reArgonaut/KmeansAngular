import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusComponent } from './clus.component';

describe('ClusComponent', () => {
  let component: ClusComponent;
  let fixture: ComponentFixture<ClusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
