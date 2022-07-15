import './App.css'
import FormBody from './components/PageContent'
import Header from './components/header'
import ToolBar from './components/toolBar'
import store from './Redux/Store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ToolBar />
        <FormBody />
      </div>
    </Provider>
  )
}

export default App
