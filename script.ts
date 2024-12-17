const toggleSkills = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

toggleSkills.addEventListener('click' ,()=>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    }else{
        skills.style.display = 'none'
    }
});





const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;

if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLInputElement).value;

        // Name validation: 10 characters max, alphabets only
        if (!/^[A-Za-z]{1,10}$/.test(name)) {
            alert('Name must be alphabetic and up to 10 characters long.');
            return;
        }

        // Generating HTML content
        const resumeHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h2>Education</h2>
            <p><strong>Education:</strong> ${education}</p>
            <h2>Experience</h2>
            <p><strong>Experience:</strong> ${experience}</p>
            <h2>Skills</h2>
            <p><strong>Skills:</strong> ${skills}</p>
            <h2>Description</h2>
            <p><strong>Description:</strong> ${description}</p>
        `;

        resumeOutput.innerHTML = resumeHTML;
    });
} else {
    console.error('Form and/or output element not found');
}