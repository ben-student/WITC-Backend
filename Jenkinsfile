node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhubcredentials') {

        def customImage = docker.build("benstudent/witc_backend" , "--rm")

        /* Push the container to the custom Registry */
        customImage.push()

        
    }
}

