# react-boilerplate-starter

A mildly opinionated bare bones react boilerplate for front end projects.

## Features

- Babel: last 2 browsers
- Parcel package bundler
- ESlint: recommended rules, React, and a11y
- Prettier: no additional rules

## Installation

1. Open parent directory

1. Clone the repo
   `git clone https://github.com/Schmidt-Aaron/react-boilerplate-starter.git`

1. Install dependencies  
   `npm install`
   or for yarn users
   `yarn install`

1. Rename directory, as desired

1. Change upstream repo to your new project

- Create new repo
- Change master: `git remote add origin https://github.com/YOUR_NEW_REPO.git`
- push code to new master: `git push -u origin master`

## Running Dev Server / Building

1. Run `npm run dev` on the command line.

   This will tell Parcel to build a development copy on localhost. The default port is 1234, but Parcel may choose another if there are any conflicts. The location of the dev site will be listed in the command line.

1. Code something awesome!!

## Prettier / ESlint

Prettier and ESlint functionality can be enabled with either IDE plugins, or by running the following commands from the command line:

Prettier: `npm run format`  
ESlint: `npm run lint`
