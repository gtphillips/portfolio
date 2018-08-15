import $ from 'jquery';

class Example {
  constructor() {
      this.exampleSelector = $(".site-section__exampleSelector");
      this.events();
  }

  events() {
    this.exampleSelector.click(this.exampleFunction.bind(this));
  }

  exampleFunction() {
    //do stuff here
	alert("JS WORKING");
  }
}

export default Example;
