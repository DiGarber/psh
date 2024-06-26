# PSH Challenge

## Installation & Running the App

### First run

I'd recommend to modify the cron job in back/app/utils/cronJobs to run quickly to populate the DB.

### Database

This project runs a mySQL instance on a Docker container, to run it you need to open up a terminal and move into the "db" directory in this project. Now run the following command:

```cmd
docker-compose up -D
```

This instance should not have any issues with your local instance of mySQL since it is mapped to not use the default mySQL port. You will need to install docker if you haven't previously.

If for any reason you decide to not run de DB with Docker, see that you change the port in the Sequelize configuration to your default mySQL port.

### Frontend and backend

In the "back" directory run the following script:

```cmd
npm run dev
```

This will run nodemon, but you can also use 'npm start' to run it with node. Keep in mind this project was developed with Node 18.

In the "front" directory run the following script:

```cmd
npm run dev
```
