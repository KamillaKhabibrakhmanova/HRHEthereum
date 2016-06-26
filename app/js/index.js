$(document).ready(function() {

  $("button.set").click(function() {
    var value = $("input.text").val();
    MeshWall.sendMessage(value);
  });

  $("button.get").click(function() {
    var value = MeshWall.getMessageLength().toNumber();
    console.log('value', value);
    $(".value").html(value);
  });

});
