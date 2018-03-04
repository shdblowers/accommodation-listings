# Accommodation Listings

## How To Run It

1. Install Node and NPM
2. Install Yarn
3. `yarn start` (You can also run with NPM, but it will not use my lock file.)

## Approach

I started off by bootstrapping a new project with create-react-app, I did this because it gives me a good basis to start from and also reduces setup time dramatically, which is especially useful in this scenario where time is limited.

I also decided to use the React Bootstrap library as this would also speed up the development process and give some responsiveness and styling which I would not have time to write manually.

Once I had got the foundation of the project working I then added in the data sent over as JSON files and did something basic with them to get them showing on the page as a starting point.

I then came up with a layout for each accommodation and progressively added in the properties that were to be part of its display.

Then, I looked at the room data and decided how I wanted it to be displayed was an element that could be collapsed and expanded on the accommodation panel. I decided on a table as the layout for the room information from looking at other booking websites.

With displaying the descriptions there was a need to render the HTML given in the data, I therefore found a function online which would allow me to do this, which is in `src/common.js`, however it is vulnerable to cross-site scripting attack so I would avoid it for user-entered data. I also imported the font awesome icons to display them.

Lastly, I added in a search bar which searches on accommodation name.

## What I Would Do With More Time

One thing I tried to do as much as possible was make the website work on mobile as well as desktop, this has been achieved except for the table to show room data. Given more time, that would be the first thing that I tackled.

I also feel my components are too coupled to the structure of the data in JSON files received, given more time I'd like to create a data structure on 'src/accommodation-data.js' which extracts only the fields I need and puts them in a structure more desirable to my display components.

I have also avoided writing any tests, given more time I'd like to add unit tests around 'accommodation-data.js' to ensure it extracts data into the correct format. I would also add snapshot tests to my components once a desired layout was achieved.