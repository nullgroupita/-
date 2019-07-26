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
    stage('Deploy To Staging') {
      steps {
        sh 'cp -R /root/.jenkins/workspace/ing_lot_null_ita_frontend_master/parking_lot_null_ita_frontend/dist/* /var/www'
      }
    }
  }
}