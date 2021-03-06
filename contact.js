//initializing addContactButton
var addContactButton = document.getElementById("buttonAdd");
addContactButton.onclick = createContact;

function createContact() {
    
    /*Get all the contact details values and store them in the variables below
    var contactName = document.getElementById("Name").value;
    var eMail = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    //script for adding new li bearing contact name in a nameListItemParagraph paragraph element under the ul and give it the value of Name
    var nameListItem = document.createElement("li");
    var nameListItemParagraph = document.createElement("p");
    var nameListItemContent = document.createTextNode(contactName);
    nameListItemParagraph.appendChild(nameListItemContent);
    
    
    /*script to set attribute of new nameListItemParagraph, bearing contact name to
    the value of contact name and then the id of nameListItem to
    contactName+eMail*/
    nameListItemParagraph.setAttribute("id", contactName);
    nameListItem.setAttribute("id","contact-" + contactName);
    
    //Add li and its content to the ordered list after adding the nameListItemParagraph to the li
    var contactOrderedList = document.getElementById("contactList");
    nameListItem.appendChild(nameListItemParagraph);
    contactOrderedList.appendChild(nameListItem);
    
    /************************script to access contact details***********************/
    
    
    //script to create an unordered list for contact details
    var detailsUnorderedList = document.createElement("ul");
    
    /*Creating a list for the email and giving it the value of eMail
    there after, add it to the detailsUnorderedList*/
    var eMailListItem = document.createElement("li");
    eMailListItem.setAttribute("id", eMail);
    var eMailListItemContent = document.createTextNode("Email: " + eMail);
    eMailListItem.appendChild(eMailListItemContent);
    detailsUnorderedList.appendChild(eMailListItem);
    
    /*Creating  a li for the phone number and giving it the value of phoneNumber
    then, add it to the detailsUnorderedList*/
    var phoneNumberListItem = document.createElement("li");
    phoneNumberListItem.setAttribute("id", phoneNumber);
    var phoneNumberListItemContent = document.createTextNode("Tel: " + phoneNumber);
    phoneNumberListItem.appendChild(phoneNumberListItemContent);
    detailsUnorderedList.appendChild(phoneNumberListItem);
    
    //setting detailsUnorderedList as id of "details-" + contactName
    detailsUnorderedList.setAttribute("id", "details-" + contactName);
    
    //Add  created detailsUnorderedList and its content to contactNameListItem and give it an attribute of hidden
    detailsUnorderedList.setAttribute("hidden","");
    nameListItem.appendChild(detailsUnorderedList);
    
    //Reset input fields after clicking addContactButton
    document.getElementById("contactForm").reset();
    
    //hiding or revealing contact details
     (function () {
        var contact = document.getElementById(contactName);
        var details = document.getElementById("details-" + contactName);
        contact.onclick = hider;
        var counter1 = 2;
        
        function hider() {
            if (counter1%2 === 0) {
                details.removeAttribute("hidden");
                
            } else {
                details.setAttribute("hidden","");
                }
            return counter1++;
        }
    })();
    
    /************** editing contact details****************************/
    
    //creating the editButton button in the detailsUnorderedList
    var editButton = document.createElement("button");
    editButton.setAttribute("id", "edit-" + contactName);
    var editButtonText = document.createTextNode("Edit contact");
    editButton.appendChild(editButtonText);
    detailsUnorderedList.insertAdjacentElement("beforeend", editButton);
    
    //assessing click event for the clickEditButton
    var clickEditButton = document.getElementById("edit-" + contactName);
    clickEditButton.onclick = editContactDetails;
    var counter2 = 1;
    
    function editContactDetails() {
        if(counter2%2 !== 0) {
            //Gets all the contact detail's elements
            var nameToEdit = document.getElementById(contactName);
            var emailToEdit = document.getElementById(eMail);
            var phoneNumberToEdit = document.getElementById(phoneNumber);
            
            /* storing the contact form and the form
            itself in a created Div*/
            var editDiv = document.createElement("div");
            editDiv.setAttribute("id", "edit-div-" + contactName);
            var editForm = document.createElement("form");
            
            //creating input field for editing the name
            var editNameTextInput = document.createElement("input");
            editNameTextInput.setAttribute("type","text");
            editNameTextInput.setAttribute("class","input-field");
            editNameTextInput.setAttribute("placeholder","Enter Another Name");
            editNameTextInput.setAttribute("id","edit-" + contactName + "-text");

            //creating input field for editing the email
            var editEmailTextInput = document.createElement("input");
            editEmailTextInput.setAttribute("type","text");
            editEmailTextInput.setAttribute("class","input-field");
            editEmailTextInput.setAttribute("placeholder","Enter Another Email");
            editEmailTextInput.setAttribute("id","edit-" + eMail + "-text");
            
            //creating input field for editing the phone number
            var editPhoneNumberTextInput = document.createElement("input");
            editPhoneNumberTextInput.setAttribute("type","text");
            editPhoneNumberTextInput.setAttribute("class","input-field");
            editPhoneNumberTextInput.setAttribute("placeholder","Enter Another Phone Number");
            editPhoneNumberTextInput.setAttribute("id","edit-" + phoneNumber + "-text");
            
            //creating the save button
            var saveButton = document.createElement("input");
            saveButton.setAttribute("type","submit");
            saveButton.setAttribute("value","Save");
            saveButton.setAttribute("id","save-button-" + contactName);
            
            //creating a span for editing name with 'Name' as value
            var spanForEditName = document.createElement("span");
            var textSpanForEditName = document.createTextNode("Name");
            spanForEditName.appendChild(textSpanForEditName);
            
            //creating a span for editing email with 'Email' as value
            var spanForEditEmail = document.createElement("span");
            var textSpanForEditEmail = document.createTextNode("Email");
            spanForEditEmail.appendChild(textSpanForEditEmail);
            
            //Creating a span for editing phone number with 'Phone Number' as
            //value
            var spanForPhoneNumber = document.createElement("span");
            var textSpanForPhoneNumber = document.createTextNode("Phone Number");
            spanForPhoneNumber.appendChild(textSpanForPhoneNumber);
            
            //creating labels for the input inside(edit)
            var labelForEditName = document.createElement("label");
            var labelForEditEmail = document.createElement("label");
            var labelForPhoneNumber = document.createElement("label");
            
            //putting span into their respective labels
            labelForEditName.appendChild(spanForEditName);
            labelForEditEmail.appendChild(spanForEditEmail);
            labelForPhoneNumber.appendChild(spanForPhoneNumber);
            
            //putting inputs into their respective labels
            labelForEditName.appendChild(editNameTextInput);
            labelForEditEmail.appendChild(editEmailTextInput);
            labelForPhoneNumber.appendChild(editPhoneNumberTextInput);
            
            //putting all labels into the editForm element
            editForm.appendChild(labelForEditName);
            editForm.appendChild(labelForEditEmail);
            editForm.appendChild(labelForPhoneNumber);
            
            //putting editDiv after the clickEditButton and editForm
            clickEditButton.insertAdjacentElement('afterend', editDiv);
            editDiv.appendChild(editForm);
            editForm.insertAdjacentElement('afterend',saveButton);
            
            //assessing event for clickToSave button
            var clickToSave = document.getElementById("save-button-" + contactName);
            clickToSave.onclick = editAndSave;
                    
            function editAndSave() {
                //initializing or setting name to newly edited value
                var nameToSave = document.getElementById("edit-" + contactName + "-text").value;
                if(nameToSave === "") {} else {
                document.getElementById(contactName).innerHTML = nameToSave;
                }
                
                // initializing or setting to newly edited value
                var eMailToSave = document.getElementById("edit-" + eMail + "-text").value;
                if(eMailToSave === "") {} else {
                document.getElementById(eMail).innerHTML = "Email: " + eMailToSave;
                }
                
                //initializing or setting to phone number to newly edited value
                var phoneNumberToSave = document.getElementById("edit-" + phoneNumber + "-text").value;
                if(phoneNumberToSave === "") {} else {
                document.getElementById(phoneNumber).innerHTML = "Tel: " + phoneNumberToSave;
                }
                
                // hiding the editDiv
                var hideEditDiv = document.getElementById("edit-div-" + contactName);
                hideEditDiv.remove();
                
                return counter2--;
            }
        } else {
            //Hides the edit div when clicks are even
            var hideEditDiv = document.getElementById("edit-div-" + contactName);
            hideEditDiv.remove();
        }
        
        return counter2++;
    }
    
    /****deleting the contact details**************/
    
    
    //initializing the delete button and putting it as last child of detailsUnorderedList
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-" + contactName);
    var deleteButtonText = document.createTextNode("Delete contact");
    deleteButton.appendChild(deleteButtonText);
    detailsUnorderedList.insertAdjacentElement("beforeend", deleteButton);
    
    //take care of click event for delete button
    var clickDeleteButton = document.getElementById("delete-" + contactName);
    clickDeleteButton.onclick = deleteContactDetails;
    
    function deleteContactDetails() {
        //Delete contact
        var allContactDetails = document.getElementById("contact-" + contactName);
        allContactDetails.remove();
    }
    
    //Creating horizontal line just after the contact details
    var nameListItemHr = document.createElement("hr");
    deleteButton.insertAdjacentElement("afterend", nameListItemHr);
}
