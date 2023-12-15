class Typing {
    constructor({ el, interval, delay }) {
        //constructor({ el, interval, delay }) - это конструктор, 
        // /который принимает в себя объект с тремя свойствами: el, interval и delay.
        this.el = document.querySelector(el);
        this.interval = interval || 500
            //interval: интервал времени (в миллисекундах) между выводом каждого символа. 
            //По умолчанию установлено значение 500 миллисекунд.
        this.delay = delay == undefined ? 1000 : delay
            //delay: задержка времени (в миллисекундах) перед началом печатания текста. 
        this.text = this.el.innerHTML.trim()
        this.el.innerHTML = ""
            //Внутри конструктора свойству text присваивается значение innerHTML выбранного элемента, а свойству innerHTML элемента присваивается пустая строка.
        setTimeout(() => this.write(), this.delay);
    }
    write(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => this.write(i), this.interval);
        }
    }
}
// new Typing({
//         el: '.header__content h1',
//         interval: 300,
//         delay: 1000
//     })
//создается новый экземпляр класса Typing с заданной конфигурацией
//нацеленный на элемент '.header__content h1 
//и задающий интервал в 300 миллисекунд и задержку в 1000 миллисекунд.


// new Typing({
//     el: '.header__content p',
//     interval: 300,
//     delay: 0
// })
new Typing({
    el: '.info__scroll-desc',
    interval: 300,
    delay: 0
})











// const title = document.querySelector('.header__content h1');
// let text = title.innerHTML
// title.innerHTML = ''

// function write(i = 0) {
//     title.innerHTML += text[i]
//     i++
//     if (i < text.length) {
//         setTimeout(() => {
//             write(i)
//         }, 100);
//     }
// }
// write()