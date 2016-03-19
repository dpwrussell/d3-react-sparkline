import d3 from 'd3'
import React from 'react'
import ReactFauxDOM from 'react-faux-dom'

class Sparkline extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array,
    interpolation: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.function
    ])
  };

  render () {
    const {width, height, data, interpolation} = this.props

    // const el = d3.select(ReactFauxDOM.createElement('svg'))
    //   .attr({width, height})
    //
    // const x = d3.scale.linear()
    //   .range([0, width])
    //   .domain(d3.extent(data, (d, i) => i))
    //
    // const y = d3.scale.linear()
    //   .range([height, 0])
    //   .domain(d3.extent(data, (d) => d))
    //
    // const line = d3.svg.line()
    //   .x((d, i) => x(i))
    //   .y((d) => y(d))
    //   .interpolate(interpolation)
    //
    // el.append('path')
    //   .datum(data)
    //   .attr({
    //     key: 'sparkline',
    //     className: 'sparkline',
    //     d: line
    //   })
    //
    // return el.node().toReact()


    var diameter = 960;

    const svg = d3.select(ReactFauxDOM.createElement('svg'))
    // const svg = d3.select("#test")
      .attr({width, height})
      // .append("circle")
    svg.append("circle")
      .attr("r", 4.5)
      .attr("cx", 60)
      .attr("cy", 60)
      .style("fill", "steelblue");

    // const svg = d3.select(ReactFauxDOM.createElement('svg'))
    // // const svg = d3.select("#test")
    // //   .attr("width", diameter)
    // //   .attr("height", diameter - 150)
    //   // .append("g")
    //   svg.append("g")
    //     .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
    //
    // var tree = d3.layout.tree()
    //     .size([360, diameter / 2 - 120])
    //     .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });
    //
    // var diagonal = d3.svg.diagonal.radial()
    //     .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });
    //
    // // var svg = el.append("svg")
    // //     .attr("width", diameter)
    // //     .attr("height", diameter - 150)
    // //   .append("g")
    // //     .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
    //
    // d3.json("flare.json", function(error, root) {
    //   if (error) throw error;
    //
    //   var nodes = tree.nodes(root),
    //       links = tree.links(nodes);
    //
    //   console.log(svg.selectAll(".link"));
    //
    //   var link = svg.selectAll(".link")
    //       .data(links)
    //       .enter()
    //       .append("path")
    //       .attr("class", "link")
    //       .attr("d", diagonal);
    //
    //   var node = svg.selectAll(".node")
    //       .data(nodes)
    //       .enter()
    //       .append("g")
    //       .attr("class", "node")
    //       .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
    //
    //   node.append("circle")
    //       .attr("r", 4.5);
    //
    //   node.append("text")
    //       .attr("dy", ".31em")
    //       .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
    //       .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
    //       .text(function(d) { return d.name; });
    //
    //
    // });



    return svg.node().toReact();
    // return (<p>Test</p>)


  }
}

export default Sparkline
