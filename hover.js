class Hover {
    constructor({ el, nav }) {
        this.el = document.querySelector(el);
        this.nav = document.querySelector(nav)
        this.catch()

    }
    catch () {
        this.el.addEventListener('mouseover', () => {

            let maxX = window.innerWidth - this.el.clientWidth - 50
            let maxY = window.innerHeight - this.el.clientHeight - this.nav.clientHeight

            this.el.style.marginTop = `${this.getRandom(0, maxY)}px`;
            this.el.style.marginLeft = `${this.getRandom(0, maxX)}px`;
            this.el.style.transition = `1s`
                // console.log(this.getRandom(0, maxX))
        })
    }
    getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
}
new Hover({
    el: '.header__content',
    nav: '.header__nav'
})



// class Obyekt {
//     constructor({ hov }) {
//         this.hov = document.querySelector(hov);

//         this.hov.addEventListener('mouseover', () => {
//             this.hov.style.marginLeft = `${rand(0 , 1300)}px`
//             this.hov.style.marginTop = `${rand(0 , 450)}px`
//         })


//         function rand(min, max) {
//             return Math.round(Math.random() * (max - min) + min)
//         }
//     }

// }



// new Obyekt({
//     hov: ".header__content",
// })



// function getRandom(min, max) {
//     return Math.round(Math.random() * (max - min) + min)

// }
// console.log(getRandom(0, 40))