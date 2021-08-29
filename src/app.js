import { HomePage } from './js/home'

// wait for document loaded
window.addEventListener('load', function (event) {
  HomePage()

  // let letterActive = document.querySelector(".letter_active")
  // let letterDisabled = document.querySelector(".letter_disabled")
  //
  // function noneActive() {
  //   letterActive.style.display = "none"
  //   letterDisabled.style.display = "block"
  // }
  // function blockActive() {
  //   letterActive.style.display = "block"
  //   letterDisabled.style.display = "none"
  // }
  //
  // function One() {
  //   setInterval(noneActive, 900);
  // }
  //
  // function Two() {
  //   setInterval(blockActive, 1800);
  // }
  //
  // setTimeout(One,3000)
  // setTimeout(Two,3090)

  // let logo = document.querySelector(".hero__logo__item")
  let oOne = document.querySelector(".o_one")
  //
  // function addOpacity() {
  //   logo.style.opacity = "0.8"
  // }
  // function removeOpacity() {
  //   logo.style.opacity = "1"
  // }
  //
  // function setIntervalAddopacityToggle() {
  //   setInterval(addOpacity,50)
  // }
  // function setIntervalRemoveopacityToggle() {
  //   setInterval(removeOpacity,53)
  // }
  //
  // setIntervalAddopacityToggle()
  // setIntervalRemoveopacityToggle()

  function OaddOpacity() {
    oOne.style.color = "#342226"
    oOne.style.textShadow = "0px 0px 30px rgba(255, 38, 169, 0.25),11.7937px 15.725px 3.93125px #000000,11.7937px 15.725px 11.7937px #000000"
  }
  function OremoveOpacity() {
    oOne.style.color = "#FF5EBF"
    oOne.style.textShadow = "0px 0px 30px rgba(255, 38, 169, 0.25), 0px 0px 39.3125px rgba(255, 38, 169, 0.25), 0px 0px 31.45px rgba(255, 38, 169, 0.25), 0px 0px 23.5875px rgba(255, 38, 169, 0.25), 0px 0px 15.725px rgba(255, 38, 169, 0.25), 11.7937px 15.725px 3.93125px #000000, 11.7937px 15.725px 11.7937px #000000"
  }

  function setIntervaloAddopacityToggle() {
    setInterval(OaddOpacity,250)
  }
  function setIntervaloRemoveopacityToggle() {
    setInterval(OremoveOpacity,393)
  }

  setIntervaloAddopacityToggle()
  setIntervaloRemoveopacityToggle()

})


