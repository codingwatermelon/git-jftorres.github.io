---
layout: essay
type: essay
title: Asking "Smart" Questions
# All dates must be YYYY-MM-DD format!
date: 2018-01-24
labels:
  - Software Engineering
  - Googlefu
---

<img class="ui centered medium image" src="../images/questionspic1.jpg">

### A Preface
As budding software engineers, we know that not everything can be explained for a homework assignment by a professor within a lecture period, and often times we are stuck with having to search the web for solutions to whatever problem we might run into. Sometimes even scouring Google and endless forums for a solution is not enough and we end up having to post a thread on a forum relevant to our problem. In order to not waste time for all parties (the asker and the answerer(s)), questions must be phrased in a way that will convey the issue concisely and efficiently (i.e. in a "smart" way).  

### The Benefits of Asking "Smart" Questions
Asking "smart" questions is outlined by Eric Raymond in his article, "[How to Ask Questions The Smart Way](http://www.catb.org/esr/faqs/smart-questions.html)". He gets into the nitty-gritty details of the process; the purpose of this essay is to stress the importance of being able to ask "smart" questions. Firstly, what is a "smart" question? Simply put, a "smart" question is one in which the questioner is able to concisely and formally present an issue to which people will be able to understand, assess, and hopefully remediate the situation without too much back and forth discussion between the questioner and answerer. 
Here's an example of a "smart" question on StackOverflow:

#### How do JavaScript closures work?
> How would you explain JavaScript closures to someone with a knowledge of the concepts they consist of (for example functions, variables and the like), but does not understand closures themselves?

> I have seen the Scheme example given on Wikipedia, but unfortunately it did not help.

This is a great example of a "smart" question because firstly, they present the issue concisely (he/she doesn't know what a JavaScript closure is), secondly, they use proper grammar and punctuation, and thirdly, they provide what they have done thus far in trying to find a solution to their problem (he/she tried to understand the Wikipedia entry, but couldn't). These types of questions are generally rewarded with higher quality answers because the questioner took the time to research their issue beforehand (the question has 88 answers).
Here's an example of a not-so-smart question on StackOverflow:

#### How the lock file works?(PHP)
> `$f = fopen('lock', 'w') or die ('Cannot create lock file');`

> `if = (flock($f, LOCK_EX | LOCK_NB)) {`

> `}`

> how this piece of code can block the next php execution? should I put the code inside the if statement? or outside?

This question violates a handful of rules from Eric Raymond's article. First of all, the person who asked the question did not proofread their question, and it is chock full of grammatical errors. Secondly, the question does not actually seem to convey the questioner's knowledge of the subject (whether or not he/she knows a little bit of the subject or not at all), making it difficult for any prospective answerers to give a customized response. Thirdly, the overall tone of the question does not seem so friendly or professional. In fact, the questioner goes on to answer a comment which asked "How much do and don't you understand about locks...?" to which they reply "thats why i asked".

### Conclusion
Asking questions is important, but asking smart questions is even more important. Not only are smart questions important to be asked on the Internet, but also to employers and supervisors. Being able to communicate an issue and find a solution efficiently is of utmost importance to a career. 
