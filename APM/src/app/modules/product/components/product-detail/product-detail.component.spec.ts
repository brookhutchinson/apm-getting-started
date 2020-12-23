// modules
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule }   from '@angular/common/http/testing';

// components
import { ProductDetailComponent }    from './product-detail.component';

// services
import { ActivatedRoute }            from '@angular/router';
import { Router }                    from '@angular/router';

// schemas
import { NO_ERRORS_SCHEMA }          from '@angular/core';

xdescribe('ProductDetailComponent', () => {
  // component
  let productDetailComponent: ProductDetailComponent;

  // fixture
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // modules
      imports: [
        // angular modules
        HttpClientTestingModule,
      ],
      // components
      declarations: [ ProductDetailComponent ],
      // services
      providers: [ ActivatedRoute, Router ],
      // schemas
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    // create instance of component fixture
    fixture = TestBed.createComponent(ProductDetailComponent);

    // create instance of component
    productDetailComponent = fixture.componentInstance;

    // run change detection
    fixture.detectChanges();
  });

  it('should be named ProductDetailComponent', () => {
    expect(ProductDetailComponent.name).toBe('ProductDetailComponent');
  });

  it('should create ProductDetailComponent', () => {
    expect(productDetailComponent).toBeTruthy();
  });
});