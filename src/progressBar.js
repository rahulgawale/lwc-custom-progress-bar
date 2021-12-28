import { LightningElement, api } from "lwc";

export default class ProgressBar extends LightningElement {
  // customization properties for devs

  // Size = x-small, small, medium, large, default (null)
  _size;
  @api 
  get size(){
    return this._size;
  }
  set size(size){
    this._size = size?.toLowerCase();
  }

  // Radius = default rect, circular
  _radius;
  @api
  get radius(){
    return this._radius;
  }
  set radius(rad){
    this._radius = rad?.toLowerCase();
  }

  // Variant = default (brand), success, warning, 
  _variant
  @api
  get variant(){
    return this._variant;
  }
  set variant(variant){
    this._variant = variant?.toLowerCase();
  }

  // custom color, overwrites the variant color
  @api customColor;

  @api description = "Progress"
  @api showDescription;
  @api value = 0;

  // compute custom styles based on all props
  get style() {
    let style = `width: ${this.value}%;`;
    style += this.variant ? `background-color: ${this.variantColor};` : "";
    return style;
  }

  // set the classes based on the customization props
  get classes(){
    let cls = 'slds-progress-bar ';
    cls += this.radius === 'circular' ? 'slds-progress-bar_circular ' : '';
    cls += this.size ? this.sizeClass + ' ' : "";
    return cls;
  }

  // select /the size based on the size prop
  get sizeClass(){
    switch (this.size){
      case "x-small":
        return "slds-progress-bar_x-small";
      case "small":
        return "slds-progress-bar_small";
      case "medium":
        return "slds-progress-bar_medium";
      case "large":
        return "slds-progress-bar_large";
      default:
        return "";
    }
  }

  // select the variant color based on prop
  // varian = default, success, warning, info, error
  get variantColor(){
    if(this.customColor){
      return this.customColor;
    }
    switch(this.variant){
      case "success":
        return "var(--lwc-colorBackgroundSuccess,rgb(69, 198, 90))";
      case "warning":
        return "var(--lwc-colorBackgroundWarning, rgb(254, 147, 57))";
      case "info":
        return "var(--lwc-colorBackgroundInfo, rgb(112, 110, 107))";
      case "error":
        return "var(--lwc-colorBackgroundError, rgb(254, 92, 76))";
      default:
      return "";
    }
  }
}
