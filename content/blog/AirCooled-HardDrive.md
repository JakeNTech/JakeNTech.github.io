---
title: "Air Cooled Hard Drive"
date: 2022-02-06T14:21:42
draft: false
description: "What tale does this fantastic piece of artwork have to tell us?"
artwork: "assets/img/blog_images/air_cooled_drive/nice_and_cool.png"
---
Three years ago, I took an intel stock cooler and hot glued it to an old Western Digital 80GB hard drive and created a piece of art. But what data does it hold? Well with nothing else to do it’s time to break out my Forensics VM and USB Write Blocker and have a snoop around.

Just from what I can remember this drive was at some point used as a boot drive in our Family PC and a PC I used to mess about when trying to use various old IDE drives and random PCI cards. The drive was already installed in the system when it was passed down to me. It was a Novatech pre-built with 2GB DDR2 and an Intel Celeron D 347 if I can recall correctly. It wasn’t an amazing machine but did the job perfectly. I believe at some point this drive was used to experiment with making a Hackintosh, but as I recall because I got it to work I immediately moved that over to my main SSD instead of using Windows.

To kick off the investigation, I connected the drive to a USB write blocker (Courtesy of SANS and Cyber Discovery) and connected it to a Windows 8.1 Virtual machine, I’m odd and really like Windows 8.1. Viewing the drive using FTK Imager shows us, in the hex view, that the drive still contains data. Although the file pane and Windows Explorer shows no files on the drive; Aside from a deleted `desktop.ini` file that’s in the recycle bin directory.

<figure>
  <img src="/assets/img/blog_images/air_cooled_drive/FTK.png">
  <figcaption>Left: Drive mounted in FTK Imager Right: File Explorer showing the drive</figcaption>
</figure>

I must have formatted the drive the last time I used it. Fortunately, for this experiment anyway, the drive is not Zeroed. Meaning the drive still holds data.

