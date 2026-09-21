# Minimal Docker Minecraft Server

I've been recently trying to learn Docker and also conveniently wanted to get back into an old game, Minecraft. After some trial and error, and back and forth with AI and Google searches, I've come up with the most minimal example possible, with explanations.

## Docker Compose

The Docker compose file `compose.yaml` is a configuration file that tells Docker Compose how to manage container applications. This is how mine is structured:

```yaml
services:
  mcserver:
    container_name: mcserver
    image: eclipse-temurin:latest # official OpenJDK image
    working_dir: /app # needed to read local files
    command: ["java", "-jar", "server.jar"] # actual command to start the server
    tty: true # allocate a pseudo terminal
    stdin_open: true # needed to receive console input
    ports:
      - "25565:25565" # host:container
    volumes:
      - .:/app # copy all files in current directory to /app
```

### Explanation

Technically, the `container_name` line is optional, but nice to have so that you can refer it with Docker commands, such as `docker attach mcserver`. One thing that I was surprised was that Oracle (or Docker itself) doesn't maintain an official Java image, so I used the one built and maintained by Eclipse Temurin.

Lastly, the `command` is simplified here, but can contain more command line arguments like:

- `-Xms<size>` initial memory pool
- `-Xmx<size>` maximum memory pool
- `--nogui` disable graphical user interface (not really needed here anyway)
- `--help` print available options without starting the server

For example:

```yaml
command: ["java", "-jar", "--help", "server.jar"]
```

## Fixing Permissions

On Ubuntu, by default this will create all the Minecraft server files and set their owner to `root`. This restricts you (the user) from modifying or deleting these files, which may be exactly what you want. Otherwise, you may need to fix the permissions for these generated files. I created a simple script called `fix-permissions.sh` containing the following command:

```sh
sudo chown "$(id -u):$(id -g)" ./*
```

This will set all the file ownership in the current working directory to your current user and group ID.