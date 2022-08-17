const skills = document.getElementById("skills");
const edu = document.getElementById("edu");
const exp = document.getElementById("exp");
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event){

    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.classList.add("active-link")
    tabname.classList.add("active-tab");
}

