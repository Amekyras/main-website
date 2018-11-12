$(document).ready(function(){
    // include navbar
    $(".navbar-insert").load("/demo/page-inserts/navbar.html", function(){
        // initiate MDC drawer
        const drawer = new mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
        
        // include top app bar
        $(".mdc-top-app-bar").load("/demo/page-inserts/top-app-bar.html", function(){
            // initiate MDC top app bar
            const mdc_top_app_bar = new mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
            mdc_top_app_bar.setScrollTarget(document.getElementById('main-content'));
            mdc_top_app_bar.listen('MDCTopAppBar:nav', () => {
                drawer.open = !drawer.open;
            });
        });
    
        // include source code link
        $(".source-code-link").load("/demo/page-inserts/source-code-link.html");
    
        // initiate MDC buttons, FABs and text fields
        const mdc_buttons = document.querySelectorAll('.mdc-button');
        for (const button of mdc_buttons) {
            mdc.ripple.MDCRipple.attachTo(button);
        }
        const mdc_fabs = document.querySelectorAll('.mdc-fab');
        for (const fab of mdc_fabs) {
            mdc.ripple.MDCRipple.attachTo(fab);
        }
        const mdc_text_fields = document.querySelectorAll('.mdc-text-field');
        for (const text_field of mdc_text_fields) {
            mdc.textField.MDCTextField.attachTo(text_field);
        }
    });
});
