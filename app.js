story = {
  step1: {
    img: "images/Lighthouse.jpg",
    text: "Your car dies on a dark coastal road in a violent storm. <br>Through the fog, a lighthouse beam sweeps the water, half a mile ahead.<br> No phone signal.",
    btn1: { text: "Wait in the car", step: "step2" },
    btn2: { text: "Walk to the lighthouse", step: "step3" },
  },
  step2: {
    img: "images/keys.jpg",
    text: "An hour passes. Then: thump... thump... thump. <br> A figure in a yellow raincoat is tapping on your roof. <br>She slides a brass key through the window. “The keeper’s trapped.<br> Turn off the lamp. Don’t let him stop you.” Then she vanishes.",
    btn1: { text: "Go to the lighthouse", step: "step3" },
    btn2: { text: "Ignore the key and wait for dawn", step: "step7" },
  },
  step3: {
    img: "images/InsideTheLightHouse.jpg",
    text: "The door is unlocked. <br> Inside, a woodstove burns and two mugs sit on a table. <br> A logbook is open: “The visitor arrives at midnight.<br> Do not let them reach the lamp.” <br>Every earlier page is dated October 13th, 1984, over and over.<br> It’s 11:58 PM. Above you, footsteps start down the stairs.",
    btn1: { text: "Race up the stairs to the lamp", step: "step4" },
    btn2: { text: "Face the keeper", step: "step5" },
  },
  step4: {
    img: "images/LightOfTheLightHouse.jpg",
    text: "At the top, a blinding light burns. <br> The keeper, white-bearded and wild-eyed, grips the controls.<br> “If it goes out, she comes in!”",
    btn1: { text: "Smash the lamp", step: "step6" },
    btn2: { text: "Face the keeper", step: "step5" },
  },
  step5: {
    img: "images/Ghost.jpg",
    text: "You tell him the truth: he’s been dead forty years, and the woman outside is his wife Edda, who only wants to come home. <br> His face crumples. “I thought she was something dark.”",
    btn1: { text: "Help him turn off the light", step: "step8" },
    btn2: { text: "Tell him to keep it burning", step: "step9" },
  },
  step6: {
    img: "images/ExplodingLightHouse.jpg",
    text: "You swing a wrench.<br> The lamp explodes in white fire, and the keeper cries out in relief.<br> Two figures appear in the window, hand in hand, fading like mist. <br> The tower crumbles behind you, and your car starts on the first try.<br>\nThe End.",
  },
  step7: {
    img: "images/KeyToBrokenLightHouse.jpg",
    text: "Morning shows the lighthouse abandoned and boarded up for forty years.<br> A tow truck driver goes pale when you mention the woman.<br> “That’s Edda Marrow. She died in the storm of ‘84.” <br>The brass key is still in your hand.<br>\nThe End.",
  },
  step8: {
    img: "images/GhostPeaceLightHouse.jpg",
    text: "Together you turn the brass wheel. <br> The lamp flares and dies. <br> Edda glides up the stairs in her yellow raincoat, and the keeper takes her in his arms. <br> They thank you with a look, and then they’re gone. <br> At sunrise, you find a note in your pocket: “Thank you for finishing the shift.”<br>\nThe End.",
  },
  step9: {
    img: "images/TheClockRoom.png",
    text: "“Then we stay as we are,” the keeper says.<br> The light roars back, the stairs vanish, and the clock ticks backward. <br> The logbook opens to a fresh page, and in your own handwriting you begin to write: “The visitor arrives at midnight...”<br>\nThe End.",
  },
};

const storyImage = document.getElementById("TheImage");
const storyText = document.getElementById("StoryText");
const storybtn1 = document.getElementById("Btn1");
const storybtn2 = document.getElementById("Btn2");
const playAgainBtn = document.getElementById("playAgainBtn");

//document.getElementById("ButtonDiv").classList.add("hidden");
let currentStep = "step1";
LoadScene();
function LoadScene() {
  playAgainBtn.classList.add("hidden");
  storyImage.src = story[currentStep].img;
  storyText.innerHTML = story[currentStep].text;

  if (story[currentStep].btn1 == undefined) {
    storybtn1.classList.add("hidden");
    playAgainBtn.classList.remove("hidden");
  } else {
    storybtn1.classList.remove("hidden");
    storybtn1.innerHTML = story[currentStep].btn1.text;
  }

  if (story[currentStep].btn2 == undefined) {
    storybtn2.classList.add("hidden");
    playAgainBtn.classList.remove("hidden");
  } else {
    storybtn2.classList.remove("hidden");
    storybtn2.innerHTML = story[currentStep].btn2.text;
  }
}

document.getElementById("Btn1").addEventListener("click", function () {
  currentStep = story[currentStep].btn1.step;
  LoadScene();
});

document.getElementById("Btn2").addEventListener("click", function () {
  currentStep = story[currentStep].btn2.step;
  LoadScene();
});

playAgainBtn.addEventListener("click", function () {
  playAgain();
});

function playAgain() {
  currentStep = "step1";
  storyImage.src = story[currentStep].img;
  storyText.innerHTML = story[currentStep].text;
  storybtn1.innerHTML = story[currentStep].btn1.text;
  storybtn2.innerHTML = story[currentStep].btn2.text;
  storybtn1.classList.remove("hidden");
  storybtn2.classList.remove("hidden");
  playAgainBtn.classList.add("hidden");
}
