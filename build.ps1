#Requires -Version 7.0

$ToConvert = Get-ChildItem .\recommendation\*.jpg -Recurse

#Select-String -Path .\*.html, .\recommendation\*.html -Pattern "\.jpg", "\.png"

#$audioFiles = Get-ChildItem * -Recurse -Include *.mp3,*.wav,*.ogg -Exclude "*_0gb*"

#$audioFiles

#$ArgumentList = '-i "{0}" -c:v libwebp "{1}"' -f $_.FullName, $_.FullName.Replace("jpg","webp");
#Start-Process ffmpeg -ArgumentList $ArgumentList -Wait -NoNewWindow
#Select-String -Path *.html -Pattern $_.Name
#$_.Length - (Get-Item -Path $_.FullName.Replace("jpg","webp")).Length
$ToConvert | ForEach-Object {
     $ArgumentList = '-i "{0}" -c:v libwebp -vf scale=250:250 -pix_fmt yuva420p -lossless 0 -quality 80 "{1}"' -f $_.FullName, $_.FullName.Replace("jpg","webp");
     Start-Process ffmpeg -ArgumentList $ArgumentList -Wait -NoNewWindow
}