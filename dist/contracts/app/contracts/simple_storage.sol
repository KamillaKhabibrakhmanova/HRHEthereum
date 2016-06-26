contract MeshWall {

    // struct Message {
    //     address etherAddress;
    //     uint timestamp;
    //     string message;
    // }

    address public owner;

    // Category of this wall:
    string public category;

    // Message storage:
    string[] public messages;
    uint public messageCount;

    // Events:
    event newMessage(uint indexed messageId);

    // Public decentralized message board with donations and pay-to-promote
    // function EtheriumWall(string newCategory) {
    //     category = newCategory;
    //     owner = msg.sender;
    // }

    // function() {
    //     // Catcher function, we'll presume that this kind user is donating if they have
    //     // sent Ether:
    //     if(msg.value == 0) throw;

    //     sendMessage("_I donated!_");
    // }

    function sendMessage(string message) {
        messageCount ++;

        messages.push(message);

        // Fire event
        newMessage(messageCount);
    }

    //always returns 0 or 1
    function getMessageLength() constant returns (uint) {
        messageCount ++;
        return messageCount ;
    }

    //doesn't work
    function getMessages() returns (bytes32[] messages) {
        return messages;
    }

    function getMessage() returns (string) {
        return messages[0];
    }

    // Only the owner of the site can do certain things
    modifier admin { if (msg.sender == owner) _ }

    // Lets the owner withdraw their precious money
    function collectDonations(uint amount, address recipient) admin {
        if(!recipient.send(amount)) throw;
    }

    // Allows the current owner to transfer it to someone new
    function transferOwnership(address newOwner) admin {
        owner = newOwner;
    }
}
