const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/build'),
  },
  mode: 'none',
  resolve: {
    extensions: ['.tsx', '.json', '.js', '.jsx', 'ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /.css?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        //로더는 오른쪽부터 읽어들이므로 postcss-loader를 맨 오른쪽에 넣어준다.
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
