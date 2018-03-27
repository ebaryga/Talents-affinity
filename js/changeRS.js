function changerRS() {
  if($("#section0").hasClass("active"))
  {
    $('.fa-facebook').css('color', '#14213D');
    $('.fa-twitter').css('color', '#14213D');
    $('.fa-linkedin').css('color', '#14213D');
    $('#sticky-nav li a').css('color', '#14213D');
  }
  else{
    $('.fa-facebook').css('color', 'white');
    $('.fa-twitter').css('color', 'white');
    $('.fa-linkedin').css('color', 'white');
    $('#sticky-nav li a').css('color', 'white');
  }
}
changerRS();