node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhubcredentials') {

        def customImage = docker.build("benstudent/witc_backend")

        /* Push the container to the custom Registry */
        customImage.push()

        docker.rm("benstudent/witc_backend");
    }
}

