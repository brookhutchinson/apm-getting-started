// angular modules
import { TestBed }            from '@angular/core/testing';

// guards
import { ProductDetailGuard } from './product-detail.guard';

describe('ProductDetailGuard', () => {
  let guard: ProductDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductDetailGuard);
  });

  it('should create ProductDetailGuard', () => {
    expect(guard).toBeTruthy();
  });
});
