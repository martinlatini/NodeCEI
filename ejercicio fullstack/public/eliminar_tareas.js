/* const deleteTarea = async () => {
  try {
    const btnValue = document.getElementsByClassName("btn-delete");
    const elementValue = btnValue[0].getAttribute("id");
  } catch (error) {
    console.error(error);
  }
};

deleteTarea().then(() => {
  const btnValue = document.getElementsByClassName("btn-delete");
  const elementValue = btnValue[0].getAttribute("id");
});
 */

const btnValue = document.getElementsByClassName("btn-delete");
const btnArr = Array.from(btnValue);

/* for (let i = 0; i < btnArr.length; i++) {
  const element = btnArr[i];
  console.log(element);
  if (element.hasAttribute("id")) {
    console.log("hola");
  } 
}

*/
