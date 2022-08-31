import { BarChart } from 'chartist';
import ChartistBaseChart from './ChartistBaseChart'


class ChartistBarChart extends ChartistBaseChart {
  Component = BarChart;
  type = 'Bar';
  baseCSSClassName = 'ChartistBaseChart ChartistBarChart';
}

export default ChartistBarChart;
