build:
	@web-ext build --overwrite-dest --as-needed

lint:
	@web-ext lint

sign:
	@web-ext sign --api-key=$(AMO_API_KEY) --api-secret=$(AMO_API_SECRET) --channel=listed
