(() => {
  // src/js/home.js
  var HomePage = () => {
    if (document.querySelector(".home-page")) {
      console.log("home page");
    }
  };

  // src/app.js
  window.addEventListener("load", function(event) {
    HomePage();
    let oOne = document.querySelector(".o_one");
    function OaddOpacity() {
      oOne.style.color = "#342226";
      oOne.style.textShadow = "0px 0px 30px rgba(255, 38, 169, 0.25),11.7937px 15.725px 3.93125px #000000,11.7937px 15.725px 11.7937px #000000";
    }
    function OremoveOpacity() {
      oOne.style.color = "#FF5EBF";
      oOne.style.textShadow = "0px 0px 30px rgba(255, 38, 169, 0.25), 0px 0px 39.3125px rgba(255, 38, 169, 0.25), 0px 0px 31.45px rgba(255, 38, 169, 0.25), 0px 0px 23.5875px rgba(255, 38, 169, 0.25), 0px 0px 15.725px rgba(255, 38, 169, 0.25), 11.7937px 15.725px 3.93125px #000000, 11.7937px 15.725px 11.7937px #000000";
    }
    function setIntervaloAddopacityToggle() {
      setInterval(OaddOpacity, 250);
    }
    function setIntervaloRemoveopacityToggle() {
      setInterval(OremoveOpacity, 393);
    }
    setIntervaloAddopacityToggle();
    setIntervaloRemoveopacityToggle();
  });
})();
//# sourceMappingURL=app.js.map
