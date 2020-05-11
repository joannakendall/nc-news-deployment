# NC news - Joanna Kendall

https://nc-news-joanna-kendall.netlify.app/articles

NC News is a server where users can post articles about topics such as coding, cooking, football. The user is also able to post comments, vote on both comments and articles and delete their comments. NC news was created using react.

Each section is split into components in the components folder. These contain the code for each section of the page, for example the Header is in the components folder under Header.jsx and likewise for Artiles, Comments, VoteUpdater e.t.c. The css for specific components is in the css folder for.


## Getting Started

Please follow the instructions to get the project up and running.

## Set Up

Ensure latest version of Node is installed. v12.14.0

Clone data onto local machine:

``` git clone https://github.com/joannakendall/nc-news-deployment ```

``` cd fe-nc-news ```

Install node dependencies, the dependencies can be found in the package.json file,

Example:

``` npm install @reach/router```

## Deployment

After committing changes and pushing to GitHub run the following code in the terminal.

Create an updated build version of your code:
```  npm run build ```

Deploy to a draft url:

``` cd ./build ```
``` netlify deploy```

Deploy to your production url:

``` netlify deploy --prod ```

Provide a deploy path e.g './build'

Click on the webiste URL to view in the browser.

## Back End Server

https://nc-news-joanna-kendall.herokuapp.com



## Author 
Joanna Kendall

## Acknowledgments
Thank you to the Manchester Northcoders Team.


