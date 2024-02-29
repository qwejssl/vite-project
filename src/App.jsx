import HeaderScreen from "./components/mainScreen/MainScreen"
import Footer from "./components/footer/Footer"
import FirstScreen from "./components/firstScreen/FirstScreen"
import SecondScreen from "./components/secondScreen/SecondScreen"
import ThirdScreen from "./components/thirdScrenn/ThirdScreen"
import FourthScreen from "./components/fourthScreen/FourthScreen"
import FifthScreen from "./components/fifthScreen/FifthScreen"
import FooterForm from "./components/footerForm/FooterForm"



export default function App() {
  return (
    <>
      <HeaderScreen />

      <main>
        <FirstScreen />
        <SecondScreen />
        <ThirdScreen />
        <FourthScreen />
        <FifthScreen />
        <FooterForm />
      </main>

      <Footer />


    </>
  )
}


