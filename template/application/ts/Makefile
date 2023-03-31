NVM_SOURCE=~/.nvm/nvm.sh
ifndef JENKINS_HOME
	NVM_SOURCE=`brew --prefix nvm`/nvm.sh
endif
TARGET_NODE_VERSION=v10.16.3

.PHONY: build
build:
	source $(NVM_SOURCE); \
	nvm ls $(TARGET_NODE_VERSION); \
	if [ $$? -eq 0 ]; \
	then \
		echo "node $(TARGET_NODE_VERSION) is installed, skipping..."; \
	else \
		echo "node $(TARGET_NODE_VERSION) is uninstalled. Now installing..."; \
		export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node; \
		nvm install $(TARGET_NODE_VERSION); \
	fi; \
	export NVM_DIR=~/.nvm; \
	nvm use $(TARGET_NODE_VERSION); \
	rm -f App123Service.zip; \
	npm install && npm run build; \
	rsync -arv --exclude=node_modules --exclude=.git . App123Service && \
	zip -ry App123Service.zip App123Service; \
	rm -r App123Service; \

dev: 
	npm run dev