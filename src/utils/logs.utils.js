/**
 * Centralized logger for personalization and easy maintenance of logs
 * @param {*} type Type of log
 * @param {*} message Message to log
 */
const logger = (type, message) => {
  const date = new Date().toLocaleString();
  const typeIndicator = type[0].toUpperCase();
  console[type](`[${date}] |${typeIndicator}| ${message}`);
};

module.exports = {
  logger,
};
