---
layout: project
type: project
image: images/icinga2.jpg
title: Icinga2, network monitor
permalink: projects/micromouse
# All dates must be YYYY-MM-DD format!
date: 2016-01-01 - Present
labels:
  - Network Monitoring
  - Cybersecurity
  - Resource Management
summary: I implemented Icinga2, a network monitoring software, at my workplace.
---

<div class="ui small rounded images">
  <img class="ui image" src="../images/micromouse-robot.png">
  <img class="ui image" src="../images/micromouse-robot-2.jpg">
  <img class="ui image" src="../images/micromouse.jpg">
  <img class="ui image" src="../images/micromouse-circuit.png">
</div>

Icinga2 is an open source network monitoring software. Being open source makes it much cheaper to implement than its commercial competitors (AlienVault, Splunk, etc.) which is why my company went that route in the first place. At first, it was very difficult for me to understand (being a complete "newbie" to networking and programming as a whole) but presently I have achieved a lot. 
```js
byte ADCRead(byte ch)
{
    word value;
    ADC1SC1 = ch;
    while (ADC1SC1_COCO != 1)
    {   // wait until ADC conversion is completed   
    }
    return ADC1RL;  // lower 8-bit value out of 10-bit data from the ADC
}
```

You can learn more at the [UH Micromouse Website](http://www-ee.eng.hawaii.edu/~mmouse/about.html).



