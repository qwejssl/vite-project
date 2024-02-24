import HeaderScreen from "./components/mainScreen/MainScreen"
import Footer from "./components/footer/Footer"
import FirstScreen from "./components/firstScreen/FirstScreen"
import SecondScreen from "./components/secondScreen/SecondScreen"



export default function App() {
  return (
    <>
      <HeaderScreen />

      <main>
        <FirstScreen />
        <SecondScreen />
      </main>

      <Footer />


    </>
  )
}


