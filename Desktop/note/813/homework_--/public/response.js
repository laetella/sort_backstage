
$('thead').on('click', 'th', function() {
  var sortKey = $(this).data('name');
  var sortType = $(this).data('flag');

  $.get('/scores', {sortKey : sortKey, sortType : sortType}, function (resp) {
    updateData(resp);
  });

  if(sortType === 'true') {
    $(this).data('flag','false');
  } else {
    $(this).data('flag','true');
  }
});
function updateData(result) {
  $('tbody').empty();
  result.forEach(function(index) {
    $('tbody').append("<tr>" +
      "<td>" + index.name + "</td>" +
      "<td>" + index.Chinese + "</td>" +
      "<td>" + index.math + "</td>" +
      "<td>" + index.English + "</td>" +
      +"</tr>");
  });
}
