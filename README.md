
Live website: [We love vinyls frontend](https://we-love-vinyls-frontend-66f4e7fed390.herokuapp.com/)

![wireframe](</readme/assets/homepage.png>)

## Goal of the website
We love vinlys is an online platform dedicated to the buying, selling, and trading of second-hand vinyl records. Users can browse a wide range of vinyl records, connect with sellers, and negotiate exchanges or purchases. The site also features a directory of markets and events focused on vinyl records, providing users with information on where to find local or traveling vinyl fairs and meet-ups. The goal of We Love Vinyls is to create a vibrant community where vinyl enthusiasts can easily access and share their passion for music on vinyl.

# User experience

#### Importnace of the website:

- Access to Rare records:  Users can discover hard-to-find and rare vinyl records that might not be available in traditional stores.
- Convenient Trading and Selling: Users can easily sell or trade their vinyl records, helping them to refresh their collection .
- Event Information: The site offers information about local and international vinyl markets and events, giving users opportunities to engage in person, expand their network, and enjoy the vinyl community experience.
- Diverse Collection: With a wide range of genres and eras represented, users can explore and expand their musical horizons.
- Trust and Security: The platform ensures secure transactions and trusted interactions, providing peace of mind for buyers and sellers.

#### Design

I used the Invison app to create a wireframe, although it is not detailed. I made up most of the design when I started to edit, and I saw how it would look. 

<br>
Wireframe:
<br>

![wireframe](</readme/assets/wireframe.png>)
<br>
- **Colors:** I chose the colors with colorpicker form the photo and emoji.
<br>
Choosing red color: 
<br>

![red color](</readme/assets/choosing-red-color.png>)
<br>
<br>
Choosing yellow color: 
<br>

![yellow color](</readme/assets/choosing-yellow-color.png>)
<br>

- **Fonts:**
  - I used two fonts, one for titles, because it is prettier: Edu Australia VIC WA NT Hand
  -  and one simple for the readability: Roboto

- I used a mobile-first design, then made it responsive.
- I used Bootstrap and CSS design too.
- I tried to be as consistent as possible, so I attached more elements to the same file with the same ClassName so I don’t have to repeat myself.
I designed in the following order: After my code was mostly ready, I set up the structure for mobiles and made it responsive. Then, I added colors and fonts. I left design at last because, without all the ClassNames and styling elements, the code was cleaner and easier to read. Also, I prioritized working features over style.

<br>
Styling the structure first: 
<br>

![styling structure](</readme/assets/styling-first-structure.png>)
<br>

<br>
Adding fonts and colors: 
<br>

![add fonts and color](</readme/assets/add-fonts-and-colors.png>)
<br>

I chose the default profile picture, which can be a long-haired woman or a long-haired man. The shirt is yellow because the team is yellow.

The spinner I chose looks like a spinning vinyl record.

The favicon uses the same colors, font-family and font-style.  It is rounded, and with the heart in the middle, also looks like a record.

<br>
Favicon:
<br>

![favicon](</readme/assets/favicon-looks-like-vinyl.png>)
<br>

## Epics and user stories

I used GitHub projects to write down all the essential features I needed in my website using user stories. I divided my user stories into epics, making it easier to see my progress. I also labeled them by the MoSCoW prioritization: must-have should have, could have, won’t have. As I started/finished a task, I moved it from the to-do list to the in-progress and then the Done list.

<br>
Github project:
<br>

![github project](</readme/assets/github-project.png>)
<br>

All user stories have acceptance criteria also.

**Epics:**

- Epic:  User authentication and verification: Provide users with a secure and user-friendly authentication and verification system, including sign-up, log-in, and password management.

- Epic: User profile management: Enable users to create, edit, view, and delete their profiles to provide a personalized experience.

- Epic: Vinyl records management: Allow users to post, edit, delete, comment on, and like vinyl records to participate in the community actively.

- Epic: Markets and events management: Enable users to create, edit, delete, attend, and comment on events to actively participate in vinyl community events.

- Miscellaneous features: Provide users with various confirmations and error messages to ensure a smooth and understandable user experience.

I provided acceptance criteria also for my user stories.
As my project involved, I changed some prioritization, but this is the original version of my plans and user stories:


**User stories:**

**Must have**:

**Authentication: Sign up:** As a user, I can sign up to use all the website's features.

**Authentication: Login/out:** As a user, I can log in and out to protect my data and privacy.

**Profile: Edit/delete profile:** As a user, I want to be able to edit or delete my profile so I can change my mind about using the page and edit my errors.

**Records: Details of the records:** As a user, I want to read details about the record so I can decide whether I like it.

**Records: Edit/Delete records:** As a user, I want to edit my post so I can correct my mistakes, also want to delete the post in case the information is no longer relevant.

**Markets: Details of the markets:** As a user, I want to see the place, time, and duration so I can attend.

**Markets: Edit/Delete records:** As a user, I want to edit my event so I can correct my mistakes, and I also want to delete the event in case the information is no longer relevant.

**Miscellaneous: Styling website:** As a user, I want an eye-catching but easy-to-follow design so it gives a remarkable user experience.

**Miscellaneous: Menu: Easy navigation:** As a user, I want to easily access the website’s options so it is clear how to use the page.

 **Admin: Supervision:** As an admin, I want to supervise the profile and content from the admin panel, so I can remove inappropriate content.


**Should have** 

**Authentication: Forgotten password:** As a user, I can reset my password if I forget it.

**Profile: Uploaded records:** As a user, I want to see all the records the users uploaded so I can buy more at once. 

**Profile: Liked records:** As a user, I want to see all the records that I have liked so I can decide on them later.

**Profile: My events:** As a user, I want to see the events I want to attend (mark attend), so I don’t forget about them.

**Records: Like records:** As a user, I want to like a record so I can express what I like and others can also see that it is a good record.

**Records: Filtering:** As a user I want to have a search option so I can filter out the records I am looking for.

**Markets: Attend button:** As a user, I want to mark that I attend the event so the organizers know who to expect. I also want to be able to cancel my attendance.

**Markets: Filtering:** As a user, I want to be able to search by location to find events near me.

**Records: Comment section**: As a user, I want to comment under the records so I can ask questions and make a deal. I also want to edit and delete them, in case I change my mind.

**Miscellaneous: Confirmation:** As a user, I want confirmation about posted, edited, or deleted posts.

**Miscellaneous: Error messages:** As a user, I want to receive error messages if something goes wrong so I know what went wrong.

 **Could have**

**Authentication: Sign up with social media:** As a user I want to sign up with my social media account, so it is so much quicker.

**Profile: Past events:** As a user, I want to see the events I have attended so I remember.

**Records: Number of comments and likes**: As a user, I want to see the number of likes and comments so I can see how many people liked or commented on a particular record. This information can then refer me to more information about the product. 

**Markets: Number of attendees**: As a user, I want to see the number of attendees so I can determine the size of the event. 

**Miscellaneous: Menu: About and terms**: As a user, I want to read about the website's goals and how to use it.

**Profile: Messages:** As a user, I want to send private messages about the record I want to buy.


**won’t have**
 
Initially, I didn’t put anything here, just as the project involved. In the end, I put here the following, because I had no time to implement them:

- Profile: past events,
- Profile: messages
- Menu: about and terms
- Authentication: sign up with social media
- Authentication: forgotten password. 

However, to continue and evolve the project, I will revisit these items and put them in the next version.

I linked the back-end and front-end parts to the same project, and user stories only went to the “Done” section when they were all done in both parts. 

First, I wanted to separate them, but they connected so much that it made more sense.

### Existing features

**Authentication**:

- Sign up with a username
- Log in with username
- Log out 

**Profile**

- See all the profiles created - one by one, clicking on their names
- Edit own profile details
- Upload profile photo (change the default)
- Change password

**Records**

- See all the records created
- Add a record
- Edit that record
- Delete that record
- Like a record
- Dislike a record
- Comment on a record - edit and delete the comment.
- Search for a record by artist or title
- See the records the user liked
- See the number of likes of a record
- See the number of comments on a record

**Markets**

- See all the markets created
- Add a market
- Edit that market
- Delete that market
- Mark your attendance on the market
- Delete your attendance on that market
- See the number of people attending on that market
- Filter a market by country and city
- See the markets the user attends on

**Admin functions**

- View, edit, and delete users.
- View, edit, and delete profiles.
- View, edit, and delete records.
- View, edit, and delete markets.
- View, edit, and delete comments.

**Error handling**:

- Error message sent when the page is not found,
- Error message sent when authentication details are not correct
- Error message sent when a field can not be left empty
- Error message when the data format is not correct

-Success or error messages for: Adding/editing/Deleting records, Adding/Editing/Deleting market, Adding a comment

#### In progress (I had no time for it)

- Add more default profile photo options
- Add filter records by genre 
- Add forgotten password option
- Add pagination
- Optimize Performance 
- Add more success and error messages
- The one market page is shown if the ID is not seen; also, it is just an empty form. I want to build logic to check if ID exists, otherwise, send it to the page-not-found page.
- If the ID is not seen, the one record page is shown; it is just an empty form. I want to build logic to check if the ID exists; otherwise, it should be sent to the page-not-found page.

### Future features

- Improve the search field so that multiple words can be looked at once (now the first word counts)

- Have a private chat option

 
#### Ideas:

- Of course, an online shopping cart and payment system would complete the website.

## Deployment and forking

-**Create Github project**

1. Create a new repository
2. In the menu click on project > Link a project > Create new project
3. Click on Board, and give a name > Create
4. Click on the three dots menu, choose workflows
5. Item added to project > Edit
6. Click on issue dropdown, select issue, unselect pull request
7. Status value: status to do > green button: Save and turn on workflow.
8. In your project’s three dots menu (exit workflow) click on Settings
9. In the danger zone section choose visibility.
10. Add user story template: Go to your repository’s settings > Features > Issues > Set template > Custom template (fill out) > Propose changes > Commit changes
11. Add user stories: In your repository’s menu click on issues > new issue > Get started! > Fill out, add labels, connect with your project > Submit a new issue

<br>

- **Github forking:**

1. Go to the selected repository and click on Fork on the top right side.

2. Select an owner of the forked repository on the dropdown
3. Write a description and select the Default branch only for open-source projects.
4. Click on Create fork.
5. Go to your forked repository.
6. Click on Code, and copy the URL / or open with your Github desktop.
7. With the URL open your terminal, and write git clone and paste it. Enter.

<br>

- **Front-end Heroku deployment:**

1. On the Heroku dashboard, create new app with unique name

2. Git add, commit, push to GitHub

3. On Heroku’s page click on the Deploy tab, and connect your app with your GitHub repository.

4. Click on deploy branch - manually or you can set it up automatically.

5. On the resources tab choose your plan (eco dinos). Verify that there is no existing Postgres database add-on, if so, click on Delete Add-on.

6. After having static files, always run the collectstatic command before deployment.

7. If any error occurs, can see the deployment log - on the top right side click on more, and choose view vlogs. Otherwise, view app.


## Work progress

I followed the agile methods and MoSCoW labeling - must have, should have, could have, and won't have. I prioritized and did first what was most important, then left the less important things to the end, setting up the won't have features as future features.

I started with the backend, since that is the base of the app, moved to the front end, and left styling for the end since I prioritized working features over style.

I was continuously making notes, so I wrote down new ideas, what was working, what was not, and where I needed to return. Where I met with an error I couldn't handle, rather moved on due to the time frame I had and decided to return later.

I always opened dev tools and source code to check how the data returned, look for different details, or try out different styles. 
The “Network” feature helped me the most with debugging, as I could follow requested and received data. I also tested lots of data with console.log.

I worked on more user stories simultaneously.

I worked on the record and market section parallel, so by repeating all the little steps made me learn more.

I started coding in VSCode and then changed to GitPod in case I needed tutor help. When I made the transition, I set up a separate branch and worked on that for debugging. Then, I pulled and got back to the main branch. 
 I got used to using GitHub desktop to follow my changes and commits, so without seeing that, I got a little lost on what I had committed or not, so I made some commits in bigger chunks.

I used traditional and arrow functions also. 

<br>
Debugging with console.log:
<br>

![Debug with console.log](</readme/assets/debug-with-console-log.png>)

<br>

<br>
Debugging with dev tools Network:
<br>

![Debug on network](</readme/assets/debug-on-network-1>)

<br>

![Debug on network](</readme/assets/debug-on-network-2>)

<br>


### Set up the front end

1. Set up backend - (We love vinyls)[https://we-love-vinyls-b-74b4f31a8a78.herokuapp.com/] 
2. Create a new repository, set up react 
3. Set up React Bootstrap
4. Set up the navigation bar
5. Add routing 
6. Set up Axios
7. Add sign-up option
<br>
Password error test:
<br>

![Password error test](</readme/assets/password-error-test.png>)
<br>

<br>
Backend is connected to frontend:
<br>

![Backend is connected to frontend](</readme/assets/backend-registrated-from-frontend.png>)
<br>

8. Add a log-in option

<br>
Log in error test:
<br>

![Log in error test](</readme/assets/log-in-error-working.png>)

<br>
9. Add current user context
10. Set up interceptors
11. Add more links to the menu
12. Add log-out option
13. Add a profile photo to the menu
14. Fix the hamburger menu
15. Create Add_records and Add_markets form and set up axios
17. Create One_market and One_record page.
19. Set up utils.
20. Create Show_market and Show_record page.
22. Add like and attendance.
23. Add filters - My_markets and My_records pages.

I created files (GetMarketList and GetRecordList) to get all the API details. I put them in the hooks folder, which made the most sense by usage.

I created the All_records and All_markets files, which lists all the data according to the filters. I also created filtered files separately. 

First, I wanted to call my Like model as a filter, but that would have required a different API call. So, instead, I added the liking_members detail to the records filter in the back-end so I could reuse my API call and All_records file.   

24. Create separate Liked_record and Attended_markets pages .
25. Set up Search function
26. Create the dropdown for deleting and editing options
27. Add edit Record and edit Market page.
28.  Add Comment section
29. Set up user profile
30. Add Advertised_records section
31. Add Organized_markets section
30. I started styling at this point.. starting with the structure and layout of the elements
31. Create a toggle for Adding a record  or a market
32. Add edit and delete comment options


 ### Add details, functions, and optimization:

33. Add icons
34. Add showDropdown functionality so I can only see the Add-toggle on the relevant pages
35. Add back buttons, to go back to the previous page
36. Set up “active page”
<br>
When the active page is “My markets”:
<br>

![active page 1](</readme/assets/active-page-my-markets.png>)
<br>
When the active page is “Going”:
<br>

![active page 2](</readme/assets/active-page-going.png>)
<br>

37. Set up a condition for record and market titles that they only should be clickable in a list, but when we open them, they shouldn’t
<br>
Before link conditional:
<br>

![before link conditional ](</readme/assets/before-link-conditional.png>)
<br>

<br>
After link conditional:
<br>

![after link conditional ](</readme/assets/after-link-conditional.png>)
<br>

38. Add Infinite Scroll

There is no pagination yet, so it does not make much sense, but when I add pagination, it will work fine!

39. Add title and favicon
40. Separate bootstrap import by their own folder
41.Delete unnecessary files and imports
42. Add active class to the main menu 
43. Add comments to some functions, where the naming might not be clear, to describe what they are for.
44.  Change namings.
I’ve read, that ”Every event uses a camelCase naming convention, and the handler function they run is prefixed with "handle", followed by the event name.” (freeCodeCamp)[https://www.freecodecamp.org/news/how-to-handle-events-in-react-19/]
45. Add notifications for successful and failed actions.
46. Correct format, validate
47. Final deploy

<br>
Success notification:
<br>

![success](</readme/assets/success-notification.png>)
<br>

<br>
Error notification:
<br>

![error](</readme/assets/error-notification.png>)
<br>

### Languages

- HTML
- CSS
- JavaScript React

### Libraries and frameworks:

- Django, Django REST framework (Back-end)
- REACT 

imports:

### Tools, programs, and technologies

- [VSCode](https://visualstudio.microsoft.com/downloads/)
- GitHub projects
- GitHub Desktop
- [React Bootstrap](https://react-bootstrap.netlify.app/)
- Heroku
- [Image resizer](https://www.simpleimageresizer.com/upload)
- [Shecodes box-shadow generator](https://generators.shecodes.io/css-box-shadow-generator)
- [Chrome color picker](https://chrome.google.com/webstore/detail/color-picker-for-chrome/clldacgmdnnanihiibdgemajcfkmfhia)
- [favicon.io](https://favicon.io/)
- [Invision wireframe](https://www.invisionapp.com/)

### Validating

- [W3C CSS validator](https://jigsaw.w3.org/css-validator/) :
<br>

![no-css-error ](</readme/assets/no-css-error.png>)
<br>

- [W3C HTML validator](https://validator.w3.org/):

<br>

![no-html-error ](</readme/assets/no-html-error.png>)
<br>

- [Am I responsive](https://ui.dev/amiresponsive):

<br>

![am-i-responsive ](</readme/assets/am-i-responsive.png>)
<br>

<br>


- Corrected format with [Prettier](https://prettier.io/playground/)

Corrected React errors with  [Eslint](https://eslint.org/)
I tried first eslint, but it didn’t let to deploy my code, so I deleted it and asked for tutor help to set it up. 
Just to be sure, I made a new branch - eslint, so it doesn’t mess up my code, I installed it there.
It shows errors for the console.log(err)-s, because I commented them out. So they are not used but defined.
I deleted the comment-outs, and it showed no error. 
I want to leave the commented-out console.log-s for easier error handling in case it is needed, so that is the “error” in my code.

Eslint was not compatible with my node, so I upgraded the node for the time the validation was going on, and then I deleted eslint; otherwise, it caused an error in my deployment. 

There were only a few errors, so I compared my eslint branch and main branch and corrected the main code by hand according to the eslint branch. 

You can see both branches in my GitHub, but since eslint caused many problems in my branch code, I didn’t want to pull it into my main code, so I chose to correct it by hand.

<br>
(err) is not used errors - because I commented them out in the console.log:
<br>

![eslint error](</readme/assets/only-console-log-error-eslint.png>)
<br>

<br>
console.log is not commented out:
<br>

![no eslint error](</readme/assets/no-error-eslint.png>)
<br>

<br>
Copy the corrected code from the eslint branch to the main branch: 
<br>

![copy corrected code to main branch](</readme/assets/copy-eslint-corrections-to-my-code.png>)
<br>

## Testing


Authentication: 

What to do | How to do | Expected outcome | Actual outcome
| :--- | :--: | :--: | :--:
| Open the page | Click on the URL | It shows the homepage |  It shows the homepage
| Log in | Click on log in page, fill out login details, click on log in |  It brings you to the homepage |  It shows the login page | It brings you to the homepage
| Log in with wrong details | Fill in the wrong username & password, click on Login |  It shows me an error message | It shows me an error message, it says: "Unable to log in with provided credentials."
| Log in with missing details | leave username empty, click on Log in |  It shows me an error message |  It shows me an error message "Must include \"username\" and \"password\"."
| Log in without password | Fill in the username, click on Log in |  It shows me an error message | Error message: "This field may not be blank."
| Log out | Click on log out |  It redirects to homepage |   It redirects to homepage
| Sign up | Click on sign up, fill out the details |  It redirects to login page |   It redirects to login page

<br>
Login error:
<br>

![login-error](</readme/assets/login-error.png>)
<br>

Markets: 

What to do | How to do | Expected outcome | Actual outcome
| :--- | :--: | :--: | :--:
| See all the markets | Click on markets |  See the list of markets |  See the list of markets
| Add a market logged in | Click on +Add Market, fill out the details, and click on Add market |   It shows success notification and brings me to the new market’s page |  It shows success notification and brings me to the new market’s page
| I can go back if I don’t want to upload the market | Click on the back button, or click on +Add market again |   Back button brings you to the market list page, +Add button closes the form |  Back button brings you to the market list page, +Add button closes the form
| Fields need to be filled  | I leave the fields empty one by one before submitting  | It doesn’t submit, except if only the description is empty  | It doesn’t submit, except if only the description is empty
| Fields need to be valid | I don’t fill out time or date | Error says time and date needs to be in the right format |  Error says time and date needs to be in the right format
| Add a market without logging in | I click on markets | Add button and Form is not shown | Add button and form is not shown
| Go to one market page |I click on the title of one market in the list |  It shows only that one market and the title is not clickable anymore  |  It shows only that one market and the title is not clickable anymore
| Edit market if I am the organizer| I click on gear emoji, then click on edit emoji,  fill in the details, and save |  It shows me a success message and shows the edited market |   It shows me a success message and shows the edited market
| Delete market if I am the organizer | I click on gear emoji, then click on delete emoji |  It shows a success message and redirects to the market list page  |  It shows a success message and redirects to the market list page 
 | Edit market if I am not the organizer| No gear emoji is shown |  No gear or edit emoji |  No gear or edit emoji
| Delete market if I am not the organizer | No gear or edit emoji | No gear or edit emoji  |  No gear or edit emoji 
| Search market | I go to the market list page, type city or country in the search field | It shows match or No markets found message |  It shows match or No markets found message
| Case insensitive search | I fill out country and city name with small letters only | I see the same results |  I see the same results
| See my uploaded markets | I go to My Markets, and click on My markets | I see the markets I uploaded or message, no markets to show |  I see the markets I uploaded, or message, no markets to show 
| See the markets I attend at | I go to My Markets, and click on Going | I see the markets I marked to attend, or it says no markets to show| I see the markets I marked to attend or it says no markets show
| See how many people going to a market | I look at the market’s details | I see an emoji with a number | I see an emoji with a number
| Attend on the market | I click on the emoji | The emoji lifts its hand, and the number grows with one. I can also find this market on my markets page | The emoji lifts its hand, and the number grows with one. I can find this market on my markets page, too
| Unattend on a market | I click on the emoji | The emoji puts down its hands, and the number decreases with one. I can not find this market on my market page anymore | The emoji puts down its hands, and the number decreases with one. I can not find this market on my market page anymore
| Attend on a market without logging in | I click on the emoji | The emoji says I need to log in to attend | The emoji says I need to log in to attend
| Attend on my own market | I click on the emoji | The emoji says I can’t change the attendance on my market | The emoji says I can’t change the attendance on my market

<br>
Case insensitive market search:
<br>

![case-insensitive-market-search](</readme/assets/case-insensitive-market-search.png>)
<br>

<br>
Log in to attend:
<br>

![log-in-to-attend](</readme/assets/log-in-to-attend.png>)
<br>

<br>
Search field no match:
<br>

![no-markets-found-searchfield](</readme/assets/no-markets-found-searchfield.png>)
<br>

<br>
No markets uploaded:
<br>

![no-markets-uploaded](</readme/assets/no-markets-uploaded.png>)
<br>

<br>
Not going to any markets:
<br>

![not-going-to-any-markets](</readme/assets/not-going-to-any-markets.png>)
<br>

<br>
Add market obligatory fields:
<br>

![obligatory-fields-market](</readme/assets/obligatory-fields-market.png>)
<br>

Records: 

What to do | How to do | Expected outcome | Actual outcome
| :--- | :--: | :--: | :--:
| See all the record | Click on records |  See the list of records |  See the list of records
| Add a record logged in | Click on +Add record, fill out the details, click on Add record |   It shows success notification and brings to the new record’s page |  It shows success notification and brings me to the new record’s page
| I can go back if I don’t want to upload the record | Click on the back button, or click on +Add record again |   Back button brings you to the record list page, +Add button closes the form |  Back button brings you to the record list page, +Add button closes the form
| Fields need to be filled  | I leave the fields empty one by one before submitting  | Artist and title is obligatory to fill out  | Artist and title is obligatory to fill out
| Released field needs to be valid | I fill out random numbers | it throws an error if the number is not between 1900-2024 |   it throws an error if the number is not between 1900-2024
| Price field needs to be valid | I fill out random numbers and letters | It throws an error if I used more than 9 characters |   it throws an error if I use more than 9 characters
| Add a record without logging in | I click on records | Add button and Form is not shown | Add button and form is not shown
| Go to one record page |I click on the title of one record in the list |  It shows only that one record, it shows the comment section too, and the title is not clickable anymore  |  It shows only that one record, it shows the comment section too, and the title is not clickable anymore
| Edit record if I am the organizer| I click on gear emoji, then click on edit emoji,  fill in the details and save |  It shows me a success message and shows the edited record |   It shows me a success message and shows the edited record
| Delete record if I am the organizer | I click on gear emoji, then click on delete emoji |  It shows a success message and redirects to the record list page  |  It shows a success message and redirects to the record list page 
 | Edit record if I am not the organizer| No gear emoji is shown |  No gear or edit emoji |  No gear or edit emoji
| Delete record if I am not the organizer | No gear or edit emoji | No gear or edit emoji  |  No gear or edit emoji 
| Search record | I go to the record list page, type city or country in the search field | It shows match or No records found message |  It shows match or No records found message
| Case insensitive search | I fill out artist or title with small letters only | I see the same results |  I see the same results
| See my uploaded records s | I go to My records, and click on My records | I see the records I uploaded or message, no records to show |  I see the records I uploaded, or message, no records to show 
| See the records I like | I go to My records, and click on Liked | I see the records I liked, or it says no records to show | I see the records I liked or it says no records to show
| See how many people like to a record | I look at the record’s details | I see a heart  emoji with a number | I see a heart emoji with a number
| See how many people commented on the  record | I look at the record’s details | I see a bubble  emoji with a number | I see a bubble emoji with a number
| Like a record | I click on the heart emoji | The emoji turns red, and the number grows with one. I can find this record on my records page, too | The emoji turns to red, and the number grows with one. I can find this record on my records page, too
| Dislike a record | I click on the emoji | The emoji turns white, and the number decreases with one. I can no longer find this record on my record page | The emoji turns white, and the number decreases with one. I can not find this record on my record page anymore.
| Like if I am not logged in | I click on the emoji | The emoji says I need to log in to like | The emoji says I need to log in to like
| Like my own record | I click on the emoji | The emoji says I can’t like my record | The emoji says I can’t like my record

<br>
Vinyl price length limit:
<br>

![price-length-limit](</readme/assets/price-length-limit.png>)
<br>

<br>
Must be released after 1900:
<br>

![released-later-than-1900](</readme/assets/released-later-than-1900.png>)
<br>

<br>
Must be released in 2024:
<br>

![released-sooner-than-2024](</readme/assets/released-sooner-than-2024.png>)
<br>

<br>
Log in to like:
<br>

![log-in-to-like](</readme/assets/log-in-to-like.png>)
<br>

<br>
Edit and delete emojis:
<br>

![edit-delete-emoji](</readme/assets/edit-delete-emoji.png>)
<br>

Comments:

What to do | How to do | Expected outcome | Actual outcome
| :--- | :--: | :--: | :--:
| See all the comments | Click on the title of a record or the bubble emoji |  I see the list of comments |  I see the list of comments
| Write a comment | I fill out the form and click on Add comment |  I see my comment on the top, and I get a notification that comment is added |   I see my comment on the top, and I get a notification that comment is added
| Write a comment if I am not logged in | I go to records page… |  No option to write comment |   No option to write a comment
| Edit a comment | I click on the gear emoji, click on edit emoji, and click on save |  I can see my updated comment |   I can see my updated comment
| Don’t want to continue editing the comment | I click on the back button |  It goes back to the record and its comments |  It goes back to the record and its comments
| Delete comment | I click on the gear emoji, then delete emoji |  It brings me back to the comments, and I can’t see the deleted one anymore |  It brings me back to the comments, and I can’t see the deleted one anymore

<br>
Logged out - no comment option:
<br>

![logged-out-no-add-comment](</readme/assets/logged-out-no-add-comment.png>)
<br>

Users:

What to do | How to do | Expected outcome | Actual outcome
| :--- | :--: | :--: | :--:
| See my profile | Click on my photo and name in the menu |  I see my profile |  I see my profile
| See others’ profile | Click on my photo and name next to market title/record title or comment |  I see their profile |  I see their profile
| Edit my profile | Click on the gear emoji and edit emoji, fill out the form, and click on edit profile |  I get a success message, and I see my edited profile |  I get a success message, and I see my edited profile
| I don’t want to continue editing my profile | Click on the back button |  It brings me back to my profile view |  I brings me back to my profile view
| Change password | Click on gear emoji and locket emoji, fill out the form, and click on save password |  I get a success message, and go back to my profile |  I get a success message, and go back to my profile
| See what markets other users uploaded | Go to the user profile, and under their details, click on My markets |  I see all markets that the user uploaded, or it says no market to show |  I see all markets that the user uploaded, or it says no market to show
| See what records other users uploaded | Go to the user profile, and under their details, click on My records |  I see all records that the user uploaded, or it says no record to show |  I see all records that the user uploaded, or it says no record to show

<br>
Profile details:
<br>

![profile-details](</readme/assets/profile-details.png>)
<br>

<br>
Edit and change password emojis:
<br>

![profile-gear-emoji](</readme/assets/profile-gear-emoji.png>)
<br>

Design:

What to do | How to do | Expected outcome | Actual outcome
| :--- | :--: | :--: | :--:
| Responsive | I go to developer tools and check it on different devices |  It looks good at any size of screen | It looks good at any size of screen
| The menu has active class | I click on menu links one by one | The link for the page where I click has a different color (except the homepage)  | The link for the page where I am has a different color (except the homepage)
| The links and buttons change color when I click on them | I click on links and buttons | Their color changes when I hover and click on them | Their color changes when I hover and click on them
| +Add buttons and menu get yellow border when I hover them | I hover them and click on +Add buttons | They get yellow border | They get yellow border

<br>
Menu active class:
<br>

![menu-active-class](</readme/assets/menu-active-class.png>)
<br>

<br>
Menu hover design:
<br>

![menu-hover-design](</readme/assets/menu-hover-design.png>)
<br>

Other:

What to do | How to do | Expected outcome | Actual outcome
| :--- | :--: | :--: | :--:
| Go to a page that does not exist | I type random letters to the URL |  It shows page not found | It shows page not found
| There is a spinner shown when the page is loading | I open the records or markets page |  It shows the spinner | It shows the spinner
| When I am logged in, I can’t access them in or sign up page | I log in and add signup/login to the URL |  It redirects to the homepage | It redirects to the homepage

<br>
Page does not exist:
<br>

![page-does-not-exist](</readme/assets/page-does-not-exist.png>)
<br>

<br>
Loading spinner:
<br>

![spinner](</readme/assets/spinner.png>)
<br>

<br>
**Lighthouse checks for desktop devices:**

**Desktop:**

<br>

![Desktop lighthouse](</readme/assets/desktop-lighthouse.png>)
<br>

Performance: 72%
Accessibility:96%
Best practices:93%
SEO:100%

**Mobile:**

<br>

![Desktop lighthouse](</readme/assets/mobile-lighthouse.png>)
<br>

Performance: 53%
Accessibility:96%
Best practices:93%
SEO:100%

<br>



### Bugs and solutions

1. I couldn't type in the form. Solution: I left out the name attribute in the form controls.

2. Access to XMLHttpRequest at 'https://we-love-vinyls-b-74b4f31a8a78.herokuapp.com/dj-rest-auth/registration/' from origin 'http://localhost:3000' has been blocked by CORS policy. Solution: I needed to correct the cors headers on the back end.

3. Couldn’t open the site on Gitpod – I needed to downgrade my node.js from version 20 to 16.

4. I am logged out when I hit the post button - solution: set up utils.

5. I click on like / attendance, and nothing happens.. error: “attended_market field is required” - I added the field

6. Filter was not working.. so I checked what the backend gives back, which was correct, when checked headers in the frontend, the URL was ${filter} instead of the requested data - because I used “ instead of ` :)

7. The search field does not work on my records, only all records. The reason is that the filter and search field do not work together, either this or that on my backend.
First, I put the search field in to separate file because the plan was to only include search at the top of the list document, but my filter page still expected a query, so the solution: 

I set up an if statement for the URL, in which it only sets up query if there is no filter. 

<br>
Set up a condition for the url:
<br>

![set up condition for url ](</readme/assets/set-up-condition-for-url.png>)
<br>

8. Market search is not working - because in the back end I have filter field and not search field, so the URL is not search=, but country =. Solution: Changed filterfield to search field in the back end.

9. Comment doesn’t show. Needed to add this: setComments(prevState => ({...prevState, results: [...comments] })). 
Plus, sort out record and commented_record names.

13. I couldn’t call the profile from the records or market page because the backend serializers only set up the username, not the ID. Solution: I also added the ID.

14. I wanted to add the My Records page to the Profile page, to show the records the person advertised, but that showed the current user’s records. So I created a new advertised records page, where I forwarded the user’s ID as a prop.

15. The image didn’t show... I needed to add the image to the serializers, too. 

17. Dislike is not working… Needed to add like_id to serializers

18. I logged out, but keeps me from logging in.. so temporarily deleted the redirection… in my back-end views, I didn’t import the refresh token.



**Known bugs:**

none

## Credits and sources

### Content:

These code snippets are written by (chatGPT)[https://openai.com/chatgpt/]: 

1. if (Array.isArray(data)) {
          setRecords({ results: data });
        } else if (Array.isArray(data.results)) {
          setRecords({ results: data.results });
        } else {
          console.error("no result problem:", data);
        }


2. const hasActiveFilter = filter && filter.trim() !== ""

I followed and adapted the Code Institute walkthrough project: Moments.

Details of the albums: [Wikipedia](https://www.wikipedia.org/)

All market details are just made up and not valid! No real markets are organized! The users are also made up of fake data. 

### Style

[React Bootstrap official document](https://react-bootstrap.netlify.app/docs/)

### Images, fonts

**images:**

- default profile picture: [undraw](https://undraw.co/)
- default record: Photo by [Brett Jordan](https://unsplash.com/@brett_jordan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/black-and-white-vinyl-record-hrUhyFq6u-A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

Upload PNG: [PNGTree](https://pngtree.com/freepng/image-upload-icon-photo-upload-icon_5279795.html)

Loading circles: 
[react-loader-spinner](https://mhnpd.github.io/react-loader-spinner/docs/components/three-circles/)

Backgorund photo 1: [pixabay, Wikimediaimages](https://pixabay.com/photos/vinyl-lp-record-angle-2202325/)

Backgorund photo 2: [Unsplash, Eric Krull](https://unsplash.com/photos/black-vinyl-record-on-black-vinyl-record-fi3_lDi3qPE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash])

Icons:
[Font awesome](https://fontawesome.com/)

**fonts**:
-font families: [Edu Australia VIC WA NT Hand](https://fonts.google.com/specimen/Edu+VIC+WA+NT+Beginner?preview.text=welcome%20to%20vinyl%20heaven%20Going%20Add%20record&classification=Handwriting)

[Roboto](https://fonts.google.com/specimen/Roboto)


Special thanks to Code Institute tutor support for helping out with troubleshooting.
