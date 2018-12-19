BT Omega Order Tracker

Purpose of the application

dev.
staging.
www.


Built in React

Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Read the document here v.valuable

We use react re-wired so that we can 
add sass to css conversion without
add package analyser
ejecting the app

Read the document here v.valuable


We use env to pass in the API endpoint etc
present when building app

REACT_APP_X_EE_Client_Id (required by the API)

https://api-sandbox.ee.co.uk/bt-business/v1
REACT_APP_API_HOST=http://localhost:3000/api



CSS

Not all apps are likely to be React so it allows the possibility of creating a styleguide
which can be used by this app, an Angular app, an Express app or just a static site

Using the sass framework Foundation
We use Props to document what any given components is expecting to receive

Concepts


Modules - Generally these are reusable components are
Components - 
Inference engine - we manipulate data here -

 - derive data and add to JSON payload received from API
 - make an array unique

utils - these should have good coverage as they are reused across app
Layouts - unit tests are less important here as we can check what each route ouputs using acceptanc tests

Testing



Linting

https://groundberry.github.io/development/2017/06/11/create-react-app-linting-all-the-things.html


Unit tests

  Enzyme etc

Acceptance tests

  Nightmare etc


 CI

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#coverage-reporting





json-server mockAPI/db.json --routes mockAPI/routes.json --port 3004

Style checking
Run style checks with bundle exec rubocop. This checks code against the Ruby Style Guide, with a couple of customisations.

Configure your editor's syntax checker to flag up rubocop rules.

Concepts

Modules - Generally these are reusable components are
Components - 
Inference engine - we manipulate data here -



 Adding logging 

 which we can turn on in any env
 byt running log.trace() in browser console

 https://github.com/pimterry/loglevel



Deployment

You can deploy the project on AEM with minimum effort


Notes

 - add unit test coverage threshold to make build fail

"jest": {
	"coverageThreshold": {
		"global": {
			"branches": 90,
			"functions": 90,
			"lines": 90,
			"statements": 90
		}
	}
}


