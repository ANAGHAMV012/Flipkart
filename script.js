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
                    </div>
                    <div class="bot2">${data.sidebar.more}</div>
                </div>
            `
            const brandsContainer = brand.querySelector('.bot1');
            data.sidebar.brands.forEach(mobilebrand => {
                const appleDiv = document.createElement('div');
                appleDiv.className = 'apple';
                appleDiv.innerHTML = `
                    <label>
                        <input type="checkbox">
                        <div class="appjus"></div>
                        <div class="kof">${mobilebrand}</div>
                    </label>
                `;
                brandsContainer.appendChild(appleDiv);
            });
            top.append(brand)
            const searc = document.getElementById('searc')
            searc.src= data.header[0].sea

            const flip = document.createElement('div')
            flip.className='flip'
            flip.innerHTML=`
                <label>
                    <input>
                    <div class="flipjus"></div>
                    <div class="vof">
                        <img src="${data.sidebar.flip}">
                    </div>
                </label>
                <div class="ques">
                    <span>${data.sidebar.ques}</span>
                </div>
            `
            top.append(flip)

            data.loop.forEach(item => {
                const loop = document.createElement('div')
                loop.className='brand'
                loop.innerHTML=`
                    <div class="brandtop">
                        <div class="bleft">${item.title}</div>
                        <img src="${data.sidebar.nex}">
                    </div>
                    <div class="brand-bot">
                        <div class="bot1"></div>
                        </div>
                    </div>
                `
                const boto = loop.querySelector('.bot1')
                item.sub.forEach(subItems => {
                    const apple = document.createElement('div')
                    apple.className='apple'
                    apple.innerHTML=`
                        <label>
                            <input type="checkbox">
                            <div class="appjus"></div>
                            <div class="kof">${subItems}</div>
                        </label>`
                    boto.append(apple)
                })
                top.append(loop)
            })
            
            const right = document.querySelector('.right')
            right.innerHTML = `
                <div class="right-one">
                    <div class="right1"></div>
                    <div class="right2"></div>
                    <h1 class="right3">${data.right.rightth}</h1>
                    <span class="right4">${data.right.rightfo}</span>
                    <div class="right5">
                        <span>${data.right.rightfi}</span>
                    </div>
                </div>
            `
            
            const righto = document.querySelector('.right1')
            data.right.righto.forEach(item => {
                const onedi = document.createElement('div')
                onedi.className = 'one-di'
                onedi.innerHTML = `
                    <a>${item.title}</a>
                    <img src="${item.arrow}">
                `
                righto.append(onedi)
            })
            
            const righttw = document.querySelector('.right2')
            data.right.righttw.forEach(item => {
                const twodi = document.createElement('a')
                twodi.innerHTML = `${item}`
                righttw.append(twodi)
            })
            
            const br = document.createElement('br')
            righttw.append(br)
            
            const rightfi = document.querySelector('.right5')
            data.right.rightfive.forEach(item => {
                const spane = document.createElement('div')
                spane.className = 'spane'
                spane.innerHTML = `${item}`
                rightfi.append(spane)
            })
            
            // Pagination logic
            let currentPage = 1;
            const itemsPerPage = 24;
            const totalPages = Math.ceil(data.right.rightmain.length / itemsPerPage);
            
            function renderPage(page) {
                const startIndex = (page - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
            
                // Clear the right container of any previously rendered items
                const rightDwnContainer = document.querySelector('.right-dwn-container');
                if (rightDwnContainer) {
                    rightDwnContainer.remove();
                }
            
                const container = document.createElement('div')
                container.className = 'right-dwn-container';
            
                // Generate main content in right-dwn for the current page
                const itemsToRender = data.right.rightmain.slice(startIndex, endIndex);
                itemsToRender.forEach(item => {
                    const rightdwn = document.createElement('div')
                    rightdwn.className = 'right-dwn'
                    rightdwn.innerHTML = `
                        <div class="rightdwn-sub">
                            <div class="right-pad">
                                <a>
                                    <div class="rpadl">
                                        <div class="rpdl1"><img src="${item.img}"></div>
                                        <div class="rpdl2">
                                            <span>
                                                <label id="label1">
                                                    <input>
                                                    <div class="sung"></div>
                                                </label>
                                            </span>
                                            <label id="label2"><span>${item.bot}</span></label>
                                        </div>
                                        <div class="rpdl3"><div class="rpd-sub"><img src="${item.heart}"></div></div>
                                    </div>
                                    <div class="rpadr">
                                        <div class="rpadr1">
                                            <div class="sponser">${item.head}</div>
                                            <div class="name">${item.title}</div>
                                            <div class="next">
                                                <span class="rate">
                                                    <div>${item.rate}<img src="${item.star}"></div>
                                                </span>
                                                <span class="rating">${item.rating}</span>
                                            </div>
                                            <div class="ulli"></div>
                                        </div>
                                        <div class="rpadr2">
                                            <div class="pad1">
                                                <div class="pad1up">
                                                    <div class="apn">${item.price}</div>
                                                    <div class="bpn">${item.off}</div>
                                                    <div class="cpn"><span>${item.discount}</span></div>
                                                </div>
                                                <div class="pad2dwn"><div class="dwsub">${item.free}</div></div>
                                            </div>
                                            <div class="pad2"><img src="${item.flip}"></div>
                                            <div class="pad3">
                                                <div class="pad3-sub"><div class="airt">${item.airtel}</div></div>
                                            </div>
                                            <div class="pad4">
                                                <div class="air-cont">
                                                    <div class="air">Upto</div>
                                                    <div class="air">${item.exchange}</div>
                                                    <div class="air">Off on Exchange</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    `
            
                    const ulli = rightdwn.querySelector('.ulli')
                    item.li.forEach(listItem => {
                        const uls = document.createElement('ul')
                        uls.innerHTML = `<li>${listItem}</li>`
                        ulli.append(uls)
                    })
            
                    container.append(rightdwn)
                })
            
                right.append(container)
            }
            
            // Initial render of the first page
            renderPage(currentPage)
            
            // Pagination section (outside loop)
            const page = document.createElement('div')
            page.className='page-cont'
            page.innerHTML = `
                <div class="page-pad">
                    <span>Page ${currentPage} of ${totalPages}</span>
                    <nav class="counter"></nav>
                    <span class="cyon"></span>
                </div>
            `
            right.append(page)
            
            const counter = document.querySelector('.counter')
            for (let i = 1; i <= totalPages; i++) {
                const appar = document.createElement('a')
                appar.innerHTML = `${i}`
                appar.href = "#"
                appar.onclick = function(event) {
                    event.preventDefault()
                    currentPage = i
                    renderPage(currentPage)
                    document.querySelector('.page-pad span').innerText = `Page ${currentPage} of ${totalPages}`
                }
                counter.append(appar)
            }
            const footer = document.querySelector('.footer');
            footer.innerHTML = `
                <div class="footer-sub">
                    <div class="footup"></div>
                    <div class="footdwn"></div>
                </div>
            `;
            
            const footup = document.querySelector('.footup');
            data.footer.forEach(item => {
                const bowo = document.createElement('div');
                bowo.className = 'bowo';
                bowo.innerHTML = `
                    <div class="title">${item.title}</div>
                    <div class="sub"></div>
                `;
                footup.append(bowo);

                const sub = bowo.querySelector('.sub');
                item.sub.forEach(subItem => {
                    const rit = document.createElement('a');
                    rit.innerHTML = `${subItem}`;
                    sub.append(rit);
                });
            });
            data.foot.forEach(item => {
                const bowo = document.createElement('div');
                bowo.className = 'bowo';
                bowo.innerHTML = `
                    <div class="bowo-sub">
                        <div class="title">${item.title}</div>
                        <div class="subtitle"></div>
                        <div class="social">${item.social}</div>
                    </div>
                `;
                footup.append(bowo);

                const sub = bowo.querySelector('.subtitle');
                item.sub.forEach(subItem => {
                    const rit = document.createElement('div');
                    rit.innerHTML = `<p>${subItem}</p>`;
                    sub.append(rit);
                });

                const soico = bowo.querySelector('.social-icons.');
                item.sub.forEach(subItem => {
                    const rit = document.createElement('div');
                    rit.innerHTML = `<p>${subItem}</p>`;
                    soico.append(rit);
                });
            });
            const socialIcons = document.querySelector('.social-icons')
        })
})