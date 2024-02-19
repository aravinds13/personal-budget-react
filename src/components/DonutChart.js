import React , { Component} from 'react';
import * as d3 from 'd3';
const colors = [ '#8ce8ad', '#57e188', '#34c768', '#2db757', '#27acaa', '#42c9c2', '#60e6e1', '#93f0e6', '#87d3f2', '#4ebeeb', '#35a4e8', '#188ce5', '#542ea5', '#724bc3', '#9c82d4', '#c981b2', '#b14891', '#ff6d00', '#ff810a', '#ff9831', '#ffb46a', '#ff9a91', '#ff736a', '#f95d54', '#ff4136', '#c4c4cd' ];

class DonutChart extends Component {

    constructor(props) {
        super(props);
        this.chRef = React.createRef();
    }


    // Chart load after component Mount
    componentDidMount() {
        this.drawChart()
    }


    // DrawChart 
    drawChart() {
        d3.select(this.chRef.current).select("svg").remove(); // Remove the old svg
    
        const { datasets, labels } = this.props.data;
        const data = datasets[0].data; // Extract data array from datasets
    
        const svgContainer = d3.select(this.chRef.current).node();
        const width = svgContainer.getBoundingClientRect().width;
        const height = width;
        const margin = 15;
        let radius = Math.min(width / 2, height / 2) / 2 - margin;
        let legendPosition = d3.arc().innerRadius(radius / 1.75).outerRadius(radius);
    
        const svg = d3.select(this.chRef.current)
            .append('svg')
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + width + ' ' + width)
            .append("g")
            .attr("transform", "translate(" + Math.min(width / 2, height / 2) / 2 + "," + Math.min(width / 2, height / 2) / 2 + ")");
    
        let pie = d3.pie()
            .value(d => d);
    
        let data_ready = pie(data);
    
        svg
            .selectAll('whatever')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(radius / 1.75)
                .outerRadius(radius)
            )
            .attr('fill', (d, i) => datasets[0].backgroundColor[i]); // Use backgroundColor from datasets
    
        const labelArc = d3.arc()
            .outerRadius(radius * 0.8) // Adjust the radius to place labels outside the chart
            .innerRadius(radius / 1.75);
    
        svg
            .selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('g')
            .attr("transform", d => `translate(${labelArc.centroid(d)})`)
            .append('text')
            .text((d, i) => labels[i])
            .attr("dy", "0.35em")
            .attr("text-anchor", "middle")
            .style("font-size", "12px");
    
        svg
            .selectAll('.legend-g')
            .append('text')
            .text((d) => { return d.data; })
            .attr("y", 16);
    }
    
    
    

    render() {
        return <>
            <div ref={this.chRef}></div> </>
    }


}

export default DonutChart;
