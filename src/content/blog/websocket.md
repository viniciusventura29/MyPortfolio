---
title: What is a WebSocket
description: A clear explanation of WebSocket, how this protocol works and why it's used. If you want to understand real-time communication, click here!
publishDate: "Dec 11 2022"
image: /blogg/websocket/websocketWallpaper.png
time: 2 
draft: false
---

Some months ago I worked on some projects using this protocol, and in this article I'll share what I learned.

## What is WebSocket and why is it used?

WebSocket is a different way of handling communication on the web. Unlike HTTP, WebSocket doesn't follow the traditional "request-response" model. Instead, it provides bilateral communication, which gives us the ability to receive information from the server without explicitly requesting it.

## How HTTP works

Let's quickly understand how HTTP works to better appreciate WebSocket.

In HTTP, we need to make a request to receive a response. See the example below:

![HTTP request-response model](/blogg/websocket/http.png)

I asked for a website page, and it returned what I requested. Following the same logic, if I don't ask for anything, I won't receive anything!

This is where problems arise. Imagine building a real-time application with HTTP... We can't know when new information arrives on the server, and the client will only get updates if they explicitly ask for them. To achieve something close to real-time, we would need to make endless requests, even when there's nothing new to receive. That's a lot of constant requests just to check if something has changed.

## Polling

To work around this problem, there's a technique called polling. It's when a system regularly checks another system for updates by sending periodic requests.

This technique was developed to achieve a near-real-time experience without consuming excessive computing resources.

### Example

![Polling example](/blogg/websocket/polling.png)

In this example, the client sends a request to the server every 30 seconds. When the server receives that request, it returns a response with any available updates.

## How WebSocket works

WebSocket brings us a solution for this type of problem. As I mentioned earlier, WebSocket doesn't follow the HTTP model of "request and response". Instead, it's like a tunnel of information — constantly sending and receiving.

The client doesn't have to "ask" for information to receive updates. The server sends them automatically. Both sides can communicate freely: client to server and server to client.

![WebSocket bilateral communication](/blogg/websocket/websocket.png)

## Conclusion

WebSocket is an interesting protocol, but it's not appropriate for all cases. Developing with this protocol isn't the easiest thing to do, and you might lose performance in certain scenarios. So, you need to think carefully and evaluate whether it's worth using this technology in your application.

This is the end of this short article. I hope you learned something and enjoyed it! Thanks for reading.
