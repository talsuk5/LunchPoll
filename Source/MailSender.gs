function sendFormEmail(htmlMessage) {  
  
  var bccEmailAddress = PropertiesService.getScriptProperties().getProperty('EMAIL_RECIPIENTS');
  Logger.log(bccEmailAddress);

  var subject = "Let's get ready to Lunch!";
  
  MailApp.sendEmail("", subject, "", {
    htmlBody: "Go and pick your lunch venue here:<br>" + htmlMessage + "<br><br>Bon Appétit!",
    bcc: bccEmailAddress
  });
}

