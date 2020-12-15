// angular modules
import { TestBed }        from '@angular/core/testing';

// services
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should create ProductService', () => {
    expect(service).toBeTruthy();
  });
});
