import { Component, JSX } from 'preact';
import {
  // IChartOptions,
  IResponsiveOptionTuple,
  ILineChartOptions,
  IBarChartOptions,
  IPieChartOptions,
} from 'chartist';

export type ChartistGraphCommonProps = {
  data: object;
  className?: string;
  listener?: any;
  style?: string | {[key: string]: string | number};
}

export type ChartistGraphLineProps = {
  type: 'Line';
  options?: ILineChartOptions;
  responseOptions?: Array<IResponsiveOptionTuple<ILineChartOptions>>;
};

export type ChartistGraphPieProps = {
  type: 'Pie';
  options?: IPieChartOptions;
  responseOptions?: Array<IResponsiveOptionTuple<IPieChartOptions>>;
};

export type ChartistGraphBarProps = {
  type: 'Bar';
  options: IBarChartOptions;
  responseOptions?: Array<IResponsiveOptionTuple<IBarChartOptions>>;
};

export type ChartistGraphProps = ChartistGraphCommonProps & (ChartistGraphLineProps | ChartistGraphPieProps | ChartistGraphBarProps);

export default class ChartistGraph extends Component<ChartistGraphProps, {}> {
  render(props: ChartistGraphProps, state: any): JSX.Element;
}
