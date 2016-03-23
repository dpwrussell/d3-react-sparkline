import d3 from 'd3'
import React from 'react'
import ReactFauxDOM from 'react-faux-dom'

export default class RRTT extends React.Component {
  // static propTypes = {
  //   width: React.PropTypes.number,
  //   height: React.PropTypes.number,
  //   data: React.PropTypes.array,
  //   interpolation: React.PropTypes.oneOfType([
  //     React.PropTypes.string,
  //     React.PropTypes.function
  //   ])
  // };

  render () {

    var date1 = new Date();

    // const {width, height, data, interpolation} = this.props
    const { flare, circleSize } = this.props;

    var diameter = 960;

    const svg = d3.select(ReactFauxDOM.createElement('svg'))
      .attr("width", diameter)
      .attr("height", diameter - 150);
    const g = svg.append("g")
      .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    var tree = d3.layout.tree()
        .size([360, diameter / 2 - 120])
        .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

    var diagonal = d3.svg.diagonal.radial()
        .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

    if (flare) {

      var nodes = tree.nodes(flare),
          links = tree.links(nodes);

      var link = g.selectAll(".link")
          .data(links)
          .enter()
          .append("path")
          .attr("class", "link")
          .attr("d", diagonal);

      var node = g.selectAll(".node")
          .data(nodes)
          .enter()
          .append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

      node.append("circle")
          .attr("r", circleSize);

      node.append("text")
          .attr("dy", ".31em")
          .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
          .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
          .text(function(d) { return d.name; });

    }

    var date2 = new Date();
    var diff = date2 - date1; //milliseconds interval
    console.log("Time spent in RRTT render: " + diff + "ms");

    return svg.node().toReact();
  }
}
