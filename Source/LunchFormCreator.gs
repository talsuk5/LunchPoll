function createLunchForm() {   
  var now = new Date();
  
  clearOutputFolder(); 
  
  var formId = PropertiesService.getScriptProperties().getProperty('LUNCH_FORM_ID')
  var form = FormApp.openById(formId);  
  var ss = SpreadsheetApp.create('Lunch Survey Results'); 
  moveToFolder(ss.getId());    
   
  DriveApp.getFileById(ss.getId()).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  
  form.setDescription(Utilities.formatDate(now, 'Etc/GMT+3', 'dd-MM-yyyy'))
  .setConfirmationMessage("Follow this link for results:\n" + ss.getUrl())
  .deleteAllResponses();
 
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
 
  return form;
}

function clearOutputFolder() {    
  var outputFolderId = PropertiesService.getScriptProperties().getProperty('OUTPUT_FOLDER_ID')
  var folder = DriveApp.getFolderById(outputFolderId);
  
  var files =  folder.getFiles(); 
  
  while (files.hasNext()) {
    var file = files.next();
    file.setTrashed(true);
 }

}

function moveToFolder(id) {  
  file = DriveApp.getFileById(id);
  var outputFolderId = PropertiesService.getScriptProperties().getProperty('OUTPUT_FOLDER_ID')
  DriveApp.getFolderById(outputFolderId).addFile(file);
  
  DriveApp.getRootFolder().removeFile(file);   
  
  var lunchFolderId = PropertiesService.getScriptProperties().getProperty('LUNCH_FOLDER_ID')
  DriveApp.getFolderById(lunchFolderId).removeFile(file);
}
