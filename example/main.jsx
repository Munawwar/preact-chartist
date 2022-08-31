// @ts-check
import { h, render } from 'preact';
import { ChartistBarChart } from '../index';

const data = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  series: [
    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
  ]
};

const options = {
  high: 10,
  low: -10,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 === 0 ? value : null;
    }
  }
};

function Bar() {
  var aspectRatio = 'ct-octave';
  return (
    <div>
      <ChartistBarChart options={options} className={aspectRatio} data={data} />
    </div>
  )
}

render(
  <Bar />,
  // @ts-ignore
  document.getElementById('preact-chart'),
)
