function guidedtour() {

    var vizID = "mergedtree";
    var pageID = "guidedtour";
    var screenSize = localStorage.getItem("screenSize");

    var stepsArr = [
        {
            title: "Welcome to the Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can interact with highlighted elements in the tour to see it in action. <hr class='border border-danger border-2 opacity-50'> Pop-up boxes will guide you through every step of the tour. If at times the boxes are hidden, please scroll to find them. <hr class='border border-danger border-2 opacity-50'>In addition to the back and next buttons, you can also use the left and right arrow keys to move through the tour."
        },


        {
            title: "Arrangement of nodes in the BaseH and TargetH<hr class='border border-primary border-3 opacity-75'>",
            intro: "Nodes are arranged in an alphabetical order from left-to-right for easy access in each tree and sub-tree."
        },

        {
            element: document.querySelector("#h1tree-rect"),
            title: "BaseH - RedPark Library Preview <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-justify'>This is a preview of the nodes in the RedPark library. <hr class='border border-danger border-2 opacity-50'> On the right, you can see a preview of the TargetH - GreenValley library.</p>"
        },


        {
            element: document.querySelector("#mergedtree_root"),
            title: "A Merged Node <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-justify'>The root node is a merged node (i.e.) it belongs to both - BaseH (left) and TargetH (right) hierarchies. <hr class='border border-danger border-2 opacity-50'> A merged node is represented by a green dot within a red circle.</p><hr class='border border-danger border-2 opacity-50'> Hovering on the node, highlights and shows the position of the node in the BaseH and TargetH previews"
        },
        {
            element: document.querySelector("#mergedtree_e11-143"),
            title: "A node that belongs to only the BaseH (RedPark library) hierarchy <hr class='border border-primary border-3 opacity-75'>",
            intro: "Node <i>genre:<b>America</b></i> belongs only to the BaseH. <hr class='border border-danger border-2 opacity-50'> It is represented by a red circle. The link is also colored in red to show that this relationship belongs only to the BaseH."
        },
        {
            element: document.querySelector("#mergedtree_e100"),
            title: "A node that belongs to only the TargetH (right) hierarchy <hr class='border border-primary border-3 opacity-75'>",
            intro: "Node <i>genre:<b>American Literature</b></i> about belongs only to the TargetH. <hr class='border border-danger border-2 opacity-50'> It is represented by a green dot (filled circle). The link is also colored in green to show that this relationship belongs only to the TargetH."
        },
        {

            title: "A link that only belongs to the TargetH <hr class='border border-primary border-3 opacity-75'>",
            intro: "The <i>book:<b>Relations with individual countries</b></i> belongs to the BaseH and the TargetH. However, it belongs to different genres in the BaseH and TargetH which is represented by the two types of links connecting the nodes.<hr class='border border-danger border-2 opacity-50'> Hover on the green-dotted link to see the alternate parent <i>genre:<b>America</b></i> to which the book belongs to in the TargetH.",
            preChange: function () {
                this.element = document.querySelector(".altlink.e-e1838");
                this.position = "right";
            }
        },

        {
            element: document.querySelector(".mergedtree_g.text"),
            title: "Interacting with a label <hr class='border border-primary border-3 opacity-75'>",
            intro: "The label displays the truncated node name. <hr class='border border-danger border-2 opacity-50'> You can hover on a label to magnify the text and to view the entire node name."
        },

        {

            title: "The green triangle <hr class='border border-primary border-3 opacity-75'>",
            intro: "The green triangle indicates that a node has been collapsed (i.e. the children of that node are hidden).",
            preChange: function () {
                this.element = document.querySelector(".triangle-f");
                this.position = "right";
            }

        },

        {

            title: "Interacting with a node - collapse/expand <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can click on a node (with a green triangle) to expand its children. <br><hr class='border border-danger border-2 opacity-50'> Click on the node again to collapse it.",
            preChange: function () {
                this.element = document.querySelector('[id="mergedtree_f"]');
                this.position = "right";
            }
        },
        {
            element: document.querySelector("#levellines > line"),
            title: "Level of a node in the BaseH (dotted/dashed grey level lines) <hr class='border border-primary border-3 opacity-75'>",
            intro: "The grey level lines show the position of a node as it appears in the BaseH. <hr class='border border-danger border-2 opacity-50'> These lines are labelled on the <b>left</b>. <hr class='border border-danger border-2 opacity-50'> To find the level of node in the BaseH, simply look for the grey line passing through it. The <i>node:<b>root</b></i> in the BaseH is on level 0 and is represented by the Level 0 grey dotted/dashed line passing through it."
        },

        /*  {
             element: document.querySelector('[id="mergedtree_visumillion"]'),
             title: "Level of a node in the BaseH <hr class='border border-primary border-3 opacity-75'>",
             intro: "The level of a node in the BaseH is the number of ancestors from the given node until the root node. <hr class='border border-danger border-2 opacity-50'> To calculate the level, simply count the number of highlighted nodes starting from the root node at level 0. Hence, the level of the selected node is 2.  <hr class='border border-danger border-2 opacity-50'> The root node is at level 0."
         }, */

        /*  {
             element: document.querySelector('[id="line-chart-l1"]'),
             title: "Level of a node in the TargetH (solid multi-colored level lines) <hr class='border border-primary border-3 opacity-75'>",
             intro: "The solid multi-colored level lines show the position of a node as it appears in the TargetH. <hr class='border border-danger border-2 opacity-50'> These lines are labelled on the <b>right</b>. Scroll to the right to see the matching colored label. <hr class='border border-danger border-2 opacity-50'>To find the level of node in the TargetH, simply look for the solid colored line passing through it. <hr class='border border-danger border-2 opacity-50'> The <i>node:<b>Political Science</b></i> in the TargetH is on level 1 represented by the Level 1 solid orange-colored line passing through it. <hr class='border border-danger border-2 opacity-50'> <b>Some nodes might be on different levels in the BaseH and TargetH.</b>"
         }, */

        {

            title: "Level of a node in the TargetH (solid multi-colored level lines) <hr class='border border-primary border-3 opacity-75'>",
            intro: "The solid multi-colored level lines show the position of a node as it appears in the TargetH. <hr class='border border-danger border-2 opacity-50'> These lines are labelled on the <b>right</b>. Scroll to the right to see the matching colored label. <hr class='border border-danger border-2 opacity-50'>To find the level of node in the TargetH, simply look for the solid colored line passing through it. <hr class='border border-danger border-2 opacity-50'> The <i>node:<b>Political Science</b></i> in the TargetH is on level 1 represented by the Level 1 solid orange-colored line passing through it. <hr class='border border-danger border-2 opacity-50'> <b>Some nodes might be on different levels in the BaseH and TargetH.</b>",
            preChange: function () {
                this.element = document.querySelector('[id="line-chart-l1"]');
                this.position = "right";
            }
        },

        /*
                {
                    element: document.querySelector("#line-chart-l1 .line"),
                    title: "Level of a node in the TargetH (solid multi-colored level lines) <hr class='border border-primary border-3 opacity-75'>",
                    intro: "The solid multi-colored level lines show the position of a node as it appears in the TargetH. These lines run from right-to-left <hr class='border border-danger border-2 opacity-50'>To find the level of node in the TargetH, simply look for the solid colored line passing through it. <hr class='border border-danger border-2 opacity-50'> The node:<i>root/hcil</i> in the TargetH and is on level 1 represented by the Level 1 solid orange-colored line passing through it. <hr class='border border-danger border-2 opacity-50'> <b>Some nodes might be on different levels in the BaseH and TargetH.</b>"
                },
                */

        {
            element: document.querySelector(".h2-text-level1"),
            title: "TargetH level lines <hr class='border border-primary border-3 opacity-75'>",
            intro: "Clicking on a TargetH level label will show/hide the level line. <hr class='border border-danger border-2 opacity-50'> Clicking on the BaseH level labels (grey colored label on the left) does the same for the dotted/dashed grey level lines."
        },
        {
            element: document.querySelector("#btn-level-chart"),
            title: "TargetH level lines button <hr class='border border-primary border-3 opacity-75'>",
            intro: "Alternatively, you can click on the button to show/hide all level lines. <hr class='border border-danger border-2 opacity-50'> Clicking on the button on the left does the same for the BaseH level lines. "
        },


        {
            element: document.querySelector('[id="search-nodes"]'),
            title: "Search nodes <hr class='border border-primary border-3 opacity-75'>",
            intro: "Enter the genre/book name, for e.g. type 'war' will give you a list of all genres/books with 'war' in its title. <hr class='border border-danger border-2 opacity-50'> Choose the <i>genre:<b>Queen Anne's War</b></i>."
        },
        {
            element: document.querySelector('[id="btn-search"]'),
            title: "Search nodes <hr class='border border-primary border-3 opacity-75'>",
            intro: "Now, click on the search button. Automatic scrolling will take you to the node that you searched for. <hr class='border border-danger border-2 opacity-50'> The searched node and the nodes on its path to the root node are surrounded by gold highlighted squares and have red highlighted labels."
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

        /*  {
             element: document.querySelector('[id="btn-changeonlylayout"]'),
             title: "View changes-only layout <hr class='border border-primary border-3 opacity-75'>",
             intro: "The default layout expands only those nodes that have undergone changes while hiding the children of those nodes that did not change from the BaseH to TargetH."
         }, */

        /*
        {
            element: document.querySelector('[id="btn-entirelayout"]'),
            title: "View the entire layout <hr class='border border-primary border-3 opacity-75'>",
            intro: "This layout expands all nodes - those that have undergone changes and those that have not. <hr class='border border-danger border-2 opacity-50'> You can toogle between the two layouts depending on the task."
        },
        */

        {
            element: document.querySelector('[id="btn-zoom"]'),
            title: "Zoom <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can use the zoom-in and zoom-out buttons to zoom in and out of the visualization. <br><hr class='border border-danger border-2 opacity-50'> You can click on any empty (white) space and drag the visualization. <br><hr class='border border-danger border-2 opacity-50'>" + '<video width="320" height="240" controls><source src="Images/mtree-zoom.mov" type="video/mp4"></video>'

        },

        {
            element: document.querySelector('[id="btn-reset"]'),
            title: "Zoom Reset <hr class='border border-primary border-3 opacity-75'>",
            intro: "To reset the zoom magnifications, click on the zoom reset button. <br><hr class='border border-danger border-2 opacity-50'>" + '<video width="320" height="240" controls><source src="Images/mtree-reset.mov" type="video/mp4"></video>'

        },

        {
            element: document.querySelector('[id="btn-expand-folder"]'),
            title: "Expand Node (toggle button) <hr class='border border-primary border-3 opacity-75'>",
            intro: "This button can be used to expand only one sub-tree and collapse every other sub-tree. <hr class='border border-danger border-2 opacity-50'> To exit the mode, click the toggle button again. <hr class='border border-danger border-2 opacity-50'>" + '<video width="320" height="240" controls><source src="Images/mtree-expand.mov" type="video/mp4"></video>'

        },

        /* {
            element: document.querySelector('[id="btn-collapse-node"]'),
            title: "Collapse node (toggle button) <hr class='border border-primary border-3 opacity-75'>",
            intro: "This button can be used to collapse only one node and collapse every other node.<hr class='border border-danger border-2 opacity-50'> To exit the mode, click the toggle button again<hr class='border border-danger border-2 opacity-50'>" + '<video width="320" height="240" controls><source src="Images/mtree-collapse.mov" type="video/mp4"></video>'

        }, */


        {
            element: document.querySelector('[id="notations-key"]'),
            title: "Notations <hr class='border border-primary border-3 opacity-75'>",
            intro: "Here is a reference to the notations."
        },

        {

            title: "End of Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "We have reached the end of the tour. You can now move on the next phase."
        }

    ];



    /*
        d3.select("#mergedtree_root")
            .attr("data-title", "A Merged Node")
            .attr("data-intro", "The root node is a merged node (i.e.) it belongs to both - BaseH (left) and TargetH (right) hierarchies. A merged node is represented by a dot within a  circle. ")
            .attr("data-step", 1);
    
        d3.select("#h1tree_root")
            .attr("data-title", "A node that belongs to only the BaseH (left) hierarchy")
            .attr("data-intro", "Node C belongs only to the BaseH. It is represented by a  circle. Some of the other nodes that belong to only BaseH are D, E, F, L5, L6, L7 and L8.")
            .attr("data-step", 2);
    
        d3.select("#h2tree_root")
            .attr("data-title", "A node that belong to only the TargetH (right) hierarchy")
            .attr("data-intro", "Node L9 belongs only to the TargetH. It is represented by a dot (filled circle).")
            .attr("data-step", 3);
    
        d3.select("#levellines")
            .select("line")
            .attr("data-title", "BaseH tree levels (grey level lines)")
            .attr("data-intro", "The grey level lines show the position of a node as it appears in the BaseH. In this tree, we have a total of 4 levels ranging from Levels 0 to 3.")
            .attr("data-step", 4);
    
    
        d3.select("#line-chart-l1")
            .select("path")
            .attr("data-title", "TargetH tree levels (colored level lines)")
            .attr("data-intro", "The colored level lines show the position of a node as it appears in the TargetH. In this tree, we have a total of 4 TargetH levels ranging from Levels 0 to 3.")
            // .attr("data-hint", "Clicking on the Level line label can turn the line on/off")
            .attr("data-step", 5);
    
        d3.select("#line-chart-l2")
            .select("path")
            .attr("data-title", "TargetH tree level 2")
            .attr("data-intro", "This Level 2 line dips down to node L1 to show that node L1 belongs on Level 2 in the TargetH and on Level 3 in the BaseH.  It then goes back up to meet Node C. Node C has the grey line and the colored line passing through it. This shows that it belongs to Level 2 in both the BaseH and TargetH hierarchies. ")
            .attr("data-hint", "Clicking on the Level line label can turn the line on/off")
            .attr("data-step", 6);
    
    
        d3.select(".text-level1")
            .attr("data-title", "TargetH tree levels (colored level lines)")
            .attr("data-intro", "Clicking on a level label will switch the line on/off.")
            .attr("data-step", 7);
    
        d3.select("#levelbutton")
            .attr("data-title", "TargetH level lines button")
            .attr("data-intro", "Alternatively, you can click on this button to switch on/off all the level lines.")
            .attr("data-step", 8);


              {
             element: document.querySelector("#line-chart-l2 > path"),
             title: "TargetH tree level 2 <hr class='border border-primary border-3 opacity-75'>",
             intro: "This Level 2 line dips down to node L1 to show that node L1 belongs on Level 2 in the TargetH and on Level 3 in the BaseH.  <hr class='border border-danger border-2 opacity-50'> It then goes back up to meet Node C. Node C has the grey line and the colored line passing through it. This shows that it belongs to Level 2 in both the BaseH and TargetH hierarchies. "
         },
         {
             element: document.querySelector(".text-level1"),
             title: "BaseH (dashed, grey colored line) and TargetH tree levels (colored level lines) <hr class='border border-primary border-3 opacity-75'>",
             intro: "Clicking on a level label will switch the line on/off."
         }, 
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


        })
        .oncomplete(function () {
            update_log("introjs-nextbutton", "button", "Completed guided tour. Redirect to landing page.", "click")
            window.location.href = 'landingpage.html?page=guidedtour';
        })
        .onbeforechange(function () {
            console.log(this._currentStep);
            console.log(this._introItems[this._currentStep].preChange);
            if (this._introItems[this._currentStep].preChange) {
                this._introItems[this._currentStep].preChange();
            }
        })
        .onchange(function () {
            //console.log(this._currentStep);
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
            "vizID": localStorage.getItem("vizID"),
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