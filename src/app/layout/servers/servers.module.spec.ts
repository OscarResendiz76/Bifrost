import { ServersModule } from './servers.module';

describe('ServersModule', () => {
    let serversModule: ServersModule;

    beforeEach(() => {
        serversModule = new ServersModule();
    });

    it('should create an instance', () => {
        expect(serversModule).toBeTruthy();
    });
});
