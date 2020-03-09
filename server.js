import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import typeDefs from "./typeDefs/typeDefs";
import resolvers from "./resolvers/resolvers";
import models from "./models";
import router from "./routes";
import logo from "./logo";
import Logger from "./services/LoggerService"

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const playground = true;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground,
  context: { models }
});

models.sequelize.authenticate();
models.sequelize.sync();
models.sequelize.options.logging = Logger.info;

server.applyMiddleware({ app });
app.use("/", Logger.middleware);
app.use("/api", router);

app.listen({ port }, () => {
  console.log(logo);
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`);
});
