//Tableau Embed function
function initViz() {
    url = "https://public.tableau.com/shared/29Q2JQJN2?:display_count=y&:origin=viz_share_link",
    options = {
        hideToolbar: true,
        width: "600px",
        height: "600px",
    };
    viz = new tableau.Viz(tabMonthlySales, url, options);
  }