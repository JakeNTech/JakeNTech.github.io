# jakentech.github.io
I am once again trying to make a website only this time it's powered with Hugo! So it might not be as bad as before, but i've got low expectations.

## Commands
Build for testing:
```console
$ hugo server -D --disableFastRender
$ hugo server -D --disableFastRender --bind 192.168.0.2 --baseURL http://192.168.0.2:1313/
```

To build site:
```console
$ hugo -d ./docs --disableKinds=taxonomyTerm
```

To remove metadata from All image files:
```console
$ exiftool -overwrite_original -recurse -all= *
```

## To do:
-   Implement a dark mode -> Done, it will probably need some adjusting over time
-   Get Good