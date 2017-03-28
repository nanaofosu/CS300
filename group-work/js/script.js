$(document).ready(function () {
    function Selector_Cache() {
        var collection = {};

        function get_from_cache(selector) {
            if (undefined === collection[selector]) {
                collection[selector] = $(selector);
            }
            return collection[selector];
        }
        return {
            get: get_from_cache
        };
    }
    var selectors = new Selector_Cache();
    // Usage $( '#element' ) becomes
    selectors.get('#get-started').hide();
    selectors.get('#book').click(function () {
        selectors.get('#get-started').slideToggle(200).css({
            'position': 'absolute'
            , 'z-index': 9999
        });        
    });
    selectors.get('#get-started-close').click(function(){
        selectors.get('#get-started').hide();
    });
    
    //for the sign in form
});