pipeline {
    agent any
    options {
        skipDefaultCheckout(true) // Prevents automatic checkout at the start of the pipeline
    }
    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs() // Ensures the workspace is cleaned before any code is checked out
            }
        }
        stage('Checkout Code') {
            steps {
                // Explicitly check out the code
                checkout scm
            }
        }
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
                    node --version
                    npm --version
                    npm install
                    npm run build
                    ls -l
                '''
            }
        }
    }
}
