$(document).ready(function(){



  $('.hsob').click(function() {

    let forThis = $(this).attr('for');



    $('.home-tabs > .tab').removeClass('active')

    $('.home-tabs > #'+forThis+'.tab').addClass('active');



    $('.hsob').removeClass('active');

    $(this).addClass('active');



  });



  $('.slider-btn').click(function() {

    let forThis = $(this).attr('for');



    $('.slider-content > .slider-tab').removeClass('active')

    $('.slider-content > #'+forThis+'.slider-tab').addClass('active');



    $('.slider-btn').removeClass('active');

    $(this).addClass('active');



  });



})



function homeMenuToggle() {

  $('.head-menu').slideToggle(200);

}



function dashMenuToggle() {

  $('.app-container').toggleClass('sidebar-action');

}



$(function () {

  $('[data-toggle="tooltip"]').tooltip();



  if($("#dc-body").length) {

      $("#dc2-body").height($("#dc-body").height());

  }

})



$('.home-ss-tab').click(function(){

  if($(this).hasClass('active')){

      $(this).find('.ss-tab-content').slideToggle(200);

      $(this).toggleClass('active');

  }else {

      $('.home-ss-tab').removeClass('active');

      $('.home-ss-tab > .ss-tab-content').slideUp(200);

      $(this).find('.ss-tab-content').slideToggle(200);

      $(this).toggleClass('active');

  }

});



$("#searchServices").on("keyup", function() {

  var value = $(this).val().toLowerCase();

  $("#servicesTable tr").filter(function() {

    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

  });

});

