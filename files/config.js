/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
        address: "<yourPiIP>", // Address to listen on, can be:
                              // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                              // - another specific IPv4/6 to listen on a specific interface
                              // - "0.0.0.0", "::" to listen on any interface
                              // Default, when address config is left out or empty, is "localhost"
        port: 8080,
        //ipWhitelist: [],
        ipWhitelist: ["<yourComputerIP>", "127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
                                                               // or add a specific IPv4 of 192.168.1.5 :
                                                               // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                               // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                               // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

        useHttps: false,                // Support HTTPS or not, default "false" will use HTTP
        httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
        httpsCertificate: "",   // HTTPS Certificate path, only require when useHttps is true

        language: "en",
        timeFormat: 24,
        units: "imperial",
        // serverOnly:  true/false/"local" ,
                             // local for armv6l processors, default
                             //   starts serveronly and then starts chrome browser
                             // false, default for all  NON-armv6l devices
                             // true, force serveronly mode, because you want to.. no UI on this device

        modules: [
                {
                        module: "clock",
                        position: "top_left"

                },
                {
                        module: 'MMM-SmartWebDisplay',
                        position: 'bottom_right',
                        config: {
                                logDEbug: false,
                                height: "275px",
                                width: "375px",
                                updateInterval: 0,
                                NextURLInterval: 0,
                                displayLastUpdate: false,
                                url: ["http://<securityCamIP>:8081"],
                                shutoffDelay: 10000

                        }
                },
                {
                        module: 'MMM-MicrosoftToDo',
                        position: 'top_left',
                        header: 'Task List',
                        config: {
                                oauth2ClientSecret: '<CLIENT SECRET>',
                                oauth2RefreshToken: '<REFRESH TOKEN>',
                                oauth2ClientId: '<CLIENT ID>',
                                listId: '<ToDo List ID>',
                                showCheckbox: true,
                                hideIfEmpty: false,
                                maxWidth: 450,
                                itemLimit: 200,
                                orderBy: 'subject'
                        }
                },
                {
                        module: "MMM-AVStock",
                        position: "top_left",
                        config: {
                                apiKey: "<API KEY>",
                                symbols: ["TSLA", "DIS"]
                        }

                },
                {
                        module: 'MMM-BackgroundSlideshow',
                        position: 'fullscreen_below',
                        config: {
                                imagePaths: ['modules/MMM-BackgroundSlideshow/testImages/'],
                                transitionImages: true,
                                randomizeImageOrder: true,
                                slideshowSpeed: 300000,
                                gradient: [ "rgba(0, 0, 0, 0.75) 80%", "rgba(0, 0, 0, 0) 20%" ],
                                gradientDirection: ['both']
                                //validImageFileExtensions: 'jpg,jpeg,JPEG,png',
                                //showProgressBar: true
                        }
                },
                {
                        module: 'on-this-day',
                        position: 'bottom_bar',
                        config: {
                            updateInterval: 600000,
                            interests: ['history']
                        }
                },
                {
                        module: "alert",
                },
                {
                        module: "updatenotification",
                        position: "top_bar"
                },
                {
                        module: "calendar",
                        header: "US Holidays",
                        position: "top_left",
                        config: {
                                calendars: [
                                        {
                                                url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
                                        },
                                ],
                                maximumEntries: "3"
                        }
                },
                {
                        module: "calendar",
                        header: "Daily Events",
                        position: "top_left",
                        config: {
                                calendars: [
                                        {
                                                url: 'https://calendar.google.com/calendar/ical/<yourGmailAddress>/private-<numbers>/basic.ics'
                                        }
                                ],
                                maximumEntries: "7"
                        }
                },
                {
                        module: "currentweather",
                        position: "top_right",
                        config: {
                                location: "Honolulu",
                                locationID: "5856195", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                                appid: "<API key>",
                                showFeelsLike: false
                        }
                },
                {
                        module: "weatherforecast",
                        position: "top_right",
                        header: "Weather Forecast",
                        config: {
                                location: "Honolulu",
                                locationID: "5856195", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                                appid: "<API key>"
                        }
                },
                {
                        module: "newsfeed",
                        position: "bottom_bar",
                        config: {
                                feeds: [
                                        {
                                                title: "New York Times",
                                                url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                                        }
                                ],
                                showSourceTitle: true,
                                showPublishDate: true,
                                broadcastNewsFeeds: true,
                                broadcastNewsUpdates: true
                        }
                },
        ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
