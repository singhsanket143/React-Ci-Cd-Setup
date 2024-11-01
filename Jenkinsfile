pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true // Reuse the node for the next stages
                }
            }

            steps {
                sh '''
                    ls -l
                    npm cache clean --force 
                    node --version
                    npm --version
                    rm -rf package-lock.json
                    npm i
                    npm run build
                    ls -l
                '''
            }
        }
    }
}