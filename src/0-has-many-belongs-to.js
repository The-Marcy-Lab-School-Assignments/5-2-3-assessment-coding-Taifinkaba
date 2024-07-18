const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel) {
    this.id = getId();
    this.priorityLevel=priorityLevel;
    this.description=description;
    this.isDone=false;
    //extra property
    this.extra='Hi I\'m Tai!';
  }

  //extra method
  extraMethod(){
    this.extra='Omg I\'m Tai too!!';
  }
}



class ToDoList {
  constructor(name, items) {
    this.id = getId();
    this.name=name;
    this.items=[];

    // .instances static property that access a instance in all the classes and keeps it private
    if (!ToDoList.instances) {
      ToDoList.instances = [];
    }
    ToDoList.instances.push(this);
  }

  createItem(description,priorityLevel){
    const newItem = new ToDoItem(description, priorityLevel);
    this.items.push(newItem);
    return newItem;
  }

  getItems(){
    return [...this.items];
  }

  getCompletedCount(){
    return this.items.filter(item => item.isDone).length;
  }

  static list() {
    return [...ToDoList.instances];

  }

  static findBy(id){
    return ToDoList.instances.find(list => list.id === id);
  }

  //extra instance method
  extraInstanceMethod(){
    return this.extra='Tai, you wanna get some Thai?';
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};