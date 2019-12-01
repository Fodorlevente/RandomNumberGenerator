# Full-stack application for visualizing Pseudo Random Numbers from API

### Requirements
Anaconda Environment with python 3.7
https://www.anaconda.com/distribution/
Node.js
https://nodejs.org/en/
React
https://reactjs.org/
Materual-ui
https://material-ui.com/

## Setup the development environment in backend side:
```cmd
conda env create -f environment.yml
conda activate continental
windows: set FLASK_APP=server.py   linux: export FLASK_APP=server.py
flask run
```

## Setup the development environment in frontend side:
```cmd
cd number-generator
npm install
npm run start
```