import { LicencesModule } from './licences.module';

describe('LicencesModule', () => {
    let licencesModule: LicencesModule;

    beforeEach(() => {
        licencesModule = new LicencesModule();
    });

    it('should create an instance', () => {
        expect(licencesModule).toBeTruthy();
    });
});
