# allTheThings
A chrome extension which allows you to again save all files for a thing in a single click

# Be gentle
This is both my first attempt at some javascript and my first chrome extension, webpack was also a thing I did not use before. I'm open for suggestions and improvements.

# Thingiverse
Some time ago an update caused any things on thingiverse to no longer be available as a zip,  but as separate files you now have to download individually. I don't like clicken that often. This plugin adds a listener to the download all button which, when clicked,  will download all files on the background and present a saving dialog when finished. There is currently no visual feedback on the progress and there are probably size limitations. Depending on your internet speed downloading anything might take a while, and it might seem to not be doing anything.

# Improvements
Feel free to open an issue, PR, or just fork it and go your own way.
The plugin currently works by searching the html for certain elements by classname, this can ofcourse break quite easily whenever thingiverse updates their stuff. If anyone has an idea on how to do this a bit more robust....


# Instructions
Clone the repo, you will need [npm](https://www.npmjs.com/) and [webpack](https://webpack.js.org/).
Open a command prompt in the repo, run npm-install and you should be good to go. 
Run `npx webpack` to get all your code in 1 file and upload that as the new extension. This generated file is not included in the repo.
