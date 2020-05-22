node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhubcredentials') {

        def customImage = docker.build("witc_backend")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}

