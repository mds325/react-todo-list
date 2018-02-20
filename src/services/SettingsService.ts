import DataService from './DataService';

export default abstract class SettingsService {
    public static get Name(): string {
        return SettingsService.get<string>('name');
    }

    private static init() {
        DataService.settings = DataService.settings || {
            name: 'Someone'
        };
    }

    private static get<T>(propName: string): T {
        SettingsService.init();
        return DataService.settings[propName];
    }
}

