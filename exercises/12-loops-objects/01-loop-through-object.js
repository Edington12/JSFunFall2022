/**
 * Loop through all properties within the "links" object
 * an return a list of HTML links.
 * @param {object} links e.g. { Text: "https://url.com" }
 * @returns {string} of <a> tags
 *
 * @example
 *
 * const links = {
 *   Dogs: "http://www.omfgdogs.com",
 *   Kittens: "https://giphy.com/search/kitten",
 *   "Hamster Dance": "https://hamster.dance/hamsterdance/",
 * };
 *
 * generateLinks(links);
 * // <a href="http://www.omfgdogs.com">Dogs</a><a href="https://giphy.com/search/kitten">Kittens</a><a href="https://hamster.dance/hamsterdance/">Hamster Dance</a>
 */

const generateLinks = (links) => {
  console.log(links);
  // WRITE YOUR ANSWER HERE
  let str = "";
for (let text in links) {
  console.log(text);
  console.log(links[text]);
  str = str + "<a href="${links[text]}">${text}</a>';
}
  links = [Dogs, Kittens, "Hamster Dance"]
  (links["<0>","<1>","<2>"].objects)
  return(generateLinks);
};
console.log(links[0,1,2]);
// IGNORE THIS BELOW. It is for the tests.

export default generateLinks;
