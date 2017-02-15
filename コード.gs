GoogleDrive={};
GoogleDrive.getFiles = function(folder){
  if(folder == null)
    folder = DriveApp.getRootFolder();
  var files = [];
  it = folder.getFiles();
  while(it.hasNext()){
    var file = it.next();
    if(!file.isTrashed()) //ゴミ箱無視
      files.push(file);
  }
  return files;
};
GoogleDrive.getFolders = function(folder){
  if(folder == null)
    folder = DriveApp.getRootFolder();
  var files = [];
  it = folder.getFolders();
  while(it.hasNext()){
    var file = it.next();
    if(!file.isTrashed()) //ゴミ箱無視
      files.push(file);
  }
  return files;
};
GoogleDrive.getFileByName = function(folder,name){
  //データが足りなかった場合の処理
  if(name == null){
    name = folder;
    folder = null;
  }
  if(folder == null)
    folder = DriveApp.getRootFolder();
  var it = folder.getFilesByName(name);
  if(it.hasNext()){
    var n = it.next();
    if(!n.isTrashed())
      return n;
  }
  return null;
};
GoogleDrive.getFolderByName = function(folder,name){
  //データが足りなかった場合の処理
  if(name == null){
    name = folder;
    folder = null;
  }

  if(folder == null)
    folder = DriveApp.getRootFolder();
  var it = folder.getFoldersByName(name);
  if(it.hasNext()){
    var n = it.next();
    if(!n.isTrashed())
      return n;
  }
  return null;
};
GoogleDrive.getFileByPath = function(folder,path){
  //データが足りなかった場合の処理
  if(path == null){
    path = folder;
    folder = null;
  }

  if(folder == null)
    folder = DriveApp.getRootFolder();

  //フォルダ名を分解
  var names = path.split("/");
  for(var index in names){
    var name = names[index];
    if(name == "")
      continue;
    if(index == names.length -1)
      return GoogleDrive.getFileByName(folder,name);
    else
      folder = GoogleDrive.getFolderByName(folder,name);
    if(folder == null)
      break;
  }
  return null;
};

GoogleDrive.createFolder = function(folder,path){
  //データが足りなかった場合の処理
  if(path == null){
    path = folder;
    folder = null;
  }

  if(folder == null)
    folder = DriveApp.getRootFolder();

  //フォルダ名を分解
  var names = path.split("/");
  for(var index in names){
    var name = names[index];
    if(name == "")
      continue;
    folder2 = GoogleDrive.getFolderByName(folder,name);
    if(folder2 == null)
      folder = folder.createFolder(name);
    else
      folder = folder2;
    if(folder == null)
      break;
  }
  return folder;
};

function Main(){

  Logger.log(GoogleDrive.createFolder("/Test000/Test002/abcd"));
}