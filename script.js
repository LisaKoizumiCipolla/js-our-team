
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

console.log(teamMembers);

// add element in html
const teamMembersList = document.querySelector("team");

// creation variable for li item
let teamMembersListItem;

for (let i = 0 ; i < teamMembers.length ; i++){

    teamMembersListItem = document.createElement("li");
    teamMembersListItem.append(teamMembers[i]);

    console.log(teamMembers[i]);

    teamMembersList.appendChild(teamMembersListItem);
}