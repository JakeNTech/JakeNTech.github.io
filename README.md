# jakentech.github.io
I've tried to make a website using HugoSites!

## Commands
Build for testing:
```console
$ ./hugo/hugo server -D --disableFastRender
$ hugo server -D --disableFastRender --bind 192.168.0.11 --baseURL http://192.168.0.11:1313/
```

To build site:
```console
$ rm -r ./docs
$ hugo -d ./docs --disableKinds=taxonomyTerm
```

To remove metadata from All image files:
```console
$ exiftool -overwrite_original -recurse -all= *
```