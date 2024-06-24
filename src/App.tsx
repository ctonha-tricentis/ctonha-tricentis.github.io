import React from 'react';
import logo from './logo.svg';
import './App.css';
import dayjs from 'dayjs';
import moment from 'moment';

function App() {
  return (
    <div className="App">
      <div className="App">
      <div>{dayjs("2024-12-25T00:00:00Z").format("YYYY-MM-DD HH:mm:ss")}</div>
      <div>{dayjs("2024-12-25T00:00:00+03:00").format("YYYY-MM-DD HH:mm:ss")}</div>
      <div>{dayjs(new Date("2024-12-25 00:00:00 +03:00")).format("YYYY-MM-DD HH:mm:ss")}</div>
      <br />
      <div>{moment("2024-12-25T00:00:00Z").format("YYYY-MM-DD HH:mm:ss")}</div>
      <div>{moment("2024-12-25T00:00:00+03:00").format("YYYY-MM-DD HH:mm:ss")}</div>
      <div>{moment("2024-12-25 00:00:00 +03:00").format("YYYY-MM-DD HH:mm:ss")}</div>
      <br />
      <div>{Date.parse("2024-12-25 00:00:00 +03:00")}</div>
    </div>
    </div>
  );
}

export default App;
