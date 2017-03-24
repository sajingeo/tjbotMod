// User-specific configuration
exports.voice = 'en-US_MichaelVoice';
exports.conversationWorkspaceId = 'xxxxxxxxxxxxxxx'; // replace with the workspace identifier of your conversation

// Create the credentials object for export
exports.credentials = {};

// Watson Conversation
// https://www.ibm.com/watson/developercloud/conversation.html
exports.credentials.conversation = {
    password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    username: 'xxxxxxxxxxx'
};

// Watson Speech to Text
// https://www.ibm.com/watson/developercloud/speech-to-text.html
exports.credentials.speech_to_text = {
    password: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    username: 'xxxx'
};

// Watson Text to Speech
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.text_to_speech = {
    password: 'oE3T8Jj7kE3m',
    username: 'b44d7a00-57ab-46d6-a154-0e043acba318'
};

// Watson Vision Recognition
// https://www.ibm.com/watson/developercloud/text-to-speech.html
//exports.credentials.visual_recognition = {
//    key: '',
//    version: '2016-05-19'
//}

// Watson Tone Analyzer
// https://www.ibm.com/watson/developercloud/tone-analyzer.html
//exports.credentials.tone_analyzer = {
//    password: '',
//    username: ''
//};

// Twitter
//exports.credentials.twitter = {
//    consumer_key: '',
//    consumer_secret: '',
//    access_token_key: '',
//    access_token_secret: ''
//};
//
//exports.sentiment_keyword = "christmas";
