import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store'
import {BrowserRouter as Router} from 'react-router-dom'
import ScrollToTop from './Utils/ScrollToTop'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Router>
    <App />
    <ScrollToTop />
  </Router>
  </Provider>,
)
