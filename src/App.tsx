import './global.css'

import { Header } from './components/header'
import { VisualGuide } from './components/visual-guide'
import { Brands } from './components/brands'
import { Overview } from './components/overview'
import { DashboardWhite } from './components/dashboard-white'

export function App() {
  return (
    <>
      <Header />
      <VisualGuide />
      <Brands />
      <Overview />
      <DashboardWhite />
    </>
  )
}