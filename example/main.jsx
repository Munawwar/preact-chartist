import { h, render, Component } from 'preact';
import ChartistGraph from '../index';

class Bar extends Component {
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

    var aspectRatio = 'ct-octave';

    return (
      <div>
        <ChartistGraph type='Bar' options={options} className={aspectRatio} data={data} />
      </div>
    )
  }
}

render(
  <Bar />,
  // @ts-ignore
  document.getElementById('react-chart'),
)
