NODE_ENV?=development
NODE_OPTIONS?=''
APP_ENV=development
PORT?=3000
MONGO_URL?=mongodb://localhost:27017/hotelsinadvance
MONGO_OPLOG_URL?=mongodb://localhost:27017/local
CLUSTER_DISCOVERY_URL?=mongodb://localhost:27017/cluster
CLUSTER_SERVICE?=hia
SETTINGS?=/Users/danvoinea/Development/galaxy/hia


start:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	MONGO_URL=$(MONGO_URL) \
	MONGO_OPLOG_URL=$(MONGO_OPLOG_URL) \
	CLUSTER_DISCOVERY_URL=$(CLUSTER_DISCOVERY_URL) \
	CLUSTER_SERVICE=$(CLUSTER_SERVICE) \
	meteor -p $(PORT) 
# --settings $(SETTINGS)/config/$(APP_ENV)/settings.json

deploy-qa:
	DEPLOY_HOSTNAME=galaxy.meteor.com meteor --settings $(SETTINGS)/config/qa/settings.json deploy hia-qa.plusmoretablets.com

deploy:
	DEPLOY_HOSTNAME=galaxy.meteor.com meteor --settings $(SETTINGS)/config/production/settings.json deploy hia.plusmoretablets.com

