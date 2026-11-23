EventHub – Event Management Platform

Project Overview

EventHub is a web-based event management platform built with React and Firebase. It connects event organizers with attendees, making it easier to discover events, manage event listings, and register for upcoming activities.

The platform provides a simple and user-friendly experience for discovering, organizing, and participating in events.

Project Objectives

The main objectives of EventHub are to:

* Enable attendees to discover and browse upcoming events.
* Allow users to search and filter events by category.
* Provide detailed information about individual events.
* Allow attendees to register for events.
* Enable organizers to create, edit, and delete event listings.
* Allow organizers to manage attendee registrations.
* Provide an organizer dashboard for monitoring event participation.

Key Features

For Attendees

* Browse upcoming events.
* Search for events by name.
* Filter events by category.
* View event details, including date, location, and description.
* Register for available events.
* View personal event registrations.
* Prevent duplicate registrations.

For Organizers

* Create new events.
* Edit existing event listings.
* Delete events.
* View attendee registrations.
* Monitor event participation through the organizer dashboard.

Authentication

* User registration and login.
* Firebase Authentication integration.
* Protected application routes.

Technologies Used

Technology	Purpose
React	Frontend user interface
JavaScript	Application functionality
Vite	Development server and build tool
Tailwind CSS	Styling
Firebase Authentication	User authentication
Cloud Firestore	Database and data storage
React Router	Application navigation
Vitest	Unit testing
React Testing Library	Component testing
Git and GitHub	Version control and collaboration
Firebase Hosting	Application deployment

Project Structure

Event-Hub/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── test/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .firebaserc
├── firebase.json
├── index.html
├── package.json
├── vite.config.js
└── README.md

Installation and Setup

Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

1. Clone the repository

git clone https://github.com/rodha-dev/Event-Hub.git

2. Navigate into the project folder

cd Event-Hub

3. Install dependencies

npm install

4. Configure Firebase

Create or select a Firebase project.

Configure Firebase Authentication and enable the Email/Password sign-in provider.

Create a Cloud Firestore database and configure the required security rules.

Add your Firebase project configuration to:

src/services/firebase.js

Do not expose private credentials or commit sensitive configuration files.

5. Start the development server

npm run dev

Open the local URL provided by Vite in your browser.

Testing

EventHub uses Vitest and React Testing Library for component testing.

Run all tests:

npm test

Run tests with coverage:

npm run test:coverage

The current coverage report shows 100% statement, branch, function, and line coverage across the four tested components:

* EventCard
* EventFilters
* Loading
* ErrorMessage

Note: This coverage result applies to the components included in the report, not the entire application.

Code Quality and Production Build

Run ESLint:

npm run lint

Create a production build:

npm run build

Preview the production build:

npm run preview

Deployment

EventHub is configured for Firebase Hosting.

To deploy the production build:

npm run build
firebase deploy --only hosting

The live application URL will be added here after successful deployment:

Live Demo: To be added after deployment.

Version Control

The project is maintained using Git and GitHub.

GitHub Repository: https://github.com/rodha-dev/Event-Hub

Development work is organised using feature branches and meaningful commits.

Future Improvements

* Expand automated test coverage across application services and pages.
* Improve analytics and reporting for event organizers.
* Add additional event discovery and filtering options.
* Enhance the user experience with further accessibility improvements.

License

This project is licensed under the MIT License.

See the LICENSE file for details.

Author

Developed as a React final project.

Project Name: EventHub
Repository: https://github.com/rodha-dev/Event-Hub