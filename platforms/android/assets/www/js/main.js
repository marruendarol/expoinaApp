
var deploy = "DEV"

// Pedidos Activos ----------------------------------------------------------------------
var menu                     = {}
menu.file                    = 'templates/menu.html';
menu.templateList            = "menuListeners";


// DOM Ready =============================================================
function onDeviceReady(){
    $.support.cors = true;
   initApp()
}

$(document).ready(function() {
    if(deploy=="DEV"){
        initApp();
    } else {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
});



function initApp(){
  //  $(document).on("pagechange", function() { console.log("cambiando pagina") });
    $(document).on("pageshow","#home", function() {
       genMenu("#panel-01")
    })

    $(document).on("pageshow","#info", function() {
       genMenu("#panel-02")
    })

    $(document).on("pageshow","#menuVisitante", function() {
       genMenu("#panel-03")
    })

    $(document).on("pageshow","#menuExpositor", function() {
       genMenu("#panel-04")
    })

    $(document).on("pageshow","#menuPrensa", function() {
       genMenu("#panel-05")
    })

    $(document).on("pageshow","#menuMedia", function() {
       genMenu("#panel-06")
    })

    $(document).on("pageshow","#prereg", function() {
       genMenu("#panel-07")
    })

    $(document).on("pageshow","#reserva", function() {
       genMenu("#panel-08")
    })

    $(document).on("pageshow","#ubicacion", function() {
       genMenu("#panel-09")
       startMap('geolocation');
    })

    $(document).on("pageshow","#expPlano", function() {
       genMenu("#panel-10")
      // genZoomable()
    })
    $(document).on("pageshow","#expLista", function() {
       genMenu("#panel-11")
    })
    $(document).on("pageshow","#expContrato", function() {
       genMenu("#panel-12")
    })
    $(document).on("pageshow","#expAcceso", function() {
       genMenu("#panel-13")
    })
    $(document).on("pageshow","#expReserve", function() {
       genMenu("#panel-14")
    })
    $(document).on("pageshow","#expUbicacion", function() {
       genMenu("#panel-15");
        startMap('expMapa');

    })

    $(document).on("pageshow","#prensaAcreditaciones", function() {
       genMenu("#panel-16")
    })
    $(document).on("pageshow","#prensaBoletines", function() {
       genMenu("#panel-17")
    })
    $(document).on("pageshow","#prensaFicha", function() {
       genMenu("#panel-18")
    })
    $(document).on("pageshow","#prensaPrograma", function() {
       genMenu("#panel-19")
    })
    $(document).on("pageshow","#prensaReserve", function() {
       genMenu("#panel-20")
    })
    $(document).on("pageshow","#prensaUbicacion", function() {
       genMenu("#panel-21");
        startMap('prensaMapa');
    })

    $(document).on("pageshow","#mediaFotos", function() {
       genMenu("#panel-22")
       startGal();
    })
    $(document).on("pageshow","#mediaVideos", function() {
       genMenu("#panel-23")
    })
   
     $(document).on("pageshow","#redes", function() {
       genMenu("#panel-24")
    })

    $(document).on("pageshow","#contacto", function() {
       genMenu("#panel-25")
    })

    






    genMenu("#panel-01")
    $('#contentMain').click(function(){
      $( "#panel-01" ).panel( "open" );
    })
}


function startGal(){
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
                  { src: 'galeria/expoINA2014_001.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_021.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_033.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_043.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_064.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_070.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_072.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_074.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_076.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_077.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_080.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_088.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_093.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_096.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_101.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_105.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_111.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_105.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_111.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_114.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_115.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_118.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_119.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_132.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_133.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_142.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_143.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_144.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_146.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_159.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_163.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_185.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_195.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_218.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_263.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_310.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_314.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_317.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_323.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_337.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_342.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_363.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_389.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_390.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_405.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_426.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_474.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_545.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_604.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_743.jpg', w: 600,h: 400},
                  { src: 'galeria/expoINA2014_924.jpg', w: 400,h: 600},
                  { src: 'galeria/expoINA2014_954.jpg', w: 600,h: 400}

    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

}



function startMap(div){
   var Lat = 19.439962;
  var Lng = -99.2241249;
  var LatLng = new google.maps.LatLng(Lat,Lng)

  var mapOptions = {
    center : LatLng,
    zoom : 16,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById(div),mapOptions);

 var mapwidth = $(window).width();
        var mapheight = $(window).height()- 300;
        $("#" + div).height(mapheight);
        google.maps.event.trigger(map, 'resize');

         var marker = new google.maps.Marker({
        position: LatLng,
        map: map
    });

}

function genZoomable(){
  myScroll = new iScroll('planoWrapper',
{ zoom:true, zoomMax: 4 });


}


function genMenu(div){

    loadTemplate(menu,{},div)
}
function menuListeners(){
 



}


function loadTemplate (objTo,rs,div){
    console.log(objTo.file)
     $.ajax({
            type: "GET",
            url: objTo.file,
            cache: false,
            dataType : "text",
            crossDomain: true,
            success: function (data) {
                objTo.template = data;
                renderTemplate(objTo,rs,div);
            },
            error : function(err){
               // alert(JSON.stringify(err));
            }
    }); 
}   
function renderTemplate(objTo,rs,div){
    var source      = objTo.template 
    var template    = Handlebars.compile(source);
    var html        = template(rs);
     $(div).html(html);
     $('.time-block').empty()  // Clear Schedule Floats
     window[objTo.templateList]();
}