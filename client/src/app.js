import React from 'react'
import ReactDOM from 'react-dom'
import ChartContainer from './containers/ChartContainer.jsx'

window.addEventListener('load', () => {
  ReactDOM.render(<ChartContainer />, document.getElementById('app'))
})
