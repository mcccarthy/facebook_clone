exports.home = (req, res) => {
  res.status(200).json({
    message: 'Hello from controller',
    error: 'No error'
  });
};
