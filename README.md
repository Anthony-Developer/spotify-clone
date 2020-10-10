## Spotify Clone

A Spotify clone in React, after login the app will get all the data from Spotify from user information to weekly discovery music.


<br>

- Desktop Version

![Desktop Demo](https://res.cloudinary.com/anthony-dev/image/upload/v1602348995/Screen_Shot_2020-10-10_at_12.55.33_PM_gtpdna.png)


### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React    | _The framework used to create all my components._ |
|   Firebase   | _Used to host the site._ |
|   Material UI   | _Used to help with styling and icons._ |
|   Spotify Web API   | _Used to grab user data along with music discovery._ |

<br>

### Component Breakdown

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    App       |   y   | _This will get data from Spotify and sends it to my Data Layer File._ |
|    Header    |   y   | _This will render user avatar and name._ |
|    Login     |   n   | _This will redirect you to Spotify for Authentication._ |
|    Body      |   y   | _This will render weekly discovery info from Spotify._ |
|    Player    |   n   | _This will render the body and sidebar components side by side._ |
|    Sidebar   |   y   | _This will render the sidebar component along with icons._ |
|    Sidebar Options      |   n   | _This will render playlist info._ |
|    Song Row      |   n   | _This will render weekly discovery music from Spotify._ |