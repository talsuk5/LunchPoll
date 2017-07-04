function Main() {
  
  if(todayIsAHoliday())
  {
    return;
  }
  
  var form = createLunchForm();
  var url = form.getPublishedUrl();
   
  sendFormEmail(url);
  
  sendToSlack("Let`s get ready to rumble!", url);
  sendToSlack("Check out the results here:", DriveApp.getFileById(form.getDestinationId()).getUrl());
}
