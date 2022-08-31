// @ts-check
import { h, Component, cloneElement, createRef } from 'preact';
import Chartist from 'chartist';

class ChartistGraph extends Component {
  displayName = 'ChartistGraph'

  chart = createRef();

  componentWillUnmount() {
    if (this.chartist) {
      this.chartist.detach();
    }
  }

  componentDidMount() {
    this.updateChart(this.props);
  }

  componentDidUpdate() {
    this.updateChart(this.props);
  }

  updateChart(config) {
    let { type, data } = config;
    let options = config.options || {};
    let responsiveOptions = config.responsiveOptions || [];
    let event;

    if (this.chartist) {
      this.chartist.update(data, options, responsiveOptions);
    } else {
      this.chartist = new Chartist[type](this.chart.current, data, options, responsiveOptions);

      if (config.listener) {
        for (event in config.listener) {
          if (config.listener.hasOwnProperty(event)) {
            this.chartist.on(event, config.listener[event]);
          }
        }
      }
    }

    return this.chartist;
  }

  render() {
    const { className, style, children, data, type } = this.props;
    const childrenWithProps = (children || []).map((child) => cloneElement(child, {
      type,
      data,
    }));
    return (
      <div className={`ct-chart ${className || ''}`} ref={this.chart} style={style}>
        {childrenWithProps}
      </div>
    )
  }
}

export default ChartistGraph;
