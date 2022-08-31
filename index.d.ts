import { Component, JSX } from 'preact';
import {
  // BarChart,
  // LineChart,
  // PieChart,
  BarChartOptions,
  LineChartOptions,
  PieChartOptions,
  ResponsiveOptions,
} from 'chartist';

export type ChartistGraphCommonProps = {
  data: object;
  className?: string;
  listener?: any;
  style?: string | {[key: string]: string | number};
}

export type ChartistGraphLineProps = {
  type: 'Line';
  options?: LineChartOptions;
  responseOptions?: ResponsiveOptions<LineChartOptions>;
};

export type ChartistGraphPieProps = {
  type: 'Pie';
  options?: PieChartOptions;
  responseOptions?: ResponsiveOptions<PieChartOptions>;
};

export type ChartistGraphBarProps = {
  type: 'Bar';
  options: BarChartOptions;
  responseOptions?: ResponsiveOptions<BarChartOptions>;
};

export type ChartistGraphProps = ChartistGraphCommonProps & (ChartistGraphLineProps | ChartistGraphPieProps | ChartistGraphBarProps);

export default class ChartistGraph extends Component<ChartistGraphProps, {}> {
  render(props: ChartistGraphProps, state: any): JSX.Element;
}
