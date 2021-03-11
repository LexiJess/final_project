//Tableau Embed function
function initViz() {
    url = "https://public.tableau.com/views/finalproject_16151831568920/2020GNIC?:language=en&:display_count=y&:origin=viz_share_link",
    options = {
        hideToolbar: true,
        width: "600px",
        height: "600px",
    };
    viz = new tableau.Viz(geomap, url, options);

    url2= "https://public.tableau.com/views/Book1_16153169893270/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link",
    options = {
        hideToolbar: true,
        width: "600px",
        height: "600px",
    };
    viz2 = new tableau.Viz(radialbarchart, url2, options);
  }


