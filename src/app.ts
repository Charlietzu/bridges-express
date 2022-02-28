import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import createServer from "./utils/server";

const port: number = config.get<number>("port");

const app = createServer();

app.listen(port, async () => {
  logger.info(`Server is running at http://localhost:${port}`);
  await connect();
});
