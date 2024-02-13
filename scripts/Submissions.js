export const SubmissionList = async () => {
  // Get the submissions from your API
  const response = await fetch("http://localhost:8088/submissions");
  const submissions = await response.json();
  let submissionHTML = "";
  // Iterate the submissions and create some <section> representations
  for (const Submission of submissions) {
    submissionHTML += `<section class="submission">
    <div>Owns Jeans? ${Submission.ownsBlueJeans}</div>
    <div>Area type foreign key? ${Submission.socioLocationId}</div>
    </section>`;
  }
  return submissionHTML;
  // Return the HTML string
};
