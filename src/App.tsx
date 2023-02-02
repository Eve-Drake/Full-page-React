import './index.css'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import PageFour from './PageFour'
import PageFive from './PageFive'

function App() {
  return (
    <div>
      <nav id='nav'>
        <ul>
          <li><a href='#one'>Top</a></li>
          <li><a href='#two'>About</a></li>
          <li><a href='#three'>Projects</a></li>
          <li><a href='#four'>Contact</a></li>
        </ul>
      </nav>
      <div id='one'><PageOne /></div>
      <div id='two'><PageTwo /></div>
      <div id='three'><PageThree /></div>
      <div id='four'><PageFour /></div>
      <div id='five'><PageFive /></div>
    </div>
  )
}

export default App
