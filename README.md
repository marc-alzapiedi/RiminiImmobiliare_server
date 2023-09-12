# Real-estate website replication
Follow the instructions to setup and run the server
## Setting up the database
1. Go to [Elephant SQL](https://www.elephantsql.com/) and sign up
2. When you sign up it should ask you to create a team name, you can make a team name as you wish.
3. At this point you should see an image similar to this one:
![New Instance](<Screenshot 2023-09-12 161736.png>)
You are going to want to create a new instance by clicking on the top right button.
4. Go ahead and choose a name for the instance. Be sure that the tiny turtle (free) plan is selected. You can put a tag for the instance, but it is not necessary **This will be the PRIMARY database.** 
![Create Name](<Screenshot 2023-09-12 164745.png>)
5. When it asks you to select a region, select the region that is most closest to your time zone *i.e. I select EU-NORTH-1 (Stockholm) since the local time is the same as Milan.*
![Select Region](<Screenshot 2023-09-12 165026.png>)
6. Review and create the instance.
7. Repeat steps 3-6 except at step 4, be sure name the instance "SHADOW", as **this instance will be the SHADOW database.**

## Setting up the server
1.  Make sure to fork and clone this repository
2. In the main directory there should be a file named ```.env.example```. Copy and paste this file, and rename the file by deleting the ```.example``` at the end of the ```.env```.
3. Now go back to  [Elephant SQL](https://www.elephantsql.com/) and go to your PRIMARY instance that you just created.
![Copy URL](<Screenshot 2023-09-12 165855.png>)
In the details section, copy the URL and paste it in the ```.env``` file where it says ```YOUR_DATABASE_URL``` make sure you leave the ```?schema=prisma``` at the end. 
1. Do the same thing as in step 3 but for the SHADOW instance. Copy the URL from the SHADOW instance and paste it in the ```.env``` file where it says ```YOUR_SHADOW_DATABASE_URL``` make sure you leave the ```?schema=prisma``` at the end. 
2. Now in your terminal run ```npm install``` to install the dependencies
3. ```npx prisma migrate reset``` to build the database tables and insert some seed data (as defined in ./prisma/seed.js)
4.  `npm run dev` to run the app
