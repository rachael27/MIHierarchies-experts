var selected_value = "";
pageID = "experiment";
vizID = "mergedtree";
var score = 0;
var list_questions = [];
screenSize = localStorage.getItem("screenSize");

function experimentquestions(qcounter) {


    d3.select("#qandamodule")
        .select("br")
        .remove();


    list_questions = [
        {
            "qid": "",
            "question": "Are you ready to start the experiment?",
        },
        {
            "qid": "E1.",
            "question": "Does the TargetH have the same number of levels as the BaseH?",
            "answer": "No. The TargetH has one level less than the BaseH",
            "options": ["Yes", "No. The TargetH has one level more than the BaseH", "No. The TargetH has one level less than the BaseH", "No. The TargetH has two levels less than the BaseH"]

        },

        {
            "qid": "E2.",
            "question": "What is the path of the node <b>book:</b><i>Elements in Political Science</i> to the root node?",
            "answer": "root -> Political Science -> Generalities -> Current trends; research activities etc. -> Elements in Political Science",
            "options": ["root -> Political Science -> Generalities -> Current trends; research activities etc. -> Elements in Political Science", "root -> Political Science -> Elements in Political Science", "root -> Political Science -> Generalities -> Political thought -> Elements in Political Science"]

        },

        {
            "qid": "E3.",
            "question": "What is the level of the <b>book:</b><i>The shadow of the panther..</i>?",
            "answer": "Level 4 in RedPark and Level 2 in GreenValley",
            "options": ["Level 4 in RedPark and GreenValley", "Level 2 in RedPark and GreenValley", "Level 4 in RedPark and Level 2 in GreenValley", "Level 2 in RedPark and Level 4 in GreenValley"]

        },

        /* {
            "qid": "E4.",
            "question": "All books belonging to this genre are found only at the GreenValley library? Which genre is this?",
            "answer": "The Revolution",
            "options": ["History", "United States", "The Revolution"]

        }, */
        {
            "qid": "E4.",
            "question": "Which book belongs to different genres/sub-genres in the two libraries?",
            "answer": "Tom Paine's America..",
            "options": ["Tom Paine's America..", "A history of American history", "The shoemaker and the tea party.."]

        },


        {
            "qid": "E5.",
            "question": "Choose the best description of the <b>genre:</b><i>Generalities (root -> Political Science -> Generalities)</i> in the RedPark and GreenValley libraries?",
            "answer": "Some of its sub-genres belong only to GreenValley and others are common to both",
            "options": ["All of its sub-genres belong to RedPark", "All of its sub-genres belong to GreenValley", "Some of its sub-genres belong only to GreenValley and others are common to both", "Some of its sub-genres belong only to RedPark and others are common to both"]

        },

        {
            "qid": "E6.",
            "question": "Choose the best description of these three <b>books:</b><i>Revolutiory characters: What made the founders different?; To begin the world anew...; The rise of American democracy...</i>?",
            "answer": "They belong to both libraries but belong to different genres",
            "options": ["They belong only to GreenValley", "They belong only to RedPark", "They belong to both libraries but belong to the same genre", "They belong to both libraries but belong to different genres"]

        },

        /* {
            "qid": "E7.",
            "question": "How many books does the genre:ABC have? (expand the triangle)",
            "answer": "",
            "options": [""]

        }, */

        /* {
            "qid": "E7.",
            "question": "Which genre/sub-genre has the most number of common books?",
            "answer": "America",
            "options": ["America", "The Revolution", "Geography", "History"]

        }, */

        {
            "qid": "E7.",
            "question": "Which book belongs to the <b>genre:</b><i>Dictionaries and encyclopedias</i> at RedPark but to <b>genre:</b><i>Fundamental concepts and ideologies</i> at GreenValley",
            "answer": "Oxford handbook of governance",
            "options": ["The loss and recovery of truth..", "The Ellen Meiksins Wood reader", "Ethics in hard times", "Oxford handbook of governance"]

        },

        /*  {
             "qid": "E8.",
             "question": "What book should you read if you want to know about New Mexico?",
             "answer": "",
             "options": [""]
 
         }, */

        {
            "qid": "E8.",
            "question": "Sub-genre A belongs to Genre B in one library. Alternatively; B is a sub-genre that belongs to genre A in the other library. Which genre/sub-genre pair describes this behavior? ",
            "answer": "Middle East and Arab World",
            "options": ["Political Science and Generalities", "America and Afro-Americans", "Colonial History and Queen Anne's War", "Middle East and Arab World"]

        },

        {
            "qid": "E9.",
            "question": "Which sub-genre of <b>genre:</b><i>Political Science</i> only exists in the GreenValley library?",
            "answer": "Political thought",
            "options": ["Generalities", "Political thought", "Political institutions and public administration", "Political Science and public administration"]

        },

        /* {
            "qid": "E10.",
            "question": "Which genre/sub-genre has the most number of books?",
            "answer": "",
            "options": ["Middle East", "America", "Revolution to the Civil War"]

        }, */

        {
            "qid": "E10.",
            "question": "Which node is on Level 5 in RedPark and on Level 4 at GreenValley?",
            "answer": "The Political Quarterly in the thirties",
            "options": ["Middle East", "The Political Quarterly in the thirties", "Dictionary of the United States Congress", "Collected works of American Statemen"]

        },

        {
            "qid": "E11.",
            "question": "Which library has the most number of books on the <b>genre:</b><i>Theory: Relations to other subjects</i>?",
            "answer": "RedPark",
            "options": ["RedPark", "GreenValley", "They have exactly the same number of books"]

        },

        {
            "qid": "E12.",
            "question": "What's the best description of the <b>book:<b><i>Black like me</i>?",
            "answer": "It belongs to both libraries and belongs to the <i>genre:<b>America and United States</b></i> in the GreenValley library",
            "options": ["It is available only at the RedPark library", "It is available only at the GreenValley library and belongs to the <i>genre:<b>Afro-American</b></i>", "It belongs to both libraries and belongs to the <i>genre:<b>Afro-American</b></i> in the GreenValley library", "It belongs to both libraries and belongs to the <i>genre:<b>America and United States</b></i> in the GreenValley library"]

        },

        {
            "qid": "E13.",
            "question": "Which sub-genre has the same books in both libraries?",
            "answer": "History of the Americas",
            "options": ["Political Science", "History of the Americas", "The Revolution", "Queen Anne's War"]

        },

        {
            "qid": "E14.",
            "question": "Is the <b>book:</b><i>US Policy toward Iraq</i> classified under the same genre at RedPark and GreenValley?",
            "answer": "No. It is classified under <i>genre:<b>Middle Eastern Relationships</b></i> at RedPark and under <i>genre:<b><i>Political Science and Public Administration</b></i> at GreenValley",
            "options": ["Yes. It is classified under the <i>genre:<b>Middle Eastern Relationships</b></i> at both libraries", "Yes. It is classified under the <i>genre:<b>Political Science and Public Administration</b></i> at both libraries", "No. It is classified under <i>genre:<b>Political Science</b></i> at RedPark and under <i>genre:<b>Political thought</b></i> at GreenValley", "No. It is classified under <i>genre:<b>Middle Eastern Relationships</b></i> at RedPark and under <i>genre:<b><i>Political Science and Public Administration</b></i> at GreenValley"]

        },

        {
            "qid": "E15.",
            "question": "Choose the option with the best description of the <b>sub-genre:</b><i>Political Science and Public Administration</i>",
            "answer": "It belongs to different genres and different levels in the two libraries",
            "options": ["It belongs to different levels (but same genre) in the two libraries", "It belongs to different genres (but same level) in the two libraries", "It belongs to the same genre but is at different levels", "It belongs to different genres and different levels in the two libraries", "It is at the same level but belongs to different genres"]

        },


        /* {
            "qid": "E6.",
            "question": "Node file:<i>root/hcil/pda/thesis/thesis-pda/postscript.html</i> in the BaseH has gone through a change/s. What is/are the change/s?",
            "answer": "The file has moved up one level in to the folder<i>root/hcil/pda/thesis</i>.",
            "options": ["The file has moved to a different folder on the same level.", "The file has moved down one level in to a sub-folder inside the parent folder:<i>root/hcil/pda/thesis/thesis-pda/thesis-draft/postscript.html</i>.", "The file has moved up one level in to the folder<i>root/hcil/pda/thesis</i>."]
 
        },
 */


        {
            "qid": "E16.",
            "question": "You're done with the experiment! Thank you so much for your time!",
        }

    ];



    //console.log(list_questions[qcounter]);
    //console.log(document.getElementsByName("traininganswer").length);
    d3.select(".btn-warning")
        .remove();

    d3.select("#qanda_options")
        .selectAll("input")
        .remove();

    d3.select("#qanda_options")
        .selectAll("p")
        .remove();



    if (qcounter < list_questions.length && qcounter >= 0) {
        selected_value = "";

        if (qcounter == list_questions.length - 1 || qcounter == 0)
            d3.select("#btn-nextquestion")._groups[0][0].disabled = false;


        d3.select("#question")
            .html(list_questions[qcounter].qid + " " + list_questions[qcounter].question);





        if (list_questions[qcounter].options)
            for (var i = 0; i < list_questions[qcounter].options.length; i++) {
                d3.select("#qanda_options")
                    .append("input")
                    .attr("class", "form-check-input radiobuttons")
                    .attr("type", "radio")
                    .attr("name", "experimentanswer")
                    .attr("id", "option" + i)
                    .attr("value", list_questions[qcounter].options[i]);


                d3.select("#qanda_options")
                    .append("p")
                    .attr("class", "form-check-label")
                    .attr("form", "option")
                    .attr("id", "option" + i + "_label")
                    .attr("style", "text-align: left; margin-left: 10px; ")
                    .html(list_questions[qcounter].options[i]);

            }



        //update_log("btn-nextquestion", "button", "display question", "click", "E" + qcounter, list_questions[qcounter].question, "", list_questions[qcounter].answer);

        /*
    d3.select("#btn-nextquestion")
        .on("click", function () {
            console.log(this);
            console.log(d3.select(".form-check-input").node().value);
            
        });
        */




        /* d3.select("#option1_label")
            .text(list_questions[qcounter].option1);

        d3.select("#option2_label")
            .text(list_questions[qcounter].option2);

        d3.select("#option3_label")
            .text(list_questions[qcounter].option3); */


        //if (list_questions[qcounter].option3)
        //  d3.select


    }


    else {
        window.location.href = 'landingpage.html?page=experimentquestions';
    }


    d3.select("#btn-next")
        .on("change", function () {
            console.log("selected_value " + selected_value);
        });

    d3.selectAll("input[name='experimentanswer']")
        .on("change", function (d, i) {

            //console.log(i);
            //console.log(this.value + " " + list_questions[qcounter].answer);
            selected_value = this.value;

            if (selected_value == list_questions[qcounter].answer)
                score = 1;
            else
                score = 0;

            //update_log("btn-nextquestion", "button", "display question", "click", "E" + qcounter, list_questions[qcounter].question, selected_value, list_questions[qcounter].answer, score);

            d3.select("#btn-nextquestion")._groups[0][0].disabled = false;

        });

    function update_log(elementID, elementType, elementDescription, eventDescription, questionID, question, useranswer, correctanswer, score) {
        var date = new Date();


        var logObject = JSON.parse(localStorage.getItem("logObject"));
        logObject.push({
            "userID": localStorage.getItem("userID"),
            "vizID": localStorage.getItem("vizID"),
            "screenWidth": window.innerWidth,
            "screenHeight": window.innerHeight,
            "pageID": "experiment",
            "elementID": elementID,
            "elementType": elementType,
            "elementDescription": elementDescription,
            "eventDescription": eventDescription,
            "date": date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
            "overall_timestamp": Math.round(+new Date() / 1000),
            //"phase_timestamp": new Date().getMilliseconds(),
            "questionID": questionID,
            "question": question,
            "useranswer": useranswer.replaceAll(",", ""),
            "correctanswer": correctanswer.replaceAll(",", ""),
            "score": score
        });
        localStorage.removeItem("logObject");
        localStorage.setItem("logObject", JSON.stringify(logObject));

    }







}