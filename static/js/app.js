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
        
        // Choose default subject ID to be plotted
        var firstSample = sampleNames[0];

        console.log(firstSample);

        // Initialize page with firstsample's metadata and plots
        buildMetadata(firstSample);
        buildCharts(firstSample);
        
    
    });
}

init()