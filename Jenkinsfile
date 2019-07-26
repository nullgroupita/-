pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''cd parking_lot_null_ita_frontend
npm install
npm run build'''
      }
    }
  }
}