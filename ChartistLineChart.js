import { LineChart } from 'chartist';
import ChartistBaseChart from './ChartistBaseChart'


class ChartistLineChart extends ChartistBaseChart {
  Component = LineChart;
  type = 'Line';
  baseCSSClassName = 'ChartistBaseChart ChartistLineChart';
}

export default ChartistLineChart;
