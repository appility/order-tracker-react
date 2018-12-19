
*Notes about the mock API*

npm run start-mock-api

json-server --watch mockAPI/db.json --routes mockAPI/routes.json --port 3004
  
http://localhost:3000/bt-business/v1/

This mock API allows you to test various order statuses
and scenarios.

Typically we use it when running acceptance tests. 
That is, the app uses this endpoint when tests are running against it.

Group Orders
orders/GandT0000001
orders/GandT0000002
orders/GandT0000003

Orders
orders/BT0000001 - This order is pending
orders/BT0000002 - This order is accepted
orders/BT0000003 - This order is delayed
orders/BT0000004 - This order is cancelled
orders/BT0000005 - This order has one product
orders/BT0000006 - This order has many products
orders/BT0000007 - This order has an order item which is a device
orders/BT0000008 - Your service was activated on 30 April 2018.
orders/BT0000009 - This order is completed

Order Items
orders/BT0000006/BT0000006-01/ - This order item
orders/BT0000006/BT0000006-02/ - This order item

Order Items
orders/BT0000006/BT0000006-01/ - This order item
orders/BT0000006/BT0000006-02/ - This order item

routes.json

creates a mapping between the URLs and the objects in the db.json file


It is built with JSON Server:
https://github.com/typicode/json-server






/*
	‘Pending’ : <AlertCircle fill=“#ffffff” />,
	‘Open’ : <AlertCircle fill=“#ffffff” />,
	‘In Progress’ : <AlertCircle fill=“#ffffff” />,
	‘Cancelled’ : <AlertCircle fill=“#ffffff” />,
	‘Delayed’ : <AlertCircle fill=“#ffffff” />,
	‘Completed’ : <CheckCircle fill=“#ffffff” />
*/
