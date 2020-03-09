import SimpleNodeLogger from "simple-node-logger";

const opts = {
  logFilePath: "main.log",
  timestampFormat: "YYYY-MM-DD HH:mm:ss.SSS"
};

const log = SimpleNodeLogger.createSimpleLogger(opts);

export default new (class LoggerService {
  async middleware(req, res, next) {
    log.setLevel("info");
    log.info(
      `${req.method} ${req.protocol}://${req.hostname}${req.originalUrl}`
    );
    next();
  }

  async info(message) {
    log.setLevel("info");
    log.info(message);
  }
})();
