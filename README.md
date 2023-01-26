# Admin Portal

This front end react application to manage users across multiple projects/sites and databses (relational and document based) allowing seemless sync, transfer with SSO for admins across multiple database serices.

The Spring Boot based backend for this application can be found here - https://github.com/AnkurDesai11/migrateway

## Authentication and Authorisation 

Okta acts as Authentication provider, using their embedded sign in Widget, allowing for MFA if required.

On successful Authentication with Okta appropriate Authorisation is provider tothe uiuser via JwT token (okta access token with claims) according to the groups the user is assigned to in Okta.

Depending on whether the user's role is 'Super Admin' or 'Read only Admin' the can access secific pages of the react app.

Super Admins can start new migrations, check status of ongoing migrations, check logs and perform all crud operation on individual databases. Read only Admins can only check the status of any on going migrations, logs. Further roles to grant administrator privileges to individual databases can also be defind and checked for accorddingly.

## Site Structure

Users can see basic stats on the homepage before login, accessing any other page will require authentication and the Okta sign in widget will be rendered. After successful login, username will be displayed in the Navbar.

User accounts across databases, Databases, Migrations and logs can be access via the sidebar.

User can toggle between light and dark theme.

User accounts across database can be searched/viewed/edited/deleted via the Users page.

Individual databases crud operations can be accessed via Databses page.

Migrations requests with live updates of any ongoing migration can be accessed on th Migration page.
