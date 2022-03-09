const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'bundle.js'
  }
}

// Relative Path
// C:\Users\cagri.orskaya\Projects\The Modern JavaScript Bootcamp\Boilerplate

// Absolute Path
// path.resolve(__dirname, 'public/scripts')