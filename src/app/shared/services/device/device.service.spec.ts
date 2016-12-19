import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
// import { Device } from './device';
import { DeviceService } from './device.service';

describe('DeviceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DeviceService
            ],
            imports: [
                HttpModule
            ]
        });

    });

    it('#DeviceService should be defined', inject([DeviceService], (service: DeviceService) => {
        expect(service).toBeDefined();
    }));
});
