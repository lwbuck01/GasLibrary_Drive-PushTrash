GoogleDrive.getRootFiles = function(){
  var folder = DriveApp.getRootFolder();
  var it = folder.getFiles();
  var files = [];
  while(it.hasNext()){
      var file = it.next();
      if(!file.isTrashed()) //ゴミ箱無視
        files.push();
  }
  return files;
}
GoogleDrive.getFiles = function(path){
  if(path == null){
    var folder = DriveApp.getFiles();
      var it = folder.getFiles();
      var files = [];
      while(it.hasNext()){
          var file = it.next();
          if(!file.isTrashed()) //ゴミ箱無視
            files.push();
      }
      return files;
  }
  
}


function Main(){
}