$(document).ready(function() {
// 	$('div').each((index, item) => {
// 	  $(item).attr('tabIndex', '0');
//   });
//
// 	$('div').focus(function(e) {
// 	  e.stopPropagation();
// 	  $(this).attr('contentEditable', true);
//   });
//
//   $('div').blur(function(e) {
//     e.stopPropagation();
//     $(this).attr('contentEditable', false);
//   });

  let s = '';

  $('.skills > .section-content.pins > div').each((index, item) => {
    s+=$(item).text()+', ';
  });

  s = s.slice(0, -2);

  console.log(s);

});
