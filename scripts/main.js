import { OwnJeansChoices } from "./Ownsjeans.js";
import { saveSubmission } from "./saveSubmission.js";
import { locationTypeChoices } from "./location.js";
import { SubmissionList } from "./Submissions.js";

const container = document.querySelector("#container");

const render = async () => {
  const jeanOwnershipHTML = OwnJeansChoices();
  const locationsHTML = await locationTypeChoices();
  const buttonHTML = await saveSubmission();
  const submissionListHTML = await SubmissionList();

  container.innerHTML = `
  ${jeanOwnershipHTML}
  ${locationsHTML}
  ${buttonHTML}
  ${submissionListHTML}`;
};
document.addEventListener("newSubmissionCreated", render);
render();
