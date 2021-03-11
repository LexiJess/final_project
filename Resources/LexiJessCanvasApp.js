
	d3.csv("Top_Bottom_Ten_LexiJess.csv").then(function(data){ 

       
        var listElementGNI = {y:data[0].GNI_2011, label: data[0].country_name};
                    var ListGNI_2011= [];
                    var ListGNI_2014= [];
                    var ListGNI_2017= [];
                var i;
                for (i = 0; i < data.length; i++) {
                    let countryName=data[i].country_name;
                    let GNI_2011=data[i].GNI_2011;
                    let GNI_2014=data[i].GNI_2014;
                    let GNI_2017=data[i].GNI_2017;
        
                    let listElement2011GNI = {y:parseInt(data[i].GNI_2011), label: data[i].country_name};
                    let listElement2014GNI = {y:parseInt(data[i].GNI_2014), label: data[i].country_name};
                    let listElement2017GNI = {y:parseInt(data[i].GNI_2017), label: data[i].country_name};
        
                    ListGNI_2011.push(listElement2011GNI);
                    ListGNI_2014.push(listElement2014GNI);
					ListGNI_2017.push(listElement2017GNI);
					
					

					console.log(ListGNI_2011);
					
				}
		let topSlice2011GNI=ListGNI_2011.slice(0,10);
		let topSlice2014GNI=ListGNI_2014.slice(0,10);
		let topSlice2017GNI=ListGNI_2017.slice(0,10);
		
	

		let bottomSlice2011GNI=ListGNI_2011.slice(11,20);
		let bottomSlice2014GNI=ListGNI_2014.slice(11,20);
		let bottomSlice2017GNI=ListGNI_2017.slice(11,20);


        console.log(topSlice2011GNI.y);

        
//This is where I c/p in the mobile subscriptions logic.
        var listElementLifeEx = {y:data[0].LifeEx_2011, label: data[0].country_name};
                    var ListLifeEx_2011= [];
                    var ListLifeEx_2014= [];
                    var ListLifeEx_2017= [];
                var i;
                for (i = 0; i < data.length; i++) {
                    let countryName=data[i].country_name;
                    let LifeEx_2011=data[i].LifeEx_2011;
                    let LifeEx_2014=data[i].LifeEx_2014;
                    let LifeEx_2017=data[i].LifeEx_2017;

                    let listElementLifeEx_2011 = {y:parseInt(data[i].LifeEx_2011), label: data[i].country_name};
                    let listElementLifeEx_2014 = {y:parseInt(data[i].LifeEx_2014), label: data[i].country_name};
                    let listElementLifeEx_2017 = {y:parseInt(data[i].LifeEx_2017), label: data[i].country_name};

                    ListLifeEx_2011.push(listElementLifeEx_2011);
                    ListLifeEx_2014.push(listElementLifeEx_2014);
                    ListLifeEx_2017.push(listElementLifeEx_2017);



                console.log(ListLifeEx_2011);

        }
        let topSliceLifeEx_2011=ListLifeEx_2011.slice(0,10);
        let topSliceLifeEx_2014=ListLifeEx_2014.slice(0,10);
        let topSliceLifeEx_2017=ListLifeEx_2017.slice(0,10);



        let bottomSliceLifeEx_2011=ListLifeEx_2011.slice(11,20);
        let bottomSliceLifeEx_2014=ListLifeEx_2014.slice(11,20);
        let bottomSliceLifeEx_2017=ListLifeEx_2017.slice(11,20);


//This is where I c/p in the logic for account ownership
        var listElementurb= {y:data[0].x2011_urb, label: data[0].country_name};
                    var Listx2011_urb= [];
                    var Listx2014_urb= [];
                    var Listx2017_urb= [];
                var i;
                for (i = 0; i < data.length; i++) {
                    let countryName=data[i].country_name;
                    let x2011_urb=data[i].x2011_urb;
                    let x2014_urb=data[i].x2014_urb;
                    let x2017_urb=data[i].x2017_urb;

                    let listElementx2011_urb = {y:parseInt(data[i].x2011_urb), label: data[i].country_name};
                    let listElementx2014_urb = {y:parseInt(data[i].x2014_urb), label: data[i].country_name};
                    let listElementx2017_urb = {y:parseInt(data[i].x2017_urb), label: data[i].country_name};

                    Listx2011_urb.push(listElementx2011_urb);
                    Listx2014_urb.push(listElementx2014_urb);
                    Listx2017_urb.push(listElementx2017_urb);



                console.log(Listx2011_urb);

        }
        let topSlicex2011_urb=Listx2011_urb.slice(0,10);
        let topSlicex2014_urb=Listx2014_urb.slice(0,10);
        let topSlicex2017_urb=Listx2017_urb.slice(0,10);



        let bottomSlicex2011_urb=Listx2011_urb.slice(11,20);
        let bottomSlicex2014_urb=Listx2014_urb.slice(11,20);
        let bottomSlicex2017_urb=Listx2017_urb.slice(11,20);


    function buildChart(myDiv, topSlice2011GNI, topSlice2014GNI, topSlice2017GNI, title){
            
        console.log("myDiv", myDiv);

        CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                // "#2F4F4F",
                "#008080",
                "#2E8B57",
                // "#3CB371",
                "#90EE90"                
                ]);
    
        var chart = new CanvasJS.Chart(myDiv, {
            animationEnabled: true,
            theme: "dark2",
            colorSet: "greenShades",
            title:{
                text: title
            },
            axisY: {
                title: "Years",
                includeZero: true
            },
            legend: {
                cursor:"pointer",
                itemclick : toggleDataSeries
            },
            toolTip: {
                shared: true,
                content: toolTipFormatter
            },
            data: [{
                type: "bar",
                showInLegend: true,
                name: "2011",
                // color: "#6D78AD",
                dataPoints: topSlice2011GNI
            
            },
            {
                type: "bar",
                showInLegend: true,
                name: "2014",
                // color: "silver",
                dataPoints: topSlice2014GNI
            },
            {
                type: "bar",
                showInLegend: true,
                name: "2017",
                // color: "#51CDA0",
                dataPoints: topSlice2017GNI
            }]
            
        })
         
        return chart;
    }
        chart1=buildChart("chartContainer", topSlice2011GNI, topSlice2014GNI, topSlice2017GNI, "GNI of Countries that are Top Ten by 2010 Development")
        chart1.render()
        chart2=buildChart("chartContainerB", bottomSlice2011GNI, bottomSlice2014GNI, bottomSlice2017GNI, "GNI of Countries that are Bottom Ten by y 2010 Development")
        chart2.render()
        chart3=buildChart("chartContainerC", topSliceLifeEx_2011, topSliceLifeEx_2014, topSliceLifeEx_2017, "Life Expectancy in Countries that are Top Ten by y 2010 Development")
        chart3.render()
        chart4=buildChart("chartContainerD", bottomSliceLifeEx_2011, bottomSliceLifeEx_2014, bottomSliceLifeEx_2017, "Life Expectancy Countries that are Bottom Ten by y 2010 Development")
        chart4.render()
        chart3=buildChart("chartContainerE", topSlicex2011_urb, topSlicex2014_urb, topSlicex2017_urb, "Urbanization in Countries that are Top Ten by y 2010 Development")
        chart3.render()
        chart4=buildChart("chartContainerF", bottomSlicex2011_urb, bottomSlicex2014_urb, bottomSlicex2017_urb, "Urbanization in Countries that are Bottom Ten by y 2010 Development")
        chart4.render()
	});
	

	function toolTipFormatter(e) {
		var str = "";
		var total = 0 ;
		var str3;
		var str2 ;
		for (var i = 0; i < e.entries.length; i++){
			var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
			total = e.entries[i].dataPoint.y + total;
			str = str.concat(str1);
		}
		str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
		str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
		return (str2.concat(str)).concat(str3);
	}

	function toggleDataSeries(e) {
		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		chart.render();


	}
	


	
	
		
	

