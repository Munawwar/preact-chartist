preact-chartist
===============

Preact component for [Chartist.js](https://gionkunz.github.io/chartist-js/)

### Installation

```
$ npm install preact-chartist --save
```
Chartist is a peer dependency to preact chartist. You need to install it if you do not have it installed already.

```
$ npm install chartist --save
```

### Usage

```JavaScript
import { ChartistBarChart } from 'react-chartist';

class Bar extends React.Component {
  render() {

    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    return (
      <div>
        <ChartistBarChart data={data} options={options} />
      </div>
    )
  }
}

ReactDOM.render(<Bar />, document.body)

```

### Options

Please check out [Chartist.js API documentation](http://gionkunz.github.io/chartist-js/api-documentation.html) for more details of the options.

* data - chart data (required)
* type - chart type (required)
* style - inline css styles (optional)
* options - chart options (optional)
* responsive-options - chart responsive options (optional)

To add support for aspect ratio

```jsx
<ChartistBarChart className="ct-octave" data={data} options={options} type={type} />
```

### Note

This module does not include the css files for Chartist. If you want to add it, include their CDN in your html file

```HTML
<link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
<script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
```

Or `npm` to install Chartist and include it in your build process.

```
$ npm install chartist
```

### Development

```
$ npm ci
```

### License

MIT

### Credits

Thanks to the original [react-chartist](https://github.com/fraserxu/react-chartist) project and it's contributors; from which this project was forked.