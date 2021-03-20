# Migrated IIT JEE notes to Vuepress <Badge text="Tech"/>

_14 March 2021_

## Background 

Last year, Unacademy discontinued the `free recording lectures` features on their platform. This troubled me as i was regularly using this to upload my new lessons on Unacademy. Also, I see they already started to hide free videos from their website leading to less of my content reach to new students.

## Caveats

Hence I decided to create [IIT JEE Notes by Ayush P Gupta](https://play.google.com/store/apps/details?id=com.coddu.flutter.iitjee.notes&hl=en_IN&gl=US) to showcase my teaching on my mobile application. With app I also launched the web version using `flutter web` which didn't meet expectations as it lagged user experience and gave more of the mobile app feel on the website. Due to a lack of resources and knowledge, I was unable to port a web version of it.

## Migration

Today, after one year, I decided why not use [Vuepress](https://vuepress.vuejs.org/) for the website. Vuepress is a great choice as it's a type of ready mix for a static website. 
I wrote a python script that automatically extracts video data from the database and creates respective `markdown` files of every course. 

And guess what? The result was fantastic. My website was up in less than 2 hrs, right from setup to publish.

Visit the new website: [http://iitjeenotes.web.app/](http://iitjeenotes.web.app/)