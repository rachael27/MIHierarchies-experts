var selected_value = "";
pageID = "training";
vizID = "linkedtree";
var score = 0;
var list_questions;

function twl_trainingquestions(qcounter) {





    list_questions = [
        {
            "qid": "",
            "question": "Are you ready to start the training?",
            "hint": "Hints will be available throughout this phase to help you! You can only progress to the next question when you answer the current question correctly.",
            // "answer": "Yes",
            // "numoptions": 2,
            // "options": ["Yes"]

        },
        {
            "qid": "T1.",
            "question": 'What is the path of the <b>genre:</b><i>Armies Troops</i> to the <i>root node</i>?',
            "hint": "The path refers to the shortest set of parent nodes that need to be traversed to reach the root node from the given node. Hover, on a node to see its path highlighted to the root node.",
            "answer": "<i>root -> America and United States -> Armies Troops</i>",
            "numoptions": 3,
            "options": ["<i>root -> America and United States -> Armies Troops</i>", "<i>root -> America and United States -> America -> Armies Troops</i>", "<i>root -> America -> The Revolution -> Armies Troops</i>"]


        },

        {
            "qid": "T2.",
            "question": "What is the level of node <b>genre:</b><i>Generalities</i> in the base and target hierarchies?",
            "hint": "The level of a node is a count of the number of highlighted nodes between a given node and the root node (at level 0).",
            "answer": "Level 2 in the BaseH and Level 2 in the TargetH",
            "numoptions": 3,
            "options": ["Level 3 in the BaseH and Level 2 in the TargetH", "Level 2 in the BaseH and Level 2 in the TargetH", "Level 4 in the BaseH and Level 3 in the TargetH"]

        },

        {
            "qid": "T3.",
            "question": "How many levels does the BaseH (starting from the root at level 0) have?",
            "hint": "The level of a tree is defined by the node at the deepest/highest level. <br>The nodes at the deepest level are <i>root -> America and United States -> United States -> History -> General -> Historical Geography</i> (the path is highlighted when you hover on the deepest node) and nodes <i>The Political Quarterly in the thirties</i> and <i>The Political Quarterly in the fifties</i>.",
            "answer": "5",
            "numoptions": 4,
            "options": ["3", "5", "7", "9"]

        },



        /* {
            "qid": "T4.",
            "question": "Choose the best description of folder:<i>root/hcil/treemap3</i>.",
            "hint": "The folder:<i>treemap3</i> has only red and green links. The absence of blue links show that no files were retained. Consequently, the red links indicate that all the files in the BaseH were deleted. The green links show that some files were newly added in the TargetH. ",
            "answer": "The folder existed in the BaseH but all files were deleted and some were newly added in the TargetH",
            "numoptions": 4,
            "options": ["It was newly created in the TargetH", "The folder existed in the BaseH but all files were deleted and no new files were added", "The folder existed in the BaseH but some files were deleted", "The folder existed in the BaseH but all files were deleted and some were newly added in the TargetH"]
        }, */

        {
            "qid": "T4.",
            "question": "All books belonging to this genre are found only at the GreenValley library? Which genre is this?",
            "hint": "The presence of connecting links indicate that the sub-genres/books belong to both RedPark and GreenValley. Check for the genre/sub-genre that belongs only to the TargetH and has no connecting links.",
            "answer": "The Revolution",
            "numoptions": 3,
            "options": ["History", "America", "The Revolution"]

        },

        {
            "qid": "T5.",
            "question": "How many books belong to the <b>genre:<b><i>History of the Americas</i></b>?",
            "hint": "Expand the green triangle to view the books that belong to <b>genre:<i>History of the Americas</i></b>.",
            "answer": "4",
            "numoptions": 3,
            "options": ["0", "4", "5"]

        },

        {
            "qid": "T6.",
            "question": "Does the <b>genre:</b><i>Relations with individual countries</i> belong to the same genre/sub-genre in both libraries?",
            "hint": "Manually check the genre/sub-genre to which the book is connected in the BaseH and TargetH.",
            "answer": "No. It belongs to the <b>genre:<i>History</i></b> in the BaseH and <b>genre:<i>America and United States</i></b> in the TargetH",
            "numoptions": 3,
            "options": ["No. It belongs to <b>genre:<i>History</i></b> in the BaseH and <b>genre:<i>The Revolution</i></b> in the TargetH", "No. It belongs to the <b>genre:<i>History</i></b> in the BaseH and <b>genre:<i>America and United States</i></b> in the TargetH", "Yes. It belongs to the same genre/sub-genre in both libraries."]

        },


        /* {
            "qid": "T5.",
            "question": "What happened to the file:<i>jrexxlab.jpg</i>?",
            "hint": "The node is a green dot/filled-circle with a green link which shows that the file was newly created in the TargetH.",
            "answer": "The file was not present in the BaseH but was newly created in the TargetH",
            "numoptions": 3,
            "options": ["The file was present in the BaseH but deleted in the TargetH", "The file was not present in the BaseH but was newly created in the TargetH", "The file is present in the BaseH and the TargetH"]

        }, */


        {
            "qid": "T7.",
            "question": "You're done with the training questions! Proceed to the experiment questions!",
            "hint": "Good luck!"


        }





    ];


    //console.log(qcounter);
    //console.log(list_questions[qcounter]);
    //console.log(document.getElementsByName("traininganswer").length);




    d3.select("#qandamodule")
        .style("opacity", 1);

    d3.select("#qanda_options")
        .selectAll("input")
        .remove();

    d3.select("#qanda_options")
        .selectAll("p")
        .remove();

    d3.select("#btn-hint")
        .on("click", function (d) {
            d3.timeout(function () {

                if (d3.select("#collapseElement").attr("class").includes("show")) {
                    update_log(pageID, "btn-hint", "button", "hide hint", "click", "", "", "", "", "");
                    d3.select("#btn-hint")
                        .html("<i class='fa-regular fa-lightbulb'></i> Hide hint");
                }
                else {
                    update_log(pageID, "btn-hint", "button", "show hint", "click", "", "", "", "", "");
                    d3.select("#btn-hint")
                        .html("<i class='fa-solid fa-lightbulb' style='color:rgb(244, 166, 11);'></i> Show hint");
                }
            }, 400);

        });

    if (qcounter < list_questions.length && qcounter >= 0) {
        //console.log("qcounter " + qcounter);

        if (qcounter == list_questions.length - 1 || qcounter == 0) {
            d3.select("#btn-nextquestion")._groups[0][0].disabled = false;

            if (qcounter == 0)
                d3.select("#btn-hint")
                    .append("span")
                    .attr("class", "spinner-grow spinner-grow-sm")
                    .attr("role", "status");
        }

        d3.select("#question")
            .html(list_questions[qcounter].qid + " " + list_questions[qcounter].question);


        d3.select("#hint")
            .html(list_questions[qcounter].hint);


        if (list_questions[qcounter].options)
            for (var i = 0; i < list_questions[qcounter].options.length; i++) {
                d3.select("#qanda_options")
                    .append("input")
                    .attr("class", "form-check-input radiobuttons")
                    .attr("type", "radio")
                    .attr("name", "traininganswer")
                    .attr("id", "option" + i)
                    .attr("value", list_questions[qcounter].options[i]);


                d3.select("#qanda_options")
                    .append("p")
                    .attr("class", "form-check-label")
                    .attr("form", "option")
                    .attr("id", "option" + i + "_label")
                    .attr("style", "text-align: left; margin-left: 10px; margin-top:0px; border-radius:5px; text-indent:10px; ")
                    .html(list_questions[qcounter].options[i]);

            }


        /* d3.select("#option1_label")
            .text(list_questions[qcounter].option1);

        d3.select("#option2_label")
            .text(list_questions[qcounter].option2);

        d3.select("#option3_label")
            .text(list_questions[qcounter].option3); */


        //if (list_questions[qcounter].option3)
        //update_log("btn-nextquestion", "button", "display training question", "click", "T" + qcounter, list_questions[qcounter].question, selected_value, list_questions[qcounter].answer);


        /* d3.selectAll(".form-check-input")
            .on("click", function () {
                console.log(this);
                console.log(this.value);
                
            }); */


    }


    else {
        window.location.href = 'twl-landingpage.html?page=trainingquestions';
    }

    d3.selectAll("input[name='traininganswer']")
        .on("change", function (d, i) {
            //console.log(d);
            //console.log(this);
            //console.log(this.value);
            //console.log(qcounter + " " + list_questions.length);





            selected_value = this.value;

            if (selected_value == list_questions[qcounter].answer) {
                score = 1;
                d3
                    .select("#option" + i + "_label")
                    .style("background-color", "#A0D6B4");
                d3.select("#btn-nextquestion")._groups[0][0].disabled = false;

            }

            else {
                score = 0;
                d3
                    .select("#option" + i + "_label")
                    .style("background-color", "#F3E8EA");
            }
            //update_log("btn-nextquestion", "button", "display training question", "click", "T" + qcounter, list_questions[qcounter].question, selected_value, list_questions[qcounter].answer, score);

        });



    function update_log(elementID, elementType, elementDescription, eventDescription, questionID, question, useranswer, correctanswer, score) {
        var date = new Date();
        //console.log(useranswer);

        logObject = JSON.parse(localStorage.getItem("logObject"));
        logObject.push({
            "date": date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
            "userID": localStorage.getItem("userID"),
            "vizID": "linkedtree",
            "screenWidth": window.innerWidth,
            "screenHeight": window.innerHeight,
            "pageID": "training",
            "elementID": elementID,
            "elementType": elementType,
            "elementDescription": elementDescription,
            "eventDescription": eventDescription,
            "overall_timestamp": Math.round(+new Date() / 1000),
            //"phase_timestamp": new Date().getMilliseconds(),
            "questionID": questionID,
            "question": question,
            "useranswer": useranswer,
            "correctanswer": correctanswer,
            "score": score
        });
        localStorage.removeItem("logObject");
        localStorage.setItem("logObject", JSON.stringify(logObject));

    }








}