$(document).ready(function(){
    // include navbar
    $(".navbar-insert").load("/demo/page-inserts/navbar.html", function(){
        // initiate MDC drawer
        const drawer = new mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    });

    // include top app bar
    $(".mdc-top-app-bar").load("/demo/page-inserts/top-app-bar.html", function(){
        // initiate MDC top app bar
        const mdc-top-app-bar = new mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
        topAppBar.setScrollTarget(document.getElementById('main-content'));
        topAppBar.listen('MDCTopAppBar:nav', () => {
            drawer.open = !drawer.open;
        });
    });

    // include source code link
    $(".source-code-link").load("/demo/page-inserts/source-code-link.html", function(){alert("Done!");});

    // initiate MDC buttons & FABs
    const mdc-buttons = document.querySelectorAll('.mdc-button');
    for (const button of mdc-buttons) {
        mdc.ripple.MDCRipple.attachTo(button);
    }
    const mdc-fabs = document.querySelectorAll('.mdc-fab');
    for (const fab of mdc-fabs) {
        mdc.ripple.MDCRipple.attachTo(fab);
    }
});
