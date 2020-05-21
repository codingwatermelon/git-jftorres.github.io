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
This guide will show you how to install the Magic Mirror software on a Raspberry Pi Zero W to make a useful dashboard which you can access from any computer in your house (or wherever you set this up). This guide assumes that you know the basics of Linux, though I believe it's still possible to follow this even as a complete beginner. Use this guide in conjunction with my Youtube video.

Note: for this project, I wasn't able to run the MagicMirror site on the Pi Zero W connected to a monitor with the included Chromium browser as it ran too slow for my liking. Therefore, you'll need a separate computer to connect from to get to the MagicMirror site and it'll run much better. If you did, however, want to run the Pi connected to a monitor, just use a Raspberry Pi 3 or 4 (4 is kind of overkill) instead of the Pi Zero W, the instructions below will still apply.

Another note: This guide is heavily borrowed from [this guide](http://emmanuelcontreras.com/how-to/how-to-create-a-magic-mirror-2-with-pi-zero-w/), though there are some differences in the major goals between our guides.

***

### Parts Required
- A [Raspberry Pi Zero W](https://www.amazon.com/Raspberry-Pi-Zero-Wireless-model/dp/B06XFZC3BX/ref=sr_1_5?dchild=1&keywords=raspberry+pi+zero+w&qid=1589698278&sr=8-5) ($25)
- A [5.0V - 2.5A power supply](https://www.amazon.com/CanaKit-Raspberry-Supply-Adapter-Listed/dp/B00MARDJZ4/ref=sr_1_1?dchild=1&keywords=raspberry+pi+zero+w+power+supply&qid=1589698376&sr=8-1) (~$10)
  - **Note**: I bought a [Raspberry Pi Zero W Kit](https://www.amazon.com/gp/product/B0748MPQT4/) (~$28), which came with a case, heatsink, mini HDMI adapter, and other useful parts. This option will makes more sense than buying the parts separately because the price difference is miniscule between buying the board and this complete kit.
- An [SD card reader](https://www.amazon.com/gp/product/B07S6GGFB1/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) (~18)
  - Note: You can get cheaper SD card readers but this one is useful for other things because it has additional USB ports.
- A monitor
- A separate computer

### Optional Parts
- Mini HDMI to HDMI adapter
  - This part is needed for the Raspberry Pi Zero in order to connect to a regular HDMI display so you can add the WiFi configuration via the desktop GUI. This part is not needed if you use add the WiFi configuration to the boot files on the SD card prior to boot up

### Software Required
- [SD Card Formatter](https://www.sdcard.org/downloads/formatter/)
  - For formatting your SD card
- [Etcher](https://www.balena.io/etcher/)
  - For installing the image on the SD card
- [Raspberry Pi Raspbian Buster with Desktop image](https://www.raspberrypi.org/downloads/raspbian/)
  - Note: I believe you can install MagicMirror with the Raspbian Buster Lite image, which I think would make it run a little bit faster, though I haven't tested this.
- [PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/)
  - An SSH client for connecting to the Pi
    - Note: If you're using a Mac, you can connect to the Pi using `ssh pi@<PiIPAddress>`
- (Optional) [WinSCP](https://winscp.net/eng/index.php)
  - An FTP client for transferring files to the Pi
    - Note: You can use this to transfer configuration files directly to the Pi rather than having to create and edit files on the Pi with `vim`, `nano`, or other Linux text editors. Install this if you're uncomfortable in a Linux terminal.

***

### Installation
1. Plug the SD card into your SD card reader
2. Format your SD card with SD Card Formatter
3. Flash the Raspberry Pi Raspbian Buster with Desktop image to your SD card with Etcher
  - *(Optional Step)* **If you don't have a Mini HDMI to HDMI adapter** or **if you don't want to configure the Pi via the desktop GUI** (i.e., a purely "headless" setup), you will want to add a couple of network configuration files to the `/boot` folder (accessible after you flash the image to the SD card) so that the Pi can connect to your network:
  - (1) `wpa_supplicant.conf` - the WiFi [network configuration file](../files/wpa_supplicant.conf)
  - (2) `ssh` - the SSH configuration file
    - This file can just be an empty file named `ssh`; it basically just tells the Pi that it should turn on the SSH configuration so that you can remotely connect to it
4. Plug in the SD card to the Raspberry Pi, connect it to a monitor, then power it on
  - Note: If you set up SSH, connect to the Pi via SSH (using PuTTy for Windows or Terminal for MacOS)
    - To find the IP address, you can use an [IP scanner](https://angryip.org/download/#windows)

***

### Setup and Basic Configuration
1. Configure basic settings
  - `sudo raspi-config`
    - **Change Localisation Options**
      - **Change Locale**
        - Select **en_US.UTF-8 UTF-8**
      - **Change timezone**
        - Select your timezone
      - **Change keyboard layout**
        - Select **US**
      - **Change WiFi Country**
        - Select **US**
    - **Boot Options**
      - **Desktop/CLI**
        - **Console Autologin**
    - (Optional) If you didn't upload the `ssh` on initial install, enable SSH in **Interface Options**
      - **Enable SSH**
2. Change password
  - `sudo passwd pi`
3. (Optional) If you just enabled SSH access, connect to the Pi via SSH now.
  - To find the IP address to connect to, run `ifconfig` ([picture](../images/ifconfig.png)) on the Pi directly or use an [IP scanner](https://angryip.org/download/#windows) to find it.
4. Install OS & software updates
  - `sudo apt update && sudo apt upgrade`
5. Install software
    - Node.JS (old version that is compatible with Pi Zero)
      - `sudo wget https://nodejs.org/dist/v10.16.0/node-v10.16.0-linux-armv6l.tar.xz`
      - `tar xvf node-v10.11.0-linux-armv6l.tar.xz`
      - `cd node-v8.3.0-linux-armv6l`
      - `sudo cp -R * /usr/local`
      - `sudo reboot`
    - Node Package Manager (used for installing components for MM modules)
      - `sudo apt install npm`
    - Git (for downloading and updating MM modules)
      - `sudo apt install git`
    - MagicMirror (the software this is all based on!)
      - `cd ~/`
      - `git clone https://github.com/MichMich/MagicMirror`
      - `cd MagicMirror`
      - `npm install -arch=armv7l`
        - Note: If you get an error, delete `/home/pi/MagicMirror/node_modules` by using `sudo rm -rf /home/pi/MagicMirror/node_modules` and try `npm install`
    - Vim (Text editor)
      - `sudo apt install vim`
    - Other tools for displaying the MagicMirror
      - `sudo apt install chromium-browser`
      - `sudo apt install xinit`
      - `sudo apt install xorg`
      - `sudo apt install matchbox`
      - `sudo apt install unclutter`

6. Create startup scripts
  - Note: You can create these files outside of the Pi and transfer them to your Pi using WinSCP. Otherwise, you can create them directly:
    - `sudo vim mmstart.sh`
      - [mmstart.sh](../files/mmstart.sh)
```
#!/bin/bash
cd ~/MagicMirror
node serveronly &
sleep 30
xinit /home/pi/chromium_start.sh
```
    - `sudo vim chromium_start.sh`
      - [chromium_start.sh](../files/chromium_start.sh)
```
#!/bin/sh
unclutter &
xset -dpms # disable DPMS (Energy Star) features.
xset s off # disable screen saver
xset s noblank # don’t blank the video device
matchbox-window-manager &
chromium-browser --incognito --kiosk http://localhost:8080/
```
    - Allow files to be executed
      - `sudo chmod a+x mmstart.sh`
      - `sudo chmod a+x chromium_start.sh`

7. Create automatic startup
  - Setup pm2
      - `cd ~`
      - `sudo npm install -g pm2`
      - `pm2 startup`
      - `pm2 start /home/pi/mmstart.sh`
      - `pm2 save`

  - To restart the MagicMirror service,
      - `pm2 restart mmstart`

***

### MagicMirror Configuration
1. Networking
  - Allow your computer to connect to the Pi
  - In `~/MagicMirror/config/config.js` (either use `vim` or `nano` to edit directly or WinSCP to transfer the file here),
```
var config = {
  address: "<yourPiIP (use ifconfig)>"
  port: 8080,
  ipWhitelist: ["<yourPiIP>", "<yourComputerIP (use ipconfig for Windows or ifconfig for Mac)>"]
}
```
  - **Important:** Whenever you edit the `config.js` file, you'll need to restart the MagicMirror software
        - `pm2 restart mmstart`
          - Note: I'll provide my full `config.js` file at the end of this guide
    - To connect to the dashboard, open a web browser and type the following into the address bar:
      - `http://<PiIPAddress>:8080`
      - If your MagicMirror doesn't come up, you have a problem with your networking or the MagicMirror software isn't started
      - **Note:** You should open the browser in Private or Incognito mode because I've found that in Firefox, it saves tons of trash data into the Firefox profiles folder if you don't which will quickly fill up your drive space.
2. Installing Modules
  - [Click here](https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules) for a list of all MagicMirror 3rd party modules
  - The 3rd party modules that I chose to use were:
       - [MMM-MicrosoftToDo](https://github.com/thobach/MMM-MicrosoftToDo/) - a module to integrate your MS ToDo lists
       - [MMM-SmartWebDisplay](https://github.com/AgP42/MMM-SmartWebDisplay) - a module you can use to display web pages in an embedded frame (I used this to display my security camera feed)
       - [on-this-day](https://github.com/elliefairholm/on-this-day) - a module for displaying a random thing that happened sometime in the past on this day
       - [MMM-BackgroundSlideshow](https://github.com/darickc/MMM-BackgroundSlideshow) - a module to display a picture in the background of the dashboard
       - [MMM-AVStock](https://github.com/lavolp3/MMM-AVStock) - a module used to display stock prices
  - To install modules, enter your `modules` folder
        - `cd /home/pi/MagicMirror/modules`
  - Clone the Github repository for the module you want to install
        - `git clone <https://github.com/<module>`
        - e.g., `git clone https://github.com/lavolp3/MMM-AVStock`
  - Install dependencies for any Node components in the module
        - `cd <module>`
        - e.g., `cd MMM-AVStock`
        - `npm install`
3. Configuring Modules
  - After installing, you'll need to edit the `config.js` file accordingly
        - The recommended configuration settings are usually included in the Github repository README file
  - Edit the `config.js` file
        - `vim /home/pi/MagicMirror/config/config.js`
  - Add any module configuration into the file, following the configuration structure
        - For example,
```
{
  //disabled:true,
  module: "MMM-AVStock",
  position: "top_right",
  config: {
    apiKey : "YOUR_ALPHAVANTAGE_KEY",
    symbols : ["aapl", "GOOGL", "005930.KS"],
  }
},
```
  - After finished with editing the file, restart the MagicMirror software
        - `pm2 restart mmstart`
4. Troubleshooting
  - Developer Tools is your friend
      - You can use developer tools to find syntax errors in the `config.js` file or to just figure out what a module is doing
      - Right click on the webpage, *Inspect Element*, then open the *Console* tab

***

### My MagicMirror config file
As promised, here's my MagicMirror config file (with personal information stripped). Hope that it helps you!

[config.js](../files/config.js)
