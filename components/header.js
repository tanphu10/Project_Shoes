const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href='./../css/header.css'>
<header>
<section class="title ">
    <div class="countryside">
        <a href=""> <img src="./img/logo vietnam.png" alt=""></a>
    </div>
    <div class="content">
        <span>CONVERSE VIET NAM|
            <a href="./basic.html">Shop Now</a>
        </span>
    </div>
</section>
<nav id="site-header" class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand " href="#">
            <img src="./img/iconlogo.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav " style="padding-top: 8px;">
                <a class="nav-link active" aria-current="page" href="./basic.html">sales</a>
                <a class="nav-link" href="./basic.html">Men</a>
                <a class="nav-link" href="./basic.html">Women</a>
                <a class="nav-link" href="./basic.html">Kids</a>
                <a class="nav-link" href="./basic.html">LimitEditons</a>
                <a class="nav-link" href="./basic.html">Explore</a>
            </div>
            <div class="account_item d-flex">
                <a href="./register.html" class="me-3" >My
                    account</a>
                <a href="./register.html" class="me-3" ><i
                        class="fa-solid fa-user-large"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></i></a>
            </div>
            <div class="account_search">
                <ul class="navbar-nav box">
                    <div class="search-box">
                        <form class="d-flex position-relative" role="search">
                            <div class="input-search">
                                <input class="form-control" type="search" placeholder="search"
                                    required="required" autofocus class="search-popup">
                            </div>
                            <button type="submit" class="btn search-btn"
                                style="position: absolute ;right: 0; color: white ; line-height: 3;">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </ul>
            </div>

        </div>

    </div>
</nav>
</header>
`

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        const bootstrap = document.querySelectorAll('link[href*="bootstrap"]');
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
          }

        if (bootstrap) {
            for (var item of bootstrap) {
                shadowRoot.appendChild(item.cloneNode());
            }
        }

        shadowRoot.appendChild(headerTemplate.content);
    }
  }
  
  customElements.define('header-component', Header);

//   Check ham de scroll header scroll len top

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});