pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }

    options {
        skipDefaultCheckout(true) // Skip the default checkout
    }
    stages {

        stage ('Clean up code') {
            steps {
                cleanWs()
            }   
        }

        stage('Checkout using SCM') {
            steps {
                checkout scm // Checkout the code
            }
        }

        stage('Take approval') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    input message: 'Do you want to proceed?', ok: 'Proceed'
                }
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

        stage('Test') {
            agent {
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true // Reuse the node for the next stages
                }
            }

            steps {
                sh '''
                    npm run test
                '''
            }
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true // Reuse the node for the next stages
                }
            }

            steps {
                sh '''
                    npm install -g vercel
                    echo $MY_VAR
                    vercel --prod --token=$VERCEL_TOKEN --confirm --name=cicdproject
                '''
            }
        }
    }
}