install :
	npm ci    	#Эта команда полезна при первом клонировании репозитория (или после удаления node_modules).
publish :
	npm publish --dry-run
lint :
	npx eslint .
lint-fix :
	npx eslint --fix .
test : 
	NODE_OPTIONS=--experimental-vm-modules npx jest