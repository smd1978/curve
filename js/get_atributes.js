window.onload = function(e){

    var buttons = document.querySelectorAll('.actions input');
  
    for(var i = 0; i < buttons.length; i++){
        buttons[i].onclick = btnClick;
    }
  
  }
  function btnClick(e) {
      let summa = 0;
     let name = this.getAttribute('name');
     if (name == 'box'){
         console.log('Вы выбрали коробку');
         summa +=1;
     } 
     else if (name == 'pen'){
         console.log('Вы выбрали ручку');
          summa +=10;
      }
  
      console.log('вы набрали'+ summa);
      }
  