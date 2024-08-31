document.addEventListener('DOMContentLoaded', () => {
    fetch('index.json')
        .then(responsive => responsive.json())
        .then(data => {
            const head = document.querySelector('.head')
            data.header.forEach(item => {
                const logo = document.createElement("div")
                logo.className = "logo"
                logo.innerHTML = `
                <div class = "logo-up">
                    <img src="${item.logo}">
                </div>
                <div class="logo-down">
                    <a>${item.explore}<span>${item.plus}</span>
                    <img src="${item.plusicon}"></a>
                `
                head.appendChild(logo)
                const box = document.createElement("div")
                box.className="box-name"
                box.innerHTML=`
                <form>
                    <div class="form-sub">
                        <div class="input">
                            <input class="search-input" type="text" placeholder="${item.placeholder}">
                        </div>
                        <button>
                            <img src="${item.search}">
                        </button>
                    </div>
                </form>`
                head.appendChild(box)
                const loginbox = document.createElement("div")
                loginbox.className="login-box"
                loginbox.innerHTML=`
                <div class="log">
                    <div class="in">
                        <div class="login-sub">
                            <a class="login">${item.login}</a>
                        </div>
                    </div>
                </div>`
                head.appendChild(loginbox)
                const seller = document.createElement("div")
                seller.className="seller"
                seller.innerHTML=`
                <a class="sell">
                    <span>${item.selll}</span>
                    </div>
                </a>`
                head.appendChild(seller)
                const more = document.createElement("div")
                more.className="more"
                more.innerHTML=`
                <div class="mo">
                    <span>${item.more}</span>
                    <img src="${item.dwn}">
                </div>`
                head.appendChild(more)
                const cart = document.createElement("div")
                cart.className="cart"
                cart.innerHTML=`
                <div class="car">
                    <img src="${item.cartImg}">
                    <span>${item.cart}</span>
                </div>`
                head.appendChild(cart)
            })
            const head2 = document.querySelector('.head2')
            const headmar = document.createElement('div')
            headmar.className = "head-mar"
            data.nav.forEach(item => {       
                const sp = document.createElement('span')
                sp.innerHTML = `
                    ${item.elec}
                    <img src ="${item.dwn}">
                    `
                head2.appendChild(headmar)
                headmar.appendChild(sp)
            })
            const top = document.querySelector('.top')
            const filter = document.createElement('div')
            filter.className="filters"
            filter.innerHTML=`
            <span>${data.sidebar[0].fil}</span>
            `
            top.appendChild(filter)
            // const categor = document.createElement('div')
            // categor.className="cate"
            // categor.innerHTML=`
            // <span>${data.sidebar[0].cate}</span>
            // <div class="access"><img src="${}"><div class="">${}</div></div>
            // `
            // top.appendChild(categor)
            const price = document.createElement('div')
            price.className="cate"
            price.innerHTML=`
            <span>${data.sidebar[0].price}</span>
            `
            top.appendChild(price)
            const brand = document.createElement('div')
            brand.className="cate"
            brand.innerHTML=`
            <span>${data.sidebar[0].brand}</span>
            `
            top.appendChild(price)
        })
})













