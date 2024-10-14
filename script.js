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
                    </div>
                </div>
                <div class="minmax">
                    <div class="min">
                        <select class="min-select">
                            <option>${data.sidebar.min}</option>
                            <option>${data.sidebar.thou}</option>
                            <option>${data.sidebar.fiv}</option>
                            <option>${data.sidebar.twe}</option>
                            <option>${data.sidebar.thir}</option>
                        </select>
                    </div>
                    <div class="to">${data.sidebar.to}</div>
                    <div class="max">
                        <select class="max-select">
                            <option>${data.sidebar.ten}</option>
                            <option>${data.sidebar.fiv}</option>
                            <option>${data.sidebar.twe}</option>
                            <option>${data.sidebar.thir}</option>
                            <option selected>${data.sidebar.ther}</option>
                        </select>
                    </div>
                </div>
            </span>
            `
            top.appendChild(price)
            
            document.addEventListener('DOMContentLoaded', function () {
                const options = [...maxSelect.options].map(option => option.value);  
                const selectedIndex = options.indexOf(defaultValue);
                const totalSegments = options.length - 1;
                const startPosition = -188;
                const endPosition = 0;
                const stepSize = (endPosition - startPosition) / totalSegments;
                const newPosition = startPosition + (stepSize * selectedIndex);
                rround.style.transform = `translateX(${newPosition}px)`;
            });
            
            document.querySelector('.max-select').addEventListener('change', function () {
                const rround = document.querySelector('.rround');
                const maxSelect = document.querySelector('.max-select');
                const options = [...maxSelect.options].map(option => option.value);  
                const selectedOption = maxSelect.value;
                const selectedIndex = options.indexOf(selectedOption);
                const totalSegments = options.length - 1;
                const startPosition = -188;
                const endPosition = 0;
                const stepSize = (endPosition - startPosition) / totalSegments;
                const newPosition = startPosition + (stepSize * selectedIndex);
                rround.style.transform = `translateX(${newPosition}px)`;
            });

            document.addEventListener('DOMContentLoaded', function () {
                const options = [...minSelect.options].map(option => option.value);  
                const selectedIndex = options.indexOf(defaultValue);
                const totalSegments = options.length - 1;
                const startPositionl = 0;
                const endPositionl = 192;
                const stepSizei = (endPositionl - startPositionl) / totalSegments;
                const newPositionu = startPositionl + (stepSizei * selectedIndex);
                lround.style.transform = `translateX(${newPositionu}px)`;
            });
            
            document.querySelector('.min-select').addEventListener('change', function () {
                const lround = document.querySelector('.lround');
                const minSelect = document.querySelector('.min-select');
                const options = [...minSelect.options].map(option => option.value);  
                const selectedOption = minSelect.value;
                const selectedIndex = options.indexOf(selectedOption);
                const totalSegments = options.length - 1;
                const startPosition = 0;
                const endPosition = 192;
                const startthick = 0;
                const endthick = 188;
                const thickstep = (endthick - startthick) / totalSegments
                const stepSize = (endPosition - startPosition) / totalSegments;
                const newstart = startthick + (thickstep * selectedIndex)
                const newPositionu = startPosition + (stepSize * selectedIndex);
                lround.style.transform = `translateX(${newPositionu}px)`;
                const thick = document.querySelector('.thick')
                thick.style.left= `${newstart}px`
            });

            const circle1 = document.querySelector('.circle1');
            const circle2 = document.querySelector('.circle2');
            const thick = document.querySelector('.thick');
            
            function updateWidth() {
              const pos1 = circle1.getBoundingClientRect().left;
              const pos2 = circle2.getBoundingClientRect().left;
              const diff = Math.abs(pos1 - pos2);
              thick.style.width = `${diff}px`;
            
              requestAnimationFrame(updateWidth);
            }
            updateWidth();            

            document.querySelector('.min-select').addEventListener('change', filterByPriceRange);
            document.querySelector('.max-select').addEventListener('change', filterByPriceRange);
            function filterByPriceRange() {
                const minSelect = document.querySelector('.min-select');
                const maxSelect = document.querySelector('.max-select');
                const container = document.querySelector('.right-dwn-container'); 

                // Get the selected min and max values
                const minValue = parseFloat(minSelect.value.replace(/[^0-9.-]+/g, "")) || 0;
                const maxValue = parseFloat(maxSelect.value.replace(/[^0-9.-]+/g, "")) || Infinity;

                // Loop through all elements and toggle visibility based on the price range
                Array.from(container.children).forEach(el => {
                    const price = parseFloat(el.querySelector('.apn').textContent.replace(/[^0-9.-]+/g, ""));
                    if (price >= minValue && price <= maxValue) {
                        el.style.display = '';  // Show the element
                    } else {
                        el.style.display = 'none';  // Hide the element
                    }
                });
            }

            // Create the main brand container
            const brand = document.createElement('div');
            brand.className = 'brand';
            brand.innerHTML = `
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
            `;

            const brandsContainer = brand.querySelector('.bot1');
            data.sidebar.brands.forEach(mobilebrand => {
                const brdiv = document.createElement('div');
                brdiv.className = 'mobrand';
                brdiv.innerHTML = `
                    <label>
                        <input type="checkbox" value="${mobilebrand}">
                        <div class="appjus"></div>
                        <div class="kof">${mobilebrand}</div>
                    </label>
                `;
                brandsContainer.appendChild(brdiv);
            });

            top.append(brand);

            // Handle nested brand loops
            data.loop.forEach(item => {
                const loop = document.createElement('div');
                loop.className = 'brand';
                loop.innerHTML = `
                    <div class="brandtop">
                        <div class="bleft">${item.title}</div>
                        <img src="${data.sidebar.nex}">
                    </div>
                    <div class="brand-bot">
                        <div class="bot1"></div>
                    </div>
                `;

                const boto = loop.querySelector('.bot1');
                item.sub.forEach(subItem => {
                    const brdiv = document.createElement('div');
                    brdiv.className = 'mobrand';
                    brdiv.innerHTML = `
                        <label>
                            <input type="checkbox" value="${subItem}">
                            <div class="appjus"></div>
                            <div class="kof">${subItem}</div>
                        </label>`;
                    boto.append(brdiv);
                });

                top.append(loop);
            });

            // Filter Logic for Checkboxes
            const checkboxes = document.querySelectorAll('.mobrand input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', filterByBrand);
            });

            function filterByBrand() {
                checkboxes.forEach(checkbox => {
                    const appjus = checkbox.parentElement.querySelector('.appjus');
                    if (checkbox.checked) {
                        // Update the style and icon when checked
                        appjus.innerHTML = `<img src="icons/check-solid.svg">`;
                        appjus.style.backgroundColor = '#2874f0';
                    } else {
                        // Clear the icon and background when unchecked
                        appjus.innerHTML = '';
                        appjus.style.backgroundColor = '';
                    }
                });
            
                // Collect selected brands based on checked checkboxes
                const selectedBrands = Array.from(checkboxes)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.parentElement.querySelector('.kof').textContent.trim().toLowerCase());
            
                // Loop through .right-dwn elements and toggle their visibility
                Array.from(container.children).forEach(el => {
                    const brandName = el.querySelector('.name').textContent.trim().toLowerCase();
            
                    // Check if any selected brand partially matches the brandName
                    const matches = selectedBrands.some(brand => brandName.includes(brand));
            
                    if (selectedBrands.length === 0 || matches) {
                        el.style.display = '';  // Show the element
                    } else {
                        el.style.display = 'none';  // Hide the element
                    }
                });
            }
            


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
            
                const container = document.createElement('div');
                container.className = 'right-dwn-container';
                data.right.rightmain.forEach(item => {
                    const rightdwn = document.createElement('div');
                    rightdwn.className = 'right-dwn';
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
                    `;
            
                    const ulli = rightdwn.querySelector('.ulli');
                    item.li.forEach(listItem => {
                        const uls = document.createElement('ul');
                        uls.innerHTML = `<li>${listItem}</li>`;
                        ulli.append(uls);
                    });
            
                    container.append(rightdwn);
                });
            
            
                right.append(container);

                const spanes = document.querySelectorAll('.spane');


                if (spanes.length > 0) {
                    // Store the original order of elements
                    const originalOrder = Array.from(container.children);
                
                    // Sort by price: Low to High
                    spanes[1].addEventListener('click', () => {
                        const rightDwnElements = Array.from(container.children);
                
                        rightDwnElements.sort((a, b) => {
                            const priceA = parseFloat(a.querySelector('.apn').textContent.replace(/[^0-9.-]+/g, ""));
                            const priceB = parseFloat(b.querySelector('.apn').textContent.replace(/[^0-9.-]+/g, ""));
                            return priceA - priceB; // Ascending order (low to high)
                        });
                
                        container.innerHTML = ''; // Clear current elements
                        rightDwnElements.forEach(el => container.append(el)); // Append sorted elements
                    });
                
                    // Sort by price: High to Low
                    spanes[2].addEventListener('click', () => {
                        const rightDwnElements = Array.from(container.children);
                
                        rightDwnElements.sort((a, b) => {
                            const priceA = parseFloat(a.querySelector('.apn').textContent.replace(/[^0-9.-]+/g, ""));
                            const priceB = parseFloat(b.querySelector('.apn').textContent.replace(/[^0-9.-]+/g, ""));
                            return priceB - priceA; // Descending order (high to low)
                        });
                
                        container.innerHTML = ''; // Clear current elements
                        rightDwnElements.forEach(el => container.append(el)); // Append sorted elements
                    });
                
                    // Reset to original order on clicking spanes[0]
                    spanes[0].addEventListener('click', () => {
                        container.innerHTML = ''; // Clear current elements
                        originalOrder.forEach(el => container.append(el)); // Append original elements
                    });
                }
                
        
            const page = document.createElement('div')
            page.className='page-cont'
            page.innerHTML = `
                <div class="page-pad">
                    <span>Page 1 of 20</span>
                    <nav class="counter"></nav>
                    <span class="cyon"></span>
                </div>
            `
            right.append(page)
            
            const counter = document.querySelector('.counter')
                const appar = document.createElement('a')
                appar.href = "#"
                appar.onclick = function(event) {
                    event.preventDefault()
                    currentPage = i
                    renderPage(currentPage)
                    document.querySelector('.page-pad span').innerText = `Page ${currentPage} of ${totalPages}`
                }
                counter.append(appar)
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
            });
            const atpm = document.querySelector('.atpm')
            atpm.innerHTML=`
                <img src="${data.mobile.arrow}">
            `
            const btpm = document.querySelector('.btpm')
            btpm.innerHTML=`<img src="${data.mobile.img}">`
            const stpm = document.querySelector('.stpm')
            stpm.innerHTML=`
                <div><h1>${data.mobile.nob}</h1></div>
            `
            const ttpm = document.querySelector('.ttpm')
            ttpm.innerHTML=`
                <img src="${data.mobile.ttimg}" width='20px'>
            `
            const utpm = document.querySelector('.utpm')
            utpm.innerHTML=`
                <img src="${data.mobile.cart}">
            `
            const vtpm = document.querySelector('.vtpm')
            vtpm.innerHTML=`
                <span>${data.mobile.login}</span>
            `
            const toptwone = document.querySelector('.top21-sub')
            toptwone.innerHTML=`
                <img src="${data.mobile.sorter}">
                <div class="bhj jot">${data.mobile.sort}</div>
            `
            const toptothr = document.querySelector('.top23-sub')
            toptothr.innerHTML=`
                <div class="juf jox">
                    <img src="${data.mobile.filt}">
                    <div class="bhj">${data.mobile.filter}</div>
                </div>
            `

            const topto = document.querySelector('.top21');
            topto.addEventListener('click', function () {
                const contto = document.querySelector('.content2');
                contto.style.backgroundColor = 'rgb(0, 0, 0)';
                contto.style.opacity = '0.5';
                contto.style.zIndex='1111';
                let dropdownModel = document.querySelector('.dropdown-model');
                if (!dropdownModel) {
                    dropdownModel = document.createElement('div');
                    dropdownModel.className = 'dropdown-model';
                    dropdownModel.innerHTML = `
                        <div>
                            <div class="soort jot">${data.mobile.drop.sort}</div>
                            <div class="sormid juf"></div>
                            <div class-"juf">
                                <div class="being juf">
                                    <div class="besub">
                                        <div class="fin jot">${data.mobile.drop.pop}</div>
                                        <img src="">
                                    </div>
                                </div>
                                <div class="being juf">
                                    <div class="besub">
                                        <div class="fin jot">${data.mobile.drop.low}</div>
                                    </div>
                                </div>
                                <div class="being juf">
                                    <div class="besub">
                                        <div class="fin jot">${data.mobile.drop.high}</div>
                                    </div>
                                </div>
                                <div class="being juf">
                                    <div class="besub juf">
                                        <div class="fin jot">${data.mobile.drop.new}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    document.body.appendChild(dropdownModel);
                }
            
                dropdownModel.style.display = dropdownModel.style.display === 'block' ? 'none' : 'block';
            });
            
            document.addEventListener('click', function (event) {
                const dropdownModel = document.querySelector('.dropdown-model');
                if (dropdownModel && !topto.contains(event.target) && !dropdownModel.contains(event.target)) {
                    dropdownModel.style.display = 'none';
                    const contto = document.querySelector('.content2');
                    contto.style.opacity = '1';
                }
            });
            const topfg = document.querySelector('.top3fg')
            data.mobile.topthree.forEach((item, index) => {
                const djb = document.createElement('div')
                djb.className = 'djb'
                djb.innerHTML = `
                    <div class="juf">
                        <div class="juf huf">
                            <div class="djb-sub juf">
                                <div class="juf">
                                    <div class="fgb juf">
                                        <div class="vhs">
                                            <img src="${item.img}">
                                        </div>
                                    </div>
                                </div>
                                <div class="texting">
                                    <div class="texting">
                                        <div class="tjt jot">
                                            <span class="gyk jot">${item.txt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                if (index === 1) {
                    djb.classList.add('cvg')
                }
                topfg.append(djb)
                if(index === 2){
                    djb.classList.add('gbm')
                }
            })
            const cgyujn = document.querySelector('.cgyujn')
            data.right.rightmain.forEach(item => {
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
                                            <div class="assuimg"><img src="${data.right.assu}"></div>
                                        </div>
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
                                        <div class="pad5">${item.free}</div>
                                        <div class="pad6">1 year warranty</div>
                                    </div>
                                </div>
                            </a>
                            <div class="ulli"></div>
                        </div>
                    </div>
                `

                const ulli = rightdwn.querySelector('.ulli')
                item.li.forEach(listItem => {
                    const uls = document.createElement('ul')
                    uls.innerHTML = `<div class="syv"><li>${listItem}</div></li>`
                    ulli.append(uls)
                })
        
                cgyujn.append(rightdwn)
            })     
            const itemsPerPage = 24;
            let currentPage = 1;
            
            const rightDwnElements = Array.from(container.children); // Get all right-dwn elements
            const totalItems = rightDwnElements.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            
            // Function to render the current page
            function renderPage(page) {
                const startIndex = (page - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
            
                // Hide all elements initially
                rightDwnElements.forEach(el => (el.style.display = 'none'));
            
                // Show elements for the current page
                rightDwnElements.slice(startIndex, endIndex).forEach(el => (el.style.display = ''));
            
                updatePaginationControls(); // Update pagination controls after rendering
            }
            
            // Function to update pagination controls
            function updatePaginationControls() {
                const paginationContainer = document.querySelector('.counter');
                paginationContainer.innerHTML = ''; // Clear previous controls

            
                // Create individual page links
                for (let i = 1; i <= totalPages; i++) {
                    const pageLink = document.createElement('a');
                    pageLink.href = '#';
                    pageLink.textContent = `${i}`;
                    pageLink.className = i === currentPage ? 'active' : '';
                    pageLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        currentPage = i;
                        renderPage(currentPage);
                    });
                    paginationContainer.appendChild(pageLink);
                }
            
                // Update page info display
                const pageInfo = document.querySelector('.page-cont span');
                pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
            }
            
            // Initial setup for the page display
            page.className = 'page-cont';
            page.innerHTML = `
                <div class="page-pad">
                    <span>Page 1 of ${totalPages}</span>
                    <nav class="counter"></nav>
                    <span class="cyon"></span>
                </div>
            `;
            right.append(page);
            
            // Initial render
            renderPage(currentPage);
            
                   
        })
})