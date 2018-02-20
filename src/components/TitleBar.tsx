import * as React from 'react';
import SettingsService from '../services/SettingsService';

interface TitleBarProps {

}

interface TitleBarState {

}

export default class TitleBar extends React.Component<TitleBarProps, TitleBarState> {
    render() {
        return (
            <div className="pencil">
                <span className="lead"/>
                <div className="body">
                    <span>{SettingsService.userName}'s To do list</span>
                    <button className="settings-button"></button>
                </div>
                <span className="eraser"/>
            </div>
        );
    }
}
