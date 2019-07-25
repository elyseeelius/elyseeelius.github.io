var skillspan = document.getElementById('skill')
console.log(skillspan.textContent)


let skillsArr = ['HTML', 'CSS', 'javaScript','Bootstrap','Node.js','React.js','Angular',
'MongoDB','Express.js','PHP','Mysql','Data visualistion','Photoshop','Illustrator','inDesign',
'Wordpress']
setInterval(() => {
    changeSkill();
},2000);

function changeSkill() {
    var randomIndex = Math.floor(Math.random() * skillsArr.length)
    for (let i = 0; i < skillsArr.length; i++) {
        const currentSkill = skillsArr[randomIndex];
        skillspan.textContent = currentSkill;
    }
}
