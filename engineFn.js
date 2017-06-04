
var volunteerList = [];
var marketingList =[];
var fundraisingList = [];
var webDevList = [];
var pickupsDelivList= [];
var otherSkills= [];

class Volunteer{

constructor(name, telephone, zipcode, marketing, fundraising, webDev, pickupsDeliv,
otherSkills, mfMorning, mfAfternoon, mfEvening, ssMorning, ssAfternoon, ssEvening){
  this.name = name;
  this.telephone = telephone;
  this.zipcode = zipcode;
  this.marketing = marketing;
  this.fundraising = fundraising;
  this.webDev = webDev;
  this.pickupsDeliv = pickupsDeliv;
  this.otherSkills = otherSkills;
  this.mfMorning =mfMorning;
  this.mfAfternoon =mfAfternoon;
  this.mfEvening =mfEvening;
  this.ssMorning =ssMorning;
  this.ssAfternoon =ssAfternoon;
  this.ssEvening = ssEvening;
  }
}

function createVolunteer(){
  var name = document.getElementById("name").value;
  var telephone = document.getElementById("telephone").value;
  var zipcode = document.getElementById("zipcode").value;
  var marketing = document.getElementById("marketing").value;
  var fundraising = document.getElementById("fundraising").value;
  var webDev = document.getElementById("webDev").value;
  var pickupsDeliv = document.getElementById("pickupsDeliv").value;
  var otherSkills = document.getElementById("otherSkills").value;
  var mfMorning =document.getElementById("mfMorning").value;
  var mfAfternoon =document.getElementById("mfAfternoon").value;
  var mfEvening =document.getElementById("mfEvening").value;
  var ssMorning =document.getElementById("ssMorning").value;
  var ssAfternoon =document.getElementById("ssAfternoon").value;
  var ssEvening =document.getElementById("ssEvening").value;

  volunteerList.push(new Volunteer(name, telephone, zipcode, marketing, fundraising, webDev,
  pickupsDeliv, otherSkills, mfMorning, mfAfternoon, mfEvening, ssMorning, ssAfternoon, ssEvening));

  document.getElementById("demo").innerHTML = "Thank you,"+" "+name+"!";
}

function eventMatcher(){

  for(i =0; i<volunteerList.length; i++){
    if(volunteerList[i].marketing == 1){
      marketingList.push(volunteerList[i]);
    }
    if(volunteerList[i].fundraising == 1){
      fundraisingList.push(volunteerList[i])
    }
    if(volunteerList[i].webDev == 1){
      webDevList.push(volunteerList[i])
    }
    if(volunteerList[i].pickupsDeliv == 1){
      pickupsDelivList.push(volunteerList[i])
    }
  }

  console.log(marketingList);

document.getElementById("demo2").innerHTML = "There are " + (marketingList.length)+" "+"people with marketing skills working on ProjectX for Forgotten Cats <br>";
document.getElementById("demo2").innerHTML += "There are " + (fundraisingList.length)+" " +"people with fundraising skills working on ProjectX for Forgotten Cats <br>";
document.getElementById("demo2").innerHTML += "There are " + (webDevList.length)+" " +"people with web development skills working on ProjectX for Forgotten Cats<br>";
document.getElementById("demo2").innerHTML += "There are " + (pickupsDelivList.length)+" " +"people with pickup/delivery skills working on ProjectX for Forgotten Cats<br>";

}
