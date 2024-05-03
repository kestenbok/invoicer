all:
	cp src/config.example.ts src/config.ts && cp src/data/data.example.json src/data/data.json && deno cache src/main.ts

run:
	deno task start

build:
	deno task compile

clean:
	rm invoicer