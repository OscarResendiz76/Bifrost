import { LoginModule } from './login.module';

describe('LayoutModule', () => {
    let loginModule: LoginModule;

    beforeEach(() => {
        loginModule = new LoginModule();
    });

    it('should create an instance', () => {
        expect(loginModule).toBeTruthy();
    });
});
