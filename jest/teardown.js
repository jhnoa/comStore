module.exports = function() {
  // To stop the process immediately after the test done
  setTimeout(() => {
    process.exit();
  }, 1000);
};
