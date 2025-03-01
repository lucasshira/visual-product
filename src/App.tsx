import './global.css'

import { Header } from './components/header'
import { VisualGuide } from './components/visual-guide'
import { Brands } from './components/brands'
import { Overview } from './components/overview'

export function App() {
  return (
    <>
      <Header />
      <VisualGuide />
      <Brands />
      <Overview />
    </>
  )
}