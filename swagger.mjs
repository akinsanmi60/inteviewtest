import swaggerAutogen from "swagger-autogen"

const doc = {
  info: {
    version: "1.0.0",
    title: "Transaction Api",
    description: "Api document for my transaction app",
    contact: {
      name: "akinsanmi Akintunde",
      email: "akintunde60@gmail.com",
    },
  },
  servers: [
    {
      url: "https://inteviewtest.vercel.app",
      description: "deployed server link",
    },
    {
      url: "http://localhost:3500/",
      description: "Local Server",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  tag: [
    {
      name: "Transaction",
      description: "Transaction endpoints",
    },
  ],
  definitions: {
    PostTransactionModel: {
      $category: "Transaction",
      $amount: "number",
      $currency: "string",
      $type: "string",
      $accountName: "string",
    },
  },
}

const outputFile = "./swagger_output.json"
const endpointFile = ["./routes/index.ts"]

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointFile, doc)
