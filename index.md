## One.Beer.Later.

The application we intend to build is to showcase all the CRAFT beer locations in a given area that is searched for by the user. We feel this will be a useful application because of the influx of craft beer to the market. We feel that people would be able to utilize this application when travelling to new cities and looking for popular spots to find their favorite craft brews.

## Project Roles by Contributor

**Jason Paffenback**: Project Manager/CSS/Landing Page -- keep everyone aligned with project goals. Work on the landing page and help with user authentication. Provide help with styling on the entire project.

**Taylor Yao**: User Authentication/React Components/Routing -- Work with everyone on user authentication. Help with creating the React components. Help building the routes to the MongoDB.

**Anthony Mitchell**: Google Maps API/Beer Mapping API/MongoDB -- provide the API information needed to populate the map with the craft beer locations and all info provide by the Beer Mapping API. Scrapping all the JSON info into a database to be used for React Components.

## Projected Dates for Task Completion

**Thursday 7/5**: Basic landing page with user authentication.

**Friday 7/6**: API information scrapped into MongoDB for use in React components. Styling for landing page. React components built.

**Saturday 7/7**: Continue working on React components and styling for second page with map and craft beer location list.

**Sunday 7/8**: Have all routes working and pages being populated with info provided by user and APIs.

**Monday7/9**: Finish styling and have application working.


## Gitkraken Glo Boards for Project Tasks

This is a link to our GitKraken Glo Board Page: https://app.gitkraken.com/glo/board/Ww3km08ztxUAGlIw

## Design Layout for One.Beer.Later.

https://xd.adobe.com/view/28dddea4-2989-4c9b-482a-ef24dade8e3b-5eec/

## Deliverable 2

## Screenshot of Glo Board as of 7/10
![board](https://user-images.githubusercontent.com/32781426/42548749-b455e466-8496-11e8-91c7-138fc64eeba7.JPG)

## Screenshot of Landing page of app.
![landing](https://user-images.githubusercontent.com/32781426/42548774-d068d01e-8496-11e8-8639-8fcda28eabf0.JPG)

## Screenshot of Login page of app.
![login](https://user-images.githubusercontent.com/32781426/42548782-d4da16a8-8496-11e8-9230-93f4c85efca4.JPG)

## Deliverable 3

## Problem faced (resolution)
*	Deploying to Heroku (created build package in client)
*	Routes not functioning correctly once deployed (changed “/” to “*”in our server.js along with adjusted routes for our created build package)
*	Auth not working after deployed. (added domain name (Heroku) to firebase) 
*	API issues with some latitude and longitude info, error on their server/side (work around is to use google geocoding API to get what we need which should cut out all of the “junk” data)

## Contributions to date
Anthony – Working on Google Maps and Beer mapping APIs and associated issues, creating code for relevant calls to APIs and scrapping all JSON info for database, created Glo Board using Gitkraken, created initial markdown file (index.md) for deliverable 1.
Taylor – Set up authentication and created react app along with associated routes, created firebase app to handle authentication and started MongoDB database to store relevant data.
Jason – created styling (CSS) and format of landing and login page. Created wireframe (Adobe XD), published to Heroku and debugged all issues associated with deployment, updated markdown file for deliverable 2 and 3. Managing version control via Git. Updating Glo boards and updating status as needed. 

## Remaining efforts/Stretch goals
Create social media functionality allowing users to connect with their friends, add comments to locations, establish meetups at certain locations and general chat features. We would also like to add an Uber interface to allow users to quickly and easily locate a safe ride.  


