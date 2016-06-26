$(document).ready(function() {

  $("button.set").click(function() {
    var value = $("input.text").val();
    MeshWall.sendMessage(value);
    console.log('send new message to blockchain', val);
  });

  $("button.get-all").click(function() {
    var messages = MeshWall.getMessages();
    console.log('messages', messages)
    var messageStrings = messages.map(function(message){
      return web3.toAscii(message);
    });
    console.log('messages return', messageStrings);
    $(".value").html(value.join(', \n'));
  });

});
