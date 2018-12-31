function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
document.getElementById('closepreloader').style.visibility = 'hidden';
var penner = anime.timeline();

penner
.add({
    targets: '#Animation .letters',
    translateX: -8
  })
.add({
    targets: '#Animation .letterR path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  })
.add({
  targets: '#Animation .letterR #second',
    translateY: -270,
    translateX: 480,
    rotate: {
      value: 60,
      duration: 500
    }
    
  })
  .add({
    targets: '#Animation .letterR #first',
    translateY: -215,
    translateX: 925,
    rotate: {
      value: 115,
      duration: 500
    } 
  })
  .add({
    targets: '#Animation .letterR #third',
    autoplay: false,
    translateY: 196,
    translateX: 90,
    rotate: {
      value: -35,
      duration: 500
    }
  })
  .add({
    targets: '#Animation .letterR #zero',
    translateX: -5,
    duration:500,
  })
  .add({
    targets: '#preloader',

    offset:'-=100',
    backgroundColor: [
      {value: '#FFF'}, // Or #FFFFFF
      {value: 'rgb(255, 0, 0)'},
      {value: 'hsl(100, 60%, 60%)'}
    ],
    duration: 3000
  })
   .add({
    targets: '#Animation .letterR',
    translateX: -285,
    translateY: 100
  })
  .add({
    targets: '#Animation .letterA path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',

    offset:'-=100',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  })
  .add({
    targets: '#Animation .letterX path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    offset:'-=100',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  })
  
  .add({
    targets: '#Animation .letterF path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    offset:'-=100',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  })
  .add({
    targets: '#Animation .letterO path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    offset:'-=100',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  })

  .add({
    targets: '#Animation .letterRl path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  })
  .add({
    targets: '#Animation .letterD path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  })
  
  setTimeout(paintOutA, 10000);

  function paintOutA(){
    document.getElementById('thirdA').style.stroke = 'green';
    document.getElementById('firstA').style.stroke = 'green';
    document.getElementById('secondA').style.stroke = 'green';
    }

  setTimeout(paintInA, 21000);

  function paintInA(){
    document.getElementById('thirdA').style.fill = 'white';
    document.getElementById('firstA').style.fill = 'white';
    document.getElementById('secondA').style.fill = 'white';
  }


  setTimeout(paintOutX, 12000);

  function paintOutX(){
    document.getElementById('firstX').style.stroke = 'green';
    document.getElementById('secondX').style.stroke = 'green';
  }

  setTimeout(paintInX, 21000);

  function paintInX(){
    document.getElementById('firstX').style.fill = 'white';
    document.getElementById('secondX').style.fill = 'white';
  }
  setTimeout(paintOutF, 12000);

  function paintOutF(){
    document.getElementById('thirdF').style.stroke = 'green';
    document.getElementById('firstF').style.stroke = 'green';
    document.getElementById('zeroF').style.stroke = 'green';
    }

  setTimeout(paintInF, 21000);

  function paintInF(){
    document.getElementById('thirdF').style.fill = 'white';
    document.getElementById('firstF').style.fill = 'white';
    document.getElementById('zeroF').style.fill = 'white';
  }


  setTimeout(paintOutO, 12000);

  function paintOutO(){
    document.getElementById('firstO').style.stroke = 'green';
    document.getElementById('secondO').style.stroke = 'green';
    document.getElementById('zeroO').style.stroke = 'green';
    document.getElementById('thirdO').style.stroke = 'green';
  }

  setTimeout(paintInO, 21000);

  function paintInO(){
    document.getElementById('firstO').style.fill = 'white';
    document.getElementById('secondO').style.fill = 'white';
    document.getElementById('zeroO').style.fill = 'white';
    document.getElementById('thirdO').style.fill = 'white';
  }

  setTimeout(paintOutRl, 12000);

  function paintOutRl(){
    document.getElementById('firstRl').style.stroke = 'green';
    document.getElementById('zeroRl').style.stroke = 'green';
  }

  setTimeout(paintInRl, 21000);

  function paintInRl(){
    document.getElementById('firstRl').style.fill = 'white';
    document.getElementById('zeroRl').style.fill = 'white';
  }
  setTimeout(paintOutD, 12000);

  function paintOutD(){
    document.getElementById('firstD').style.stroke = 'black';
    document.getElementById('secondD').style.stroke = 'black';
    document.getElementById('zeroD').style.stroke = 'black';
    //document.getElementById('thirdD').style.stroke = 'green';
  }

  setTimeout(paintInD, 21000);

  function paintInD(){
    document.getElementById('firstD').style.fill = 'red';
    document.getElementById('secondD').style.fill = 'red';
    //document.getElementById('thirdD').style.fill = 'white';
    document.getElementById('zeroD').style.fill = 'red';
  }
  setTimeout(closefirstAnimation,24000);
  function closefirstAnimation(){
    //if(){
      document.getElementById('preloader').style.opacity = '0';
      document.getElementById('preloader').style.zIndex  = '-1';
      document.getElementById('preloader').style.visibility ="hidden";
 // }
}