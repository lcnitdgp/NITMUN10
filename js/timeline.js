(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".direction");
  var schedule = document.querySelector("#p5");
  var scheduleLink = document.querySelector("#schedule");
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.bottom > 0 &&
      rect.top <
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */
    );
  }

  function callbackFunc() {
    // console.log("callbackFunc");
    // console.log(document.querySelectorAll(".direction .direction-r"));
    // if (items[0].classList.contains("direction-r"))
    //   items[0].classList.add("moveLeftAnimation");
    // else items[0].classList.add("moveRightAnimation");
    // if (items[1].classList.contains("direction-r"))
    //   items[1].classList.add("moveLeftAnimation");
    // else items[1].classList.add("moveRightAnimation");

    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        // console.log(`Element ${i + 1} is in viewport.`);
        // console.log(items[i]);
        if (items[i].classList.contains("direction-r"))
          items[i].classList.add("moveLeftAnimation");
        else items[i].classList.add("moveRightAnimation");
      }
    }
  }

  // listen for events
  document.addEventListener("load", callbackFunc);
  document.addEventListener("resize", callbackFunc);
  document.addEventListener("wheel", callbackFunc);
  scheduleLink.addEventListener("click", callbackFunc);
  $(window).on("touchmove", callbackFunc);
})();

var ini = 0;
const overLay = document.querySelector(".overlay");
function openNav() {
  // console.log("Nav opened.");
  overLay.style.width = "100%";
  // console.log(overLay);
}

function closeNav() {
  // console.log("Nav closed.");
  // console.log(overLay);
  overLay.style.width = "0%";
}

function OpenCloseNav() {
  ini ^= 1;
  // console.log(ini);
  if (ini) openNav();
  else closeNav();
  // change hamburger icon
  $("#nav-icon1").toggleClass("open");
}

$("#nav-icon1,.remove_on_click").click(function () {
  // console.log("Hamburger has to change.");
  // $("#nav-icon1").toggleClass("open");
});

var urls = [
  "https://www.youtube.com/embed/yrxGYzPSyVg",
  "https://www.youtube.com/embed/QAptazmaths",
  "https://www.youtube.com/embed/PTHAZalRWEM",
  "https://www.youtube.com/embed/vW8BzlCdXo4",
  "https://www.youtube.com/embed/kLgd2612Vtc",
  "https://www.youtube.com/embed/upBwLdMdgDg",
];
var youtubeVideo = document.querySelector(".ytvideo");
function videoSwitch(Val) {
  // console.log(youtubeVideo);
  youtubeVideo.src = urls[Val];
  // console.log(videoCards[Val]);
}

// form JS



var preferenceOne = document.querySelector("#preference1");
var preferenceTwo = document.querySelector("#preference2");
var preferenceThree = document.querySelector("#preference3");
var preferenceFour = document.querySelector("#preference4");
var preferenceFive = document.querySelector("#preference5");
var preferenceSix = document.querySelector("#preference6");



