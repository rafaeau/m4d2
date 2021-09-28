import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'
import MyCarousel from './components/MyCarousel'


function App() {

  return (
    <div>
      <MyNavbar brand="StriveBooks" />
      <MyJumbotron/>
      <MyCarousel/>
      <MyFooter/>
    </div>
  )
}

export default App