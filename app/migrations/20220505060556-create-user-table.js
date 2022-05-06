'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('user', {
    id: {type: 'binary(16)', primaryKey: true, notNull: true},
    email: { type: 'varchar(256)', notNull: true}, 
    first_name: 'varchar(255)',
    last_name: 'varchar(255)'
  }, callback)
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