As such we can recover files from this drive. To do this we can use a tool called PhotoRec, there are other options, but they are more geared towards people who just want to recover a particular file such as Recuva from Piriform. The drive is scanned for [file headers](https://en.wikipedia.org/wiki/List_of_file_signatures). Be prepared for a long wait while file carving:

<figure>
  <img src="/assets/img/blog_images/air_cooled_drive/PhotoRec.png">
  <figcaption>PhotoRec go brrr!</figcaption>
</figure>

In PhotoRec I’ve turned off carving for EXE files. This saves a bit of space on the drive we are writing the recovered files to but for this experiment having all the EXE’s won’t be any use, although if you wanted to you could get a program to calculate the hash for each pulled file and run it against VirusTotal, A project for another time I think. 

A few hours later and the process is complete. We now have a directory containing all the recovered files. To make looking through them easier there is a [PowerShell script](https://github.com/lconte/Copy-PhotoRecFilesbyExtension.ps1) that can sort based on the extension.  

<figure>
  <img src="/assets/img/blog_images/air_cooled_drive/Sorted_properties.png">
  <figcaption>File Explorer Properties of recovered and sorted files</figcaption>
</figure>

Some more time later and this process is done, and we have 24GB worth of files to look through (94,082 files in total). The place I am going to start is with SQLite files; In chromium-based browsers, these are used to store data including History, Cookies and AutoFill. They are also used within Mac OS X for various programs and system apps. To open them I am going to use [DB Browser]( https://sqlitebrowser.org/). The first file open appears to be related to Apple Whitelisting, strange but an interesting read, mostly seems to be BLOB/HEX data. 

The second file appears to be Chrome Cookies, judging by some of the entries in this file I’m assuming it was from when the machine was being used as our Family PC. The third file is the most interesting, however, Autofill for Chrome. I think this could be one from a user profile of mine, The Italian Job seems to make several appearances.
<figure>
  <img src="/assets/img/blog_images/air_cooled_drive/First_Three.png">
  <figcaption>Top to Bottom: Apple Whitelist DB, Chrome Cookies, ChromeAuto fill</figcaption>
</figure>

I kept digging through the SQLite files hoping to find a history file; While trying to do this I found a fair few relating to Adobe CS5, something I did have installed for a GCSE course. Apple SMB/Plist databases, A bit confusing to be honest. Databases containing [HKLM](https://www.bleepingcomputer.com/glossary/hkey-local-machine/) Windows Registry values.

But then we hit gold, a Chrome History file for me. It looks like this is also from when the machine was used as a family machine, it features a lot of URL’s I would have visited for printing off schoolwork. It also contains URL’s for various Sixth forms in our area, suggesting that this file is from 2017/2018. I can also see the URL for a MacBook I later bought (A1181 for those who are still reading &#128521; ) Soon another history file was found, although this time it appeared to be another user of the machine when it was a family PC.

Eventually, it got to the point where the files were either blank or broken, and we had successfully identified 18 SQLite files that contained data from varying users over a long period. This is down from 207 files. Other files found included those relating to the time I made a Hackintosh, such as Apple Quarantine stores and what appeared to be information relating to SMB but for a Mac.

<figure>
  <img src="/assets/img/blog_images/air_cooled_drive/all_files.png">
  <figcaption>All Identified SQLIte files</figcaption>
</figure>

The process for identifying these files was super high tech, just opening them and having a look at what’s in them. Another project idea I now have is writing a script to try to do the identification for me. Interesting idea.

Media files were picked out too; All but one of the recovered MP4 files are for the OS X mouse/trackpad gestures, the other video was a half-hour recording of Portal 2. No commentary or face cam, just me playing Portal 2. Audio files seemed to be sound effects to GTA San Andreas and generic bing bong noises from either Windows or Mac OS X. 

Office documents were predominantly just Microsoft templates, but there was a document containing quotes from “An Inspector Calls”, I passed so it must have helped with my revision:

<figure>
  <img src="/assets/img/blog_images/air_cooled_drive/revision_attempt.png">
  <figcaption>Spellings? I don't think so!</figcaption>
</figure>
Now here comes the fun section, REG files. I love these files; they not only give some insight to the user of the machine but also information about the machine along with some of the devices that had been connected to the machine. We have 412 files to look through, my technique is to sort by the largest file and then just try opening them in [Eric Zimmerman’s Registry explorer](https://zimmerman.github.io/#!index.md) and to see what I can find. 
Straight away I managed to open the SYSTEM file, which contains the key and value:
```
ControlSet001\Control\ComputerName\ComputerName : “JAKE-PC”
```
Repeating the process of opening files, renaming them, or deleting them we are left with 46 files left to look at. There were some I couldn’t identify, possibly transaction logs or partial backups, a few that appeared to be application-specific and ones that just couldn’t be opened by Registry Explorer. 

<figure>
  <img src="/assets/img/blog_images/air_cooled_drive/reg_files.png">
  <figcaption>All Identified Registry files</figcaption>
</figure>

I also found several SAM files, some from when the machine was used as our family machine and others from when I was using the machine to “experiment” with. The first SAM file is shown to be 2.5MB. Using [Registry Explorer](https://zimmerman.github.io/#!index.md) I can see that this is from when the drive was in our family machine, with three user accounts and the standard “Administrator” and “Guest” accounts. My account is reported to have been created on “28-10-2016 14:53” and last logged into on “22-07-2017 07:23:43”.

 <figure>
  <img src="/assets/img/blog_images/air_cooled_drive/the_biggest_sam.png">
  <figcaption>All Identified SQLite files</figcaption>
</figure>

A few files containing nothing but key: value pairs of `test: test` which was rather strange, as each file seemed to be a different size, I wonder if there is more to these files than meets the eye. But we had managed to pull files from the drive from two different installs of windows with plenty of information to look through. 
One of the SOFTWARE files shows that Macrium Reflect was on the RUN key, with the last registry write being made back in 2017. Based on the dates from the SAM file, this was one of the last times this drive was used in this machine. I used Macruim reflect to clone the Windows drive to an Intel 40GB SSD. 
The next set of files to look at are the Prefetch files. And these are also very cool, [Eric Zimmerman](https://zimmerman.github.io/#!index.md) has some amazing tools that can parse these files to give us all the information we need. The idea behind these files is it helps to speed up the launch of an Application, but from a forensics standpoint, it contains a few dates of the last times the applications were run along with the number of times they were run. Cool right?
File names are pulled for these files, along with the addition added by PhotoRec, and a quick scroll through shows mainly system files. As such, based on the file names, I have separated the ones that would be indicative of user activity to have a browse through. To parse these files the below command is used:
```
'C:\Forensic Tools\CMD_TOOLS\PECmd.exe' -d "D:\air_cooled_drive\sorted\.pf\of_interest" --csv "D:\" --csvf output.csv
``` 
We then have a CSV file that we can look at.  Some report Parsing Errors, this is to be expected when running against files that we have carved. 

Looking at the CSV we can see that most files appear to be from 2017 with the most recent application being run on “15/07/2017 12:58:11”. The most run application is “IEXPLORE.EXE”, Microsoft Internet Explorer.

<figure>
  <img src="/assets/img/blog_images/air_cooled_drive/pre-fetch.png">
  <figcaption>The output.CSV makes it much easier to read.</figcaption>
</figure>

Finally, DAT files are another interesting place to look. Internet Explorer stores Internet History using DAT files, a test we can conduct with my Windows 8.1 VM. However, trying to open the DAT files in [ESEDatabaseView from Nirsoft](https://www.nirsoft.net/utils/ese_database_view.html) and they fail to open. Opening them with a Hex viewer shows that they are system files, but they appear to be related to Control Panel. One file did show “URL Cache” towards the start of the file, although the file was blank after this. The final file didn’t give too much insight as to what it contained either but it didn’t appear to contain user activity.

This old Western Digital Hard Drive with an Intel Cooler plonked on the top has a tale to tell about what it has been up to, and there are so many files that didn’t even get a look in here! While perhaps we didn’t get some really interesting files but we still got more than enough. It’s a scary thought how easy this was to pull off too; It makes you wonder how many people sell laptops, PC’s, and hard drives without a thought about the data that was once on the drive. Just because you have formatted the drive the data remains. Perhaps another post for another time? A chance to make more spelling mistakes! YAY! 
