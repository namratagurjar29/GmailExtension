
function signIn(){
    let oauth2EndPints="https://accounts.google.com/o/oauth2/auth"

    let form =document.createElement('form');
    form.setAttribute('method','GET');
    form.setAttribute('action',oauth2EndPints);

    let params={
        "client_id":"269520431952-4j62sqmrhgg56dv0mf8nia7b2htjj48a.apps.googleusercontent.com",
        "redirect_uri":"http://localhost:5500/GmailExtension/",
        "response_type":"token",
        "scope":"https://www.googleapis.com/oauth2/v1/certs",
    }
}
    // Function to send emails using Gmail API
    function sendEmailUsingGmailAPI(message) {
        // Replace this with your actual code to send emails using Gmail API
        // Example:
        return fetch('https://accounts.google.com/o/oauth2/auth', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ${accessToken}',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                raw: base64EncodedEmail(message)
            })
        })
        .then(response => response.json());
    }

    // Function to encode email message to base64 (required by Gmail API)
    function base64EncodedEmail(message) {
        // Convert the message to RFC 2822 formatted string
        const rfc2822Message = To: ${message.to}\r\n +
                               Subject: ${message.subject}\r\n\r\n +
                               ${message.body};
        
        // Convert the RFC 2822 message to base64
        const encodedMessage = btoa(rfc2822Message);

        return encodedMessage;
    };


