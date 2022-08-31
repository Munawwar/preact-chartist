import { PieChart } from 'chartist';
import ChartistBaseChart from './ChartistBaseChart'


class ChartistPieChart extends ChartistBaseChart {
  Component = PieChart;
  type = 'Pie';
  baseCSSClassName = 'ChartistBaseChart ChartistPieChart';
}

export default ChartistPieChart;
