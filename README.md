
![logo1](https://user-images.githubusercontent.com/71859422/111025795-37e06b00-83ac-11eb-81f8-20515c99e022.jpg)
# SoapBox: A platform that elevates the voice of your community

## Description/Motivation
Have you ever noticed an issue in your community – a street marred by potholes after routine winter salting, a historic building on the verge of collapse, unequal access to education, or inefficient public transportation – but not known how to take action? Have you ever had ideas about how to improve law enforcement or make the community more green but struggled to find local, like-minded people? While on a walk, have you ever passed by a flyer about a candidate in a local election and wondered: "Who is that? And what do they support?"

If so, then look no further! True to its name, SoapBox provides people like you with an informal, non-partisan platform to voice opinions and concerns about the community. As a platform designed to elevate and amplify local voices, SoapBox affords users a space to connect with others in their community to address real issues and foster a sense of local activism. Often times, small communities feel overlooked by representatives who aren't always actutely aware of the needs and concerns of their constituents. Our intent with this application is to provide all communities and neighborhoods – large and small – with an avenue via which their residents can express opinions and feel heard.


## Installation
To access our application, click on the following link ( https://soapbox-app.herokuapp.com/). If you have successfully reached the web page, you will see the landing page below.

![SoapBox2](https://user-images.githubusercontent.com/71603259/112230684-abd00e00-8c0b-11eb-9417-953c9a43fd77.GIF)

Note: This page will ask the user to enter their log-in credentials (i.e., their first name, last name, and the unique password associated with their account). A user will not be able to access additional web pages, view any content, or utilize the application's various functions before an account has been created.

When signing up for an account, the application will require the user to input details related to their location (e.g., address, zip code, etc.), as this allows the application to pinpoint the user's geolocation and place them in their respective community group.


## Usage
Our application consists of four interfaces: a log-in page, a sign-up page, an about us page, and a page where the user can post comments or create petitions that can be viewed by other users in their community. When a user without an account arrives at the log-in page, they can click on the "Sign Up" button to be redirected to the sign-up page. Once there, they will be able to create a personal account. After an account has been created, the user can return to the log-in page and enter their account credentials into the input fields to access the main page.

On the main page the user can create petitions, post commentary about various topics (e.g., education, law enforcement, infrastructure, transportation, environment, public spaces, public policy, etc.) by clicking on the "Make a SoapBox" button, and access information concerning local elections. After a comment or petition has been created, other members of the community who have accounts on the application can give the post a "Yea" or "Nay" and show how they feel about the matter at hand. The more "Yea"s an individual post recieves, the more priority it will be given on the web page: Posts with the most supporters will be displayed higher up on the screen.

Since one of the objectives of our application is to show local representatives the main points of concern in local communities, we wanted to make sure that issues with the most support have the most visibility on our web page. That way, should a representative utilize information from our web page to craft new policies or relay messages, they will be presented with a ranked list of actionable intelligence in tune with the thoughts of the local community.

## Made With
<img alt="Material UI" src="https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white"/> 
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="Heroku" src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>
<img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>

This web page was created using HTML, CSS, JavaScript, SQL, node, express, passport, and a Sequelize ORM. Our team utilized Material-Ui – a public CSS library – to create a more aesthetically pleasing interface for the user. Moreover, we made use of Kanban on GitHub to create, delegate, and manage tasks for this project; tasks were divided into two groups: front-end and back-end. Finally, our application was deployed via Heroku.

During the initial stages of the project, we used a wire-framing tool to create a blueprint for the web page, which helped us visualize and establish a preliminary structural layout. Ossatures for both the desktop and mobile versions of the app were created for each individual page of our application. Below, please find images of our initial schematics, which were created on Whimsical. To optimize user experience, the desktop and mobile versions of the application contain several display differences.

Login Page (Desktop Display)
![SoapBox Image 1](https://user-images.githubusercontent.com/71603259/110885660-41d37280-82b5-11eb-9dba-41ef74b80e69.GIF)

About Page (Desktop Display)
![SoapBox Image 2](https://user-images.githubusercontent.com/71603259/110885811-819a5a00-82b5-11eb-8738-4f38fde17eed.GIF)

Mobile Display
- In addition to creating an application that runs on desktops and laptops, we wanted to make SoapBox mobile-responsive as well. Mobile phones have become ubiquitous in society – almost everyone is connected to the Internet via cellular devices. If a SoapBox user is out on a walk one morning or afternoon and takes note of something they want to share on the platform – perhaps they noticed an infrastructural or ecological issue – they can do so easily and efficiently on the go. Although the visual display differs slightly on mobile devices, we tailored the layout so that it would provide an intuitive experience for the user.

![SoapBox Image 3](https://user-images.githubusercontent.com/71603259/110885842-8ced8580-82b5-11eb-8fa7-3d0707871c43.GIF)


Database Structure through mySQL


![Soapbox Image 4](https://user-images.githubusercontent.com/71859422/111025338-1af66880-83a9-11eb-9175-341ff36b5127.png)

## Sources
- Whimsical (www.whimsical.com)
- Google Civic Information API (https://developers.google.com/civic-information)
- Material UI (https://material-ui.com/)


## Additional Information
Please click on the following links to be redirected to the GitHub profiles of the programmers who completed this project:

Front-End Team
- Clement Valles: (https://github.com/Clem-ent17)

- Latifah Lillie: (https://github.com/SWEFuture20)

Back-End Team
- Joshua Vaslie: (https://github.com/joshuavaslie2021)

- Caleb Dunahee: (https://github.com/cdunahee36)

- Peter O'Connor: (https://github.com/ftrcafekundera)

## License
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.
