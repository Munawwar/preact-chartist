import { h, Component, cloneElement, createRef } from 'preact';

class ChartistBaseChart extends Component {
  Component = (...args) => {};
  type = 'Base';
  baseCSSClassName = 'ChartistBaseChart';

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
    let { data } = config;
    let options = config.options || {};
    let responsiveOptions = config.responsiveOptions || [];
    let event;

    if (this.chartist) {
      this.chartist.update(data, options, responsiveOptions);
    } else {
      this.chartist = new this.Component(this.chart.current, data, options, responsiveOptions);

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
    const { className, style, children, data } = this.props;
    const childrenWithProps = (children || []).map((child) => cloneElement(child, {
      type: this.type,
      data
    }));
    return /* @__PURE__ */ h(
      "div",
      {
        className: `${this.baseCSSClassName} ${className || ""}`,
        ref: this.chart,
        style
      },
      childrenWithProps
    );
  }
}

export default ChartistBaseChart;
