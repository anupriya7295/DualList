# dual-list

## Basic usage

```html
<template>
  <FormDualList :options="options"/>
</template>

<script>
  export default {
    components: {
      FormDualList
    },
    data() {
      return {
        options:[
        {key: 'Tamil Nadu', value: 'TN'},
        {key: 'Kerala', value: 'KL'},
        {key: 'Karnataka', value: 'KA'},
        {key: 'Maharastra', value: 'MH'},
        {key: 'Delhi', value: 'DL'},
        {key: 'Goa', value: 'GA'},
        {key: 'Punjab', value: 'PB'},
        {key: 'Orissa', value: 'OR'},
        {key: 'Bihar', value: 'BR'},
        ],
        state:['Tamil Nadu', 'Kerala', 'Karnataka', 'Maharastra', 'Delhi', 'Goa', 'Punjab','Orissa','Bihar'] // option can also be like this
      };
    },
  };
</script>
```
## Advanced usage

```html
<template>
  <FormDualList
  :label="'Dual List'"
  :options="options"
  :selected="selected"
  :enableOptionSearch = "true"
  :enableSelectedSearch = "true"
  :moveRight="'>>'"
  :moveLeft="'<<'"
  :moveRightClass="'moveRight'"
  :moveLeftClass="'moveLeft'"
  :optionBoxClass="'leftDualList'"
  :selectedBoxClass="'rightDualList'"
  />
</template>
```