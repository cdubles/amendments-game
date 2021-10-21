//this code made with caffeine
$(document).ready(function () {
  $('button#dice-button').click(()=>{
    let max = 7
    let min = 1
    let num = Math.floor(Math.random() * (max - min) + min)

    console.log(num)
    $('p#result').text(num)
  })  
})
let remaining = 27

function pickCard(){
  $('p#number').hide()
  card = Math.floor(Math.random() * remaining) 
  console.log(card)
  console.log(amendments[card])

  $('p#meaning').text(amendments[card].meaning)
  $('P#number').text(amendments[card].amendment)
  amendments.splice(card,1)
  console.log(amendments)
  remaining = remaining -1
  if(remaining <= 0){
    alert('all done!')
  }
}

function reveal(){
  console.log('showing')
  $('p#number').show()
}

function refreshPage(){
  window.location.reload();
} 

//ewwwwwwwwww
amendments = [
  {
    "amendment": "1st amendment",
    "meaning": "Freedom of Speech, Religion, Assembly, Petition"
  },
  {
    "amendment": "2nd amendment",
    "meaning": "Right to Guns!!"
  },
  {
    "amendment": "3rd Amendment",
    "meaning": "No quartering soldiers"
  },
  {
    "amendment": "4th Amendment",
    "meaning": "No unreasonable search/seizure"
  },
  {
    "amendment": "5th Amendment",
    "meaning": "Eminent domain, self incriminate, double jeopardy"
  },
  {
    "amendment": "6th Amendment",
    "meaning": "Speedy and public trial"
  },
  {
    "amendment": "7th Amendment",
    "meaning": "Trial by jury, civil cases"
  },
  {
    "amendment": "8th Amendment",
    "meaning": "Unsual Punishment"
  },
  {
    "amendment": "9th Amendment",
    "meaning": "You have rights not mentioned"
  },
  {
    "amendment": "10th Amendment",
    "meaning": "State powers do not belong to the federal government"
  },
  {
    "amendment": "11th Amendment",
    "meaning": "Can't sue a state in federal court without consent"
  },
  {
    "amendment": "12th Amendment",
    "meaning": "Process for the electoral college"
  },
  {
    "amendment": "13th Amendment",
    "meaning": "ends slavery"
  },
  {
    "amendment": "14th Amendment",
    "meaning": "Citizenship if born here, due process"
  },
  {
    "amendment": "15th Amendment",
    "meaning": "Right to vote for all races, not women"
  },
  {
    "amendment": "16th Amendment",
    "meaning": "income tax"
  },
  {
    "amendment": "17th Amendment",
    "meaning": "Senators elected by voters, not state legislature"
  },
  {
    "amendment": "18th Amendment",
    "meaning": "Prohibition of Alcohol"
  },
  {
    "amendment": "19th Amendment",
    "meaning": "womens suffrage"
  },
  {
    "amendment": "20th Amendment",
    "meaning": "earlier date for the president to take office"
  },
  {
    "amendment": "21st Amendment",
    "meaning": "ends prohibition"
  },
  {
    "amendment": "22nd Amendment",
    "meaning": "only two terms for the president"
  },
  {
    "amendment": "23rd Amendment",
    "meaning": "DC can vote"
  },
  {
    "amendment": "24th Amendment",
    "meaning": "No taxes on voting"
  },
  {
    "amendment": "25th Amendment",
    "meaning": "presidential succession"
  },
  {
    "amendment": "26th Amendment",
    "meaning": "right to vote for 18 year olds"
  },
  {
    "amendment": "27th Amendment",
    "meaning": "Congress cannot raise its own pay"
  }
]