---
layout: project
type: project
image: images/mm.png
title: How to make a Magic Dashboard
permalink: projects/magicdashboard
# All dates must be YYYY-MM-DD format!
date: 2020-05-10
labels:
  - Raspberry Pi
  - Web
summary: Using the popular Magic Mirror software for Raspberry Pis, I made a "Magic Dashboard". Follow the steps within this guide to learn how to do so for yourself.
---

### Introduction
This guide will show you how to install the Magic Mirror software on a Raspberry Pi Zero W to make a useful dashboard which you can access from any computer in your house (or wherever you set this up). Use this guide in conjunction with my Youtube video.

### Parts Required
- A Raspberry Pi Zero W
- A 5.0V - 2.5A power supply
- A monitor
- A separate computer
- An SD card reader

### Software Required
- [SD Card Formatter](https://www.sdcard.org/downloads/formatter/)
  - For formatting your SD card
- [Etcher](https://www.balena.io/etcher/)
  - For installing the image on the SD card
- [Raspberry Pi Raspbian Buster with Desktop image](https://www.raspberrypi.org/downloads/raspbian/)
  - Note: I believe you can install MagicMirror with the Raspbian Buster Lite image, which I think would make it run a little bit faster, though I haven't tested this.

### Optional Parts (required in this guide)
- Mini HDMI to HDMI adapter
  - This part is needed for the Raspberry Pi Zero in order to connect to a regular HDMI display so you can add the WiFi configuration via the desktop GUI. This part is not needed if you use add the WiFi configuration to the boot files on the SD card prior to boot up

### Installation
1. Plug the SD card into your SD card reader
2. Format your SD card with SD Card Formatter
3. Flash the Raspberry Pi Raspbian Buster with Desktop image to your SD card with Etcher
  - (Optional Step) *If you don't have a Mini HDMI to HDMI adapter* or *if you don't want to configure the Pi via the desktop GUI* (i.e., a purely "headless" setup), you will want to add a couple of network configuration files to the `/boot` folder (accessible after you flash the image to the SD card) so that the Pi can connect to your network:
  1. `wpa_supplicant.conf` - the WiFi network configuration file
  ```
  ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
  update_config=1
  country=US

  network={
    ssid="Your WiFi Network Name"
    psk="Your WiFi Network Password"
    key_mgmt=WPA-PSK
  }
  ```
  2. `ssh` - the SSH configuration file
    - This file can just be an empty file named `ssh`; it basically just tells the Pi that it should turn on the SSH configuration so that you can remotely connect to it
4. Plug in the SD card to the Raspberry Pi and power it on

### Configuration
1.
