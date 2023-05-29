
//Array team members
const teamMembers = [
    {
        name : "Wayne Barnett",
        position : "Founder & CEO",
        img : "wayne-barnett-founder-ceo.jpg" ,
    },
    {
        name : "Angela Caroll",
        position : "Chief Editor",
        img : "angela-caroll-chief-editor.jpg" ,
    },
    {
        name : "Walter Gordon",
        position : "Office Manager",
        img : "walter-gordon-office-manager.jpg" ,
    },
    {
        name : "Angela Lopez",
        position : "Social Media Manager",
        img : "angela-lopez-social-media-manager.jpg" ,
    },
    {
        name : "Scott Estrada",
        position : "Developer",
        img : "scott-estrada-developer.jpg" ,
    },
    {
        name : "Barbara Ramos",
        position : "Graphic Designer",
        img : "barbara-ramos-graphic-designer.jpg" ,
    },
]

// add element in html
const teamMembersList = document.getElementById("team");

//console.log(teamMembersList);

// creation variable for li item
let teamMembersListItem;

for (let i = 0 ; i < teamMembers.length ; i++){

    teamMembersListItem = document.createElement("li");

    for (let key in teamMembers[i]){
        console.log(teamMembers[i][key]);
        teamMembersListItem.append(teamMembers[i][key]);
    }

    //console.log(teamMembers[i]);

    teamMembersList.appendChild(teamMembersListItem);
}

//teamMembersListItem.append(teamMembers[i]["name" , "position" , "img"]); 