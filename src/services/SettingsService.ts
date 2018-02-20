import DataService from './DataService';

export default abstract class SettingsService {
    public static get userName(): string {
        return SettingsService.get<string>('name');
    }

    public static set userName(value: string) {
        SettingsService.set('name', value);
    }

    public static get showCheckbox(): boolean {
        return SettingsService.get<boolean>('showCheckbox');
    }

    public static set showCheckbox(value: boolean) {
        SettingsService.set('showCheckbox', value);
    }

    private static init() {
        DataService.settings = DataService.settings || {
            name: 'Someone',
            showCheckbox: false
        };
    }

    private static get<T>(propName: string): T {
        SettingsService.init();
        return DataService.settings[propName];
    }

    private static set(propName: string, value: any) {
        SettingsService.init();
        DataService.settings[propName] = value;
    }
}

