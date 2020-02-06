import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditArticleFormComponent } from './create-edit-article-form.component';

describe('CreateEditArticleFormComponent', () => {
  let component: CreateEditArticleFormComponent;
  let fixture: ComponentFixture<CreateEditArticleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditArticleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditArticleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
