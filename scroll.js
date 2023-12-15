class Scroll {
    constructor({ nav, top, unit }) {
        this.nav = document.querySelector(nav);
        this.unit = unit || '%'
        this.top = top || 100
        this.nav.style = `position:fixed;
                        top:${this.scrollUnit()}px`
        window.addEventListener('scroll', () => {
            this.scroll()
        })
    }
    scroll() {
        const position = this.scrollUnit()
        if (position > scrollY) {
            return this.nav.style.top = `${position - scrollY}px`
        } else {
            return this.nav.style.top = '0px'
        }
    }
    scrollUnit() {
        if (this.unit == 'px') {
            return this.top
        } else {
            return (window.innerHeight / 100) * this.top - this.nav.clientHeight
        }
    }
}
new Scroll({
    nav: '.header__nav',
    top: 100,
    unit: "%"
})