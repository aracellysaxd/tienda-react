module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'vite'],
    files: [
      { pattern: 'src/**/*.test.js', type: 'module' },
      { pattern: 'src/**/*.test.jsx', type: 'module' }
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-vite')
    ],
    browsers: ['Chrome'],
    singleRun: true
  });
};