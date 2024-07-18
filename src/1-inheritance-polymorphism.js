class Phone {
  constructor(phoneNumber,contacts){
    this.phoneNumber=phoneNumber;
    this.contacts=[]
  }

  addContact(contact){
    // .test regex method returns true or false to check if the phone number is 10 digits
    if (!contact.name || !contact.phoneNumber || typeof contact.phoneNumber !== 'string' || !(/^\d{10}$/).test(contact.phoneNumber)) {
      return 'Invalid';
    }
    this.contacts.push(contact);
    return `${contact.name} added.`;
  }

  removeContact(name){
    const index = this.contacts.findIndex(contact => contact.name === name);
    if (index === -1) {
      return 'Contact not found.';
    }
    this.contacts.splice(index, 1);
    return `${name} removed.`;
  }

  makeCall(nameOrNumber){
    const contact = this.contacts.find(contact => contact.name === nameOrNumber || contact.phoneNumber === nameOrNumber);
    if (contact) {
      return `Calling ${contact.name}...`;
    } else if (/^\d{10}$/.test(nameOrNumber)) {
      return `Calling ${nameOrNumber}...`;
    } else {
      return 'Invalid';
    }
  }
}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model){
    super(phoneNumber);
    this.model=model;
  }

  sendIMessage(phone, message){
    if (phone.constructor !== AppleIPhone) {
      return 'Message could not be sent.';
    }
    return `Message: ${message} - sent from ${this.model}`;
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
