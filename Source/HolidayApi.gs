function todayIsAHoliday() {
  var now = new Date();
  
  if(now.getDay() == 5 || now.getDay() == 6) {
    return true;
  }
  
  var month = now.getMonth();  
  var year = now.getFullYear();
  
  var url = Utilities.formatString("https://www.kayaposoft.com/enrico/json/v1.0/?action=getPublicHolidaysForMonth&month=%d&year=%d&country=isr", month+1, year);
  
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());  
  
  for (i in data)
  {    
    if(verifyIfHoliday(data[i].date) == true)
    {
      return true;
    }    
  }
  
  return false;
}

function verifyIfHoliday(date) {
  var now = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  var holiday = new Date(date.year, date.month - 1, date.day);
  var holidayEve = new Date(now);
  holidayEve.setDate(holiday.getDate() - 1);
  
  Logger.log(now);
  Logger.log(holiday);
  Logger.log(holidayEve);
  
  return holiday.getTime() === now.getTime() || holidayEve.getTime() === now.getTime(); 
}
  