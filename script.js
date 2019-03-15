
//AUTHOR: DEEPAK NIGAM

var main_container_array= document.getElementsByClassName("main-container");
var main_container= main_container_array[0];

var hr= document.createElement("hr");
var hr1= document.createElement("hr");



//Phone directory component
var component_container_phone=document.createElement("div");
component_container_phone.className="component-container";

//Heading div
var header_phone=document.createElement("div");
header_phone.className="header";
//Heading text node
var text_node_phone=document.createTextNode("PHONE DIRECTORY");
header_phone.appendChild(text_node_phone);
//Component div
var component_body_container_phone=document.createElement("div");
component_body_container_phone.className="component-body-container";

//ADD functionality node
var add_image= document.createElement("IMG");
add_image.setAttribute("src", "ag.png");
add_image.setAttribute("style", "padding: 25px");
add_image.setAttribute("width", "120");
add_image.setAttribute("height", "50");
add_image.setAttribute("alt", "ADD");
add_image.addEventListener("click", open_form);
add_image.addEventListener("mouseover", change_to_yellow);
add_image.addEventListener("mouseout", change_to_green);

//Subscriber list heading
var component_body_heading=document.createElement("div");
component_body_heading.className="heading-container";
var component_body_heading_name=document.createElement("div");
var component_body_heading_name_text= document.createTextNode("SUBSCRIBER LIST");
component_body_heading_name.appendChild(component_body_heading_name_text);
component_body_heading.appendChild(component_body_heading_name);

//appending each child to its parent
component_container_phone.appendChild(header_phone);
component_body_container_phone.appendChild(add_image);
component_body_container_phone.appendChild(component_body_heading);
var br= document.createElement("br");
component_body_container_phone.appendChild(br);
component_container_phone.appendChild(component_body_container_phone);

component_body_heading.style.display="none";
//keeps subscriber count
var sub_count=0;




// Add Subscribers Component
var component_container_add=document.createElement("div");
component_container_add.className="component-container";
//Heading div
var header_add=document.createElement("div");
header_add.className="header";
//Heading text node
var text_node_add=document.createTextNode("ADD SUBSCRIBER");
header_add.appendChild(text_node_add);
//component div
var component_body_container_add=document.createElement("div");
component_body_container_add.className="component-body-container";

// BACK functionality node
var back_image= document.createElement("IMG"+"");
back_image.setAttribute("src", "bg.png");
back_image.setAttribute("style", "padding: 25px");
back_image.setAttribute("width", "120");
back_image.setAttribute("height", "50");
back_image.setAttribute("alt", "BACK");
back_image.addEventListener("click", close_form);
back_image.addEventListener("mouseover", change_to_yellow_back);
back_image.addEventListener("mouseout", change_to_green_back);

//Your details fields
var yourdetails= document.createElement("div");
var detail_para= document.createElement("p");
detail_para.innerHTML="YOUR DETAILS: </br> Name: </br> Phone:";
yourdetails.appendChild(detail_para);

//Input fields
var name_text=document.createTextNode   ("Subscriber's Name : ");
var subs_name= document.createElement("INPUT");
var phone_number=document.createTextNode("Phone Number      : ");
var subs_phone= document.createElement("INPUT");
subs_name.addEventListener("keyup", update_details);
subs_phone.addEventListener("keyup", update_details);


  // ADD Functionality node
var add_image2= document.createElement("IMG");
add_image2.setAttribute("src", "ag.png");
add_image2.setAttribute("style", "padding: 25px");
add_image2.setAttribute("width", "120");
add_image2.setAttribute("height", "50");
add_image2.setAttribute("alt", "ADD");
add_image2.addEventListener("click", submit_form);
add_image2.addEventListener("mouseover", change_to_yellow);
add_image2.addEventListener("mouseout", change_to_green);
add_image2.addEventListener("click", update_details);



component_container_add.appendChild(header_add);
component_body_container_add.appendChild(back_image);
component_body_container_add.appendChild(hr);

