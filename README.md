How to use the downloaded files

1) Run "npm install" in the extracted folder
2) Run "npm start" to view the project
3) Open your browser in your localhost port 3000
4) To deploy run npm run-script build


STRUCTURE:

The main architeture of the project is divided in fourth main sections:

1 - Video header.
2 - Search Form.
3 - Thumbnail List.
4 - Thumbnail Details.

1 - Video header.

The video is embeded in the html page. It starts mute and the controls are available on mouse over. It is responsive.

2 - Search Form. (SearchBox.jsx, SortingButton.jsx)

The search has two options. Initially, the first API endpoint fetches the best albums from the itune music library. Second when the user enter a word, as it types, it shows the search items until it show first 100 items for the exact term entered. If the search is cleared, the list go back to be populated with the best albums. The search also has an alphabetic sorting option.


3 - Thumbnail List. (ThumbnailList.jsx)

There are two type of lists. The first list is the best albums, which is shown when the page initially load. The second list is made of the searched term entered in the search input. There are two diferent API endpoints being used.

4 - Thumbnail Details.

Each thumbnail contains title, artist price and playable sample link. They are responsive and ajust to different devices sizes.

5- Extra links.

The top nav bar contain two links. They are not functional. It is just for visual purposes.



TOOLINGS:

1 - The project uses Webpack 3 for configuration via plugins for image compression and optimisation, but also for bundling the javascript and transpiling the code into one single file using Babel.

2 - The project uses also PostCSS instead of processors like SASS, saving on performance and file size.This project didn't actually needed to use any preprocessor for the simplicity of the layout considering that Bootstrap 4 is used.

3 - PostCSS follows similar style patterns as SASS but it is only used for general style, while for components style each css file is created within eah component folder.

4 - The project is integrated with Redux library. It is only uses in the HOC, (SearchBox.jsx, App.jsx) to fetch data from the server.

5 - The project uses React-Material-UI for creating some visuals and layouts together with the use of flexbox for responsivieness and mobile devices compatibility.

6 - Unit Testing Jest is installed, but the project didn't covered testing due to time constrains.
 # itunemusiclibrary
