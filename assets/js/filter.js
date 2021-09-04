var div = document.querySelectorAll('.city__container__block');
        document.querySelector('select').onchange=function(){
            var n = this.options[this.selectedIndex].textContent.slice(0, -2);
            [].forEach.call(div, function(el, i){
                el.style.display = el.textContent.match(n)||'Все горо'.match(n) ? 'flex':'none';
            });
        };
//https://javascript.ru/forum/dom-window/70778-filtr-blokov-s-pomoshhyu-select.html