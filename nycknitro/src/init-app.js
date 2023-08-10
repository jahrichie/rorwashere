$(function() {
 $bottleOneEL = $(".bottle-one")
 $bottleTwoEL = $(".bottle-two")

function removeLogoAnimation(target_el, animation_classes_to_remove){
  setTimeout(() => {
    $(target_el).removeClass(animation_classes_to_remove)
  }, 2000);

}


$('.logo-center img').hover(
  function() {
    $('.logo-center img').addClass("animate__animated animate__shakeX")
  }, function() {
    removeLogoAnimation('.logo-center img', "animate__animated animate__shakeX")
  }
);//removeLogoAnimation()
          

$.scrollify({

  section : ".scrollify-section",
  scrollbars: false,
  afterResize:function() { 
    console.log("RESIZE occured"   )
    var section_name  = '#'
    section_name  += $.scrollify.current().data("section-name")
    $.scrollify.instantMove( section_name );
    // $.scrollify.update()
  },

  afterRender:function() {
    $("body").css("opacity", 1);
    var pagination = "<ul class=\"pagination\">";
    var activeClass = "";
    $(".scrollify-section").each(function(i) {
      // console.log("in section")
      activeClass = "";
      if(i===$.scrollify.currentIndex()) {
        activeClass = "active";
      }
      pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
    });

    pagination += "</ul>";
    $(".pagination-holder").append(pagination);
    $(".pagination a").on("click",$.scrollify.move);
  },



  after:function(index, section) {
    console.log("index after ", index)

    if (index == 1) {
      var offset = 0
      $( ".background-orange .ingredients li" ).each(function( index ) {
        if (index > 0) {
          offset += 150;
        }
        console.log(offset)
        setTimeout(() => {
          $(this).addClass("animate__animated animate__pulse")
      }, offset);
      });
      removeLogoAnimation(".background-orange .ingredients li", "animate__animated animate__pulse")


    } else if (index == 2){

      var offset = 0
      $( ".background-purple .ingredients li" ).each(function( index ) {
        if (index > 0) {
          offset += 150;
        }
        console.log(offset)
        setTimeout(() => {
          $(this).addClass("animate__animated animate__pulse")
      }, offset);
      });
      removeLogoAnimation(".background-purple .ingredients li", "animate__animated animate__pulse")


    }

 







  },
  before:function(index, section) {
    console.log(index)

    var ref = section[index].attr("data-section-name");
    $(".pagination .active").removeClass("active");
    $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");


    if (index == 0) {
     $bottleOneEL.hide()
     $bottleTwoEL.hide()

    }
    
    else if (index == 1) {
     $bottleOneEL.show()
     $bottleTwoEL.hide()
    }

    else if (index == 2) {
      $bottleOneEL.hide()
      $bottleTwoEL.show()
    }
    else if (index == 3) {
       $bottleOneEL.hide()
       $bottleTwoEL.hide()
    }  

  },
});
});
