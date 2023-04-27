document.getElementById("more").addEventListener("click", function() {
  document.getElementById("mores").style.display = "block";
  document.getElementById("overlay").style.display = "block";
})

document.getElementById("overlay").addEventListener("click", function() {
  document.getElementById("mores").style.display = "none";
  document.getElementById("overlay").style.display = "none";
})


let yes = document.getElementById("yes");

yes.addEventListener("mouseover", function() {
  yes.click();
})

async function agree() {
  let yes = document.getElementById("yes");
  yes.style.animation = "none";
  yes.style.scale = "0.9";
  let MakimaOne = document.getElementById("MakimaOne");
  let black = document.getElementById("black");
  let MakimaTwo = document.getElementById("MakimaTwo");
  MakimaOne.style.zIndex = "997";
  await gsap.to(MakimaOne, {duration: 1, opacity: 1, ease: "power2.inOut"})
  black.style.zIndex = "999";
  await gsap.to(black, {duration: 1, opacity: 1, ease: "power2.inOut"})
  await gsap.to(MakimaOne, {duration: 0.1, opacity: 0, ease: "power2.inOut"})
  MakimaTwo.style.zIndex = "998";
  await gsap.to(MakimaTwo, {duration: 0.1, opacity: 1, ease: "power2.inOut"})
  await gsap.to(black, {duration: 1, opacity: 0, ease: "power2.inOut"})
}

let no = document.getElementById("no");
no.addEventListener("mouseover", function() {
  no.style.position = "absolute";
  no.style.left = Math.random() * 100 + "%";
  no.style.top = Math.random() * 100 + "%";
})

async function decline() {
  let no = document.getElementById("no");
  no.style.display = "none";
}

async function doomClock() {
  // attendre 5 secondes
  await new Promise(resolve => setTimeout(resolve, 60000));
  let MakimaOne = document.getElementById("MakimaOne");
  let MakimaTwo = document.getElementById("MakimaTwo");

  if (MakimaOne.style.opacity == 0 && MakimaTwo.style.opacity == 0) {
    agree();
  }
}

doomClock();