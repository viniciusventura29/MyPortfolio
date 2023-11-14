---
url: /blog/websocket
title: What is a websocket
description: A little explanation about what is websocket, how this protocol works and why it is used, if want to understand something about it click here!
publishDate: 11/10/2022
image: /blogg/websocket/websocketWallpaper.png
time: 2 
---

Some months ago I have done some projects using this protocol and in this article I tell what I learn.

#### Here, I'll try to explain you, what is websocket and why is it used for

Websocket is a different form to see request and responses on the web, because websocket do not have "requests" and "responses" like in http, in fact websocket have a bilateral comunication 
wich gives us the possibility of receives informations whithout requests from the server.

## How works in http

Let's undestand fastly how http works to better see websockets.

In http we have to do a request to receive a reponse, follow the example bellow.

![Alt text](/blogg/websocket/http.png)

I asked for a website page and it returns me what i asked. Following the same logic if I don't ask for nothing it will returns me nothing! 

Then now is when some problems comes out. Try to imagine do a real time application with http... We cannot know when we get new informations in the server and the client will only 
get new information if they asked for, so, to do something nearly of real time, we have to do a infinity of requests, even though there's nothing to be received. Is a lot of constant request to
verify if there is something new in the server.

## How works in Websocket

The websocket bring us the solution for this type of problem. Like i said in the start, websocket doesn't work like `http model` ("request" 
and "response"). websocket is like a tunnel of informations,
sending and receiving. The client don't have to "ask" for information to receive updates responses, the server send it automatically. They 
have a bilateral comunication, both client to server and server to cliente.

![Alt text](/blogg/websocket/websocket.png)

Anyway, websocket is a interesting protocol but isn't appropriate to all the cases, develop using this protocol is not the easily thing to do and also you could lose performace in your application
using websocket so, you have to thing and calculate if is valid use this technology in your application.

This is the end of this short article. I hope you have learned something and enjoyed! Thanks for reading.