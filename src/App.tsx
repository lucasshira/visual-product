import './global.css'

import { Header } from './components/header'
import { VisualGuide } from './components/visual-guide'
import { Brands } from './components/brands'
import { Overview } from './components/overview'
import { DashboardWhite } from './components/dashboard-white'
import { DashboardBlack } from './components/dashboard-black'
import { DashboardWithoutImage } from './components/dashboard-without-image'
import { EndCap } from './components/endcap'

export function App() {
  return (
    <>
      <Header />
      <VisualGuide />
      <Brands />
      <Overview />
      <DashboardWhite />
      <DashboardBlack image='people' />
      <DashboardWhite />
      <DashboardBlack />
      <DashboardWhite image='team' />
      <DashboardWithoutImage />
      <EndCap />
    </>
  )
}