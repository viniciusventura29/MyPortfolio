---
title: Why you should not develop a microservice
description: My opinion about the dicussion monolith vs microservice.
publishDate: 07/08/2023
image: /blogg/monoVSmicro/microVSmonoWallpaper.png
time: 4 
draft: false
---

When we talk about develop a software, many of doubts and discussions comes out, like which program language is better, which database use or even how disponibilize the application. That is normal.
The real problem is when people take sides and only see one side opinion.   

This happens a lot! 

I was on Twitter and I saw a big discussion thread about **Which is better monolith or microservice?**

So, this article is to expose to you my opinion about. 

## The Begin
Before this type of discussion appears, just already had a way to build applications, and that way is called *Monolith*.

Monolith was imagined first, because, most of the time, is a simpler architecture (that is not a rule). Let undestand what exactaly is a *monolith* project, follow below:

### Understanding a monolith

![Alt text](/blogg/monoVSmicro/e-commerce_monolito1.png)
This is a example of a e-commerce application. To better explain what is happening, we have this e-commerce splitted in three parts:  
- We have the frontend, is what the final user see and interacts with;
- The backend, is where all the logic of the application is;
- Database tha is where all the datas and informations of our e-commerce is saved.

So, this is A single system with all modules and functionality within it. One project, one codebase, one database, one program language!

### Good Points

That singularity bring us a lot of advantages, like:
- Architectural simplicity;
    >Is every code in the same repository following the same logic and model.
- Technology aggregation;
    >All the software use a single programing language .
- Simple publishing flow;
    >It's one repository so is a unique program to publish.
- Rapid development;
    >Imagining that is one programing language, that is one business rule and also one programing pattern to folow, the development is usually faster.

Monolith have a lot of good points. 

---

Imagine that our e-commerce have all this functionalities bellow.

![Alt text](/blogg/monoVSmicro/e-commerce_monolito2.png)

It's a great application right? We have a lot of functionalities coupled in it and this bring us the first problem of the monolith...

### Bad Points

Like I said all the functionalities are highly coupled and this means that, if one functionality breaks, all the others breaks too. 

![Alt text](/blogg/monoVSmicro/e-commerce_monolito3.png)
![Alt text](/blogg/monoVSmicro/e-commerce_monolito4.png)
In our example, the notification functionallity had some problem and because of it, all the application is out.

Unfortunately, this problem is not the only one in a monolith application...

Considering that a monolith application is single app that comports all the functionalities and modules of your application, this turns out to be a little tricky when we have to escalate the application. Other point that we have to be attention with, is the codebase size, because if the software needs to have more capacity, funcionality or some like this, the codebase will grows with the application.   

## Present
Looking to this problems, the software architectures wanted to find a better way to build software, so, they thought in a solution.

The term microservices was coined in May 2011 during a software architects conference to represent a style of systems architecture. The proposal of microservices-oriented architecture is to develop systems that are more flexible, scalable and simpler to maintain than the architectures of monolithic systems, which are normally used.

But the first question is, how exactaly it works?

### Understanding a microservice
In a microservice, the modules and functions are splitted. It's like if each service is a single application. Follow the example bellow:
![Alt text](/blogg/monoVSmicro/e-commerce_microservice1.png)

Here we could see all the mainly functions a part, but, all them are micro part of something bigger, the final application itself.

Following this logic, each single micro service, has your own database, own logic and also own codebase.

#### Observations
Microservices are occasionally misconstrued with Pattern-Oriented Software Architecture (POSA); however, it's essential to recognize that they are distinct concepts.

The big company *RedHat*, say this about it:
> The main characteristic that differentiates them is scope: SOA is an architectural approach adopted by the enterprise as a whole, while microservices are an implementation strategy of the development team for each application.

Anyway, having this in mind let's continue.

### Good Points
A big good point of microservices architecture is that if one micro service stops, the application does not break!

For example:
![Alt text](/blogg/monoVSmicro/e-commerce_microservice2.png)

Here we could see that if one of the micro services breaks the others keeps working and that is great beacause its bring us more consistency and reliability.

Microservice bring us many facilities, like:
- Smaller codebase;
>Each micro service is responisble of your own code, so is going to be less code in differents repositories
- Code more understandnable;
>It's easier to understand the code because, the code is smaller and the code will be limited by the functionality of that module 
- Each module can be available independently;
>Each module is developed to work by itself, what means that you can integrate or available alone
- Technology aggregation;
>In a single micro service, you can use what program language you want or have more affinity.
- Well-defined boundaries between modules
>Microservices forces you to split your application business logic into modules, and also provides a mental framework to do so.

As you can see, microservices has a lot of advantages, and it's used at some point by almost every large tech company nowadays, since it provides many capabilities for these organizations to scale 
properly the modules of a system.

### Bad Points
Unluckily, microservice is not perfect. This software architecture has problems, so let's talk about some bad points in microservice.

Microservice is, usually, complex. Microservices softwares has to be very well planned and good executed, because, if not, the software can be insecure, vulnerable and it will be hard to understand 
the hole application.

Another point to have in mind, is the difficulty to deploy a microservice application because you have to deploy each service independent. This costs more money and time.

The truth is, microservice is excelent however can be a shot in the foot.

## Future?
So, to answare finally the waited question... **Which is better**

In my opnion, depends of situation :)!

We, as developers, have to be clever when use a architecture or other! For example, is not smart use microservice architecture in a website for a small local city store, because, the development
will be slower, the website probably will not have a huge business rule and also will be expensier.

## Conclusion
Is important to always be open-minded. Microservices have become mainstream in the field of software development but that doesn't means that we only have to use it. There are others types of software architecture like, Component-Based Architecture, Service-Oriented Architecture (SOA), Layered Architecture and others.

I think a good developer must to undestand were use one or other.

---

Contact me, tell me what you think about this article!

Hope you liked.
