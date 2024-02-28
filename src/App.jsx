import HeaderScreen from "./components/mainScreen/MainScreen"
import Footer from "./components/footer/Footer"
import FirstScreen from "./components/firstScreen/FirstScreen"
import SecondScreen from "./components/secondScreen/SecondScreen"
import ThirdScreen from "./components/thirdScrenn/ThirdScreen"



export default function App() {
  return (
    <>
      <HeaderScreen />

      <main>
        <FirstScreen />
        <SecondScreen />
        <ThirdScreen />
      </main>

      <Footer />


    </>
  )
}