// name_input_field_node
var name_input= document.createElement("div");
name_input.appendChild(name_text);
name_input.appendChild(subs_name);
component_body_container_add.appendChild(name_input);

//phone number input node
var phone_input= document.createElement("div");
phone_input.appendChild(phone_number);
phone_input.appendChild(subs_phone);
component_body_container_add.appendChild(phone_input);

//append to parents nodes
component_body_container_add.appendChild(hr1);
component_body_container_add.appendChild(yourdetails);
var hr2= document.createElement("hr");
component_body_container_add.appendChild(hr2);

component_body_container_add.appendChild(add_image2);
component_container_add.appendChild(component_body_container_add);


//give phone directory as a child to main_container
main_container.appendChild(component_container_phone);



//changes add button colours
function change_to_yellow(){
	this.setAttribute("src", "ay.png");
}
function change_to_green(){
	this.setAttribute("src", "ag.png");
}
// changes back button colors
function change_to_yellow_back(){
	this.setAttribute("src", "by.png");
}
function change_to_green_back(){
	this.setAttribute("src", "bg.png");
}

// changes delete button colors
function change_to_yellow_delete(){
  this.setAttribute("src", "dy.png");
}
function change_to_green_delete(){
  this.setAttribute("src", "dg.png");
}

//handles click of add to open form.
function open_form(){
	main_container.replaceChild(component_container_add, component_container_phone);
}
//handles click of back
function close_form(){
	main_container.replaceChild(component_container_phone, component_container_add);
}

//handles click of add on form
function submit_form(){
  if(subs_name.value=="" || subs_phone.value=="")
    alert("Empty Fields not allowed.")
  else{
    if(sub_count==0){
      component_body_heading.style.display="block";
    }
    sub_count++;
    var component_body_entry=document.createElement("div");
    component_body_entry.className="grid_container";

    var component_body_entry_name=document.createElement("div");
    var component_body_entry_name_text= document.createTextNode(subs_name.value);
    component_body_entry_name.className="left";
    component_body_entry_name.appendChild(component_body_entry_name_text);

    var component_body_entry_phone=document.createElement("div");
    var component_body_entry_phone_text= document.createTextNode(subs_phone.value);
    component_body_entry_phone.className="centre";
    component_body_entry_phone.appendChild(component_body_entry_phone_text);

    var component_body_entry_delete= document.createElement("div");
    var component_body_entry_delete_image= document.createElement("IMG");
    component_body_entry_delete_image.setAttribute("src", "dg.png");
    component_body_entry_delete_image.setAttribute("width", "60");
    component_body_entry_delete_image.setAttribute("height", "20");
    component_body_entry_delete_image.setAttribute("alt", "DELETE");
    component_body_entry_delete_image.addEventListener("click", delete_entry);
    component_body_entry_delete_image.addEventListener("mouseover", change_to_yellow_delete);
    component_body_entry_delete_image.addEventListener("mouseout", change_to_green_delete);
    component_body_entry_delete.className="right";
    component_body_entry_delete.appendChild(component_body_entry_delete_image);

    component_body_entry.appendChild(component_body_entry_name);
    component_body_entry.appendChild(component_body_entry_phone);
    component_body_entry.appendChild(component_body_entry_delete);
    var hr= document.createElement("hr");
    component_body_entry.appendChild(hr);
    component_body_container_phone.appendChild(component_body_entry);

    main_container.replaceChild( component_container_phone, component_container_add);
  }

subs_phone.value="";
subs_name.value="";

}


//handles click of delete button
function delete_entry(){
  var temp1= this.parentNode;
  var temp2= temp1.parentNode;
  temp2.parentNode.removeChild(temp2);
  sub_count--;
  if(sub_count==0){
    component_body_heading.style.display="none";
  }
}

//udates the your details section
function update_details(){

  
  detail_para.innerHTML="YOUR DETAILS: </br> Name: "+ subs_name.value +"</br> Phone: "+subs_phone.value;
  
  
}

