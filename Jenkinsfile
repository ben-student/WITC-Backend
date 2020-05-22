node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker', 'dockerhubcredentials') {

        def customImage = docker.build("benstudent/WITC")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
