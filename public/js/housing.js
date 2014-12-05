var width = parseInt(d3.select('#housing').style('width'), 10),
	height = width,
	radius = Math.min(width, height)/2,
	innerRadius = 0.0 * radius;

var pie = d3.layout.pie()
	.sort(null)
	.value(function(d) { return Math.PI * 2 / 35; });

var tip = d3.tip()
	.attr('class', 'd3-tip')
	.offset([0, 0])
	.html(function(d) { return d.data.country; });

// ARC
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
		return radius * d.data.air_pollution/50;
	});

var arc_civic = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.consultation_on_rule_making/14;
	});

var arc_health = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.life_expectancy/100;
	});

var arc_life = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.life_satisfaction/10;
	});

var arc_safety = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.assault_rate/12;
	});

var arc_balance = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.employees_working_very_long_hours/46;
	});

var arc_education = d3.svg.arc()
	.innerRadius(innerRadius) //150
	.outerRadius(function(d) {
		return radius * d.data.student_skills/600;
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

svg_housing.call(tip);
svg_income.call(tip);
svg_community.call(tip);
svg_environment.call(tip);
svg_civic.call(tip);
svg_health.call(tip);
svg_life.call(tip);
svg_safety.call(tip);
svg_balance.call(tip);
svg_education.call(tip);
svg_job.call(tip);

d3.csv('OECD_BetterLifeIndex_Clean.csv', function(error, data) {
	var path_housing_expenditure = svg_housing.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_housing)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	var path_income = svg_income.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_income)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	var path_community = svg_community.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_community)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	var path_environment = svg_environment.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_environment)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	var path_civic = svg_civic.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_civic)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	var path_health = svg_health.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_health)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	var path_life = svg_life.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_life)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	var path_safety = svg_safety.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_safety)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	var path_balance = svg_balance.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_balance)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	var path_education = svg_education.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_education)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);

	var path_job = svg_job.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#56d5fc")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_job)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);
});


// d3.csv('aster_data.csv', function(error, data) {
// 	data.forEach(function(d) {
// 		// d.id = d.id;
// 		// d.order = +d.order;
// 		// d.color = d.color;
// 		// d.weight = +d.weight;
// 		// d.score = +d.score;
// 		// d.width = +d.weight;
// 		// d.label = d.label;
// 	});

// 	var path = svg.selectAll(".solidArc")
// 			.data(pie(data))
// 		.enter().append("path")
// 			.attr("fill", "#56d5fc")
// 			.attr("class", "solidArc")
// 			.attr("stroke", "#56d5fc")
// 			.attr("d", arc)
// 			.on('mouseover', tip.show)
// 			.on('mouseout', tip.hide);
// });
