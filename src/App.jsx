import { AppContextProvider } from "./context/Context"
import Form from "./components/Form"
import VideoList from "./components/VideoList"

function App() {

  return (
    <AppContextProvider>
      <Form />
      <VideoList />
    </AppContextProvider>

  )
}

export default App
