function sendToSlack(message, url) {
  var POST_URL = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');
  
  var payload =
      { "payload": '{"text": "' + message + '\n<' + url + '>"}' }
  
  var options =
      {
        "method" : "post",
        "payload" : payload        
      };
  
  Logger.log(payload);
  UrlFetchApp.fetch(POST_URL, options);
}
