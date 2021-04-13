# Intregrate Asana and Github <Badge text="Tech"/>

_20 March 2021_

![asana-github-integration](https://user-images.githubusercontent.com/13887407/111866649-ee3be580-8994-11eb-9063-d185e1743bc2.jpg)

## Background 

At my workplace [FieldAssist](https://www.fieldassist.in/), we use [Github](https://github.com/FieldAssist) as Version Control System (VCS), and [Asana](https://asana.com/) for project task management of different Flutter projects.  

We start off our daily development work according to given Asana tasks. Upon completion of code part, by Everytime we need to manually comment its status on its respective task, which leads to manual dependency of moving task to different states like **In Progress**, **Testing** etc 

This created difficulties as sometimes we forget to update task with relevant comments, causing vague in our day to day team scrum.

## Solution

Recently I was exploring Github Actions and came to know about [Github Action for Asana](https://github.com/marketplace/actions/asana-git). This action helps in moving a task to its respective columns upon referencing its link in commit or Pull Request. Basically removing manual depenndency for task movement and changing its status.

This minor introduction helped our Flutter team a lot in sense to atleast auto-comment on Asana task that I have raised Pull Request against this work.

![Screenshot from 2021-03-20 16-00-23](https://user-images.githubusercontent.com/13887407/111866711-6d311e00-8995-11eb-9479-40ea8f49923e.png)

## Caevats

Again this didnt fully fulfill my purpose. I wanted to comment about **Merged PR** also whenever a PR is merged or closed.  
Hence I forked the respository and edited the action to support commenting PR merged status also. 

## Meet TheDotLabs/github-asana-action

This new action helped us to automate our task movement on either commit push or pull request

``` yaml
uses: apgapg/github-asana-action@--latest--
with:
  asana-token: 'Your PAT'
  targets_commit_push: '[{"project": "New MT Flutter App", "section": "Development Done"}, {"project": "Current Sprint", "section": "In Review"}]'
```

(If you want to checkout the source code, see [TheDotLabs/github-asana-action](https://github.com/TheDotLabs/github-asana-action)).

## Outcome

Whola! It fulfills our purpose for now. No worries to maintain task status. Just raise PR.  
As a Flutter lead I now have the full status of the current development work on going in different Flutter Projects

## Bot User

While developing te feature I came across a problem of not getting notification of these above auto generated comments. This issue was due to PAT (personal Access Token) which was mine and because it was me who was commenting (through Github Actions), Asana didn't post notification in my inbox.

For this problem, I created a Bot user named `FA Flutter Bot` which clearly specifies the context of who is the author of comment. Also this adds a professional look to our work.

## Conclusion

The above optimization seems small, but is realy helpful when you are working in enterprise mode where you have many a developers on project maintaining, developing and scaling the product.
