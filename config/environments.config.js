module.exports = {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================

  development : (config) => ({
    compiler_public_path : `http://${config.server_host}:${config.server_port}/`
  })
}
