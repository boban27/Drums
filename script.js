let crshRide =document.querySelector('#crash-ride')
let hiHatTop = document.querySelector('#hihat-top')

const animateCrashorRide = ()=>{
    crshRide.style.transform = 'rotate(0deg) scale(1.5)';

}

const animateHiHatClosed = () =>{
    hiHatTop.style.top='171px';
}


window.addEventListener("keydown",(event)=>{
  let code = event.keyCode;
  let keyElement =document.querySelector(`div [data-key="${code}"]`)
  if(!keyElement) return;
  console.log(keyElement);
  let audio = document.querySelector(`audio[data-key="${code}`)
  audio.currentTime = 0;
  audio.play();
  switch(code) {
      case 69:
      case 82:
          animateCrashorRide();
          break;
          
          case 75:
          case 73:
            
              animateHiHatClosed();
              break;
             
             
             
 keyElement.classList.add('playing');

      
  }
 
});
const removeCrashRideTransition = e =>{
    if(e.propertyName !== 'transform')return;
    e.target.style.transform ='rotate(-7.2deg) scale(1.5deg)';
}
const removeHitHatTopTransition = e =>{
    if(e.propertyName !== 'top')return;
    e.target.style.top = '166px';

    const removeKeyTrasnsition = e =>{
        if (e.propertyName !=='transform') return; 
            
        e.target.classList.remove('playing');
    }

    let drumKeys =document.querySelector('.key')

    drumKeys.forEach(key => {
        key.addEventListener("transitioned",removeKeyTrasnsition);
        
    });

}
crshRide.addEventListener("transitioned",removeCrashRideTransition);
hiHatTop.addEventListener("transitioned",removeHitHatTopTransition);