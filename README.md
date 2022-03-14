# Инструкция

Запуск проекта

С помощью intellij IDEA запустить файл MuseitApplication.java или в командной строке выполнить команду `mvn clean spring-boot:run`

В папке frontend выполнить команду `npm start`


Jar с упаковонным react приложением:

В корне проекта:
* собрать с помощью команды `mvn clean install -Pdeploy`
* запустить через команду `java -jar target/museit-*.jar`
