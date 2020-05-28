node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhubcredentials') {

        def customImage = docker.build("benstudent/witc_backend")

        /* Push the container to the custom Registry */
        customImage.push()
        
        sh "docker image rm -f benstudent/witc_backend"
        
    }
}

