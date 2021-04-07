# Plotly_Challenge: Belly Button Biodiversity

### Background

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Bar Chart:

1.	Use the D3 library to read in samples.json.
2.	Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    * Use sample_values as the values for the bar chart.
    * Use otu_ids as the labels for the bar chart.
    * Use otu_labels as the hovertext for the chart.

![](https://github.com/poonam-ux/plotly_challenge_BellyButtonBiodiversity/blob/main/Images/barChart_with_hovertext_sm.png)

![](https://github.com/poonam-ux/plotly_challenge_BellyButtonBiodiversity/blob/main/Images/dropdownMenu_populate_sm.png)

## Bubble Chart:

* Create a bubble chart that displays each sample.
* Use otu_ids for the x values.
* Use sample_values for the y values.
* Use sample_values for the marker size.
* Use otu_ids for the marker colors.
* Use otu_labels for the text values.

![](https://github.com/poonam-ux/plotly_challenge_BellyButtonBiodiversity/blob/main/Images/bubbleChart_with_hovertext_sm.png)

* Display the sample metadata, i.e., an individual’s demographic information.
    * Display each key-value pair from the metadata JSON object.

![]()

* Update all of the plots any time that a new sample is selected.

![]()

## Bonus:

* Plot the weekly washing frequency of the individual sample.

* Modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

![]()