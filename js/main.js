
var width = $('.images li').width();
    var step = 1;
    var carousel = $('.carousel');
    var container = $('.images');
    var Elem = $('.images li');
    var margin = 0;

    $('.prev').click(function(){
      margin = Math.min(margin + width * step, 0);
      container.css({'margin-left': margin}) ;
    });
    $('.next').click(function(){
      margin = Math.max(margin - width * step, -width * (Elem.length - step*2));
      container.css({'margin-left': margin}) ;
    });
    
    
    
    var width2 = $('.images2 li').width();
    var step2 = 1;
    var carousel2 = $('.carousel2');
    var container2 = $('.images2');
    var Elem2 = $('.images2 li');
    var margin2 = 0;

    $('.prev2').click(function(){
      margin2 = Math.min(margin2 + width2 * step2, 0);
      container2.css({'margin-left': margin2}) ;
    });
    $('.next2').click(function(){
      margin2 = Math.max(margin2 - width2 * step2, -width2 * (Elem2.length - step2*4));
      container2.css({'margin-left': margin2});
    });
    
    
    
    
    $(function() {
    var connector = function(itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };
    $(function() {
        var carouselStage      = $('.carousel-stageSlider').jcarousel();
        var carouselNavigation = $('.carousel-navigationSlider').jcarousel();

        carouselNavigation.jcarousel('items').each(function() {
            var item = $(this);
            var target = connector(item, carouselStage);

            $('.slider .carousel-stageSlider')
                .jcarousel({
            interval: 10,
            wrap: 'both'
                })
                .jcarouselAutoscroll({
                    interval: 5000,
                    target: '+=1',
                    autostart: true
                });
            item
                .on('jcarouselcontrol:active', function() {
                    item.addClass('active');
                })
                .on('jcarouselcontrol:inactive', function() {
                    item.removeClass('active');
                })
                .jcarouselControl({
                    target: target,
                    carousel: carouselStage
                });
        });

        $('.prev-stageSlider').jcarouselControl({
                target: '-=1'
            });

        $('.next-stageSlider').jcarouselControl({
                target: '+=1'
            });      
    });
});