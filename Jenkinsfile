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
                    node --version
                    npm --version
                    rm -rf node_modules package-lock.json
                    npm install -g npm@latest
                    npm --version
                    npm ci
                    npm run build
                    ls -l
                '''
            }
        }
    }
}