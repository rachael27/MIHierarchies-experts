function twl_guidedtour() {

    var vizID = "treeswlinking";
    var pageID = "guidedtour";

    var stepsArr = [
        {
            title: "Welcome to the Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-left'>You can interact with each highlighted element in the tour to see it in action. <hr class='border border-danger border-2 opacity-50'> Pop-up boxes will guide you through every step of the tour. If at times the boxes are hidden, please scroll the screen to find them. <hr class='border border-danger border-2 opacity-50'>In addition to the back and next buttons, you can also use the left and right arrow keys to move through the tour.</p>"
        },
        {
            element: document.querySelector("#treeswlinking_svg"),
            title: "Arrangement of nodes in the BaseH and TargetH<hr class='border border-primary border-3 opacity-75'>",
            intro: "Nodes are arranged in an alphabetical order from top-to-bottom for easy access in each tree and sub-tree."
        },
        {
            element: document.querySelector('[id="h1tree_e11-143"]'),
            title: "Node with a green border <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-justify'>A node may represent a genre or book. <br> <hr class='border border-danger border-2 opacity-50'> If the node has a green border, it is a genre/sub-genre.</p>"
        },

        {
            element: document.querySelector('[id="h1tree_blacklm"]'),
            title: "Node without a green border <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-justify'>If the node doesn't have a border, it is a book. </p>"
        },
        {
            element: document.querySelector(".h2tree_addsas_text"),
            title: "Interacting with a label <hr class='border border-primary border-3 opacity-75'>",
            intro: "The label displays the truncated book/genre name. <hr class='border border-danger border-2 opacity-50'> You can hover on a label to magnify the text and to view the entire book/genre name."
        },

        {
            element: document.querySelector("#link_g"),
            title: "A connecting link between genres <hr class='border border-primary border-3 opacity-75'>",
            intro: "Consider the yellow link for this step of the tour. <hr class='border border-danger border-2 opacity-50'> If a link is drawn between 2 genres, it means that the genre along with the books that belong to it are common to both hierarchies. <hr class='border border-danger border-2 opacity-50'> Hovering on a link (hover on the yellow link) highlights the BaseH and TargetH nodes that the link connects and display the node details."
        },
        {
            element: document.querySelector('[id="link_4dtahs"]'),
            title: "A connecting link between books <hr class='border border-primary border-3 opacity-75'>",
            intro: "Consider the orange link for this step of the tour. <hr class='border border-danger border-2 opacity-50'>  If a link is drawn between 2 books, it means that the book is common to both hierarchies."
        },

        {
            element: document.querySelector('[id="legend"]'),
            title: "Color of the links connecting the common elements <hr class='border border-primary border-3 opacity-75'>",
            intro: "This legend shows the colors of the connecting links which is based on the level of the node in the BaseH."
        },

        {
            element: document.querySelector('[id="h1tree_4dtahs"]'),
            title: "Interacting with a node - tooltip <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can hover on a node to view a tooltip which displays the details about a node. <br><hr class='border border-danger border-2 opacity-50'> It also highlights the path from the node to the root."
        },
        {
            element: document.querySelector('[id="h1tree_ja10"]'),
            title: "Tree levels <hr class='border border-primary border-3 opacity-75'>",
            intro: "The level of a node is the number of ancestors from the given node until the root node. <hr class='border border-danger border-2 opacity-50'> To calculate the level, simply count the number of highlighted nodes starting from the root node at level 0. Hence, the level of the selected node is 2.  <hr class='border border-danger border-2 opacity-50'> The root node is at level 0."
        },
        {
            element: document.querySelector("#h1tree .triangle-f"),
            title: "The green triangle <hr class='border border-primary border-3 opacity-75'>",
            intro: "The green triangle indicates that a node has been collapsed (i.e. the children of that node are hidden)."
        },

        {
            element: document.querySelector('[id="h1tree_f"]'),
            title: "Interacting with a node - collapse/expand <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can click on a node (with a green triangle) to expand its children. <br><hr class='border border-danger border-2 opacity-50'> Clicking on the node again will collapse it."
        },




        {
            element: document.querySelector('[id="search-nodes"]'),
            title: "Search nodes <hr class='border border-primary border-3 opacity-75'>",
            intro: "Enter the genre/book name, for e.g. type '444' will give you a list of all genres/books which has 444 in its title. <hr class='border border-danger border-2 opacity-50'> Choose the <b>Book:</b><i>444: The hostages remember</i>."
        },
        {
            element: document.querySelector('[id="btn-search"]'),
            title: "Search nodes <hr class='border border-primary border-3 opacity-75'>",
            intro: "Now, click on the search button. Automatic scrolling will take you to the node that you searched for. <hr class='border border-danger border-2 opacity-50'> The searched node and the nodes on its path to the root node are surrounded by gold squares and have gold-colored labels."
        },
        {
            element: document.querySelector('[id="btn-clear"]'),
            title: "Complete your search <hr class='border border-primary border-3 opacity-75'>",
            intro: "Click on the clear button to remove the highlighting.  The highlighting is only removed when you use the clear button."
        },
        {
            element: document.querySelector('[id="btn-changeonlylayout"]'),
            title: "Reset layout <hr class='border border-primary border-3 opacity-75'>",
            intro: "This resets the current layout to the default layout."
        },

        /* {
            element: document.querySelector('[id="btn-changeonlylayout"]'),
            title: "View changes-only layout <hr class='border border-primary border-3 opacity-75'>",
            intro: "The default layout expands only those genres that have undergone changes while hiding the children of those nodes that did not change from the BaseH to TargetH."
        },

        {
            element: document.querySelector('[id="btn-entirelayout"]'),
            title: "View the entire layout <hr class='border border-primary border-3 opacity-75'>",
            intro: "This layout expands all genres - those that have undergone changes and those that have not. <hr class='border border-danger border-2 opacity-50'> You can toogle between the two layouts depending on the task."
        }, */

        {
            element: document.querySelector('[id="btn-zoom"]'),
            title: "Zoom <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can use the zoom-in and zoom-out buttons to zoom in and out of the visualization. <br><hr class='border border-danger border-2 opacity-50'> You can click on any empty (white) space and drag the visualization. <br><hr class='border border-danger border-2 opacity-50'> Finally click on the Zoom button to switch off the zoom mode. <br><hr class='border border-danger border-2 opacity-50'>" + '<video width="320" height="240" controls><source src="Images/twl-zoom.mov" type="video/mp4"></video>'

        },

        {
            element: document.querySelector('[id="btn-reset"]'),
            title: "Zoom Reset (toggle button) <hr class='border border-primary border-3 opacity-75'>",
            intro: "To reset the zoom magnigications, click on the zoom reset button. <br><hr class='border border-danger border-2 opacity-50'> To exit the mode, click the toggle button again<hr class='border border-danger border-2 opacity-50'>" + '<video width="320" height="240" controls><source src="Images/twl-reset.mov" type="video/mp4"></video>'

        },

        {
            element: document.querySelector('[id="btn-expand-folder"]'),
            title: "Expand Node (toggle button) <hr class='border border-primary border-3 opacity-75'>",
            intro: "This button can be used to expand only one node and collapse every other node. <hr class='border border-danger border-2 opacity-50'> To exit the mode, click the toggle button again<hr class='border border-danger border-2 opacity-50'>" + '<video width="320" height="240" controls><source src="Images/twl-expand.mov" type="video/mp4"></video>'

        },

        /*  {
             element: document.querySelector('[id="btn-collapse-folder"]'),
             title: "Collapse genre (toggle button) <hr class='border border-primary border-3 opacity-75'>",
             intro: "This button can be used to collapse only one genre and collapse every other genre.<hr class='border border-danger border-2 opacity-50'> To exit the mode, click the toggle button again<hr class='border border-danger border-2 opacity-50'>" + '<video width="320" height="240" controls><source src="Images/twl-collapse.mov" type="video/mp4"></video>'
 
         }, */
        {

            title: "End of the Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "We have reached the end of the tour. You can now move on the next phase."
        }

    ];



    /*
        d3.select("#mergedtree_root")
            .attr("data-title", "A Merged Node")
            .attr("data-intro", "The root node is a merged node (i.e.) it belongs to both - base (left) and target (right) hierarchies. A merged node is represented by a dot within a hollow circle. ")
            .attr("data-step", 1);
    
        d3.select("#h1tree_root")
            .attr("data-title", "A node that belongs to only the base (left) hierarchy")
            .attr("data-intro", "Node C belongs only to the base hierarchy. It is represented by a hollow circle. Some of the other nodes that belong to only base hierarchy are D, E, F, L5, L6, L7 and L8.")
            .attr("data-step", 2);
    
        d3.select("#h2tree_root")
            .attr("data-title", "A node that belong to only the target (right) hierarchy")
            .attr("data-intro", "Node L9 belongs only to the target hierarchy. It is represented by a dot (filled circle).")
            .attr("data-step", 3);
    
        d3.select("#levellines")
            .select("line")
            .attr("data-title", "Base tree levels (grey level lines)")
            .attr("data-intro", "The grey level lines show the position of a node as it appears in the base hierarchy. In this tree, we have a total of 4 levels ranging from Levels 0 to 3.")
            .attr("data-step", 4);
    
    
        d3.select("#line-chart-l1")
            .select("path")
            .attr("data-title", "Target tree levels (colored level lines)")
            .attr("data-intro", "The colored level lines show the position of a node as it appears in the target hierarchy. In this tree, we have a total of 4 target levels ranging from Levels 0 to 3.")
            // .attr("data-hint", "Clicking on the Level line label can turn the line on/off")
            .attr("data-step", 5);
    
        d3.select("#line-chart-l2")
            .select("path")
            .attr("data-title", "Target tree level 2")
            .attr("data-intro", "This Level 2 line dips down to node L1 to show that node L1 belongs on Level 2 in the target hierarchy and on Level 3 in the base hierarchy.  It then goes back up to meet Node C. Node C has the grey line and the colored line passing through it. This shows that it belongs to Level 2 in both the base and target hierarchies. ")
            .attr("data-hint", "Clicking on the Level line label can turn the line on/off")
            .attr("data-step", 6);
    
    
        d3.select(".text-level1")
            .attr("data-title", "Target tree levels (colored level lines)")
            .attr("data-intro", "Clicking on a level label will switch the line on/off.")
            .attr("data-step", 7);
    
        d3.select("#levelbutton")
            .attr("data-title", "Target level lines button")
            .attr("data-intro", "Alternatively, you can click on this button to switch on/off all the level lines.")
            .attr("data-step", 8);
    */



    introJs()
        //.addHints()
        //.setOptions("disableInteraction", false)
        .setOptions({
            steps: stepsArr,
            // "showStepNumbers": true,
            "exitOnOverlayClick": false,
            "exitOnEsc": false,
            "skipLabel": "",
            "disableInteraction": false
            //"tooltipPosition": "top"


        })
        .oncomplete(function () {
            update_log("introjs-nextbutton", "button", "Completed guided tour. Redirect to landing page", "click")
            window.location.href = 'books-twl-landingpage.html?page=guidedtour';
        })
        .onchange(function () {
            //console.log(this);
            update_log("introjs-nextbutton", "button", "display tooltip " + this._currentStep, "click");
        })

        //.setOption("showStepNumbers", true)


        .start();


    // console.log(introJs().isActive());


    function update_log(elementID, elementType, elementDescription, eventDescription) {
        var date = new Date();


        var logObject = JSON.parse(localStorage.getItem("logObject"));
        logObject.push({
            "date": date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
            "userID": localStorage.getItem("userID"),
            "vizID": "",
            "screenWidth": window.innerWidth,
            "screenHeight": window.innerHeight,
            "pageID": "guided tour",
            "elementID": elementID,
            "elementType": elementType,
            "elementDescription": elementDescription,
            "eventDescription": eventDescription,
            "overall_timestamp": Math.round(+new Date() / 1000),
            //"phase_timestamp": new Date().getMilliseconds(),
            "questionID": "",
            "question": "",
            "useranswer": "",
            "correctanswer": "",
            "score": ""
        });
        localStorage.removeItem("logObject");
        localStorage.setItem("logObject", JSON.stringify(logObject));

    }



    //
}