A more complex way which installs the admin portal also: 
 
 chmod +x setup.sh
 ./setup.sh
 
 this will create the containers
 
 then:
 
 http://159.65.61.122:5050
 
Log into pgAdmin 4 with
Email: youremail@yourdomain.com
Password: yoursecurepassword
Add a server using:
Hostname: postgres
Username: postgres
Password: yoursecurepassword


NOTE: I could not access the shell when i went into the container using this method.

---


Lets try a simple  way:

docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgresv

docker exec -it 31fb45823057 bash
psql -U postgres
postgres-# CREATE DATABASE mytest;
postgres-# \q


Go to your localhost (where you have some tool or the psql client).

psql -h public-ip-server -p 5432 -U postgres
(password mysecretpassword)

postgres=# \l

                             List of databases
   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges
-----------+----------+----------+------------+------------+-----------------------
 mytest    | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
 postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
 template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres   
So you're accessing the database (which is running in docker on a server) from your localhost.


https://medium.com/@lvthillo/connect-from-local-machine-to-postgresql-docker-container-f785f00461a7