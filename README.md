# Single Section Site With Style Components and Surge

For practicing styled components and Surge, I have completed a single section website which covers all of the
styled components practice and use Surge for deployment

# For Setting Up Surge With Git Hub Actions
name: styled components practice site
on:
  push:
    branches: [ main ]

  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Installing Node
        uses: actions/setup-node@v2-beta
        with:
            node-version: 16
            
      - name: Build React App
        run: |
          npm install # Install Dependencies
          CI=false npm run build # CI=false to ignore warnings

      - name: Installing SUrge
        run: npm install --global surge

      - name: deploying using surge
        run : surge ./build styled-comp-prac-site.surge.sh --token ${{secrets.SURGE_TOKEN}}
      




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


