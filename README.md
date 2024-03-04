In this react app my purspose was the create a react menu that opens up by clicking
and closes after second click.
I used tailwind css for styling and I made some custominaziton on tailwind css.
The trick of the project is we create a mappnig function that takes index and item and we give
index property to an element that is outside of the funcions scope.I did It by creating event handler that
calls hadnle click and give handle click an input that called newIndex so we can reach indexes value outside of our funciton.

After my second uptade I added custom navigaiton wihout using react router library.
We have 3 different component on sidebar and with click without reloading the page menu subs are showing with a click event listener.


In this third uptade I addded sorting logic to table by creating new sorttable comp and copy data
form table compopent and sort them by reacts library called BLABLA.sort(a,b)={} after creating our sorting logic I connected to logic funciton to click event handler that returns th .


---------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

npm install
for downloading node modules

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
 