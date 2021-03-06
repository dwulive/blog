---
title: What are the best resources to use before attending a coding bootcamp?
ed: true
datePublished: 1590463136775
author: Jean marie Jackman
twitter: sweetjuanita512
to: /img/profile.jpeg
tags:
  - bugs
  - blog
  - programming
thumbnailPhoto: /img/pancakes_thumb.jpeg
bannerPhoto: /img/pancakes.jpeg
canonicalUrl: https://www.tlgger.com/resources-for-coding-bootcamp
---

# Create a Simple But Effective Bug Ticketing System Using Google Forms + Zapier + Trello

[

![Jeanmarie Jackman](https://miro.medium.com/fit/c/96/96/1*eQmkGSvjIA4tWAxDQ4tZIQ.jpeg)

](https://jeanmarie-jackman.medium.com/?source=post_page-----8d8656b74199--------------------------------)

[Jeanmarie Jackman](https://jeanmarie-jackman.medium.com/?source=post_page-----8d8656b74199--------------------------------)

Following

[Feb 15](https://medium.com/swlh/create-a-simple-but-effective-bug-ticketing-system-using-google-forms-zapier-trello-8d8656b74199?source=post_page-----8d8656b74199--------------------------------) · 3 min read

![Image for post](https://miro.medium.com/max/60/1*xvYwj3W0NTojewcXmOzFjQ.jpeg?q=20)

![Image for post](https://miro.medium.com/max/2500/1*xvYwj3W0NTojewcXmOzFjQ.jpeg)

![Image for post](https://miro.medium.com/max/5000/1*xvYwj3W0NTojewcXmOzFjQ.jpeg)

created using Pixlr.com

So, I found myself working on a small team developing a game, which is great, huzzah! But soon we needed testers (other than the few of us on the team). And once we had a few dozen people testing and reporting bugs, it became necessary to have a system in place — but one that doesn’t come with a big sticker price.

**First, I designed a Trello board.** With a key, for labeling the categories of the bugs from severe to minor. Then set I set up my Trello bug tracker tool to have this list structure:

1. _Key_
2. _Incoming_
3. _Acknowledged Bugs_
4. _In progress_
5. _Needs checking_
6. _Verified Fixed_
7. _Released_
8. _Unknown Status_
9. _Won’t fix_
10. _Can’t Reciprocate_

![Image for post](https://miro.medium.com/max/60/1*ijxA-OVRF6iyl0RF_3HTvA.png?q=20)

![Image for post](https://miro.medium.com/max/1398/1*ijxA-OVRF6iyl0RF_3HTvA.png)

![Image for post](https://miro.medium.com/max/2796/1*ijxA-OVRF6iyl0RF_3HTvA.png)

**Second step, create the Google Form.**

![Image for post](https://miro.medium.com/max/54/1*G1uOC1HyxIV42wO0ZQX-Tw.png?q=20)

![Image for post](https://miro.medium.com/max/1584/1*G1uOC1HyxIV42wO0ZQX-Tw.png)

![Image for post](https://miro.medium.com/max/3168/1*G1uOC1HyxIV42wO0ZQX-Tw.png)

In addition to email address and discord username, which is the server where our testers communicate with the dev team, we ask for device and operating system, version of the app, type of submission (bug, suggestion, feedback, other), a description of the issue in detail, attach image files, and a mailing list opt-in/opt-out.

Then we select “Responses” at the top of the form editing area, and we can click the green “Create Spreadsheet” icon, to generate the Sheet that will record all of the responses.

![Image for post](https://miro.medium.com/max/60/1*_fXOpqU51PqZIrgpKS92eQ.png?q=20)

![Image for post](https://miro.medium.com/max/2548/1*_fXOpqU51PqZIrgpKS92eQ.png)

![Image for post](https://miro.medium.com/max/5096/1*_fXOpqU51PqZIrgpKS92eQ.png)

**Now comes the magic!**

We will go to our Zapier account, and create a new Zap. Select the trigger:

![Image for post](https://miro.medium.com/max/60/1*GEYlQ6u2hVL3hhd5Q37huA.png?q=20)

![Image for post](https://miro.medium.com/max/1760/1*GEYlQ6u2hVL3hhd5Q37huA.png)

![Image for post](https://miro.medium.com/max/3520/1*GEYlQ6u2hVL3hhd5Q37huA.png)

In our case we select Google Forms as the Trigger. Then select the Event, that Zapier will be listening for:

![Image for post](https://miro.medium.com/max/60/1*Ggw12gAr7j3dHuF3MbP7LA.png?q=20)

![Image for post](https://miro.medium.com/max/2002/1*Ggw12gAr7j3dHuF3MbP7LA.png)

![Image for post](https://miro.medium.com/max/4004/1*Ggw12gAr7j3dHuF3MbP7LA.png)

We want it to listen for “New or Updated Response in the Spreadsheet”. Select your google forms account in the next dropdown. Then set up the Trigger, choose the Spreadsheet, Choose the Worksheet, and then Test the trigger.

Once you have a test response successfully triggered, you can then handle the Action on the Trello Board.

![Image for post](https://miro.medium.com/max/60/1*ze1MNV8R6Y0TLHcKlZ8XHA.png?q=20)

![Image for post](https://miro.medium.com/max/2044/1*ze1MNV8R6Y0TLHcKlZ8XHA.png)

![Image for post](https://miro.medium.com/max/4088/1*ze1MNV8R6Y0TLHcKlZ8XHA.png)

You’ll choose the Trello app, and event “Create a Card”, link to your trello account, then select the action(s):

![Image for post](https://miro.medium.com/max/60/1*YNTbiaoh56oJJZOEGKS2IA.png?q=20)

![Image for post](https://miro.medium.com/max/1130/1*YNTbiaoh56oJJZOEGKS2IA.png)

![Image for post](https://miro.medium.com/max/2260/1*YNTbiaoh56oJJZOEGKS2IA.png)

Run a Test again, and Voila!

Now we have a simple but effective system gathering the information from the testers on an easy to use form, and placing it right into our Trello system so that the Dev Team can work methodically through all of the tickets.
