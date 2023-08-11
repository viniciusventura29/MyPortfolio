---
layout: ../../layouts/BlogLayout.astro

url: /monoVSmicro
title: Microserviços vs Monolito
description: Microserviços vs Monolito
publishDate: 07/08/2023
---

# Monolito vs Microservice
When we talk about develop a software, many of doubts and discussions comes out, like which program language is better, which database use or even how disponibilize the application. That is normal.
The real problem is when people take sides and only see one side opinion.   

This happens a lot! 

This article is to expose to you my opinion about one polemic topic. **Which is better monolito or microservice?**

## The Begin
Before this type of discussion appears, is obvious that just already had a way to build applications and this software architecture is called *Monolito*.

Monolito was imagined first, because, most of the time, is a simpler architecture. Let undestand what exactaly is a *monolito* project, follow below:

### Understanding a monolito

![Alt text](../e-commerce_monolito1.png)
This is a example of a e-commerce application. To better explain what is happening, we have this e-commerce splitted in three parts:  
- We have the frontend, is what the final user see and interacts with;
- The backend, is where all the logic of the application is;
- Database tha is where all the datas and informations of our e-commerce is saved.

So, this is A single system with all modules and functionality within it. One project, one codebase, one database, one programm language!

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

Monolito seems to be very nice, it's have a lot of good points, so, let undestand a little more about it. 

Imagine that our e-commerce have all this functionallities.

![Alt text](../e-commerce_monolito2.png)

It's a great application right? We have a lot of functionallities coupled in it and this bring us the first problem of the monilito...

### Bad Points

Like I said all the functionallities are highly coupled and this means that, if one functionallitie breaks, all the others breaks too. 

![Alt text](../e-commerce_monolito3.png)
![Alt text](../e-commerce_monolito4.png)
In our example, the notification functionallity had some problem and becauso of it, all the application is out.

Unfortunately, this problem is not the only one in a monolito application...

Considering that a monolito application is single app that comports all the functionalities and modules of your application, this turns out to be a little tricky when we have to escalate the application. Other point that we have to be attention with, is the codebase size, because if the software needs to have more capacity, funcionality or some like this, the codebase will grows with the application.   

## Today
Looking to this problems, the software architectures wanted to find a better way to do software, so, they thought in a solution.

The term microservices was coined in May 2011 during a software architects conference to represent a style of systems architecture. The proposal of microservices-oriented architecture is to develop systems that are more flexible, scalable and simpler to maintain than the architectures of monolithic systems, which are normally used.

But the first question is, What exactaly it works?

### Understanding a microservice
In a microservice, the modules and functions are splitted. It's like if each service is a single application. Follow the example bellow:
![Alt text](../e-commerce_microservice1.png)

Here we could see all the mainly functions a part, but, all them are micro part of something bigger, the final application itself.

Following this logic, each single micro service, has your own database, own logic and also own codebase.

### Good Points
A big good point of microservices architecture is that if one micro service stops, the application does not break!

For example:
IMAGEMMMMMMMMM IMAGEMMMMMMMMM IMAGEMMMMMMMMM IMAGEMMMMMMMMM IMAGEMMMMMMMMMIMAGEMMMMMMMMM IMAGEMMMMMMMMM IMAGEMMMMMMMMM
Here we could see that if one of the micro services breaks the others keeps working.

It's clear that microservice bring us many facilities, like:
- Smaller codebase;
>Each micro service is responisble of your own code, so is going to be less code in differents repositories
- Code more understandnable;
>It's easier to understand the code because, the code is smaller and the code will be limited by the functionality of that module 
- Each module can be available independently;
>Each module is developed to work by itself, what means that you can integrate or available alone
- Technology aggregation;
>In a single micro service, you can use what program language you want or have more affinity.

Way to develop systems where each module can be thought, developed and made available independently

### Bad Points
It's obvious that microservice is not perfect. This software architecture has problems, so let's talk about some bad points in microservice.

## Future?

Bom para mvps, projetos de baixa escalabilidade, validações de projetos

Forma para desenvolver sistemas onde cada modulo pode ser pensado, desenvolvido e disponibilizado de forma independente
Parecido com o SOA (arquitetura orientada a serviço) porém, não são as mesmas coisas.

