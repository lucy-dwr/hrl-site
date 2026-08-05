import './style.css'
import { createApp } from './App'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Application root was not found.')
}

app.append(createApp())
