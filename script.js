document.addEventListener('DOMContentLoaded', () => {
    fetch('index.json')
        .then(responsive => responsive.json())
        .then(data => { 
            const head = document.querySelector('.head')
            data.header.forEach(item => {
                const logo = document.createElement("div")
                logo.className = "logo"
                logo.innerHTML = `
                    <div class="logo-sub">
                        <a class = "logo-up">
                            <img src="${item.logo}">
                        </a>
                        <a class="logo-down">
                            ${item.explore}<span>${item.plus}</span>
                            <img src="${item.plusicon}">
                        </a>
                    </div>
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
                        <a class="login">${item.login}</a>
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
                    <div class="mospan">
                        <span>${item.more}</span>
                    </div>
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
            const head2 = document.querySelector('.head2-sub')
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
            <span>${data.sidebar.fil}</span>
            `
            top.appendChild(filter)
            const cate = document.createElement('div')
            cate.className="cate"
            cate.innerHTML=`
            <span class="cat1">${data.sidebar.title}</span>
            <span class="cat2"><img src="${data.sidebar.nex}"><a>${data.sidebar.acc}</a></span>
            <span class="cat3"><a>${data.sidebar.mob}</a></span>
            `
            top.appendChild(cate)
            const price = document.createElement('div')
            price.className="price"
            price.innerHTML=`
            <span class="pri-cont">
                <div class="pri">
                    <span class="prc">${data.sidebar.price}</span>
                </div>
                <div class="grey-space">
                    <div class="grey-sub">
                        <div class="spa"></div>
                        <div class="spa"></div>
                        <div class="spa"></div>
                        <div class="spa"></div>
                        <div class="spa"></div>
                    </div>
                </div>
                <div class="selector">
                    <div class="pointer">
                        <div class="lround">
                            <div class="circle1"></div>
                        </div>
                        <div class="rround">
                            <div class="circle2"></div>
                        </div>
                        <div class="thin"></div>
                        <div class="thick"></div>
                    </div>
                    <div class="dots">
                        <div class="dot">.</div>
                        <div class="dot">.</div>
                        <div class="dot">.</div>
                        <div class="dot">.</div>
                        <div class="dot">.</div>
                        <div class="dot">.</div>
                    </div>
                </div>
                <div class="minmax">
                    <div class="min">
                        <select>
                            <option>${data.sidebar.min}</option>
                            <option>${data.sidebar.thou}</option>
                            <option>${data.sidebar.fiv}</option>
                            <option>${data.sidebar.twe}</option>
                            <option>${data.sidebar.thir}</option>
                        </select>
                    </div>
                    <div class="to">${data.sidebar.to}</div>
                    <div class="max">
                        <select>
                            <option>${data.sidebar.thou}</option>
                            <option>${data.sidebar.fiv}</option>
                            <option>${data.sidebar.twe}</option>
                            <option>${data.sidebar.thir}</option>
                            <option>${data.sidebar.thir}</option>
                        </select>
                    </div>
                </div>
            </span>
            `
            top.appendChild(price)
            const brand = document.createElement('div')
            brand.className='brand'
            brand.innerHTML=`
                <div class="brandtop">
                    <div class="bleft">${data.sidebar.brand}</div>
                    <img src="${data.sidebar.nex}">
                </div>
                <div class="brand-bot">
                    <div class="bot1">
                        <div class="searbr">
                            <img src="" id="searc">
                            <input type="text" placeholder="Search Brand">
                        </div>
                        <div class="apple">
                            <label>
                                <input>
                                <div class="appjus"></div>
                                <div class="kof">${data.sidebar.apple}</div>
                            </label>
                        </div>
                        <div class="apple">
                            <label>
                                <input>
                                <div class="appjus"></div>
                                <div class="kof">${data.sidebar.sam}</div>
                            </label>
                        </div>
                        <div class="apple">
                            <label>
                                <input>
                                <div class="appjus"></div>
                                <div class="kof">${data.sidebar.gog}</div>
                            </label>
                        </div>
                        <div class="apple">
                            <label>
                                <input>
                                <div class="appjus"></div>
                                <div class="kof">${data.sidebar.mot}</div>
                            </label>
                        </div>
                        <div class="apple">
                            <label>
                                <input>
                                <div class="appjus"></div>
                                <div class="kof">${data.sidebar.viv}</div>
                            </label>
                        </div>
                        <div class="apple">
                            <label>
                                <input>
                                <div class="appjus"></div>
                                <div class="kof">${data.sidebar.opp}</div>
                            </label>
                        </div>
                    </div>
                    <div class="bot2">${data.sidebar.more}</div>
                </div>
            `
            top.append(brand)
            const searc = document.getElementById('searc')
            searc.src= data.header[0].sea
        })
})