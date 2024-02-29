document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('sendButton');
    const recipientInput = document.getElementById('recipient');

    sendButton.addEventListener('click', function () {
        const recipient = recipientInput.value;
        if (recipient) {
            sendBulkEmail(recipient);
        } else {
            alert('Please enter a recipient.');
        }
    });

    function sendBulkEmail(recipient) {
        // Implement the logic to send bulk emails using the Gmail API
        // You would integrate with the Gmail API here
         console.log(`Sending email to ${recipient}`);
    }
});
