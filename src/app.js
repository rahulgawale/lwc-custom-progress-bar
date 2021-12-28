import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Custom LWC Progress Bar Playground";
  value = 76;
  radius = "circular";
  size = "large";
  showDescription = true;
  description = "Add description here..";
  variant = "error";
  customColor;

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
  }

  handleChangeCb(event){
    this[event.target.name] = event.target.checked;
  }
}