const { program } = require("commander");
const contactsOpetations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsOpetations.listContacts();
      console.table(allContacts);
      break;

    case "getById":
      const oneContact = await contactsOpetations.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsOpetations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactsOpetations.removeContactById(id);
      console.log(removeContact);
      break;

    case "updateContact":
      const updateContact = await contactsOpetations.updateContactById(
        id,
        name,
        email,
        phone
      );
      console.log(updateContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse();
const options = program.opts();
invokeAction(options);
