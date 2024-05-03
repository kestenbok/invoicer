# Invoicer

A small utility that helps me generate PDF invoices
programatically. The implementation has some details specific to Bulgarian
invoice conventions (such as invoice number length) which might be unnecessary
for most use cases and can be tweaked away.

## Running the program

This project is built ontop of [deno](https://docs.deno.com/runtime/manual), which will need to be installed on your machine. (Future versions will be dockerized 🐋).

```bash
# will cache all dependencies and initialize your config file (src/config.ts)
$ make

# will start the program
$ make run

# will create a binary that you can place somewhere in your $PATH
$ make build
```

After running the initial `$ make` command, you'll want to populate the values in your [config](src/config.ts).

## How it works

In order to have the invoice be easily customizable I opted to go for a HTML -> PDF conversion, instead of programatically creating an entire PDF file. This makes it easier to change the look of the invoice and give it your own style. The lifecycle of a single program run is:

- determining how many working days there were in the current month
- populating a [handlebars](https://handlebarsjs.com/) template with the values of the provided `config.ts`
- previewing the generated html invoice
- feeding the html file into [puppeteer](https://pptr.dev/) and saving it in a PDF file

## Roadmap

- [ ] Dockerized version
- [ ] Better looking template
- [ ] Internationalization

## License

[MIT](./LICENSE.md)