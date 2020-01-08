'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/tntservice-dev'
  },
  // Sequelize connecton opions
  sequelize: {
    // uri: 'mysql://'+process.env.SERVICE_DB_USER+':'+process.env.SERVICE_DB_PASSWORD+'@'+process.env.SERVICE_DB_HOST+':3306/bitnami_wordpress',
    uri: 'mysql://bn_wordpress:Uveifee4ae@nlr-stage-rr.cgmovbgsc28q.us-west-2.rds.amazonaws.com:3306/bitnami_wordpress',
    options: {
      logging: false,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },
  new_relic : {
    tnt_application_id: '42717448',
    api_key: 'd3e7663f3b783d3082ae58cd997c023e93b0ef914ea5c8d'
  },
  // Logger
  log: {
    level: 'info',
    outputs: {
        api: process.env.SERVICE_LOG_API_OUTPUTS ? process.env.SERVICE_LOG_API_OUTPUTS.split(',') : ['file', 'cw'],
        access: process.env.SERVICE_LOG_ACCESS_OUTPUTS ? process.env.SERVICE_LOG_ACCESS_OUTPUTS.split(',') : ['file', 'cw']
    },
    max_length_response_body: process.env.SERVICE_LOG_MAX_LENGTH || 0,
  },
  tmp_dir : '/var/www/services/newsletters/current/server/api/global_suppression/tmp_processing',
  content: {
    services : process.env.CONTENT_SERVICES_URL
  },
  // Seed database on startup
  seedDB: true

};