function changePreference(calledSelectTag) {
  var { value, id } = calledSelectTag;
  // console.log(calledSelectTag,value,id);
  // get which form called
  var Options = {
    UNSC: [
      "United States",
      "United Kingdom",
      "France",
      "Russia",
      "China",
      "India",
      "Ireland",
      "Kenya",
      "Mexico",
      "Norway",
      "Albania",
      "Brazil",
      "Gabon",
      "Ghana",
      "UAE",
      "Ukraine",
      "Germany",
      "Poland",
      "Lithuania",
      "Turkey",
      "Belarus",
      "Canada",
      "Malaysia",
      "Poland",
      "Cuba",
      "Venezuela",

    ],
    "HISTORICAL-AIPPM": [
      "Indira Gandhi",
      "J. B. Kripalani",
      "Siddartha Shankar Ray",
      "Sanjay Gandhi",
      "Seth Govind Das",
      "Vidya Charan Shukla",
      "Chandra Shekhar",
      "K Kamaraj",
      "Jagjivan Ram",
      "Mohan dharia",
      "Yashwantrao Chavan",
      "S. C. Jamir",
      "Ram Kishan Gupta",
      "Pannalal Barupal",
      "Dhuleshwar Meena",
      "Giiani Zail Singh",
      "Kirit Bikram Kishore Deb Barman",
      "Mushir Ahmad Khan",
      "Atal Bihari Vajpayee",
      "George Fernandes",
      "L K Advani",
      "J P Narayan",
      "Morarji R. Desai",
      "Neelam Sanjiva Reddy",
      "Deendayal Upadhyay",
      "Vijaya Raje Scindia",
      "Kanwar Lal Gupta",
      "K.K. Nayar",
      "Piloo Mody",
      "J. Mohammed Imam",
      "Dharanidhar Jena",
      "Raj Raj Singh Deo",
      "Kamakhya Prasad Singh Deo",
      "M K Stalin",
      "Murasoli Maran",
      "G. Viswanathan",
      "Bal Thackeray",
      "Dr.Hemchandra Gupte",
      "Manohar Joshi",
      "Pramod Navalkar",
      "Indrajit Gupt",
      "Shripad Amrit Dange",
      "Sarjoo Pandey",
      "Ishaq Sambhali",
      "Biren Dutta",
      "Somnath Chatterjee",
      "Dasarath Deb",
      "Laldenga",
      "JF Manliana",
      "R. Vanlawma",
      "Rochhinga",
      "Raj Narain",
      "Sultan Salahuddin Owaisi",

    ],
    "UNGA-SS": [
      "Republic of Albania",
      "Republic of Austria",
      "Commonwealth of Australia ",
      "Republic of Armenia",
      "Republic of Azerbaijan ",
      "People’s Republic of Bangladesh",
      "Republic of Bulgaria",
      "Bosnia and Herzegovina ",
      "Kingdom of Belgium ",
      "Kingdom of Bhutan ",
      "Canada",
      "Cyprus",
      "The Czech Republic",
      "People’s Republic of China",
      "Central African Republic",
      "Democratic People’s republic of Korea",
      "Kingdom of Denmark",
      "Arab Republic of Egypt ",
      "Estonia",
      "Republic of Finland",
      "Republic of France",
      "Federal Republic of Germany ",
      "Georgia",
      "Greece",
      "Hungary",
      "Republic of India",
      "Islamic Republic of Iran",
      "Republic of Iraq",
      "Ireland",
      "State of Israel",
      "Republic of Italy",
      "Japan",
      "Republic of Kazakhstan",
      "Kenya",
      "State of Kuwait",
      "Kyrgyz Republic (Kyrgyzstan)",
      "Republic of Latvia",
      "Lithuania",
      "The Former Yugoslav Republic of Macedonia",
      "Montenegro",
      "Federal democratic republic of Nepal",
      "New Zealand",
      "Kingdom of Norway",
      "Netherlands",
      "Portugal",
      "Sultanate of Oman",
      "Romania",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sudan",
      "Sweden",
      "Switzerland",
      "Thailand",
      "Islamic Republic of Pakistan",
      "State of Qatar",
      "Russian Federation",
      "Kingdom of Saudi Arabia",
      "Republic of South Sudan",
      "Republic of Tajikistan",
      "Republic of Turkey",
      "Turkmenistan",
      "Ukraine",
      "United Arab Emirates ",
      "United Kingdom of Great Britain and Northern Ireland ",
      "United Republic of Tanzania",
      "United States of America",
      "Republic of Uzbekistan ",
      "Republic of Yemen",
    ],
    "UNGA-SS-IP": ["Associated Press", "Reuters", "United Nations Press"],
    "UNSC-IP": ["Associated Press", "Reuters", "Al Jazeera"],
    "HISTORICAL-AIPPM-IP": ["The Hindu", "Indian Express", "The Times of India"],
  };
  console.log(value + "   " + id)
  id = id.charAt(id.length - 1);
  id--;

  var preferenceOptions = new Array(
    document.querySelector("#preference-options1"),
    document.querySelector("#preference-options2"),
    document.querySelector("#preference-options3"),
    document.querySelector("#preference-options4"),
    document.querySelector("#preference-options5"),
    document.querySelector("#preference-options6")
  );

  const myNode = preferenceOptions[id];
  while (myNode.firstChild) {
    // console.log(myNode)
    myNode.removeChild(myNode.lastChild);
  }
  // change text value in label
  // console.log(`.label-${id + 1}`);
  var currentLabel = document.querySelector(`.label-${id + 1}`);
  if (value === "HISTORICAL-AIPPM") {
    currentLabel.innerText = "Portfolio";
  } else if (
    value === "HISTORICAL-AIPPM-IP" ||
    value === "UNSC-IP" ||
    value === "UNGA-SS-IP"
  ) {
    currentLabel.innerText = "News Agency";
  } else {
    currentLabel.innerText = "Country";
  }
  // console.log(calledSelectTag, value, id,preferenceOptions[id]);
  Options[value].forEach((value) =>
    preferenceOptions[id].insertAdjacentHTML(
      "beforeend",
      `<option>${value}</option>`
    )
  );
}

preferenceOne.addEventListener("change", changePreference(preferenceOne));
preferenceTwo.addEventListener("change", changePreference(preferenceTwo));
preferenceThree.addEventListener("change", changePreference(preferenceThree));
preferenceFour.addEventListener("change", changePreference(preferenceFour));
preferenceFive.addEventListener("change", changePreference(preferenceFive));
preferenceSix.addEventListener("change", changePreference(preferenceSix));

// $("input").focus(function () {
//   // console.log("Input focused.",this)
//   // $("span").css("display", "inline").fadeOut(2000);
// });

const aboutUs = document.querySelector("#p5");

function dropdownScroll(event) {
  //console.log(event);
  var calledTag = event.getAttribute("arg");
  //console.log(calledTag)
  if (window.screen.width < 425) {
    if (calledTag === "about") height = 0;
    else if (calledTag === "committees") height = 1090;
    else if (calledTag === "secretariat") height = 3100;
    else if (calledTag === "tutorials") height = 4600;
  } else if (window.screen.width < 760) {
    if (calledTag === "about") height = 0;
    else if (calledTag === "committees") height = 790;
    else if (calledTag === "secretariat") height = 2800;
    else if (calledTag === "tutorials") height = 4300;
  } else {
    if (calledTag === "about") height = 0;
    else if (calledTag === "committees") height = 590;
    else if (calledTag === "secretariat") height = 1800;
    else if (calledTag === "tutorials") height = 2750;
  }

  // console.log(height);

  aboutUs.scrollTo({ top: height, behavior: "smooth" });
}

$(".click_text").click(() => {
  if ($(".my_mobile_dropdown_content").is(":hidden"))
    $(".my_mobile_dropdown_content").slideDown(1900);
  else $(".my_mobile_dropdown_content").slideUp(1900);
});

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    setTimeout(() => {
      $(".loader").fadeOut(1000, "linear", function () {
        $(this).remove();
        console.log("Removed.")
      });
    }, 1000);
    console.log("Loaded.");
  } else {
    console.log("Loading.");
  }
});
