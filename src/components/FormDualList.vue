<template>
	<div class="m-3">
		<div class="m-2">
      <label>{{label}}</label><br>
    </div>
		<b-row>
			<b-col>
				<b-form-group v-if="enableOptionSearch">
					<b-form-input
					:id="'optionSearch'"
					v-model="optionSearch"
					:name="'optionSearch'"
					:type="'text'"
					:placeholder="'Search'"
					:class="optionSearchClass ? `${optionSearchClass} searchBox` : 'searchBox'"
					/>
				</b-form-group>
			</b-col>
			<b-col>
        <b-form-group >
					<b-form-input
					v-show="enableSelectedSearch"
					:id="'selectedSearch'"
					v-model="selectedSearch"
					:name="'selectedSearch'"
					:type="'text'"
					:placeholder="'Search'"
					:class="selectedSearch ? `${selectedSearch} searchBox ml-3` : 'searchBox ml-3'"
					/>
				</b-form-group>
      </b-col>
		</b-row>
		<b-row>
			<b-col>
					<b-card-group deck>
					<b-card :class="optionBoxClass ? `${optionBoxClass} dualBlock p-2` : 'dualBlock p-2'">
						<div v-for="(item, index) in items" v-bind:key="index">
							<a href='#' v-on:click='transferToRight(index)'>
								<span v-if="textField">
								{{ item[textField] }}
								</span>
								<span v-if="!textField">
								{{ item}}
								</span>
							</a>
						</div>
					</b-card>
          </b-card-group>
			</b-col>
			<div class="p-1">
        <div class="action mt-3">
          <b-row>
          <b-button type="button" variant="outline-info" v-on:click='transferToRight()' :class="moveRightClass ? `${moveRightClass}` : ''">
            {{moveRight}}
          </b-button>
        </b-row>
        <b-row class="mt-2">
          <b-button type="button" variant="outline-info" v-on:click='transferToLeft()' :class="moveLeftClass ? `${moveLeftClass}` : ''">
            {{moveLeft}}
          </b-button>
        </b-row>
        </div>
      </div>
			<b-col>
				<b-card-group deck>
            <b-card :class="selectedBoxClass ? `${selectedBoxClass} dualBlock` : 'dualBlock'">
              <div v-for='(item, index) in selectedItems' v-bind:key="index">
                <a href='#' v-on:click='transferToLeft(index)'>
                <span v-if="textField">
                  {{ item[textField] }}
                  </span>
                  <span v-if="!textField">
                  {{ item}}
                  </span>
                </a>
              </div>
            </b-card>
          </b-card-group>
			</b-col>
		</b-row>
	</div>
</template>
<script>

export default {
  name: 'FormDualList',
  props: {
    label: {
        type: String
    },
    options: {},
    selected: {},
		enableOptionSearch: {
			type: Boolean,
			default: true
		},
		enableSelectedSearch: {
			type: Boolean,
			default: true
		},
		optionSearchClass: {},
		selectedSearchClass: {},
		moveRight: {
			type: String,
			default: '>>'
		},
		moveLeft: {
			type: String,
			default: '<<'
		},
		moveRightClass: {},
		moveLeftClass: {},
		optionBoxClass:{},
		selectedBoxClass:{},
    textField: {
        type: String
    },
  },
  data() {
    return {
      optionSearch: '',
			selectedSearch: ''
    }
	},
	methods: {
		transferToRight(index) {
			this.transfer(this.items, this.selected, index);
		},
		transferToLeft(index) {
			this.transfer(this.selected, this.items, index);
		},
		transfer(from, to, index) {
			if (index >= 0) {
				to.push(from[index]);
				from.splice(index, 1);
			} else {
				from.forEach((element) => {
					to.push(element);
				});
				from.splice(0, from.length);
			}
		},
		has(data, value) {
			return data.toLowerCase().indexOf(value.toLowerCase()) !== -1;
		},
		getSearchData(searchKey, data) {
			if(searchKey) {
				return data.filter((a) => {
					if (this.textField) {
						return this.has(a[this.textField], searchKey);
					} else {
						return this.has(a, searchKey);
					}
				});
			} else {
				return data;
			}
		}
	},
	computed: {
		items() {
			let filteredOptions = [];
			if (this.textField) {
				const selectedValues = this.selected.map((a) => {
					return a[this.textField];
				});
				filteredOptions = this.options.filter((e) => !selectedValues.includes(e[this.textField]));
			} else {
				filteredOptions = this.options.filter((e) => !this.selected.includes(e));
			}
			return this.getSearchData(this.optionSearch, filteredOptions);
		},
		selectedItems() {
			return this.getSearchData(this.selectedSearch, this.selected);
		}
	},
  components: {
  }
}
</script>

<style>
.dualBlock {
  height: 120px;
  overflow-y: scroll;
  font-size: 13px;
}
.card-body {
  padding: 4px;
}
.searchBox {
	width: 97%;
}
</style>