import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // ✅ Only one import for Provider
import store from './Redux/Store'; // ✅ Only one import for store
import App from './App';;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
