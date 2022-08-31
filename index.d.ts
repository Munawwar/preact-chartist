import { Component, JSX } from 'preact';
import {
  BaseChart,
  BarChart,
  LineChart,
  PieChart,
  BarChartOptions,
  LineChartOptions,
  PieChartOptions,
  ResponsiveOptions,
} from 'chartist';

export type ChartistBaseProps = {
  data: object;
  className?: string;
  listener?: any;
  style?: string | {[key: string]: string | number};
}

export type ChartistBarProps = {
  options: BarChartOptions;
  responsiveOptions?: ResponsiveOptions<BarChartOptions>;
};

export type ChartistLineProps = {
  options?: LineChartOptions;
  responsiveOptions?: ResponsiveOptions<LineChartOptions>;
};

export type ChartistPieProps = {
  options?: PieChartOptions;
  responsiveOptions?: ResponsiveOptions<PieChartOptions>;
};

interface Type<T> extends Function { new (...args: any[]): T; }

export default class ChartistBase<ChartProps> extends Component<ChartistBaseProps & ChartProps, {}> {
  Component: Type<BaseChart>;
  baseCSSClassName: string;
  render(props: ChartistBaseProps & ChartProps, state: any): JSX.Element;
}

export class ChartistBarChart extends ChartistBase<ChartistBarProps> {
  type: 'Bar';
  Component: Type<BarChart>;
};

export class ChartistLineChart extends ChartistBase<ChartistLineProps> {
  type: 'Line';
  Component = Type<LineChart>;
};

export class ChartistPieChart extends ChartistBase<ChartistPieProps> {
  type: 'Pie';
  Component = Type<PieChart>;
};
