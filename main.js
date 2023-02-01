"use strict"

let calc_btn = document.getElementById("action");
calc_btn.addEventListener("click", analyze);


/*is pulling the right term here? Either way I am getting the id's of these elements from my index.html so they can be called through my
main.js*/

function analyze() {
    const userSport = document.getElementById("userSport");
    const userPreference = document.getElementById("userPreference");
    const userPeriod = document.getElementById("userPeriod");
    const userColor = document.getElementById("userColor");


    /*Basketball Section- Red Basketball College teams past & present logic
    
    For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
    the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
    is also decided by what a user's favorite color is. 
    Current teams outputs will have a social media "#" to show we live in current times as opposed to the past
    when supporting a sports team could only be experienced in-person. Social media allows people to support 
    teams from anywhere in the world */


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
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Northeastern University Basketball Fan 🏀🔴 #GoHuskies");
                }

    }

    /*Basketball Section- Red Professional teams past & present logic
        
        For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
        the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
        is also decided by what a user's favorite color is. 
        Current teams often have a social media "#" as to show we live in current times as opposed to the past
        when supporting a sports team could only be experienced in-person. Social media allows people to support 
        teams from anywhere in the world */

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
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Miami Heat Fan 🏀🔴 #feeltheburn");
                }

    }

    /*Basketball Section- Blue College teams past & present logic 
        
        For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
        the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
        is also decided by what a user's favorite color is. 
        Current teams often have a social media "#" as to show we live in current times as opposed to the past
        when supporting a sports team could only be experienced in-person. Social media allows people to support 
        teams from anywhere in the world */

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

    /*Basketball Section- Blue Professional teams past & present logic
        
        For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
        the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
        is also decided by what a user's favorite color is. 
        Current teams often have a social media "#" as to show we live in current times as opposed to the past
        when supporting a sports team could only be experienced in-person. Social media allows people to support 
        teams from anywhere in the world */

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
    /*Basketball Section- Yellow Professional teams past & present logic 
           
           For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
           the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
           is also decided by what a user's favorite color is. 
           Current teams often have a social media "#" as to show we live in current times as opposed to the past
           when supporting a sports team could only be experienced in-person. Social media allows people to support 
           teams from anywhere in the world */
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


    /*Basketball Section- Yellow College teams past & present logic 
       
       For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
       the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
       is also decided by what a user's favorite color is. 
       Current teams often have a social media "#" as to show we live in current times as opposed to the past
       when supporting a sports team could only be experienced in-person. Social media allows people to support 
       teams from anywhere in the world */
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

    /*Soccer Section- Blue Pro teams past & present logic 
      
      For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
      the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
      is also decided by what a user's favorite color is. 
      Current teams often have a social media "#" as to show we live in current times as opposed to the past
      when supporting a sports team could only be experienced in-person. Social media allows people to support 
      teams from anywhere in the world */
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

    /*Soccer Section- Blue College teams past & present logic 
       
       For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
       the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
       is also decided by what a user's favorite color is. 
       Current teams often have a social media "#" as to show we live in current times as opposed to the past
       when supporting a sports team could only be experienced in-person. Social media allows people to support 
       teams from anywhere in the world */
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

    /*Soccer Section- Red Pro teams past & present logic 
           
           For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
           the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
           is also decided by what a user's favorite color is. 
           Current teams often have a social media "#" as to show we live in current times as opposed to the past
           when supporting a sports team could only be experienced in-person. Social media allows people to support 
           teams from anywhere in the world */

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


    /*Soccer Section- Red College teams past & present logic 
           
           For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
           the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
           is also decided by what a user's favorite color is. 
           Current teams often have a social media "#" as to show we live in current times as opposed to the past
           when supporting a sports team could only be experienced in-person. Social media allows people to support 
           teams from anywhere in the world */

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

    /*Soccer Section- Yellow College teams past & present logic 
              
              For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
              the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
              is also decided by what a user's favorite color is. 
              Current teams often have a social media "#" as to show we live in current times as opposed to the past
              when supporting a sports team could only be experienced in-person. Social media allows people to support 
              teams from anywhere in the world */
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
    /*Soccer Section- Yellow Pro teams past & present logic 
              
              For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
              the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
              is also decided by what a user's favorite color is. 
              Current teams often have a social media "#" as to show we live in current times as opposed to the past
              when supporting a sports team could only be experienced in-person. Social media allows people to support 
              teams from anywhere in the world */

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

    /*Hockey Section- Blue College teams past & present logic 
           
           For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
           the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
           is also decided by what a user's favorite color is. 
           Current teams often have a social media "#" as to show we live in current times as opposed to the past
           when supporting a sports team could only be experienced in-person. Social media allows people to support 
           teams from anywhere in the world */
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

    /*Hockey Section- Blue Pro teams past & present logic 
          
          For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
          the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
          is also decided by what a user's favorite color is. 
          Current teams often have a social media "#" as to show we live in current times as opposed to the past
          when supporting a sports team could only be experienced in-person. Social media allows people to support 
          teams from anywhere in the world */
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

    /*Hockey Section- Yellow College teams past & present logic 
             
             For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
             the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
             is also decided by what a user's favorite color is. 
             Current teams often have a social media "#" as to show we live in current times as opposed to the past
             when supporting a sports team could only be experienced in-person. Social media allows people to support 
             teams from anywhere in the world */

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

    /*Hockey Section- Yellow Pro teams past & present logic 
         
         For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
         the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
         is also decided by what a user's favorite color is. 
         Current teams often have a social media "#" as to show we live in current times as opposed to the past
         when supporting a sports team could only be experienced in-person. Social media allows people to support 
         teams from anywhere in the world */
    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic Boston Bruins Fan 🏒🟡");
                }
    }
    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a Boston Bruins Fan 🏒🟡 #LetsGoBruins");
                }
    }

    /*Hockey Section- Red College teams past & present logic 
         
         For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
         the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
         is also decided by what a user's favorite color is. 
         Current teams often have a social media "#" as to show we live in current times as opposed to the past
         when supporting a sports team could only be experienced in-person. Social media allows people to support 
         teams from anywhere in the world */

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

    /*Hockey Section- Red Proteams past & present logic 
            
            For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
            the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
            is also decided by what a user's favorite color is. 
            Current teams often have a social media "#" as to show we live in current times as opposed to the past
            when supporting a sports team could only be experienced in-person. Social media allows people to support 
            teams from anywhere in the world */

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
    output("<h3>Example of output that should be HTML-formatted but without sending second parameter</h3>", true);
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