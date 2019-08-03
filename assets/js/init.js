// $(document).ready(function () {
// });


/*=============
Wave js 
==============*/
 // Waves.attach('.button', ['waves-button', 'waves-float']);
 Waves.attach('.wave');
 Waves.init();
 /* Sample: <a href="#" class="wave">Click Here</a> */
/* HELPER::
    .waves-button for semi-rounded button style.
    .waves-float for float effect when the element is clicked.
    .waves-circle for circle (rounded) style.
    .waves-block for adding display: block; to element.
    */
/* Other Examples::
<div class="boxes flat-box">Flat Box</div>
<div class="boxes float-box">Float Box</div>
<div class="clear"></div>
<p class="text-center">
    <img class="waves-image" src="https://farm2.staticflickr.com/1297/1091511802_2fb2451ecc_n.jpg">
</p>
<script type="text/javascript">
    Waves.attach('.flat-box', ['waves-block']);
    Waves.attach('.float-box', ['waves-block', 'waves-float']);
    Waves.attach('.waves-image');
</script>
*/
/*=============
Wave js END
==============*/



/*=============
paroller js 
==============*/
// $('.headlex').paroller(); 

/*=============
paroller js END
==============*/
jQuery(document).ready(function( $ ) {
              $('#mainUiSlider01').sliderPro();
              $('#mainUiSlider02').sliderPro();
              $('#mainUiSlider03').sliderPro();
            });

/*=============
lightgallery js
==============*/
$(document).ready(function(){
  $('#lightgallery').lightGallery();
});

$('#lightgallery').lightGallery({
  mode: "lg-slide",
  cssEasing: "ease",
  easing: "linear",
  speed: 600,
  height: "100%",
  width: "100%",
  addClass: "",
  startClass: "lg-start-zoom",
  backdropDuration: 150,
  hideBarsDelay: 6000,
  useLeft: false,
  closable: true,
  loop: true,
  escKey: true,
  keyPress: true,
  controls: true,
  slideEndAnimatoin: true,
  hideControlOnEnd: false,
  mousewheel: true,
  getCaptionFromTitleOrAlt: true,
  appendSubHtmlTo: ".lg-sub-html",
  subHtmlSelectorRelative: false,
  preload: 1,
  showAfterLoad: true,
  selector: "",
  selectWithin: "",
  nextHtml: "",
  prevHtml: "",
  index: false,
  iframeMaxWidth: "100%",
  download: true,
  counter: true,
  appendCounterTo: ".lg-toolbar",
  swipeThreshold: 50,
  enableSwipe: true,
  enableDrag: true,
  dynamic: false,
  dynamicEl: [],
  galleryId: 1
});

/*=============
lightgallery js END
==============*/


/*=============
    Portfolio filter
    ==============*/
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/*=============
    Portfolio filter END
    ==============*/
    
/*=============
  bootstrap 4 
  ==============*/
// Select all elements with data-toggle="tooltips" in the document
$('[data-toggle="tooltip"]').tooltip(); 

// Select all tabs
$('.nav-tabs a').click(function(){
	$(this).tab('show');
})

// scroll spy navbar
$('body').scrollspy({target: ".navbar"})

// Select all elements with data-toggle="popover" in the document
$('[data-toggle="popover"]').popover(); 

// Enable manually modal
$("#myModal").modal()

// dropdown
$('.dropdown-toggle').dropdown();
$().dropdown('toggle');
// collapse
$('.collapse').collapse();

// button
$('.btn').button();

// alert
$('.close').alert("close");

// Activate Carousel
$("#myCarousel").carousel();
// Enable Carousel Indicators
$(".item").click(function(){
	$("#myCarousel").carousel(1);
});
// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
	$("#myCarousel").carousel("prev");
});

/*=============
    bs 4 END
    ==============*/



/*=============
    Particle js 
    ==============*/
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  /*=============
    Particle js END
    ==============*/


