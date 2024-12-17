FROM openjdk:17-jdk-slim
#FROM amazoncorretto:17-alpine

# Instalar librerías necesarias para solucionar error jasper report
# a la vez instalo un paquete de fuentes mscorefonts
# ya que jasperreport con fuentes raras da error y tendria que instalar el .ttf especifico
RUN apt-get update && \
    apt-get install -y libfreetype6 libfontconfig1 && \
    rm -rf /var/lib/apt/lists/*



ARG JAR_FILE=target/fintech-0.0.1.jar
COPY ${JAR_FILE} app_fintech.jar
EXPOSE 9698
ENTRYPOINT ["java", "-jar", "app_fintech.jar", "--spring.profiles.active=docker"]