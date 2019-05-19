# dual-list

## Basic usage

```html
<template>
  <dual-list :options="options"/>
</template>

<script>
  export default {
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
  <dual-list
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

<script>
  export default {
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
        selected:[
            {key: 'Tamil Nadu', value: 'TN'},
            {key: 'Kerala', value: 'KL'}
        ]
      };
    },
  };
</script>
```