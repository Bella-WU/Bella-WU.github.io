$('nav span').hover(function(){
  console.log($(this).css('color'))
  if($(this).css('color') == 'rgb(0, 0, 255)') {
    $(this).css('color', 'pink')
  } else {
    $(this).css('color', 'blue')
  }
  /*console.log($(this).text()*/
})