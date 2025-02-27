import './global.css'

import { Header } from './components/header'
import { VisualGuide } from './components/visual-guide'
import { Brands } from './components/brands'

export function App() {
  return (
    <>
      <Header />
      <VisualGuide />
      <Brands />
    </>
  )
}