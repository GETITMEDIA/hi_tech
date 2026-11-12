const fs = require('fs');

const pagesConfig = {
  'index.html': { activeKey: 'home', subKey: '' },
  'about.html': { activeKey: 'about', subKey: '' },
  'caressentials.html': { activeKey: 'accessories', subKey: 'essentials' },
  'convenience.html': { activeKey: 'accessories', subKey: 'convenience' },
  'safetysecurity.html': { activeKey: 'accessories', subKey: 'safety' },
  'carstyle.html': { activeKey: 'accessories', subKey: 'style' },
  'carperformance.html': { activeKey: 'accessories', subKey: 'performance' },
  'carcareproduct.html': { activeKey: 'accessories', subKey: 'care' },
  'blog.html': { activeKey: 'services', subKey: '' },
  'brands.html': { activeKey: 'brands', subKey: '' },
  'contact.html': { activeKey: 'contact', subKey: '' },
  'cart.html': { activeKey: '', subKey: '' },
  '404.html': { activeKey: '', subKey: '' }
};

function generateHeader(activeKey, subKey) {
  return `        <div class="header__topbar">
            <div class="container-fluid">
                <div class="header__topbar--inner d-flex align-items-center justify-content-between">
                    <ul class="header__topbar--info d-none d-lg-flex align-items-center">
                        <li class="header__info--list">
                            <a class="header__info--link" href="tel:9940917758">
                                <svg class="hz-top-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 4.09 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75l1.1 4.42a1 1 0 0 1-.29.95L8.21 10.91a16 16 0 0 0 6.88 6.88l1.79-1.79a1 1 0 0 1 .95-.29l4.42 1.1a1 1 0 0 1 .75 1z" fill="#F97316"/>
                                </svg>
                                <span>99409 17758 &nbsp;|&nbsp; 99409 17728</span>
                            </a>
                        </li>
                        <li class="header__info--list">
                            <span class="header__top--sep" aria-hidden="true"></span>
                        </li>
                        <li class="header__info--list">
                            <a class="header__info--link" href="mailto:hitechautozone@gmail.com">
                                <svg class="hz-top-ico" width="17" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" fill="#F97316"/>
                                    <path d="M3 6l9 7 9-7" stroke="#111315" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>hitechautozone@gmail.com</span>
                            </a>
                        </li>
                    </ul>
                    <div class="header__top--right d-flex align-items-center">
                        <span class="header__top--sep d-none d-lg-inline-block" aria-hidden="true"></span>
                        <ul class="social__share d-flex align-items-center">
                            <li class="social__share--list">
                                <a class="social__share--icon text-white" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/p/Hitechautozone-pondicherry-100066912985114/" aria-label="Facebook">
                                    <svg width="10" height="16" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M7.62891 8.625L8.01172 6.10938H5.57812V4.46875C5.57812 3.75781 5.90625 3.10156 7 3.10156H8.12109V0.941406C8.12109 0.941406 7.10938 0.75 6.15234 0.75C4.15625 0.75 2.84375 1.98047 2.84375 4.16797V6.10938H0.601562V8.625H2.84375V14.75H5.57812V8.625H7.62891Z" fill="#FFFFFF"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="social__share--list">
                                <a class="social__share--icon" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hitechautozone_pondicherry/" aria-label="Instagram">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <defs>
                                            <radialGradient id="hz-ig-badge-grad" cx="25%" cy="108%" r="140%">
                                                <stop offset="0%" stop-color="#FFDC80"/>
                                                <stop offset="15%" stop-color="#F77737"/>
                                                <stop offset="35%" stop-color="#F56040"/>
                                                <stop offset="65%" stop-color="#FD1D1D"/>
                                                <stop offset="100%" stop-color="#C13584"/>
                                            </radialGradient>
                                        </defs>
                                        <rect width="24" height="24" rx="6" fill="url(#hz-ig-badge-grad)"/>
                                        <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="#FFFFFF" stroke-width="1.8"/>
                                        <circle cx="12" cy="12" r="3.5" stroke="#FFFFFF" stroke-width="1.8"/>
                                        <circle cx="16.5" cy="7.5" r="1" fill="#FFFFFF"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="social__share--list">
                                <a class="social__share--icon" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@hi-techautozone2502" aria-label="YouTube">
                                    <svg width="22" height="16" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.498 3.186a3.016 3.016 0 0 0-2.122-2.136C19.505.5 12 .5 12 .5s-7.505 0-9.377.55A3.016 3.016 0 0 0 .502 3.186C0 5.07 0 9 0 9s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 12.93 24 9 24 9s0-3.93-.502-5.814z" fill="#FF0000"/>
                                        <path d="M9.545 12.568V5.432L15.818 9l-6.273 3.568z" fill="#FFFFFF"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="main__header header__sticky">
            <div class="container-fluid">
                <div class="main__header--inner position__relative d-flex justify-content-between align-items-center">
                    <div class="offcanvas__header--menu__open d-lg-none">
                        <a class="offcanvas__header--menu__open--btn" href="javascript:void(0)" data-offcanvas>
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
                            <span class="visually-hidden">Offcanvas Menu Open</span>
                        </a>
                    </div>
                    <div class="main__logo">
                        <h1 class="main__logo--title m-0"><a class="main__logo--link" href="index.html"><img class="main__logo--img" src="assets/img/logo/hi-tech-logo.png" alt="Hi-Tech Autozone" width="180" height="100"></a></h1>
                    </div>
                    <div class="header__menu style3 d-none d-lg-block">
                        <nav class="header__menu--navigation">
                            <ul class="header__menu--wrapper d-flex align-items-center">
                                <li class="header__menu--items">
                                    <a class="header__menu--link ${activeKey === 'home' ? 'active' : ''}" href="index.html">Home</a>
                                </li>
                                <li class="header__menu--items">
                                    <a class="header__menu--link ${activeKey === 'about' ? 'active' : ''}" href="about.html">About</a>
                                </li>
                                <li class="header__menu--items">
                                    <a class="header__menu--link ${activeKey === 'accessories' ? 'active' : ''}" href="caressentials.html">
                                        Car Accessories
                                        <svg class="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 12 7.41">
                                            <path d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor"/>
                                        </svg>
                                    </a>
                                    <ul class="header__sub--menu">
                                        <li class="header__sub--menu__items"><a href="caressentials.html" class="header__sub--menu__link ${subKey === 'essentials' ? 'active' : ''}">CAR ESSENTIALS</a></li>
                                        <li class="header__sub--menu__items"><a href="convenience.html" class="header__sub--menu__link ${subKey === 'convenience' ? 'active' : ''}">CONVENIENCE</a></li>
                                        <li class="header__sub--menu__items"><a href="safetysecurity.html" class="header__sub--menu__link ${subKey === 'safety' ? 'active' : ''}">SAFETY AND SECURITY</a></li>
                                        <li class="header__sub--menu__items"><a href="carstyle.html" class="header__sub--menu__link ${subKey === 'style' ? 'active' : ''}">CAR STYLES</a></li>
                                        <li class="header__sub--menu__items"><a href="carperformance.html" class="header__sub--menu__link ${subKey === 'performance' ? 'active' : ''}">CAR PERFORMANCE PRODUCT</a></li>
                                        <li class="header__sub--menu__items"><a href="carcareproduct.html" class="header__sub--menu__link ${subKey === 'care' ? 'active' : ''}">CAR CARE PRODUCT</a></li>
                                    </ul>
                                </li>
                                <li class="header__menu--items">
                                    <a class="header__menu--link ${activeKey === 'services' ? 'active' : ''}" href="blog.html">Services</a>
                                </li>
                                <li class="header__menu--items">
                                    <a class="header__menu--link ${activeKey === 'brands' ? 'active' : ''}" href="brands.html">Our Brands</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header__actions d-flex align-items-center">
                        <a class="hz-nav-contact-btn d-none d-sm-inline-flex" href="contact.html">Contact</a>
                        <a class="hz-nav-phone-btn" href="tel:9940917758" aria-label="Call Hi-Tech Autozone" title="Call 99409 17758">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 4.09 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75l1.1 4.42a1 1 0 0 1-.29.95L8.21 10.91a16 16 0 0 0 6.88 6.88l1.79-1.79a1 1 0 0 1 .95-.29l4.42 1.1a1 1 0 0 1 .75 1z" stroke="#F97316" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
}

Object.keys(pagesConfig).forEach(filename => {
  if (!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf8');
  
  const topbarIdx = html.indexOf('<div class="header__topbar');
  const offcanvasIdx = html.indexOf('<!-- Start Offcanvas header menu -->');
  
  if (topbarIdx !== -1 && offcanvasIdx !== -1 && topbarIdx < offcanvasIdx) {
    const config = pagesConfig[filename];
    const newHeaderContent = generateHeader(config.activeKey, config.subKey);
    
    const beforeTopbar = html.substring(0, topbarIdx);
    const afterMainHeader = html.substring(offcanvasIdx);
    
    html = beforeTopbar + newHeaderContent + '\n        ' + afterMainHeader;
    fs.writeFileSync(filename, html, 'utf8');
    console.log(`Updated header in ${filename}`);
  }
});
