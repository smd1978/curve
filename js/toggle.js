
    var a = ['a', 'b', 'c', 'd'];
    for (i = 0; i < a.length; i++){
        console.log(a[i]);
    }

    let city = {
        Russia: 'Moscow',
        Ukraine: 'Kiew',
        India: 'Deli',
        Spain: 'Barcelona',
        Italia: 'Roma'
    }
    for (let key in city){

        console.log(city[key]);
    }

    let items = document.querySelectorAll('.items .item');
    let divPrice = document.querySelector('.value');

    for (i = 0; i < items.length; i++){
        items[i].onclick = function(){
            //Переключатель
          this.classList.toggle('item-active');
        
        calcPrice();
        }
    }
    function calcPrice(){
        var price = 0;
        for (let i = 0; i < items.length; i++){
            //Если элемент активен то
            if (items[i].classList.contains('item-active')){

                price += parseInt(items[i].getAttribute('data-price'));
            }
        }
        divPrice.innerHTML = price;
    }