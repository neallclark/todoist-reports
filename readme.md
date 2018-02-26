# Todoist Reports

### Purpose
This project creates some extra charts and tables from your todoist data mainly around using the age of a tasks.

A version of this project has been deployed on Heroku using a free plan (So no guarantees that it will be up).
[App on Heroku](https://floating-ocean-88421.herokuapp.com/).
If it has been incative for a while it will be slow to load.

### Run Instructions
* To use this project you need to run the graphql server as well [todoist-graphql project](https://github.com/neallclark/todoist-graphql).
* Run - ```npm install```
* Run - ```npm start```
* Open http://localhost:8080

### Screenhots
#### Start Screen

1. Get your todoist api key (Clicking the button on screen takes you to the settings page where the key is located).
1. Put it in the box, this then makes one call off to the todoist api (via the GraphQL server) to retrieve the tasks. It isn't stored anywhere, if you come back to the site later you will have to enter it again.

![Start Screen](https://raw.githubusercontent.com/neallclark/todoist-reports/master/documentation/start-screen.png)

#### Charts and Tables

1. Overall Statistics - General stats based on task counts and ages of tasks
1. Oldest Tasks - Your oldest tasks which aren't scheduled as repeating tasks
1. Tasks Due By Day (Next 7) - Shows the number of tasks per day that are coming up over the next 7 days. Day 0 is all overdue tasks.
1. Cumulative Task Count By Age - Shows the number of active tasks added by age. Taking the chart in the screenshot as an example it highlights that most of my tasks were added in the last 90 days. Any tasks that don't get completed in 90 days tend to sit on my task list forever!

![Charts](https://raw.githubusercontent.com/neallclark/todoist-reports/master/documentation/tables-and-charts.png)

#### What Next?
Ideas welcome! You can submit some ideas on the issues page [here](https://github.com/neallclark/todoist-reports/issues).









