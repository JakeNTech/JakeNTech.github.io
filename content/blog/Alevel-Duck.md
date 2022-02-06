---
title: "Self-Driving Duck"
date: 2019-07-29T15:40:55
draft: false
description: "This is a page dedicated to my A-Level Project, trust me it needs a whole page! The Duck is just too needy!"
artwork: "assets/img/blog_images/Alevel_Duck/duck_art.png"
---
Part of the OCR Computer Science A2 is a programming project, which made up a small percentage of the final grade. Our group had a bit of a thing about ducks, I think it’s a deep regret of the teachers telling us about rubber duck decoding and handing us small squeaky ducks. As the start of the project loomed, we had to start brainstorming ideas, my initial idea was a speed limit sign detection AI. On a trip to the south coast, my mum kept asking me what the speed limit was, as if I knew, having something in the car to tell you could be useful. Even now as someone who can drive, it’s easy to forget.

However, after looking into this it would have been too simplistic, the main script was about 50 lines long due to the reliance on Python libraries and modules. I wanted to have some form of AI, that is when it hit me…what about a self-driving car? How hard could it be? For some reason my parents didn’t seem all too keen for me to do this to their cars, don’t know why. We had to think smaller, some research later showed that there are many little tikes cars on Facebook Marketplace, but then I saw the cost of a golf cart motor, ~£150 not to mention the cost of the battery and charging peripherals. It would also be a small engineering project to get steering and proper breaks. While it would have been amazing, and something I do set my heart on doing one day, for this project it wasn’t practical.

Before we started the project, we had to have a meeting about it with the teachers, to make sure it was something suitable we intended to do. The first reaction to the little tikes idea was how I would get the “creation” the three miles to sixth-form. I would drive it!  Can’t help but think people wouldn’t take too kindly to a 6-foot 16-year-old thundering down the road with a little tikes car where the brake pads are your shoe soles; it would be fun but could get a little precarious! A mobility scooter was also suggested, but none of us realized how well they hold onto their value alongside some apparent ethical issues of a mobility scooter wild out of control going through the town centre. After about 10 minutes of laughter, it was then suggested to do an RC car instead. 

*“I can imagine you trying to get into one of those things and attempting to get it here!”*\
*“What do you mean attempting, it would be great…although parking near here could be a bit of a nightmare!”*

On the walk home, eBay was naturally what I was focusing on. A Remote-Control Toy Duck was presented to me. £10.99 later and the duck was mine! It had features such as RGB lighting, music and it would even quack!

The day it arrived I tore it down to make room for all the new hardware:
<ul>
    <li>Raspberry Pi 2B</li>
    <li>Raspberry Pi Camera</li>
    <li>USB TP-Link Wi-Fi Adapter</li>
    <li>Kodak 9V D Battery</li>
    <li>Kit: USB Battery Bank</li>
    <li>L298N Controller</li>
</ul>
It was time to start planning how all of this would be crammed into the small duck. I had some bits of plastic leftover from some GCSE Graphics coursework, all the tools I could find in our garage at my disposal and my cheap soldering iron. There was some minor injury, apparently using a hot glue gun while sitting on the floor with shorts on isn’t the best idea, among other small accidents; Although the best moment had to be cutting a bit of balsa wood on the garage floor in the dark with a torch in my mouth, wood in my feet, coping saw in one hand and a camera in the other, it didn’t go too badly wrong to be fair!

"I had to saw a bit of wood on the garage floor in the dark, with a torch in my mouth, it's OK I took all the health and safety precautions... I put my glasses on so I could see what I was doing"
A month later and it’s ready to start the code. Python was the language of choice, with plenty of modules and libraries to help me out and it’s a language I know. Quite quickly though I got lost; Turning my attention to the interface first, a simple HTML page where the user would see a video stream with five buttons for driving and a self-driving toggle. Once this was done and it looked alright, I had to go back to the rest of the code, while trying to find an answer to a question I came across a blog post in which the creator had already done what I was trying to achieve, although for a much more sophisticated RC car. This gave me an example to work from, it was infinitely helpful and is what aided me to carry on. [The blog post that I used to help me out with the project, and one I couldn't be more relieved to find can be found here!.](https://medium.com/@rodrigocava/i-built-my-own-self-driving-rc-car-1b269fc02e6c)

It took an age to troubleshoot, a whole weekend was devoted to trying to find out the cause of an error in the model file. Because I didn’t have the resources to train my own model file I used one that someone else had trained; I was using Python3, the model was trained using the Python2 version of all the libraries I was using (Tensorflow and OpenCV). Installing the needed modules was a pain for both python2 and 3. While they were on PIP they did not support ARM, so they needed to be compiled for ARM, due to the use of C. While using a VPN from a Costa in Spalding the duck lurched forwards on the kitchen counter, It was alive!

To this day I am unsure what that model file was trained to do, all it seemed to do was make the duck go in a straight line and that is it. I’d planned to test it in a sports hall, to give it enough space to do whatever it wanted. A bonus to this plan was that the teacher had to see and play with the final product to make sure it does do what the final write up says it does.
I think most teachers were confused when two computing and a couple of science/engineering students sauntered into school, one of which was clutching onto a duck. However, the PE department was more confused as to why this group of mates had booked the sports hall! Unfortunately, the computing teacher could not make it and we were not allowed in unless there was a teacher responsible for us, in case one fell over or something.

The tale of the bloke carrying the duck moved around the school first, with teachers I’d not spoken to for years asking after it and many other students from all year groups talking about its magnificence in the corridors the next few days.
I was able to test it on the kitchen floor at home though. It was at this point I found a few issues; The first was with stability, the duck was weighed down at the back coupled with far too much torque it lurched forwards every time it moved off. The second issue was with the steering, its turning circle was huge, and I mean huge. The last issue was with the battery setup, while the £14.99 battery bank was able to run the Pi for a long amount of time (It can’t even give my Galaxy S5 a full charge) the 9V battery used for the motors could only last about half an hour. After one run and it had gone flat.

A better battery setup would have been wise, but enough trips to Poundland and I owned enough batteries to last a while! To fix the lurching a spudger was attached to the bottom of the duck, I gave it a read diffuser! But it lived!

The next item on the agenda I needed to tackle was the documentation, which was a headache, I also think I have used all the printer toner and paper there is trying to print the final article out, there were far too many pages (Around 200 I recall). It got out of hand!
The duck was certainly a fun project that gave me, and probably others, a fair wedge of entertainment for a couple of months, no matter how injured I became due to not paying attention when using a soldering iron or a coping saw. Having completed the project with the duck I turned it into a VPN server and an HTPC. I do want to re-do this one day with a new duck case and a newer Pi. 

The finished product, stood proud on the desk moments before falling off:

![Image of the Ducko](/assets/img/blog_images/Alevel_Duck/Ducko.jpg)