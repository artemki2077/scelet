window. addEventListener ('scroll', animOnScroll);


var b1_lable = document.querySelector('.lable');
var processor = document.querySelector('#process')
var knog = document.querySelector('#knog')
// b1_lable.style.marginTop = window.innerHeight * (4/10) + 'px';
    processor.style.top = (window.innerHeight * 4/10) + 'px';
    knog.style.top = (window.innerHeight * 1/10) + 'px';


function animOnScroll() {
    processor.style.top = (window.innerHeight * 4/10) - (pageYOffset * 0.2) + 'px';
    knog.style.top = (window.innerHeight * 1/10) + (pageYOffset * 0.3) + 'px';
    processor.style.left = -5 - (pageYOffset * 0.2) + 'px';
}


var hashTagActive = "";
$(".scroll").on("click touchstart" , function (event) {
    if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
        event.preventDefault();
        //calculate destination place
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({
            scrollTop: dest
        }, 2000, 'swing');
        hashTagActive = this.hash;
    }
});