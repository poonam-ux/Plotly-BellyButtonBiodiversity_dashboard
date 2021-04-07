function init() {
    // Select dropdown menu id and assign it to a variable
    var dropdownMenu = d3.select('#selDataset');
    // Read "names" values from json file and append into dropdown menu
    d3.json("samples.json").then(function(subject) {
        console.log(subject)
        
        var sampleNames = subject.names;
        sampleNames.forEach(function(name) {
            dropdownMenu.append("option").text(name)
            .property("value", name);
        });
        
        // Choose default Subject ID to be plotted
        var firstSample = sampleNames[0];

        console.log(firstSample);

        // Initialize page with firstsample's plots and metadata
        buildCharts(firstSample);
        buildMetadata(firstSample);
    });
}

init()

// Function to build the charts for the selected Subject ID
function buildCharts(sample) {
    d3.json("samples.json").then(function(subject) {
        var samples = subject.samples;
        console.log(samples);

        var resultsArray = samples.filter(data => data.id == sample);
        var result = resultsArray[0];
        console.log(result);

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        // Build a Bar Chart
        var yticks = otu_ids.slice(0, 10).map(function(otu_id) {
            return `OTU ${otu_id}`;
        }).reverse();

        var barTrace = {
            x: sample_values.slice(0, 10).reverse(),
            y: yticks,
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
        }

        var barData = [barTrace]

        var barLayout = {
            title: "Top Bacteria Cultures Found",
            margin: {t: 70, l: 150}
        }

        Plotly.newPlot("bar", barData, barLayout);

        // Build a Bubble Chart
        var bubbleTrace = {
			x: otu_ids,
			y: sample_values,
			text: otu_labels,
			mode: 'markers',
			marker: {
				color: otu_ids,
				size: sample_values,
                colorscale: "Earth"
			}
		};
		
		var bubbleData = [bubbleTrace];
		
		var bubbleLayout = {
			title: '<b>Bubble Chart displaying sample values of OTU IDs of the selected individual<b>',
			xaxis: { title: "OTU ID"},
			yaxis: { title: "Sample Value"}, 
            hovermode: "closest"
		};

        Plotly.newPlot("bubble", bubbleData, bubbleLayout);

        
    });
}

// Function to display metadata for the selected Subject ID
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        console.log(metadata);

        var resultsArray = metadata.filter(data => data.id == sample);
        var result = resultsArray[0];
        var PANEL = d3.select("#sample-metadata");

        // Clear the existing data
        PANEL.html("");

        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });

        // Bonus: Build a Gauge Chart
        buildGauge(result.wfreq);
    });
}

function optionChanged(newSample) {
    buildCharts(newSample);
    buildMetadata(newSample);
}
