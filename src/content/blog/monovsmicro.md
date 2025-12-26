---
title: Monolith vs Microservices - When to use each
description: My opinion on the monolith vs microservice discussion and when each architecture makes sense.
publishDate: "Aug 07 2023"
image: /blogg/monoVSmicro/microVSmonoWallpaper.jpg
time: 4 
draft: false
---

When we talk about software development, many doubts and discussions come up — like which programming language is better, which database to use, or even how to deploy the application. That's normal.

The real problem is when people take sides and only see one perspective.

This happens a lot!

I was on Twitter and saw a big discussion thread about **Which is better: monolith or microservices?**

So, this article is to share my opinion on the topic.

## The Beginning

Before this type of discussion existed, there was already a way to build applications, and that way is called *Monolith*.

Monolith was conceived first because, most of the time, it's a simpler architecture (though that's not always the case). Let's understand what exactly a *monolith* project is:

### Understanding a monolith

![Monolith e-commerce example](/blogg/monoVSmicro/e-commerce_monolito1.png)

This is an example of an e-commerce application. To better explain what's happening, we have this e-commerce split into three parts:
- **Frontend**: what the end user sees and interacts with
- **Backend**: where all the application logic lives
- **Database**: where all the data and information of our e-commerce is stored

So, this is a single system with all modules and functionality within it. One project, one codebase, one database, one programming language!

### Good Points

That singularity brings us many advantages:

- **Architectural simplicity**
  > All code is in the same repository following the same logic and patterns.

- **Technology consistency**
  > The entire software uses a single programming language.

- **Simple publishing flow**
  > It's one repository, so there's only one program to publish.

- **Rapid development**
  > With one programming language, one business rule, and one coding pattern to follow, development is usually faster.

Monolith has a lot of good points.

---

Imagine that our e-commerce has all these functionalities:

![E-commerce with many features](/blogg/monoVSmicro/e-commerce_monolito2.png)

It's a great application, right? We have many functionalities coupled together, and this brings us to the first problem of monoliths...

### Bad Points

As I said, all functionalities are highly coupled, which means that if one functionality breaks, all the others break too.

![Monolith breaking](/blogg/monoVSmicro/e-commerce_monolito3.png)
![All services down](/blogg/monoVSmicro/e-commerce_monolito4.png)

In our example, the notification functionality had a problem, and because of it, the entire application is down.

Unfortunately, this isn't the only problem with monolith applications...

Since a monolith is a single app that contains all the functionalities and modules of your application, it becomes tricky when you need to scale. Another point to be aware of is the codebase size — as the software needs more capacity or functionality, the codebase grows with the application.

## The Present

Looking at these problems, software architects wanted to find a better way to build software, so they came up with a solution.

The term "microservices" was coined in May 2011 during a software architects conference to represent a style of system architecture. The microservices-oriented architecture proposal is to develop systems that are more flexible, scalable, and simpler to maintain than monolithic architectures.

But the first question is: how exactly does it work?

### Understanding microservices

In a microservices architecture, modules and functions are split apart. It's as if each service is a standalone application. See the example below:

![Microservices architecture](/blogg/monoVSmicro/e-commerce_microservice1.png)

Here we can see all the main functions separated, but they're all micro parts of something bigger — the final application itself.

Following this logic, each microservice has its own database, its own logic, and its own codebase.

#### Observations

Microservices are occasionally misconstrued as Pattern-Oriented Software Architecture (POSA); however, it's essential to recognize that they are distinct concepts.

The company *RedHat* says this about it:

> The main characteristic that differentiates them is scope: SOA is an architectural approach adopted by the enterprise as a whole, while microservices are an implementation strategy of the development team for each application.

With that in mind, let's continue.

### Good Points

A major advantage of microservices architecture is that if one microservice stops, the entire application doesn't break!

For example:

![One microservice down, others running](/blogg/monoVSmicro/e-commerce_microservice2.png)

Here we can see that if one of the microservices breaks, the others keep working. This is great because it brings us more consistency and reliability.

Microservices bring many benefits:

- **Smaller codebase**
  > Each microservice is responsible for its own code, so there's less code in different repositories.

- **More understandable code**
  > It's easier to understand because the code is smaller and limited to the functionality of that module.

- **Independent deployment**
  > Each module is developed to work by itself, meaning you can deploy or integrate it independently.

- **Technology flexibility**
  > In a single microservice, you can use whatever programming language you want or have more affinity with.

- **Well-defined boundaries between modules**
  > Microservices force you to split your application business logic into modules and provide a mental framework to do so.

As you can see, microservices have many advantages and are used to some extent by almost every large tech company nowadays, since they provide many capabilities for organizations to scale their systems properly.

### Bad Points

Unfortunately, microservices aren't perfect. This software architecture has problems, so let's talk about some of them.

Microservices are usually complex. They need to be very well planned and executed because, if not, the software can become insecure, vulnerable, and hard to understand as a whole.

Another point to keep in mind is the difficulty of deploying a microservices application — you have to deploy each service independently. This costs more money and time.

The truth is, microservices are excellent but can also be a shot in the foot.

## The Future?

So, to finally answer the awaited question... **Which is better?**

In my opinion, it depends on the situation :)

We, as developers, need to be smart when choosing one architecture over another. For example, it's not smart to use microservices architecture for a website for a small local store because the development will be slower, the website probably won't have complex business rules, and it will be more expensive.

## Conclusion

It's important to always be open-minded. Microservices have become mainstream in software development, but that doesn't mean we should only use them. There are other types of software architecture like Component-Based Architecture, Service-Oriented Architecture (SOA), Layered Architecture, and others.

I think a good developer must understand when to use one or the other.

---

Contact me and tell me what you think about this article!

Hope you liked it.
