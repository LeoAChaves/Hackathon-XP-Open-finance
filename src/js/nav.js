$('nav').mouseover((e) => {
  $('.expande').addClass('active');
});

$('nav').mouseout((e) => {
  $('.expande').removeClass('active');
});

$('.toggle_icon').click((e) => {
  $('.toggle').toggleClass('open');
});
