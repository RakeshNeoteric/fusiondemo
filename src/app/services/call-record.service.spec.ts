import { TestBed } from '@angular/core/testing';

import { CallRecordService } from './call-record.service';

describe('CallRecordService', () => {
  let service: CallRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
