let cont = document.querySelector(".alert-box");
  let btnDiv = document.querySelector(".btn-div");
  let closeBtn = document.querySelector(".close-btn");
  let img = document.querySelector(".image");
  let text = document.querySelector("p");
  let okBtn = document.querySelector(".ok");
  let okBtn2 = document.querySelector(".ok2");
  let yesBtn = document.querySelector(".yes");
  let noBtn = document.querySelector(".no");
  let insta = document.querySelector(".insta");
  var count = 0;


  let error1 = new Audio("https://sokubmv.glitch.me/error1.mp3");
  let error2 = new Audio("https://sokubmv.glitch.me/Error2.mp3");
  let click = new Audio("https://sokubmv.glitch.me/click.mp3");
  let naSahi = new Audio("https://sokubmv.glitch.me/na.mp3");
  let sfx = new Audio("https://sokubmv.glitch.me/Wakeupum.mp3");



  // error2.play();

  okBtn.addEventListener("click",event =>{
    text.innerHTML = "However, I just have a question for You";
    okBtn.style.display = "none";
    okBtn2.style.display = "flex";
    cont.classList.remove("popup");
    setInterval(pop);
    click.play();
  } )
  okBtn2.addEventListener("click",event=>{
    text.innerHTML = "Do you love me ?";
    cont.classList.remove("popup");
    setInterval(pop);
    click.play();
    okBtn2.style.display = "none";
    yesBtn.style.display = "flex";
    noBtn.style.display = "flex";
  })
  noBtn.addEventListener("click", event =>{
    text.innerHTML = "Please love me 😥";
    text.style.fontSize = "20px";
    yesBtn.innerHTML = "OK";
    error2.play();
    cont.classList.remove("popup");
    setInterval(pop);
    count ++;
  if(count==6){
    text.innerHTML = "🥺🥺🥺🥺";
    okBtn2.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    img.style.backgroundImage = "url(https://sokubmv.glitch.me/sad.gif)"
    img.style.height = "100%"
    img.style.width = "80%"
    btnDiv.style.display ="none";
    naSahi.play();
  }
  })
  yesBtn.addEventListener("click",event=>{
    text.innerHTML = " 🥰 🥰 i love you more🥰 🥰";
    img.style.height = "100%"
    img.style.width = "80%"
    img.style.backgroundImage = "url(https://sokubmv.glitch.me/love.gif)";
    btnDiv.style.display = "none";
    insta.style.display = "flex";
    sfx.play();
  })
  function pop(){
    cont.classList.add("popup");
  }

   closeBtn.addEventListener("click",event=>{
    cont.classList.remove("hilao");
    error1.play();
    setInterval(vib);
  })
  function vib(){
    cont.classList.add("hilao");
  }