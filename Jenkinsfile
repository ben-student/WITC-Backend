node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhubcredentials') {

        def customImage = docker.build("benstudent/witc_backend")

        /* Push the container to the custom Registry */
        customImage.push()
        def id = customImage.id
        sh "echo ${id}"
        
        sh "docker image rm -f ${id}"
        sh "docker image rm -f registry.hub.docker.com/benstudent/witc_backend"
        
    }
}

