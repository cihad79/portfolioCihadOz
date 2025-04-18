# Use an official Java 17 image
FROM eclipse-temurin:17-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy Maven wrapper scripts and project files
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Download project dependencies
RUN ./mvnw dependency:go-offline

# Build the project without running tests
RUN ./mvnw clean package -DskipTests

# Run the built Spring Boot app
CMD ["java", "-jar", "target/portfolioCihadOz-0.0.1-SNAPSHOT.jar"]
