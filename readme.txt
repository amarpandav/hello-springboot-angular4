- run
http://localhost:8080/

-

- One other thing worth noting: even though we’re building a WAR file, it may still
be possible to run it without deploying to an application server. Assuming we don’t
remove the main() method from Application, the WAR file produced by the build
can also be run as if it were an executable JAR file:

$ java -jar example2-0.0.1-SNAPSHOT.war

- activate spring progile
$export SPRING_PROFILES_ACTIVE=production

#########################################
hello-springboot-angular4 was existing. Executed below command on parent folder of hello-springboot-angular4 -
ng new hello-springboot-angular4

This added angular 4 specific files into the existing project. Isn't it cool;)

-----------------------
FOR LOCAL ->
STARTING SPRING SERVER AND ANGULAR TOGETHER
How to run angular and spring app simultaneously?
We need to start 2 servers -

run
ng serve --proxy-config proxy-conf.json (will run on port 4200)
and
start spring boot Application (will run on port 8080)

How angular will call spring's REST services?
We need add proxy file.

----------------------
npm install -g copyfiles
-----------------------------
FOR PROD ->
STARTING SPRING SERVER ONLY (ANGULAR IS COPIED FROM DIST FOLDER)
ng build --prod
   - this generates dist/** folder, prod ready with minification

copyfiles -f dist/** src/main/resources/static
  - this copies the file for spring

OR from intelliJ run >   "ng build & deploy PROD" command
deploy the jar to EC2
add the environment variable > SPRING_PROFILES_ACTIVE = production
-------------------

to  run the commands from scripts use "npm"
 e.g.
 npm run build

