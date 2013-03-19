# Fake Email Generator for Node.js

Generate some fake email addresses based on potentially real data.

The API is pretty straight-forward: you pass it a name and it returns a fake email address.

    var fakeEmail = require('fake-email'),
        name = "Steve Kinney";
        
    fakeEmail(name); // returns 'steve-kinney@mailinator.com'
    fakeEmail(name); // returns 'kinney_steve@spamgourmet.com'
    fakeEmail(name); // returns 'sk34@incognitomail.com'
