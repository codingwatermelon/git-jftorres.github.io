---
layout: project
type: project
image: images/355prog.jpg
title: Developing an Authentication system
permalink: projects/cotton
# All dates must be YYYY-MM-DD format!
date: 2017-11-17
labels:
  - ICS355
  - GitHub
  - Encryption
summary: A database application to hold financial information with an authentication mechanism I created for ICS 355.
---

I developed a text-based database application which held fake records and accounts that also needed correct authentication for ICS 355, Security and Trust I. It was incredibly interesting to see the inner-workings of how password authentication works for everything. I implemented a way to hash the password based on the MD5 algorithm (yes, I know it's deprecated) and authenticate against the hash based on the password the user inputted. This way, some random shmuck who got into my box wouldn't be able to see any of the passwords if they were the view the file that contained the passwords (since they were hashed).

Below is an example output of my program:

<img class="ui image" src="{{ site.baseurl }}/images/355progpic1.png">

Although relatively simple and also a school assignment, it was fun the implement and I also learned a lot from doing so.
