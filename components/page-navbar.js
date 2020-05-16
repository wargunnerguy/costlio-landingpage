Vue.component('page-navbar', {
    template:
    // language=HTML
            `
<nav class="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="pb-navbar">
    <div class="container">
        <div class="navbar-brand"></div>
        <a href="index.html">
            <img src="assets/images/costlio.svg" alt="">
        </a>
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                data-target="#probootstrap-navbar"
                aria-controls="probootstrap-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span><i class="ion-navicon"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="probootstrap-navbar">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="#section-home">Pealeht</a></li>
                <li class="nav-item"><a class="nav-link" href="#section-features">Mida pakume</a></li>
                <!--                <li class="nav-item"><a class="nav-link" href="#section-reviews">Tehtud tööd</a></li>-->
                <!--                <li class="nav-item"><a class="nav-link" href="#section-pricing">Hinnad</a></li>-->
                <li class="nav-item"><a class="nav-link" href="#section-faq">KKK</a></li>
                <li class="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0">
                    <a class="nav-link" href="#calculator" target="_blank">
                        <span class="pb_rounded-4 px-4">Kalkuleeri hinnavõit</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`
});
