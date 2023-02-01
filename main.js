"use strict"

let calc_btn = document.getElementById("action");
calc_btn.addEventListener("click", analyze);

function analyze() {
    /*
        FIRST, flowchart the logic for your analyze() function. Do this BEFORE you write your code, and you will find writing the code easier! You ONLY need to flowchart this function, NOT your other code (so START is when this function is called and END is the end of your output).
        
        NEXT, write your "analysis" code in this function. At a minimum, you must:
        
        * Create variables to hold values from your form elements
        * If needed, convert variables from Strings to Numbers
        * Use conditional logic and perform calculations on your variables
        * Call "output" as many times as needed to produce your results
    
    --------------------------------------------------------
    VERY IMPORTANT!!!! Above each condition that you write, provide a multi-line comment that clearly explains in English what your conditional logic does. This is a major part of the grade.
    --------------------------------------------------------
        
        Other important things to remember:
        * Name your variables meaningfully (with good spelling)
        * Use VSCode's autoformatting regularly to make your code readable
        * If you use coding techniques that you learned outside of this class, be sure to CITE YOUR SOURCE in a comment.
        * Look at the new documentation for function output(). Now you can call the output function two ways: send it just a String (or a variable containing a String), and you it will create a new paragraph (<p> tagset on your page). Add Boolean true as a second parameter, and output will instead treat your String as HTML. This second option gives you more control over the look of your output!
        * Use endOutput() as the last line before the analyze() function ends (we've even put it in for you already!)
        * Don't forget that you need to edit index.html as well!
    
        DELETE THIS CODE COMMENT before turning in your homework! You MAY leave in the other JavaScript comments that document functions and tell you where to start and stop writing code, but you will LOSE points if you leave in this long comment!
    */
    const userSport = document.getElementById("userSport");
    const userPreference = document.getElementById("userPreference");
    const userPeriod = document.getElementById("userPeriod");
    const userColor = document.getElementById("userColor");

    /* here is the condition that makes a user a classic northeastern university basketball fan. 
    A user has to like basketball, prefer college to pro, classic teams over current and 
    their favorite color is red, resulting in the output.*/
    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Northeastern University Basketball Fan 🏀🔴");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Miam Heat Fan 🏀🔴");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Northeastern University Basketball Fan 🏀🔴 #GoHuskies");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Miami Heat Fan 🏀🔴 #feeltheburn");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Duke University Fan 🏀🔵 #Duke'sbluedevils");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Duke University Fan 🏀🔵");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Dallas Maverick Fan 🏀🔵");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Dallas Maverick Fan 🏀🔵 #MarvelousMavericks");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a Golden State Warriors Fan 🏀🟡 #DubNation");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic Golden State Warriors Fan 🏀🟡");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a Drexel University Fan 🏀🟡 #LetsGoDragons");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic Drexel University Fan 🏀🟡");
                }

    }

    /*Soccer section*/
    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Chelsea Fan ⚽🔵 #COYB");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Chelsea Fan ⚽🔵");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Georgetown Fan ⚽🔵 #GeorgetownHoyas");
                }

    }


    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Georgetown Fan ⚽🔵");
                }

    }



    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Manchester United Fan ⚽🔴 #GloryGloryManUnited");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Manchester United Fan ⚽🔴");
                }

    }


    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Santa Clara University Fan ⚽🔴 #BuckyBroncos");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Santa Clara University Fan ⚽🔴");
                }

    }


    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic University of Wisconsin-Superior Fan ⚽🟡");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a University of Wisconsin-Superior Fan ⚽🟡 #BuzztheBeeGonnaStingYa");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic Norwich City F.C Fan ⚽🟡");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a Norwich City F.C Fan #ProtectTheNest ⚽🟡");
                }

    }

    /*Ice Hockey section*/
    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Penn State Fan 🏒🔵");
                }

    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Penn State Fan 🏒🔵 #LetsGoPanthers!");
                }

    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Toronto Maple Leafs Fan 🏒🔵 #WeMayBesweetButWeKeepOurPucksSticky!");
                }

    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Toronto Maple Leafs Fan 🏒🔵");
                }

    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a University of Michigan Fan 🏒🟡 #LetsGoWolverines!");
                }

    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic University of Michigan Fan 🏒🟡");
                }

    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic Bruins Fan 🏒🟡");
                }
    }
    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a Bruins Fan 🏒🟡 #LetsGoBruins");
                }
    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Northeastern Fan 🏒🔴 #LetsGoHuskies");
                }
    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Northeastern Fan 🏒🔴");
                }
    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Detroit Red Wings Fan 🏒🔴 #RedBullGivesYouWings");
                }
    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Detroit Red Wings Fan 🏒🔴");
                }
    }




    output(dropdown.value, true)
    output("<p>Example of <b>HTML-formatted</b> output</p>", true);
    output("<h3>Example of output that should be HTML-formatted but without sending second parameter <b>true</b>");
    output("Example of regular text output, letting the output() function do the formatting.");


    endOutput();
    // Do not modify code below this line!
}

/* ***** function output() *****
Appends the provided String to an HTML element called "output". String may be output as plain text or as HTML.
 
Requirements: An element with id="output" in the current Document Object (generally the index.html)
 
Parameters:
content     String to be added to "output"
htmlFlag    Boolean (default false):
            if false, add content within a <p> tag
            if true, treat content as HTML ready to output
 
Returns: Nothing
******************************** */

function output(content, htmlFlag) {
    if (content == undefined) {
        console.log("WARNING: You did not provide anything to output");
    } else {
        let o = document.getElementById("output");
        if (!htmlFlag) {
            let p = document.createElement("p");
            let tn = document.createTextNode(content);
            p.appendChild(tn);
            o.appendChild(p);
        } else {
            o.innerHTML += content;
        }
    }
}

/* ***** function endOutput() *****
Appends a horizontal rule (<hr> element) to Document Object with id="output".
 
Requirements: An element with id="output" in the current Document Object (generally the index.html)
 
Parameters: None
 
Returns: Nothing 
 
*********************************** */

function endOutput() {
    let o = document.getElementById("output");
    o.appendChild(document.createElement("hr"));
}