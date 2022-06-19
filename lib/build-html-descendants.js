export const buildDescendants = (
  document,
  itemComments = ""
) => {
  const descendantsLink = document.createElement("a");
  descendantsLink.setAttribute("href", itemComments);
  descendantsLink.textContent = "Comments";

  const descendantsSpan = document.createElement("span");
  descendantsSpan.setAttribute("class", "descendants-container");
  descendantsSpan.appendChild(descendantsLink);

  return descendantsSpan;
};
