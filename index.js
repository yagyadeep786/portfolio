var typed = new Typed('#multitext', {
    strings:["FrontEnd-Developer...","BackEnd-developer...","Youtuber..."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });

let sections= document.querySelectorAll("section");

// about sections
// window.onscroll= ()=>{
//  let y= window.scrollY;
//  let offset= sections[0].offsetTop-300;
//  let height= sections[0].offsetHeight;
//  let divs= sections[0].getElementsByTagName("div");
//  if((y>=offset && y<=height+offset)){
//   divs[0].classList.add("right");
//   divs[1].classList.add("heading");

// }else{
//   divs[0].classList.remove("right");
//   divs[1].classList.remove("heading");
// }

// }

// skills section

// window.onscroll= ()=>{
//   let y= window.scrollY;
//   let offset= sections[1].offsetTop-300;
//   let height= sections[1].offsetHeight;
//   let divs= document.querySelectorAll(".probar");
//   if((y>=offset && y<=height+offset)){

//    for(let i=0;i<divs.length;i++){
//     divs[i].classList.add("process");
//    }
 
//  }else{
//    for(let i=0;i<divs.length;i++){
//     divs[i].classList.remove("process");
//    }
//  }
 
//  }

//  // project sections
// let cards= document.querySelectorAll(".card");
//  window.onscroll= ()=>{
//   for(let i=0;i<cards.length;i++){
//   let y= window.scrollY;
//   let offset= cards[i].offsetTop-300;
//   let height= cards[i].offsetHeight;
//   if((y>=offset && y<=height+offset)){
//     if(i%2==0){
//       cards[i].classList.add("rightpro");
//     }else{
//       cards[i].classList.add("leftpro");
//     }
   
//  }else{
//   if(i%2==0){
//     cards[i].classList.remove("rightpro");
//   }else{
//     cards[i].classList.remove("leftpro");
//   }
//  }
// }
//  }

 window.onscroll= ()=>{
  for(let i=0;i<sections.length;i++){

    if(i==0){
      let y= window.scrollY;
      let offset= sections[0].offsetTop-300;
      let height= sections[0].offsetHeight;
      let divs= sections[0].getElementsByTagName("div");
      if((y>=offset && y<=height+offset)){
       divs[0].classList.add("right");
       divs[1].classList.add("heading");
     
     }else{
       divs[0].classList.remove("right");
       divs[1].classList.remove("heading");
     }
    }
    if(i==1){
      let y= window.scrollY;
      let offset= sections[1].offsetTop-300;
      let height= sections[1].offsetHeight;
      let divs= document.querySelectorAll(".probar");
      if((y>=offset && y<=height+offset)){
    
       for(let i=0;i<divs.length;i++){
        divs[i].classList.add("process");
       }
     
     }else{
       for(let i=0;i<divs.length;i++){
        divs[i].classList.remove("process");
       }
     }
    }
    if(i==2){
      let cards= document.querySelectorAll(".card");
      for(let i=0;i<cards.length;i++){
        let y= window.scrollY;
        let offset= cards[i].offsetTop-300;
        let height= cards[i].offsetHeight;
        if((y>=offset && y<=height+offset)){
          if(i%2==0){
            cards[i].classList.add("rightpro");
          }else{
            cards[i].classList.add("leftpro");
          }
         
       }else{
        if(i%2==0){
          cards[i].classList.remove("rightpro");
        }else{
          cards[i].classList.remove("leftpro");
        }
       }
      }
    }
  }
 }
 