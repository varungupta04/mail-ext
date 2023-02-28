// This function initializes the Gmail API client
function init() {
  const CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
  const API_KEY = 'YOUR_API_KEY_HERE';
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
  const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function() {
    console.log('Gmail API client initialized');
  }, function(error) {
    console.error('Error initializing Gmail API client', error);
  });
}

// This function fetches the user's email messages
function fetchEmails(category) {
  gapi.client.gmail.users.messages.list({
    'userId': 'me',
    'q': 'category:' + category
  }).then(function(response) {
    const messages = response.result.messages;
    console.log('Email messages:', messages);
  }, function(error) {
    console.error('Error fetching email messages', error);
  });
}

// Load the Gmail API client library
gapi.load('client', init);
