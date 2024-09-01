function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  $('.owl-carousel').owlCarousel({
    loop: true, // boolean
    margin: 10, // Number
    nav: true, // Boolean
    dots: true, // Boolean
    autoplay: false, // Boolean
    rtl: true, // Boolean
    items: 6, // Number

    responsive: { // Object
        0: {
            items: 1,
            dots: false,
            nav: false
        },

        480: {
            items: 3,
            nav: false
        },

        768: {
            items: 6
        }
    }

})