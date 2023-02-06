
// when the user clicks the calculate button in the grade calculator
$("#btnCalculate").click(function () {
    // grab the values from each input
    var assignments = $("#assignments").val();
    var groupProjects = $("#groupProjects").val();
    var quizzes = $("#quizzes").val();
    var midterm = $("#midterm").val();
    var final = $("#final").val();
    var intex = $("#intex").val();

    // calculate the total percentage grade based on the weights in the syllabus
    var totalGrade = (assignments * 0.5) + (groupProjects * 0.1) + (quizzes * 0.1) + (midterm * 0.1) + (final * 0.1) + (intex * 0.1);

    var letterGrade = "";
    // find out the letter grade
    if (totalGrade < 60) {
        letterGrade = "E"
    }
    else if (totalGrade < 64) {
        letterGrade = "D-"
    }
    else if (totalGrade < 67) {
        letterGrade = "D"
    }
    else if (totalGrade < 70) {
        letterGrade = "D+"
    }
    else if (totalGrade < 74) {
        letterGrade = "C-"
    }
    else if (totalGrade < 77) {
        letterGrade = "C"
    }
    else if (totalGrade < 80) {
        letterGrade = "C+"
    }
    else if (totalGrade < 84) {
        letterGrade = "B-"
    }
    else if (totalGrade < 87) {
        letterGrade = "B"
    }
    else if (totalGrade < 90) {
        letterGrade = "B+"
    }
    else if (totalGrade < 94) {
        letterGrade = "A-"
    }
    else if (totalGrade >= 94) {
        letterGrade = "A"
    }

    alert(letterGrade);

    // print the letter grade to the page
    $("#letterGrade").text("Your Grade: " + letterGrade);
});