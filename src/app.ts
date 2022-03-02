import connect from "./utils/connect";
import logger from "./utils/logger";
import createServer from "./utils/server";

require("dotenv").config();

const port = process.env.PORT;

const uriServer = () => {
  const environment: string = process.env.NODE_ENV?.trim() ?? "";
  const host: string = process.env.HOST?.trim() ?? "";

  if (!environment) {
    logger.error("Environment is not defined");
    process.exit(1);
  }

  if (!host) {
    logger.error("Host is not defined");
    process.exit(1);
  }

  logger.info(`Environment: ${environment}`);

  if (environment == "development" || environment == "test") {
    return `${host}:${port}`;
  } else if (environment == "production") {
    return host;
  }
};

const app = createServer();

app.listen(port, async () => {
  logger.info(`Server is running at ${uriServer()}`);
  await connect();
});
