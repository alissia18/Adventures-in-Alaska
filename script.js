    
    $(".cityname").hide();
    $(".text section").hide();
    $("nav li").hide();
    $("#van").show();
    $("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
  
  
  
  
        function toggleNav(){
        // if nav is open, close it
        if($("nav").is(":visible")){
          $("nav").fadeOut();
          $("button").removeClass("menu");
        }
        // if nav is closed, open it
        else{
          $("button").addClass("menu");
          $("nav").fadeIn().css('display', 'flex');
        }
      }
  
      
      
      // when clicking + or ☰ button
      $("header button").click(function(){
        $("#vancouver").delay(1000).fadeIn(800);
        $("#div1").delay(1000).fadeIn(400);
        $("#slideshow").hide();
        $("#h1").hide();
  
        // when clicking ☰ button, open nav
       if($("header").hasClass("open")){
         toggleNav();
       }
        // when clicking + button, open header
        else{
          $("header").addClass("open");
        }
      });
  
      // close nav
      $("#nav-close").click(function(){
        toggleNav();
      });
      
      // scroll to sections
      $("nav li").click(function(){
        // get index of clicked li and select according section
        var index = $(this).index();
        var target = $(".text section").eq(index);
        toggleNav();
       
        $('html,body').delay(300).animate({
          scrollTop: target.offset().top
        }, 500);
  
        
      });

      function slideshow(id){
        $(".bar").attr("background", "transparent");
        switch(id){
          
          case 'l1' : 
          $("#l1").attr("background", "#fff");
          break;
          case 'l2' : 
          $("#l2").attr("background", "#fff");
          break;
          case 'l3' : 
          $("#l3").attr("background", "#fff");
          break;
        }
      }
     function animateIt(id){
       switch (id){
         case 'button1':   document.getElementById("vbanim").beginElement();
       
        $("#div2").delay(3000).fadeIn(400);
        $("#dawes-glacier").delay(3000).fadeIn(800, function() {
          var target = $("#dawes-glacier");
        $('html,body').delay(300).animate({
          scrollTop: target.offset().top
        }, 500);
        $("#daw").show();
  
        });
        
         break;
        
         case 'button2':   document.getElementById("vbanim2").beginElement();
         $("#div3").delay(2000).fadeIn(400);
        $("#skagway").delay(2000).fadeIn(800, function() {
          var target = $("#skagway");
        $('html,body').delay(300).animate({
          scrollTop: target.offset().top
        }, 500);
        $("#ska").show();
  
        });
        
         break;
         case 'button3':   document.getElementById("vbanim3").beginElement();
         $("#div4").delay(2000).fadeIn(400);
        $("#juneau").delay(2000).fadeIn(800, function() {
          var target = $("#juneau");
        $('html,body').delay(300).animate({
          scrollTop: target.offset().top
        }, 500);
        $("#jun").show();
  
        });
        
        break;
         case 'button4':   document.getElementById("vbanim4").beginElement();
         $("#div5").delay(3000).fadeIn(400);
        $("#ketchikan").delay(3000).fadeIn(800, function() {
          var target = $("#ketchikan");
        $('html,body').delay(300).animate({
          scrollTop: target.offset().top
        }, 500);
        $("#ket").show();
  
        });
        break;

        case 'button5':
          $("#credits").delay(100).fadeIn(800, function() {
            var target = $("#credits");
          $('html,body').delay(300).animate({
            scrollTop: target.offset().top
          }, 500);
          $("#cred").show();
          });
       }
     }
  
  $(".js-image").click(function() {
    var modal = document.getElementById("myModal");
    
    
    var img = document.getElementById(this.id);
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = this.src;
   
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() { 
      modal.style.display = "none";
    }
  })
  
 