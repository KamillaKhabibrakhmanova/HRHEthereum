$(document).ready(function() {

  $("button.set").click(function() {
    var value = $("input.text").val();
    MeshWall.sendMessage(value);
  });

  $("button.get").click(function() {
    var value = MeshWall.getMessage();
    console.log('value', web3.toAscii(value));
    $(".value").html(value);
  });

});
