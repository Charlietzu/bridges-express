import mongoose from "mongoose";
import logger from "./logger";

async function connect() {
  try {
    let dbUri: string = "";

    if (!process.env.DATABASE_URI) {
      logger.error("Database URI is not defined");
      process.exit(1);
    } else {
      dbUri = process.env.DATABASE_URI;
    }
    await mongoose.connect(dbUri);
    logger.info("Connected to MongoDB");
  } catch (err) {
    logger.error(`Could not connect to MongoDB, error: ${err}`);
    process.exit(1);
  }
}

export default connect;
