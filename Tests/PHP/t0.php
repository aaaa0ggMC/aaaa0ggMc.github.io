$rdFile = "t0.txt"
$myFile = fopen($rdFile,"r") or Die("Unable to open test File");
echo fread($myFile,filesize($rdFile));
fclose($myFile);
