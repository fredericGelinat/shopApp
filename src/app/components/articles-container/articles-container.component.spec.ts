import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesContainerComponent } from './articles-container.component';

describe('ArticlesContainerComponent', () => {
  let component: ArticlesContainerComponent;
  let fixture: ComponentFixture<ArticlesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
