---
title: "The lost macOS Time Machine drive"
date: 2022-06-06T11:44:00
draft: false
description: "This is what happens when you get side tracked when working on another project."
artwork: "assets/img/blog_images/Mac_OS_TimeMachine/timemachine_apple.png"
---
For the last few months, I have been working on a selection of scripts to make going through carved files even easier, [you can find the code here](https://github.com/JakeNTech/post_file_carve). The process of testing these scripts was to carve files from my stash of drives, run the code and fix any errors and move on to the next drive. 

Then I found it, not only a drive I haven’t seen since 2019 but one I thought had died. My HGST 5k-1000-1000 (I have no idea either) but sharpied onto the drive is “Time Machine NEW”. I used to use this drive as a Time Machine for my MacBook. I honestly thought it died one evening while backing up, amazing that it even span up considering it's been sat in a draw of junk electronics for the last so many years.

Best mount drive and see what we can find!

## Mounting the Drive
To look at the contents we have three options:

- Use FTK Imager to extract the files to a FAT/NTFS formatted disk and use a Windows VM to poke at the files
- Mount the Drive to a Linux VM and make it work
- Use macOS

I ruled Windows out as I don’t know how much data is on this drive and don’t want to have to wait the rest of my life for the files to be copied out. I don't want to use my MacBook as it will still think this is a time machine drive and may start deleting the older backups. As it’s been a while since I’ve used my Linux VM I will give this a go, time to show it some love!

I was expecting a bit of a headache trying to get the drive to mount, the only way I know to get an Apple formatted drive to work on Windows is either FTK or paid software. Connecting it to my XUbuntu VM and it just mounted like a normal drive. Thankfully it's HSF+ formatted rather than the new APFS. It’s also unencrypted, which would have added a few extra steps to accessing the drive (Although defeats the object of having the MacBook encrypted). There are backups ranging from November 2018 through to Match 2019.

<figure>
  <img src="/assets/img/blog_images/Mac_OS_TimeMachine/Backups.png">
  <figcaption>A list of all the backups stored on this drive</figcaption>
</figure>

Let's get digging for files!

## System Version
The best place to start would be to find out what OS we are working with; We need to find the “SystemVersion.plist”. The forensics Wiki states that we should find this at “/System/Libary/CoreServices/SystemVersion.plist”. It’s not long before we encounter our first issue.

File permissions are very much present on this drive, and we can’t change them as the drive is read-only; The Simple workaround is to switch to the root user and then carry on.

Looking for this file draws a blank, in this backup directory anyway. In “/Private/var/db/” there is a file called “PreviousSystemVersion.plist” the name suggests that this would be the details of a previous operating system after an update/upgrade. For us, this shows 10.11.6. A quick confirmation with a Mac tells this to be True:

<figure>
  <img src="/assets/img/blog_images/Mac_OS_TimeMachine/macOS_Version.png">
  <figcaption>macOS High Sierra showing Sierra as the previous OS</figcaption>
</figure>

10.11.6 was El Capitan so we are most likely looking at either Mac OS Sierra or High Sierra. But I want a definitive answer.

A quick CatFish search for “SystemVersion.plist” later and we see this file lives in a backup from 24th January 2019, with the file path “/Time_Machine/Backups.backupdb/SiriusBlack-MacBook /2019-01-24-184042/Macintosh SSD/System/Library/CoreServices/SystemVersion.plist”. It does indeed show we are rocking macOS 10.13.6 (High Sierra). 

We can use the “PreviousSystemVersion.plist” within this backup to know what OS was being used before this date, opening the file, “/Time_Machine/Backups.backupdb/SiriusBlack-MacBook/2019-01-24-184042/Macintosh SSD/private/var/db/PreviousSystemVersion.plist”, shows that it's an XML formatted PLIST, but also that the OS before this backup was macOS 10.12.6 (Sierra).

As that seems rather messy, here is a handy table:

| Backup Date       | PreviousSystem Version | System Version|
|-------------------|------------------------|---------------|
| 2018-10-24        | 10.11.6                | N/A           |
| 2018-10-31        | 10.11.6                | N/A           |
| 2018-11-10        | 10.11.6                | N/A           |
| 2018-11-18        | 10.11.6                | N/A           |
| 2018-11-25        | 10.11.6                | N/A           |
| 2018-12-12        | 10.11.6                | N/A           |
| 2018-12-27        | 10.12.6                | N/A           |
| 2019-01-06        | 10.12.6                | N/A           |
| 2019-01-24        | 10.12.6                | 10.13.6       |
| 2019-01-30        | 10.12.6                | N/A           |
| 2019-02-06        | 10.12.6                | N/A           |
| 2019-02-21        | 10.12.6                | N/A           |
| 2019-02-27        | 10.12.6                | N/A           |
| 2019-02-28        | 10.12.6                | N/A           |
| 2019-03-02        | 10.12.6                | N/A           |
| 2019-03-03        | 10.12.6                | N/A           |
| 2019-03-05        | 10.12.6                | N/A           |
| 2019-03-06        | 10.12.6                | N/A           |
| 2019-03-10        | 10.12.6                | N/A           |
| 2019-03-12        | 10.12.6                | N/A           |
| 2019-03-13        | 10.12.6                | N/A           |
| 2019-03-14        | 10.12.6                | N/A           |
| 2019-03-18        | 10.12.6                | N/A           |
| 2019-03-21        | 10.12.6                | N/A           |

While we still can’t say for definite when we upgrade from Sierra to High Sierra it would appear to be between 6th January 2019 and 27th December 2018.

## Applications
The next interesting thing to know would be what applications are installed, that way we know what program-specific artefacts we can look for (such as Internet History). Applications are stored in “/Applications”

<figure>
  <img src="/assets/img/blog_images/Mac_OS_TimeMachine/Applications.png">
  <figcaption>Listing out all the installed applications on the first backup</figcaption>
</figure>

From memory, I don’t think I ever really installed a tonne of programs on the Mac, as that task was left to my PC/Hackintosh. We could list all the applications out from all the backups and compare them all; But honestly the applications I use a lot haven’t changed since 2017, with the likes of Chrome and Microsoft Office. 

## Internet History
I used two browsers on this Mac: Google Chrome and Safari. Chrome has been my main browser for years now, but I do try others occasionally.  

### Google Chrome
On macOS, Chrome history is stored in “/Users/<username>/Library/Application Support/Google/Chrome/Profile_<Profile_No>/History” and is an SQLite file, as standard with Chromium-based browsers. We need to find this file, using Catfish search doesn’t show any results.

I had an idea, a first for me (I can attribute this incredible feat to the Heartstopper playlist!) Let’s look at the biggest directory on the disk as that’s most likely to contain most of the files we need. A command later and the biggest backup we have is 37GB from 06-01-2019. 

<figure>
  <img src="/assets/img/blog_images/Mac_OS_TimeMachine/directory_size.png">
  <figcaption>Listing out the size of all the backups</figcaption>
</figure>

We still don’t find anything, even switching to the find command brings up nothing. In this big backup, we can see other artefacts but not the Chrome History file.

Trying Catfish and Find from the “/Backups.backupdb/SiriusBlack-MacBook/” directory also didn’t bring up any Chrome based results, it did find several Safari History files however so we can move on for the time being.

### Safari History
We found 23 History.db files while trying to find Chrome history, out of 26 backups. With the help of some Python, we can copy them all out and then remove any files that have the same hash. This should make it much easier to go through them all. 

<figure>
  <img src="/assets/img/blog_images/Mac_OS_TimeMachine/Safari_History.png">
  <figcaption>Thunar showing the extracted History.db files</figcaption>
</figure>

Safari History, much like Chromium-based browsers, uses SQLite to store its history. There was a time when this was done using PLIST files, but those days are gone! Selecting the latest History file (2019/03/2019) using DB Browser there are two tables of interest. 

“history_visits” and “history_items”. The “History_items” table contains the URL, domain, visit count and other data. “History_visits” contains when a site was visited, the title, if the load was successful, and ids for redirect links. This latest file contains 878 rows/entries on the “history_visits” table and 501 rows/entries on “history_items”. You can link these two tables together using:

{{< highlight SQL "linenos=table,linenostart=1" >}}
SELECT history_visits.id, history_visits.visit_time, history_visits.title, history_visits.load_successful, history_visits.redirect_source, history_visits.redirect_destination, history_items.url FROM history_visits LEFT JOIN history_items on history_visits.history_item = history_items.id
{{< / highlight >}}

The site I viewed the most, unsurprisingly is Google at 142 visits, with Google Drive in second place with 10 visits. Other visits and URLs relate to the duck (once again), Science coursework, day trips in different places, Cyber Discovery, and Floatplane to list a few. The internet history on here confirms that this laptop wasn’t used for anything other than Sixth-form work and when I didn’t want to sit at my desktop. 

It's a shame we didn’t manage to recover my Chrome History as this would have included history from all the devices I used and would have included a lot more data. However, this is all stored with my Google account anyway; And it really wouldn’t have been very interesting. 

## System Files
Time to think about System artefacts, in Windows we have the registry that stores information about what files and folders were most recently used etc. A glance at the list on the [Forensics Wiki](https://forensicswiki.xyz/wiki/index.php?title=Mac_OS_X_10.9_-_Artifacts_Location) there are three artefacts that I would like to find:

-	com.apple.airport.preferences.plist
-	com.apple.recentitems.plist 
-	com.apple.loginwindow.plist

These are all user-specific artefacts and may not be used on High Sierra, to try to locate any of these files we can run “find ./ -name ‘<plist_file>’” as the root user, use Catfish (also as the Root user) or build upon the Python script used for the Safari History. Why not add more code to the script we have already spent time on?  [The script I ended up using can be found here]( https://github.com/JakeNTech/python_tools/tree/main/Time_Machine_Artefact_Extractor). This removes duplicates, gives the files full permissions, and gives us a nice CSV file to look at! Good, init?

<figure>
  <img src="/assets/img/blog_images/Mac_OS_TimeMachine/Extracted_artfacts.png ">
  <figcaption>The handy CSV file we get outputted</figcaption>
</figure>

As I’ve already dealt with Safari History and the System Version earlier let’s look at some of the Airport PLISTs. 

### com.apple.airport.preferences.plist
To open this file, we can just use Firefox, as it’s not a Binary PLIST file. It makes it much nicer to look at than a command-line viewer such as bat-cat or even plistutil.

SSID Names are stored as both Base64 and as a decoded string. The key name for the decoded string is “SSIDString”, nice and logical. Details about the network are stored; including when they were last connected, Channels used by that network and the Security that the network used. In the biggest file I had 9 networks:

- HomeWifi_5G
  - Last Connected Date: 2019-03-21T16:13:46Z
  - Notes: Home Wi-Fi Connection 
- SpringfieldsWifi
  - Last Connected Date: 2019-01-26T10:32:33Z
  - SecurityType: Open
  - Notes: Shopping Center where I once tried to work on my self-Driving duck from Costa while the family was shopping.
- Straight outta WAP
  - Lat Connected Date: 2019-03-19T14:04:37Z
  - Notes: Mobile Hotspot so I could use my laptop in Sixth-form. I found the name on Reddit.
- The gates cause bad signal
  - Last Connected Date: 2019-03-20T09:04:08Z
  - Notes: Mobile Hotspot with a different name, it was a joke in our social circle.
- _The Cloud
  - Last Connected Date: 2019-02-23T09:48:06Z
  - Notes: Anyone who has ever been inside a Weatherspoon’s will know what this one is 😉
- HomeWifi_5G
  - Last Connected Date: 2018-12-16T18:37:30Z
  - Notes: I seem to recall we got a new Wireless Access point, I may be wrong though
- HomeWifi_2G
  - Last Connected Date: 2018-12-10T15:01:00Z
  - Notes: 2.4GHz band of our home Wi-Fi
- Yell Alohomora for key
  - Last Connected Date: 2018-12-14T13:11:15Z
  - Notes: Another mobile hotspot
- _The Cloud
  - Last Connected Date: 2018-12-01T10:36:31Z
  - Notes: Another Weatherspoon’s Wi-Fi

Looking through the other files I did find some additional SSIDs that aren’t present in this big file, they are all Mobile Hotspots, with names such as “You are the Wi-Fi to my Heart” and the networks we have listed but with different last connection dates. 

This gives me an idea for a future project!

### com.apple.recentitems.plist
This wasn’t picked out by our script, it also wasn’t found using the Find command, a quick check with the MacBook shows that this file isn’t in “%home_Directory%/ Library/Preferences/com.apple.recentitems.plist”. Either this is a unique to me issue, or this artefact has changed since Mac OS X Mavericks. I doubt this is a unique issue to me as my Mac has no issues at all, so it is more than likely changed.

After some more research (Googling), I came across a [blog post detailing](https://eforensicsmag.com/what-files-were-recently-accessed-by-justin-boncaldo/)  the change away from this artefact to a very similar artefact, but with more files instead (and less information?). The new(er) artefacts are stored under  “%user_directory%/Library/Application Support/com.apple.sharedfilelist” which is a directory containing “SFL” files. They may have this extension, but they are still binary PLIST files (You ain’t fooling me).  The directory contains:

-	RecentServers
-	RecentHosts
-	RecentDocuments
-	RecentApplicaions
-	ProjectItems
-	FavouriteItems

There is also another directory containing recent documents for specific applications in “com.apple.LSSharedFileList.ApplicationRecentDocuments”.

Using Plistutil we can go through each file outputting the file to XML. The first file I chose was a “com.apple.LSSharedFileList.RecentDocuments.sfl” file. To say I fully understand the contents of this file would be a lie, there is a lot of Base64 that decodes to system-ey looking data that happens to include a file path and some rough detail of the document. The XML file we have parsed tells us the name of the recent document and the file path of it without any need to break out CyberChef. 

The file path doesn’t seem to have a key, and neither does it seem to be acting as a key. (Firefox could be doing a messy job of parsing this XML however).  Each file path of a recent file starts with “file://” and is URL encoded. This is just from one backup though, what about in any of the others?

Going back and changing the script to add these new files shows they are present in 7 other backups. To go through them I copied out all files with the name “com.apple.LSSharedFileList.RecentDocuments”  into a new directory, got a small bash script together to pass each file through plistutil and append the output to a single file so we can use a combination of cat, grep and sort commands:


{{< highlight bash "linenos=table,linenostart=1" >}}
#!/bin/bash
FILES = "/home/rubeus/Desktop/Recent_Documents/*"
for f in $FILES
do
  plistutil -i $f >> parsed.xml
done
{{< / highlight >}}
<!-- <figure>
  <img src="/assets/img/blog_images/Mac_OS_TimeMachine/bash_for_plist_util.png">
  <figcaption>Some bash code largely stolen from the internet<figcaption>
</figure> -->

“cat parsed.xml | grep ‘file://’ | sort -u” leaves a really interesting result; Lots of files relating to the self-driving duck make an appearance, some being coursework for BTEC Applied Science and BTEC IT. Also, evidence of CyberStart Essentials in here too. One file is just called “UCAS_Applicaion.pdf” and also plenty of image files with random names. We don’t need to worry about what these files may be, as we can just search the TimeMachine drive for them and see what they are.

There is only one file that jumped out to me, all the others had rather sensible names “12309564_1656374184641885_1901268296986369075_o.jpg”, using catfish we get 29 results from several backups. All are the same size and from different locations, including the calendar of all places, sadly the image itself turned out to be less exciting:

<figure>
  <img src="/assets/img/blog_images/Mac_OS_TimeMachine/chungus_image_name.jpg">
  <figcaption>The good ol’ days of Windows XP Disk Defragmenter! I don’t know why I needed this<figcaption>
</figure>

Looking at the collection of “com.apple.LSSharedFileList.RecentApplications.sfl” files they take on the same format as the recent documents file, but list applications instead:

-	Boxer
-	Contacts
-	Discord
-	FontBook
-	GIMP
-	GitHub Desktop
-	Chrome
-	Mail
-	Excel
-	PowerPoint
-	Word
-	Minecraft
-	… the list goes on (I now have Don’t stop believing stuck in my head having typed that!) 

### com.apple.LSSharedFileList.RecentHosts.sfl
I didn’t plan to even find something like this file, hence the late addition (I found this while working on Finder items). Adding the name to our script we only see one on our TimeMachine drive and it’s from 2018. 

Using plistutil to get the binary file to XML once again, we can see much the same structure as the recent file files. Scrolling through the XML file I can see two machines listed in this file; my Raspberry Pi that I use as an HTPC, using SMB. And a 2006 iMac that was once our family machine, using AFP. I can't say I recall trying to set up file sharing on either of those two devices but I may have forgotten.

### com.apple.loginwindow.plist
It was at this point that I realised the list of artefacts I had written into my script either wasn’t complete or had Typos. Noting a bit of error-correcting can’t fix. Once done we found plenty of these files.

This is a PLIST file detailing the last logged in user, and to no surprise of mine, the last logged in user was me:

<figure>
  <img src="/assets/img/blog_images/Mac_OS_TimeMachine/loginwindow_plist.png">
  <figcaption>The last logged in user was…ME!</figcaption>
</figure>

## Documents
To go through every other file, I decided to try something a bit different, running my post_file_carve tool against the drive to see what we get. This might sound mad, but it may help us out and is probably something I should have run at the start of the “investigation”. (It will also help with that project as we now have a very good start on PLIST files and SQLITE files to add over there).

Some work was required to get the script to work, although not much. “ sudo python3 post_file_carve.py -d /media/rubues/Time_Machine/ “. The output CSV files can then be copied onto my localhost for looking at, Microsoft Excel makes it much easier.

### JPG’s
To remove duplicates from the spreadsheet I used the time the image was created, this isn’t perfect but for seeing what we’ve got it works just fine. With duplicate dates removed, we are left with 145 Images. Taken on a Samsung G900-F, HTC Desire C, TCL 5051X and a SONY ILCE-7RM2. 

Images from the Samsung Galaxy are general photos, as I had an S5 at the time, but most seem to be for the self-driving duck and various “Science” Projects. The HTC was my first smartphone and is the best photo it ever took of a day out we had as a family back in 2014. Three images taken by a TCL device appear to be from a day trip on the South Coast back in 2017. The last device is the SONY, this image was a professional photo of me at the Qufaro Cyber EPQ event back in September of 2018. 

### Audio
The audio files seen by the script don’t seem to have pulled any metadata with them other than duration. Most are AIFF formatted, which makes sense being a Mac. The file paths involved show that these are notification sounds and other system sounds from Mac OS. There was one titled “pissed_off_duck-Mike_Koenig-1752213564.mp3”.

I was surprised to see that my iTunes library isn’t on this drive, even back in 2019 I thought I had my CD library and albums bought on iTunes on this Mac. At least it didn’t have every CD in our house on it at this time, 70GB of just AIFF files are kept on there now 😲 

### Office Documents
I expected there to be a lot of office documents as this machine is what I was using to do school/Sixthform stuff on at the time, with my PC being demoted to just games (Well Fortnite and GTA V.)
Documents using the DOC, XLS, PPT extension seemed to be legal files for Steam, template files or documents given out while at Sixth form. Nothing exciting.

The modern formatted documents (DOCX, XLSX, PPTX) were a lot more filled out. Mainly files from sixth-form for coursework, the CyberEPQ and CyberStart Essentials. Very interesting reads for me, as they are all things, I had forgotten about but not very exciting for anyone else, I’m sure. It was also interesting to see different versions of the same file; I still have the finished product of all the files stored somewhere but seeing half-finished A-level projects bought back the memories of “Will this ever be finished?!”. 

### Text Files
Back in sixth-form a mate decided to keep a track of all my odd spellings and what they dubbed "Jake Moments"; These were stored in a Text File but, sadly, between leaving school and now I have lost them. I had a copy of them on the MacBook as I once made a Twitter bot to tweet them at random, it was more of a project to see how easy it was to make a bot on Twitter.

There were two files but I can't remember the names for either of them. So it's time for some Catfish searching, with the very helpful term "jake". 

Twenty minutes later and it had found them, not in the backup directory however but in "/media/rubeus/Time_Machine/.HFS+ Private Directory Data/dir_1166093/". I can't say I understand this path at all, [a thread on StackExchange suggests this is something to do with linked files or APFS](https://apple.stackexchange.com/questions/31734/hfs-private-directory-data). [Another source suggests this is part of the way TimeMachine works](https://www.forensicfocus.com/forums/general/hfs-private-directory-data-dir/) After ending up down the Google rabbit hole, it would appear that this directory is the way HSF deals with hard-linked files. I would make the logical assumption that this is for files that don't change over multiple backups, why keep copying them when you can store them somewhere else and just link to them. I have no evidence to prove this, nor do I have any way of realistically testing this theory. 

But you want to see the files right? Me too! Below are the phrases that were dubbed "Jake Moments":

- "Does the mouse mat you have turn on?"
- "hes more socialer    er      er   er    socialer socialer than me"
- "i spelt it Face palm as in palm tree"
- "jozeph"
- "wireless logitech mouse mat"
- "my dad just paid off the mortgage on our garge"
- "i spelt rewind re-wind."
- "thats a bad person does"
- "Could be a photo about."
- "(Nice Socks) your welcome"
- "have (((a))) spaghetti"
- "to launch missiles from a submarine you have to use twitter"
- "Chippy is the new Microsoft Mascot"
- "Blurgh"
- "meh"
- "uh-guh-huh"
- "when the doorbell rings i open the fridge"

Time for all the spelling mistakes, to be honest I don't know how their isn't more on this list:

| Mis_Spelling   | Correct_spelling |
|----------------|------------------|
| tutoe          | tutor            |
| aleves         | A-Levels         |
| studebt        | Student          |
| extrams        | Extremes         |
| inmgs          | Images           |
| eoor           | Error            |
| ride           | Rude             |
| conor          | Connor           |
| rufe           | Rude             |
| Stuyent        | Student          |
| noise          | nose             |
| dpo            | do               |
| temi           | time             |
| halm           | harm             |
| de-moniorised  | de-monitised     |
| wheater        | weather          |
| dought         | doubt            |
| malwhere       | malware          |
| altough        | although         |
| Congaing       | Containing       |
| Libary         | Library          |
| Command        | common           |
| Wadge          | Wage             |
| policey        | policy           |
| crahsiong      | crashing         |
| ploicy)        | policy           |
| Joyed          | Joeyed           |
| Starts         | Stars (No.Times) |
| privet         | private          |
| smutherd       | smothered        |
| wourld         | world            |
| steakholders   | Stakeholders     |
| arround        | around           |
| Knoked         | Knocked          |
| icey           | icy              |
| twords         | towards          |
| diog           | dog              |
| custoemr       | customer         |
| cusotemr       | customer         |
| promotuioonal  | promotional      |
| namne          | name             |
| genoprated     | generated        |
| emls           | elm              |
| insustrial     | industrial       |
| industrable    | industrial       |
| ender          | end              |
| laded          | labeled          |
| tog            | together         |
| Northmbaland   | Northumberland   |
| londnuim       | Londinium        |
| dorsit         | dorset           |
| heartferdshire | hertfordshire    |
| sche           | scheme           |
| regterd        | registered       |
| sakater        | skater           |
| lerster        | leicester        |
| interperattor  | interpreter      |
| interoperates  | interprets       |

To be fair to me most of those do look like I was just typing too fast, still funny though.

## .HSF+ Private Data Directory
Now I've seen that this folder contains data it would be rude not to have a bit of a poke at it. The first few directories I opened were either blank or appeared to be a part of application files. 

Sorting by DateModifyed shows another item of interest, the oldest timestamp is 06/10/05, this contains a blank file called "Acknowlagements.rtf". To go through all the files I've run "tree -L 3 > /home/rubeus/Desktop/tree.txt" as the root user and write the output to a text file, this way we will be able to see all the file names; Although as we saw in the last section this is likely the store of a tonne of files that didn't change throughout the backup. I think running this could be a bit of a mistake.

The output shows that most of the files are indeed system files, however, I can see a lot of files that I would have created too. Files for the CyberEPQ, why I felt the need to hang onto “WannCry.RAR” I will never know. 

Other interesting files are:

-	[Shia LaBeouf The Game](https://github.com/JakeNTech/Shia-LeBeouf-Game) and MP4 file
-	Images of the Self Driving Duck
-	Screenshots of WannaCry (with one called “MUM I INSTALLED A VIRUS.png” and one of the classic Windows screen tearing)
-	The complete Undertale Soundtrack
-	Some of my iTunes library
-	Memes

I also used this directory to test the post_file_carve script just to see what would happen, after some small adjustments though we did get a usable output and one that will allow me to add more macOS artefacts over on that project.

You can’t stop thinking about memes now I have mentioned them, can you? Well, here it is!

<figure>
  <img src="/assets/img/blog_images/Mac_OS_TimeMachine/Yahoo meme.jpg">
  <figcaption>My sense of humour hasn’t changed one bit in the last 3 years</figcaption>
</figure>

## The End
Working on a Time Machine backup was rather cool, it meant I didn’t have to deal with encryption on my old MacBook or battle with trying to get a hard drive out of a, what’s now considered a classic, iMac. Live imagine is possible for both; However, both devices only have USB 2.0 ports which would hamper performance a great deal. I would like to try some more macOS forensics but would need to get a newer Mac, one that could run the latest versions of macOS. The issue here is I don’t think I can justify buying another laptop/computer; I think I’ll have to try borrowing one of the university’s MacBooks later in the year if that’s something they still offer (It’s been just over two years since I last went onto campus). 

While working on this project I had the idea to write a series of Python scripts that would build upon the extractor tool and parse some of these files, in a similar way to my Post_file_carve scripts do. Just point the script at a time machine drive and let it go, come back to CSV files with all the information we have found above but nicely presented to you. Having the ability to auto copy some of the files out to make manual parsing even easier is also a decent goal. I would like to finish the post_file_carve scripts first though. Now we have even more artefacts we can add to them and several ideas to make it more efficient; It’s never going to be done, is it?

Still, it’s something else to add to my to-do list now! Waiting for my final year at uni to start is a busier time than I thought!