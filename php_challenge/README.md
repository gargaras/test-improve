# HTTP Rest Api 

## Cloning the git repository and installing dependencies

```bash
git clone https://github.com/gargaras/test-improve.git

cd php_challenge

composer install

composer require tymon/jwt-auth

cp .env.example .env

php artisan jwt:secret

```
## Database and migrations
In the init.sql file you will find the queries to initialize the database, 
once done we go to .env and replace with the corresponding data.

The project already has the models, migrations and seeders generated. 
Then all we need to do is to run the migration and execute the following command:

```bash
php artisan migrate:fresh --seed
```

Finally :
```bash
php artisan serve
```
I strongly recommend using Postman to verify the functionality.