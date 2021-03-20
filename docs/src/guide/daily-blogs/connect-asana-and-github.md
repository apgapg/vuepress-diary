# Connect Asana and Github <Badge text="Tech"/>

## Background 

_20 March 2021_

At my workplace, we use [Github]() as Version Control System (VCS), and [Asana]() for project task management. Everytime we start any task we need to manually comment its status until completion. 

This created difficulties sometimes as we forget to update task with relevant comments, causing vague in our day to day scrum.

## Solution

Recently i came to know about [Github Action for Asana](https://github.com/marketplace/actions/asana-git). This helped me to atleast comment on Asana task that I have raised Pull Request (PR), automatically whenever I raise PR.

Again this didnt fully fulfill my purpose. I wanted to comment merged PR also whenever a PR is merged or closed. Hence I forked the respository and edited the action to support commenting PR merged status also. (If you want to checkout the source code, see [apgapg/github-asana-action](https://github.com/apgapg/github-asana-action)).

Whola! It fulfills our purpose for now. No worries to maintain task status. Just raise PR.

## Bot User

While developing te feature I came across a problem of not getting notification of these above auto generated comments. This issue was due to PAT (personal Access Token) which was mine and because it was me who was commenting, Asana didn't post notification in my inbox.

For this problem, I created a Bot user named `FA Flutter Bot` which clearly specifies the context of who is the author of comment. Also this adds a professional look to our work.

## Conclusion

The above optimization seems small, but is realy helpful when you are working in enterprise mode where you have many a developers on project maintaining, developing and scaling the product.