---
layout: ../../layouts/BlogLayout.astro

url: /monoVSmicro
title: Microserviços vs Monolito
description: Microserviços vs Monolito
publishDate: 07/08/2023
---

# Monolito vs Microservice
When we talk about develop a software, many of doubts and discussions comes out, like which program language is better, which database use or even how disponibilize the application. That is normal.
The real problem is when people take sides and only see your self opinion.   

This happens a lot! 

This article is to expose to you my opinion about one polemic topic. *Which is better monolito or microservice?*

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
- Technology aggregation; 
- Simple publishing flow;
- Rapid development.

*MONOLITO IS PERFECT!*

But we not finish yet, let gets deeper:

Imagine that our e-commerce have all this functionallities.

![Alt text](../e-commerce_monolito2.png)

It's a great application right? We have a lot of functionallities coupled in it and this bring us the first problem of the monilito...

### Bad Points

Like I said all the functionallities are highly coupled and this means that, if one functionallitie breaks, all the others breaks too. 

Unfortunately, this problem is not the only one in a monolito application...

Considering that a monolito application is single app that comports all the functionalities and modules of your application, this turns out to be a little tricky when we have to escalate the application. Other point that we have to be attention with is the codebase size.   

## Today

## Future?

Bom para mvps, projetos de baixa escalabilidade, validações de projetos

Forma para desenvolver sistemas onde cada modulo pode ser pensado, desenvolvido e disponibilizado de forma independente
Parecido com o SOA (arquitetura orientada a serviço) porém, não são as mesmas coisas.

