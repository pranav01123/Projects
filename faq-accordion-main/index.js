let sub_heading = document.getElementsByClassName('content1');
let info = document.getElementsByClassName('hello');
let icon = document.getElementsByClassName('plus-minus');
let questionDiv = document.getElementsByClassName('block');

  /* elements are taking two clicks instead of 1 for the very first click (on any element) */

  /* Since the 'getElementsByClassName returns a collection of the elements that have that specific className, we use a for loop to loop over each element with the same className  */

for(let i=0; i<info.length; i++){

  /* As we iterate over each element, we check if this particular div was clicked by the user */
  
  questionDiv[i].addEventListener('click', function(){   
    
    /* was it clicked? - Yes 
       Now, close all the other question windows
       except this current one */

    for(let j=0; j<info.length; j++){
        if(j !== i){
          //close the rest windows
          info[j].style.display = 'none';
          icon[j].src = "assets/images/icon-plus.svg";
        }
      }
        /* check if the current click was an opening click or a closing click for the window */

        // 1) for window opening click
      

      if(info[i].style.display == 'none'|| info[i].style.display == ''){
        info[i].style.display = 'block';
        icon[i].src = "assets/images/icon-minus.svg";
        questionDiv[i].scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        });
      }
      // 2) for window closing click
      else{
        info[i].style.display = 'none';
        icon[i].src = "assets/images/icon-plus.svg";
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }  
    /* state[i] = !state[i];
    if(state[i] == true){
      info[i].style.display = 'block';
      icon[i].src = "assets/images/icon-minus.svg";
    }
    else{
      info[i].style.display = 'none';
      icon[i].src = "assets/images/icon-plus.svg";
    } */
  });
}

