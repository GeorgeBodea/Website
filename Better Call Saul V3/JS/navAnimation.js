function onClickHamburgerMenu()
{
    document.getElementById("Entire_Menu").classList.toggle("Class_For_Animation");

    document.getElementById("Entire_Menu_Background").classList.toggle("Entire_Menu_Background_Animation");

};

function Modify_Input_Boxes(){
    var input_box = document.getElementsByTagName("input");
    for (i=0;i<input_box.length;i++)
        input_box[i].setAttribute("style", "width:200px");

};


function Sending_ECards(){
    /* document.getElementById("demo").innerHTML = "Paragraph changed!"; */
    if( typeof Sending_ECards.counter == 'undefined' ) {
        Sending_ECards.counter = 0;
    }
    else if (Sending_ECards.counter >=3){
        var e = document.querySelector("form"); 
        var child = e.lastElementChild;  
        while (child) { 
            e.removeChild(child); 
            child = e.lastElementChild; 
        };

        
        let text_for_sending = document.createElement('h1');
        text_for_sending.innerHTML = "That's enough buddy.";
        e.appendChild(text_for_sending);

        let date = document.createElement('p');
        var d = new Date();
        date.innerHTML = "Your last email has been sent at: "+ d.toDateString();
        e.appendChild(date);

        let List_Of_Forms=["Drug_Problem","Incestuous_Love","Cheating_Problems","Warrant_Out"];
        for (let i=0;i<4;i++)
            document.getElementById(List_Of_Forms[i]).addEventListener("click", function(event){
                event.preventDefault()
            }); 
    }
    else{
    const checkboxes = document.querySelectorAll('input:checked');

    if (checkboxes.length >0){
    let ecard_form = document.getElementById("ECards_Form");

    let text_for_sending = document.createElement('p');
    text_for_sending.textContent = "You have sent the ECards!";
    ecard_form.appendChild(text_for_sending);
        
    Sending_ECards.counter++;
    }
}
};

function Change_Link_Address(){
    var list_of_links=['http://www.lphishiring.com/','https://www.jackdaniels.com/ro-ro/','https://iohannis.ro/'];
    if( typeof Sending_ECards.counter == 'undefined' ) {
        Sending_ECards.counter = 0;
    }
    let ind=(Sending_ECards.counter%3);
    document.getElementById('Click_Link').setAttribute("href",list_of_links[ind]);
    Sending_ECards.counter++;

}

function Show_Text_Yes(event){
        var NewWindow = window.open("", "My response: ", "width=200, height=200");
        NewWindow.document.write("<p>Well, thank you!</p>");
        setTimeout(function() { NewWindow.close() }, 3000);
}


function Show_Text_No(event){
    var NewWindow = window.open("", "My response: ", "width=200, height=200");
    NewWindow.document.write("<p>Dully noted.</p>");
    setTimeout(function() { NewWindow.close() }, 3000);
}

function Add_Event(){
    document.getElementById("Yes").addEventListener("click", Show_Text_Yes, true);
    document.getElementById("No").addEventListener("click", Show_Text_No, true);
}


function Change_Children_Element(){
    let name = document.getElementById("ECards_Form").children[0];
    name.innerHTML="TO WHOM";
}

function Display_Txt_File() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.status == 200  && this.readyState == 4) {
        document.getElementById("Rights").innerHTML =
        this.responseText;
      }
    };
    request.open("GET", "Disclaimer.txt", true);
    request.send();
  }



window.onload = function()
{
    Change_Children_Element();
    Modify_Input_Boxes();
    Add_Event();
};
