function scanFiles(system)
{
for(let key in system)
{
  if(typeof(key)==Object)
  {
    return scanFiles(key);
  }
  else{
    console.log(system[key])
  }
}
}

let fileSystem={
  folder1 : {file1:"txt", file2:"jpg"},
  folder2 : {subfolder: {file3:"pdf"}},
  folder3 : "mp3"
};

scanFiles(fileSystem);