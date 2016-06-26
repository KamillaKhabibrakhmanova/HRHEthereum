$(document).ready(function() {

  $("button.set").click(function() {
    var value = $("input.text").val();
    var valz = MeshWall.sendMessage(value);
    console.log('send new message to blockchain', valz);
  });

  $("button.get-all").click(function() {
    var messages = MeshWall.getMessages();
    console.log('messages', messages);
    var messageStrings = messages.map(function(message){
      var messageString = web3.toAscii(message);
      return '<p>' + messageString + '</p>';
    });
    $("#results").html(messageStrings.reverse().join(''));
    console.log('messages return', messageStrings);
  });

});
