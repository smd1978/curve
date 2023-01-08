 window.onload = function () {
       
    //получаем идентификаторы элемента
    let images = document.querySelectorAll('#gallery .photos img');
    
    let i = 0;

    var btn_prev = document.querySelector('#gallery .button .prev');
    var btn_next = document.querySelector('#gallery .button .next');
    
    //вешаем на него событие
  
    btn_next.onclick = function() {
        images[i].className = '';
        i++;
        
        if(i >= images.length){
            i = 0;
        }
        images[i].className = 'showed';
    }
    btn_prev.onclick = function() {
        images[i].className = '';
        i--;
    
        if (i < 0) {
            i = images.length - 1;
        }
        images[i].className = 'showed';
    }
    
        }

