Project set-up DO FIRST:

*************
*** NODE: ***
*************
>Install Node.js globally. 
   npm install npm@latest -g
   
>cd to working dir   
   npm init //creates package.json
   npm install packageName --save //adds a package to package.json dependancies
or
   npm install //use within working dir to install all dependancies in package.json
	       //use if working with prebuilt package.json (use on setup)

*************
*** GULP: ***
*************
>Install gulp globally.
   npm install gulp

>Use git bash on windows or terminal on mac
>"cd working-dir" before use (same level as "gulpfile.js")
>"gulp watch" for development (local proxy server, auto refresh, auto css and js comp)
>"gulp build" for dist
>"gulp previewDist" for spin-up of dist

*************
*** GIT:  ***
*************
>Install git globally.

>Check details of user are set.
   git config ?global user.name gGregh
   git config ?global user.email ggreg-phillips@workemail.comh

>Create local repo
   git init

>Commit changes
   git status
   git add (-A for all, name.file for single)
   git commit -m 'descriptive message'

>Clone from existing repo (once to start)
   git clone url

> Push to repo (save to server)
   git remote -v //shows destination
   git remote set-url url //change directory, copy from site
  set up a .gitignore file before commit
   git push origin branchName

