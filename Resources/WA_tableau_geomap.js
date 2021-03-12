//Tableau Embed function
function initViz() {
    url = "https://public.tableau.com/shared/J46ZYPMHF?:display_count=y&:origin=viz_share_link",
    options = {
        hideToolbar: true,
        width: "1300px",
        height: "1050px",
    };
    viz = new tableau.Viz(geomap, url, options);

    url2= "https://public.tableau.com/views/Book1_16153169893270/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link",
    options = {
        hideToolbar: true,
        width: "800px",
        height: "600px",
    };
    viz2 = new tableau.Viz(radialbarchart, url2, options);

    url3= "https://public.tableau.com/views/Final_Trends/Sheet1?:language=en&:display_count=y&:origin=viz_share_link",
    options = {
        hideToolbar: true,
        width: "800px",
        height: "600px",
    };
    viz3 = new tableau.Viz(areachart, url3, options);
  }


