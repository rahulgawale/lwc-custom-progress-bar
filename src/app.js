import { LightningElement } from "lwc";
import codeGenerator from './codeGenerator.js'
export default class App extends LightningElement {
  title = "Custom LWC Progress Bar Playground";
  value = 76;
  radius = "circular";
  size = "large";
  showDescription = true;
  description = "Add description here..";
  variant = "error";
  customColor;

  code = "";

  connectedCallback(){
    this.generateCode();
  }

  variantOptions = [
    {label:"Default", value:""},
    {label:"Success", value:"success"},
    {label:"Info", value:"info"},
    {label:"Warning", value:"warning"},
    {label:"Error", value:"error"}
  ];

  sizeOptions = [
    {label:"X-Small", value:"x-small"},
    {label:"Small", value:"small"},
    {label:"Medium", value:"medium"},
    {label:"Large", value:"large"}
  ];

  radiusOptions = [
    {label:"Default", value:""},
    {label:"Circular", value:"circular"},
  ]

  handleChange(event){
    this[event.target.name] = event.target.value;
    if(event.target.name === 'variant') this.customColor = null;
    this.generateCode();
  }

  handleChangeCb(event){
    this[event.target.name] = event.target.checked;
    this.generateCode();
  }

  generateCode(){
    console.log("in generateCode");
    this.code = codeGenerator({
      title: this.title,
      value: this.value,
      radius: this.radius,
      size: this.size,
      showDescription: this.showDescription,
      description: this.description,
      variant: this.variant,
      customColor : this.customColor
    });
  }
}