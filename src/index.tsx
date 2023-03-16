import React from "react";
import ReactDOM from "react-dom/client";
// import Parent from './props/Parent';
// import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
// import {getLCP, getFID, getCLS} from 'web-vitals';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div>
      <h1>Partytime</h1>
      {/* <Parent /> */}
      {/* <UserSearch /> */}
      <EventComponent />
    </div>
  </React.StrictMode>
);
