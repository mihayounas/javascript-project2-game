# **_Brain Wizzz_**

Brain Wizzz memory game is a game that challenges people visual memory in order to match two cards to clear the board.

Welcome to <a href="https://mihayounas.github.io/javascript-project2-game/" target="_blank" rel="noopener">Brain Wizzz</a>
![Wireframes](/assets/images/wireframes.png)


# Site Structure

Brain Wizzz Memory game website one [landing-page](index.html) and a pop up modal with game description and 3 difficulty levels to chose from.
* Intuitve instructions modal -easy to use and understand.
* Call to action: Encourage the user to take action.

# Game Board

* Cards: clickable, and turn on click.
* Logic: if the cards match ,they will remain revealed.
* Moves counter: after each move (when two cards turned) the counter updates.
* Congratulations modal -when all the pair have been found this modal will pop up.
* Call to action: encourage the user to take action. Chose a different level.
* Refresh and ifor button will restart the game and the info modal will reappear .
## Design
* ### Font 
The fonts chosen were 'Josefin' and 'Lobster'.The fall back is sans-serif. The two fonts chosen go really good together and it provides really good contrast .

* ### Colour Scheme
 The color scheme chosen is based on pink,purple and black .The colors are consistent throughout the website .
 ![Color-scheme](/assets/images/colorpallette.png)

# Features
Brain Wizzz website is set up to be easy to use . It contains features that a user would be fimiliar with ,such as game levels Easy,Medium and Hard.Also user will be able to see the moves he made,how many cards he matched and how long did he take to play.
![Landing-Page](/assets/images/landing.png)

## Existing Features

* ## Heading and Title
* Includes the name of the game .
![Title](/assets/images/title.png)
  

* ### Game Area 
* Section dedicated to the game area board where all the cards are loaded for the purpose of playing and matching the cards.
Depending on the level chosen it can be 8 , 12 or 16.
* It includes a Refresh button with the purpose of reloading the page but also loading the game info modal.
![Game-Area](/assets/images/game.png)

* ### The Pop up Modal
* Section controled with JavaScript that will pop up on loading the page for the user to understand the game and select the desired level of difficulty. 
![Modal1](/assets/images/popup1.png)
* ### The Congratulations Modal
* Section controled with JavaScript that will pop up on finishing the level and showing the results , for example the cards that have been matched ,time and how many moves.The player will also have a choice of a different level.
![Congrats](/assets/images/congrats.png)

# Technologies Used
* [HTML5](https://www.w3schools.com/html/) - provides the content and structure for the website.
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - provides the styling.
* [JavaScript](https://www.w3schools.com/js/)-provides interactivity.
* [Gitpod](https://www.gitpod.io/#get-started) - used to deploy the website.
* [Github](https://github.com/) - used to host and edit the website.

  # Testing:
Brain Wizzz website has been properly tested ,all the code has been run through the W3C html Validator,W3C CSS Validator and JavaScript Validator. Minor errors were found on the first About us page. After fixing and retesting, no errors were found .

  ### HTML validator results are :

* Landing Page
![W3C Validator test result](/assets/images/htmlvalidator.png)

### CSS validator results are below:

![CSS Validator test result](/assets/images/css.png)

### Javascript Validator results are below:

![Javascript Validator test results](/assets/images/javascript.png)

## Responsiveness Test

* The responsive design tests were carried out manually with [Responsive Design Checker](https://www.responsivedesignchecker.com/) ,I can confirm that all the tests were passed.
![Responsive-design-checker-image-desktop](/assets/images/desk.png)
![Responsive-design-checker-image-mobile](/assets/images/mobile.png)
* The testing was also done through Google Chrome Dev Tools by selecting a device of your choice as follows :

![Dev-Tools-image](/assets/images/responsive1.png)

![Dev-Tools-Devices-image](/assets/images/responsive2.png)

## Browser Compatibility

Rex Removals site was tested on the following browsers with no visible issues for the user:
1. Google Chrome 
2. Safari 
3. Mozilla Firefox
* Appearance, functionality and responsiveness were consistent throughout for a range of browsers and device sizes. 


## Known Bugs
* ### Resolved
* html 1 error - of empty heading.
![empty-heading-resolved](/assets/images/error.png)
* Favicon icon not loading into the console - fixed- the icon could not be found because of the name so renaming it fixed the error .

    ## Future Features :
   Brain Wizzz website will be definetly updated in the future with following :
   * Multiple player option will be added;
   * Performance stars will be added;
   * Best score and best time will be also added to the game
   * Timed mode: add a timer to make the game more challenging, i.e. finish game before timer runs out.
   

    ## Additional Testing
### Lighthouse
The website was tested using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome Developer Tools to test each of the pages for:
* Performance - How the page will be loading.
* Accessibility - Checking if the website is  accessible for all users and how can it be improved.
* Best Practices 
* SEO - Search Engine Optimisation. This helps us to understand if the website is optimised for search engine result rankings.

The results are as follows:

1. For the Desktop:

![Lighthouse-Desktop](/assets/images/desktop.png)

2. For the Mobile:

![Lighthouse-mobile](/assets/images/mobilelighthouse.png)

 * ### Deployment: 
The site was deployed to GitHub pages. 
The steps to deploy a site are as follows:
  1. In the GitHub repository, navigate to the **Settings** tab.
  2. Once in Settings, navigate to the **Pages** on the left side menu.

  ![Deploying](/assets/images/git.png)

 The live link to the Github repository can be found here : https://mihayounas.github.io/javascript-project2-game/ .

 ### **To create a local clone of this project**
The method from cloning a project from GitHub is below:
1. Under the repository’s name, click on the **code** tab.
![Clone-img](/assets/images/clone.png)
2. In your preffered IDE open **Git Bash**
3. Change the working directory with the location where you would like your clone to be created .
4. Type **git clone** and the paste the URL copied previously.
5. **Enter** button to be pressed and the clone will be created.

# Credits

### Content

* The font came from [Google Fonts](https://fonts.google.com/).
* The colour scheme was made by [Colormind](http://colormind.io/).
* Sound effect came from [Notification Sounds](https://notification-sounds.com/)
* The icons came from [Favicon icon](https://favicon.io/).
* Wireframe was done on [Moqups](https://app.moqups.com/)
* Some of the code ideas came from  [Stack Overflow](https://stackoverflow.com/).
* Some more research on Slack .

 ### Media
 * The photos all came from [Google](google.com)
 
   # Acknowledgements
The site was completed as a Portfolio 2 Project 2 (JavaScript+Html+Css)for the Full Stack Software Developer at the [Code Institute](https://codeinstitute.net/). As such I would like to thank my mentors [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/), and [Anton Zaharia](http://www.linkedin.com/in/antonzaharia/) for their help and support.
  
  
 
Mihaela Younas 2022.


