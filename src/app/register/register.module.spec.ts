import { RegisterModule } from './register.module';

describe('LayoutModule', () => {
    let registerModule: RegisterModule;

    beforeEach(() => {
        registerModule = new RegisterModule();
    });

    it('should create an instance', () => {
        expect(registerModule).toBeTruthy();
    });
});
