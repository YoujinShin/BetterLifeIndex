var width = parseInt(d3.select('#housing').style('width'), 10)-32,
	height = width,
	radius = Math.min(width, height)/2,
	innerRadius = 0.0 * radius;

var pie = d3.layout.pie()
	.sort(null)
	.value(function(d) { return Math.PI * 2 / 35; });

var tooltip = d3.select("body")
	.append("div")
	.attr("id", "tooltip");

var avg_housing_value = radius * 21 / 30,
	avg_income_value = radius * 40516 / 123000,
	avg_community_value = radius * 90 / 120,
	avg_environment_value = radius * 21 / 60,
	avg_civic_value = radius * 7.3 / 14,
	avg_health_value = radius * 79.8 / 110,
	avg_life_value = radius * 6.6 / 10,
	avg_safety_value = radius * 4 / 15,
	avg_balance_value = radius * 8.76 / 46,
	avg_education_value = radius * 497 / 700,
	avg_job_value = radius * 34466 / 123000;


// ARC
var arc_country = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * 0.8;
	});

var arc_housing = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.housing_expenditure/30;
	});

var arc_income = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.household_net_financial_wealth/123000;
	});

var arc_community = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.quality_of_support_network/120;
	});

var arc_environment = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.air_pollution/60;
	});

var arc_civic = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.consultation_on_rule_making/14;
	});

var arc_health = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.life_expectancy/110;
	});

var arc_life = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.life_satisfaction/10;
	});

var arc_safety = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.assault_rate/15;
	});

var arc_balance = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.employees_working_very_long_hours/46;
	});

var arc_education = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.student_skills/700;
	});

var arc_job = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.personal_earnings/123000;
	});

// SVG
var svg_housing = d3.select("#housing").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_income = d3.select("#income").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_community = d3.select("#community").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_environment = d3.select("#environment").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_civic = d3.select("#civic").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_health = d3.select("#health").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_life = d3.select("#life").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_safety = d3.select("#safety").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_balance = d3.select("#balance").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_education = d3.select("#education").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_job = d3.select("#job").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

var svg_country = d3.select("#country").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + width/2 +"," + height/2 + ")");

d3.csv('OECD_BetterLifeIndex_Clean.csv', function(error, data) {

	var path_housing = svg_housing.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			// .filter(function(d){ return d.data.country !== "OECD"; })
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_housing)
			.on('mouseover', function(d) {
				// console.log(d.data.country);
				tooltip.text(d.data.housing_expenditure);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				// tooltip.style("top",0+"px").style("left",0+"px");
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_housing = svg_housing.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_housing_value)
		.attr("class", "avg");


	var path_income = svg_income.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_income)
			.on('mouseover', function(d) {
				tooltip.text(d.data.household_net_financial_wealth);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_income = svg_income.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_income_value)
		.attr("class", "avg");

	var path_community = svg_community.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_community)
			.on('mouseover', function(d) {
				tooltip.text(d.data.quality_of_support_network);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_community = svg_community.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_community_value)
		.attr("class", "avg");

	var path_environment = svg_environment.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_environment)
			.on('mouseover', function(d) {
				tooltip.text(d.data.air_pollution);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_environment = svg_environment.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_environment_value)
		.attr("class", "avg");

	var path_civic = svg_civic.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_civic)
			.on('mouseover', function(d) {
				tooltip.text(d.data.consultation_on_rule_making);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_civic = svg_civic.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_civic_value)
		.attr("class", "avg");

	var path_health = svg_health.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_health)
			.on('mouseover', function(d) {
				tooltip.text(d.data.life_expectancy);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_health = svg_health.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_health_value)
		.attr("class", "avg");


	var path_life = svg_life.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_life)
			.on('mouseover', function(d) {
				tooltip.text(d.data.life_satisfaction);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_life = svg_life.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_life_value)
		.attr("class", "avg");

	var path_safety = svg_safety.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_safety)
			.on('mouseover', function(d) {
				tooltip.text(d.data.assault_rate);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_safety = svg_safety.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_safety_value)
		.attr("class", "avg");

	var path_balance = svg_balance.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_balance)
			.on('mouseover', function(d) {
				tooltip.text(d.data.employees_working_very_long_hours);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_balance = svg_balance.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_balance_value)
		.attr("class", "avg");

	var path_education = svg_education.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_education)
			.on('mouseover', function(d) {
				tooltip.text(d.data.student_skills);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_education = svg_education.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_education_value)
		.attr("class", "avg");

	var path_job = svg_job.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_job)
			.on('mouseover', function(d) {
				tooltip.text(d.data.personal_earnings);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	var avg_job = svg_job.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", avg_job_value)
		.attr("class", "avg");

	var path_country = svg_country.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#fff")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_life)
			.on('mouseover', function(d) {
				// console.log(d.data.country);
				tooltip.text(d.data.country);
				tooltip.style("visibility", "visible");
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			});

	// console.log( svg_job.selectAll("path") );
});

function selectCountry() {

}
