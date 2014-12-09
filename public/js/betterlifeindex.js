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
				tooltip.text(d.data.country+", "+d.data.housing_expenditure+"%");
				tooltip.style("visibility", "visible");


				$( "#topic" ).html( 'Housing Expenditure, ' );
				$( "#contents ").html("This indicator considers the expenditure of households in housing and maintenance of the house, as defined in the SNA (P31CP040: Housing, water, electricity, gas and other fuels; P31CP050: Furnishings, households’ equipment and routine maintenance of the house). It includes actual and imputed rentals for housing, expenditure in maintenance and repair of the dwelling (including miscellaneous services), in water supply, electricity, gas and other fuels, as well as the expenditure in furniture and furnishings and households equipment, and goods and services for routine maintenance of the house as a percentage of the household gross adjusted disposable income. Data refer to the sum of households and non-profit institution serving households."
					+"<br> - Percentage of the household gross adjusted disposable income"	
				);
				// d3.select(this).moveToFront();
			})
			.on("mousemove", function(){
				// tooltip.style("top",0+"px").style("left",0+"px");
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
				// d3.select(avg_housing).movingToFront();
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
				tooltip.text(d.data.country+", $"+d.data.household_net_financial_wealth);
				tooltip.style("visibility", "visible");

				$( "#topic" ).html( 'Household Net Financial Wealth, ' );
				$( "#contents ").html(
					"Net financial wealth consists of : currency and deposits, securities other than share, loans, shares and other equity (including shares issued by investment funds), insurance technical reserves, and other accounts receivable or payable, net of household financial liabilities, as defined by the System of National Accounts – SNA. Data refer to the sum of households and non-profit institution serving households."
					+"<br> - Unit of measure used: US dollars at current PPPs per capita"
				);
				// d3.select(this).moveToFront();
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
				tooltip.text(d.data.country+", "+d.data.quality_of_support_network+"%");
				tooltip.style("visibility", "visible");
				// d3.select(this).moveToFront();
				$( "#topic" ).html( 'Quality of support network, ' );
				$( "#contents ").html(
					"It's a measure of perceived social network support. The indicator is based on the question: “If you were in trouble, do you have relatives or friends you can count on to help you whenever you need them, or not?” and it considers the respondents who respond positively."
					+"<br> - Unit of measure used: Percentage of people"
				);
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
				tooltip.text(d.data.country+", "+d.data.air_pollution);
				tooltip.style("visibility", "visible");
				// d3.select(this).moveToFront();

				$( "#topic" ).html( 'Air pollution, ' );
				$( "#contents ").html(
					"The indicator is urban-population weighted average of annual concentrations of particulate matters less than 10 microns in diameter (PM10) in the air in residential areas of cities with more than 100,000 residents."
					+"<br> - Unit of measure used: Micrograms per cubic meter"
				);
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
				tooltip.text(d.data.country+", "+d.data.consultation_on_rule_making);
				tooltip.style("visibility", "visible");
				// d3.select(this).moveToFront();


				$( "#topic" ).html( 'Consultation on rule-making, ' );
				$( "#contents ").html(
					"The indicator is a weighted average of yes/no answers to various questions on the existence of law consultation by citizens, of formal procedures enabling general public to impact regulation and governmental actions. The indicator describes the extent to which formal consultation processes are built in at key stages of the design of regulatory proposals, and what mechanisms exist for the outcome of that consultation to influence the preparation of draft primary laws and subordinate regulations. This indicator has been computed based on responses to the OECD’s survey of regulatory management systems, where respondents were government officials in OECD countries. The indicator is based on questions about the existence of formal procedures enabling general public, business and civil society organisations to impact regulation and governmental actions, and on whether citizens’ views on such consultation procedures are made public."
				);
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
				tooltip.text(d.data.country+", "+d.data.life_expectancy);
				tooltip.style("visibility", "visible");
				// d3.select(this).moveToFront();

				$( "#topic" ).html( 'Life expectancy, ' );
				$( "#contents ").html(
					"Life expectancy measures how long on average people could expect to live based on the age-specific death rates currently prevailing. This measure refers to people born today and is computed as a weighted average of life expectancy for men and women."
					+"<br> - Unit of measure used: Years old"
				);

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
				tooltip.text(d.data.country+", "+d.data.life_satisfaction);
				tooltip.style("visibility", "visible");
				// d3.select(this).moveToFront();

				$( "#topic" ).html( 'Life Satisfaction, ' );
				$( "#contents ").html(
					"The indicator considers people's evaluation of their life as a whole. It is a weighted-sum of different response categories based on people's rates of their current life relative to the best and worst possible lives for them on a scale from 0 to 10, using the Cantril Ladder (known also as the Self-Anchoring Striving Scale)."
					+"<br> - Unit of measure used: Mean value (Cantril Ladder)"
				);
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
				tooltip.text(d.data.country+", "+d.data.assault_rate+"%");
				tooltip.style("visibility", "visible");
				// d3.select(this).moveToFront();

				$( "#topic" ).html( 'Assault rate, ' );
				$( "#contents ").html(
					"The indicator is based on the question: 'Within the past 12 months: have you been assaulted or mugged?' and it considers people declaring having been assaulted or mugged."
					+"<br>  - Unit of measure used: Percentage of people aged 15 and over"
				);
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
				tooltip.text(d.data.country+", "+d.data.employees_working_very_long_hours+"%");
				tooltip.style("visibility", "visible");
				// d3.select(this).moveToFront();

				$( "#topic" ).html( 'Employees working very long hours, ' );
				$( "#contents ").html(
					"This indicator measures the proportion of dependent employed whose usual hours of work per week are 50 hours or more."
					+"<br>  - Unit of measure used: Percentage of the dependent employed"
				);
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
				tooltip.text(d.data.country+": "+d.data.student_skills);
				tooltip.style("visibility", "visible");
				// d3.select(this).moveToFront();

				$( "#topic" ).html( 'Student skills, ' );
				$( "#contents ").html(
					"Students’ average score in reading, mathematics and science as assessed by the OECD’s Programme for International Student Assessment (PISA)"
					+"<br>  - Unit of measure used: Average PISA scores"
				);
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
				tooltip.text(d.data.country+", $"+d.data.personal_earnings);
				tooltip.style("visibility", "visible");
				// d3.select(this).moveToFront();

				$( "#topic" ).html( 'Personal earnings, ' );
				$( "#contents ").html(
					"This indicator refers to the average annual wages per full-time equivalent dependent employee, which are obtained by dividing the national-accounts-based total wage bill by the average number of employees in the total economy, which is then multiplied by the ratio of average usual weekly hours per full-time employee to average usually weekly hours for all employees. It considers the employees’ gross remuneration, that is, the total before any deductions are made by the employer in respect of taxes, contributions of employees to social security and pension schemes, life insurance premiums, union dues and other obligations of employees."
					+"<br>  - Unit of measure used: US dollars at 2012 prices"
				);
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

	var selectedCountry;

	var path_country = svg_country.selectAll(".solidArc")
			.data(pie(data))
		.enter().append("path")
			.attr("fill", "#fff")
			.attr("class", "solidArc")
			.attr("stroke", "#56d5fc")
			.attr("d", arc_life)
			.on('mouseover', function(d) {
				selectCountry(d.data.country);
				// console.log(d.data.country);
				tooltip.text(d.data.country);
				tooltip.style("visibility", "visible");

				$( "#topic" ).html( 'The Better Life Index ' );
				$( "#contents ").html(
					"allows you to compare well-being across countries, based on 11 topics the OECD has identified as essential, in the areas of material living conditions and quality of life. The Index aims to involve citizens in this debate, and to empower them to become more informed and engaged in the policy-making process that shapes all our lives. For this visualization, one index has been selected in each topic."	
				);

				// selectedCountry = this;
				// d3.select(this).moveToFront();
			})
			.on("mousemove", function(){
				tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+12)+"px");
			})
			.on("mouseout", function(){
				// console.log(selectedCountry);
				// d3.select(this).attr("fill", "#fff");
				// d3.select(selectedCountry).attr("fill", "blue");

				// svg_country.selectAll("path").
				tooltip.style("visibility", "hidden");
			});

	// console.log( svg_job.selectAll("path") );
});

function selectCountry(d) {
	svg_life.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_civic.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_community.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_safety.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_health.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_housing.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_income.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_job.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_balance.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_education.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_environment.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#56d5fc");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});

	svg_country.selectAll("path").each(function(e) {
		if(d == e.data.country) {
			d3.select(this).attr("fill", "blue");
			d3.select(this).attr("stroke", "blue");
		} else {
			d3.select(this).attr("fill", "#fff");
			d3.select(this).attr("stroke", "#56d5fc");
		}
	});
	
}

d3.selection.prototype.moveToFront = function() {
  // console.log('hi');
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};
