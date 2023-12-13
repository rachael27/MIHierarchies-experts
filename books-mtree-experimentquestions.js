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
            "answer": "No. The TargetH has one level more than the BaseH",
            "options": ["Yes", "No. The TargetH has one level more than the BaseH", "No. The TargetH has one level less than the BaseH"]

        },

        {
            "qid": "E2.",
            "question": "What is the path of the node <b>book:</b><i>Elements in Political Science</i> to the root node?",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E3.",
            "question": "What is the level of node?",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E4.",
            "question": "Books belonging to which genre are found only in the GreenValley library?",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E5.",
            "question": "Which genre has all sub-genres common to the RedPark and GreenValley libraries?",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E6.",
            "question": "What is common to these three books: <i>Revolutionary characters: What made the founders different?, To begin the world anew..., The rise of American democracy...?",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E7.",
            "question": "How many books does the genre:ABC have? (expand the triangle)",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E8.",
            "question": "What book should you read if you want to know about New Mexico?",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E9.",
            "question": "Which sub-genre of Political Sceince only exists in the GreenValley library?",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E10.",
            "question": "Which genre has the most number of books?",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E11.",
            "question": "Which library has the most number of books?",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E12.",
            "question": "",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E13.",
            "question": "",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E14.",
            "question": "",
            "answer": "",
            "options": [""]

        },

        {
            "qid": "E15.",
            "question": "",
            "answer": "",
            "options": [""]

        },


        /* {
            "qid": "E6.",
            "question": "Node file:<i>root/hcil/pda/thesis/thesis-pda/postscript.html</i> in the BaseH has gone through a change/s. What is/are the change/s?",
            "answer": "The file has moved up one level in to the folder<i>root/hcil/pda/thesis</i>.",
            "options": ["The file has moved to a different folder on the same level.", "The file has moved down one level in to a sub-folder inside the parent folder:<i>root/hcil/pda/thesis/thesis-pda/thesis-draft/postscript.html</i>.", "The file has moved up one level in to the folder<i>root/hcil/pda/thesis</i>."]
 
        },
 */


        {
            "qid": "E11.",
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