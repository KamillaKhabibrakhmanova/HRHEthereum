$(document).ready(function() {

  $("button.set").click(function() {
    var value = $("input.text").val();
    MeshWall.sendMessage(value);
  });

  $("button.get-one").click(function() {
    var value = MeshWall.getMessages();
    console.log('messages value',web3.toAscii(value[0]));
    $(".value").html(value);
  });

  $("button.get-all").click(function() {
    var messages = MeshWall.getMessages();
    console.log('messages', messages)
    var value = messages.map(function(message){
      return web3.toAscii(message);
    });
    console.log('messages value',web3.toAscii(value[0]));
    $(".value").html(value.join(', \n'));
  });

});
