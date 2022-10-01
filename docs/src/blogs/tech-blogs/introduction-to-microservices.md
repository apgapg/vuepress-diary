# Introduction to Microservices <Badge text="Tech"/>

_01 October 2022_

[[toc]]

::: warning Disclaimer
_Information may not be theoretically correct. I am writing this with my own knowledge and experience_
:::
## What are Microservices?

Microservices are those services which satisfy following criteria:

1. Independently Developed
2. Independently Deployed
3. Independently Testable
4. Independently Scalable
5. Independent Database

If any of the criteria fails, you have a monolith instead of a microservice

::: tip NOTE
A typical tech company can have more than 150+ microservices running
:::

## Monolith vs Microservices

Monolith is a traditional concept where all code resides in one single codebase ie one repository.
The structure of code may be modular but the whole code is developed, deployed, scaled at once.

1. All codebase resides in one single repo in Monolith, while each Microservice has its own codebase repository.
2. All services in Monolith is deployed at once, while in Microservices each can be independently deployed.
3. Monolith scales are services equally, you cannot independently scale services according to individual need, while Microservices are individually scalable.
4. Monolith has one single database, while each Microservice has its own database context or independent database.

## Case Study

### Order Management System

A typical order management system can have following core modules:

1. Login
2. Inventory
3. Order
4. Email, Notifications
5. Reports

If we decide to go by Monolith initially, soon we shall encounter following issues

1. High coupling chances between different services code. This typically appears when your developers are little beginners.
2. A lot of boilerplate code in one single project.
3. Abstraction principle not properly followed.
4. Heavy reports generation causes large resource consumption.
5. SPF (Single Point Of Failure) is high. If any of module code breaks whole server will be down.
6. More sprint release time required. Cannot publish minor changes in between.

**Microservices way**

We can easily break this Monolith into different domain Microservices each assigned with a **single responsibility**.
The Microservices will be:

1. Login - Responsible for Authentication/Authorization system
2. Inventory - Responsible for managing inventory and adjustments
3. Order - Responsible for order creation, dispatch, cancel
4. Email, Notifications - Responsible for notifying users about order, updates, promotions
5. Reports - Responsible for getting different excel reports

