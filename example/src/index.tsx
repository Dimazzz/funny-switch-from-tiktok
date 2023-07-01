import React from 'react';
import ReactDOM from 'react-dom/client';
import DayNightSwitch from "react-day-night-switch";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <DayNightSwitch/>
    </React.StrictMode>
);
