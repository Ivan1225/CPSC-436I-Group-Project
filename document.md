### Basic Technology:
- React
- Redux
- Nodejs
- Heroku
- MongoDB
- AWS S3

### Basic Contribution:
- Peng Zhang (Ivan): Image upload to AWS server using react-drop-zone, Slingshot, AWS server and image preview in post form. It lets users directly upload images in the front end and send back server a source link to store which significantly reduced server load.
- Zhuo Yang (Dylan): UI design combines CSS Grid layout and Flexbox layout that solves us responsive images position problem.
- Yan Hu (Hugo) : Form validation in the front end and backend.

### Basic Functionality
The project solves the problem of the complicated interface and functions of an advertisement website. To solve the problem, we used grid css layout with flexbox layout. We made simple and useful post form for user to post an advertisement. We also have user system that store the posts that user created and he can make changes in the future. We have add to favorite system which can save user's liked posts.

### Challenges, Learning, and Future Directions
- We were struggling about uploading images. At the beginning, we just wrap the images and upload them to sever and server passed them to the mongoDB. However, it is a huge load for our database when we tested it. Luckily, we found a package called Slingshot. It lets us directly upload images in the front end and send back server a source link to store which significantly reduced server load. For the future, we think about how to remove the images from ASW server. For now, once we upload the images, the only thing we can do is fetch them, but we will be able to remove or edit them.

- Styling was also a challenge we struggled. We initially used css grid layout. However, when we started to organize our images position, it was hard to use two-dimensional system (CSS Grid) to control because all the images in the gallery are responsive. Grid layout cannot satisfy all the size images. We did some research and combined flexbox layout into grid layout to centralize our images. With Flexbox layout, we can lay out, align and allocate space among items in a container, even when their size is unknown and/or dynamic. There are still a lot we can learn about the styling in the future.

###  Above and Beyond?
- We were thinking just upload one image to the backend server, and not removable in the post. Now, we have our image management systems, it is able to manage multiple images. We think very few other teams implement this kind of system.

- One of our original goals was building a full management system that a special user can remove any user and any posts. Another goal we went beyond is organizing functionality of posts index page such sorting, filtering and searching.