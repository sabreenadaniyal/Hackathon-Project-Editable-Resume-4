//Get reference to the form & diaplay area
const Form = document.getElementById("resume-form") as HTMLFormElement;
const resumedisplayElement = document.getElementById("resume-display") as HTMLDivElement

//Handle form submittion
//eventlstener(to wait click the button)
Form.addEventListener("submit", (event: Event) => {
    event.preventDefault();  //prevent page reload

    //collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value
    const Dob = (document.getElementById("Dob") as HTMLInputElement).value
    const Address = (document.getElementById("Address") as HTMLInputElement).value
    const Email = (document.getElementById("email") as HTMLInputElement).value
    const mobile = (document.getElementById("phone") as HTMLInputElement).value
    const Education = (document.getElementById("education") as HTMLInputElement).value
    const Skills = (document.getElementById("skills") as HTMLInputElement).value
    const Experience = (document.getElementById("experience") as HTMLInputElement).value

    //generate the resume content dynamically
    const resumeHTML = `
  <h2><b> Editable Resume </b></h2>
  <h3> Personal Information </h3>
  <p><b> Name:</b><span contenteditable="true"> ${name} </span></p>
  <p><b> Dob:</b><span contenteditable="true"> ${Dob} </span></p>
  <p><b> Address:</b><span contenteditable="true"> ${Address} </span></p>
  <p><b> Email:</b><span contenteditable="true"> ${Email} </span></p>
  <p><b> mobile:</b><span contenteditable="true"> ${mobile} </span></p>
  
  <h3> Education </h3>
  <p> ${Education} </p>

  <h3> Skills </h3>
  <p contenteditable="true"> ${Skills} </p>

  <h3> Experience </h3>
  <p contenteditable="true"> ${Experience} </p> `;

    //Display generated resume
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("The resume diaplay element is missing")
    }
})
