pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true // Reuse the node for the next stages
                }
            }

            steps {
                sh '''
                    ls -l
                    export NPM_CONFIG_CACHE=$(pwd)/.npm
                    node --version
                    npm --version
                    rm -rf node_modules package-lock.json
                    npm --version
                    npm ci
                    npm run build
                    ls -l
                '''
            }
        }
    }
}