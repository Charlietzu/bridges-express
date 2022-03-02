import mongoose from "mongoose";
import logger from "./logger";
import config from "config";

async function connect() {
  try {
    let dbUri: string = "";

    if (process.env.NODE_ENV?.trim() !== "production") {
      dbUri = config.get<string>("dbUri");
    } else {
      if (!process.env.DATABASE_URI) {
        logger.error("Database URI is not defined");
        process.exit(1);
      }
      dbUri = process.env.DATABASE_URI.trim();
    }

    await mongoose.connect(dbUri);
    logger.info("Connected to MongoDB");
  } catch (err) {
    logger.error(`Could not connect to MongoDB, error: ${err}`);
    process.exit(1);
  }
}

export default connect;
