<template>
  <div class="input_range">
    <div class="input_range__current_value">{{ value }} %</div>
    <div class="input_range__range">
      <input @input="setValue" :value="value" type="range" min="0" max="100" class="slider" step="0.1" >
    </div>
    <div class="input_range__changer">
      <div @click="setValByClick(25)">25%</div>
      <div @click="setValByClick(50)">50%</div>
      <div @click="setValByClick(75)">75%</div>
      <div @click="setValByClick(100)">100%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-input-range',
  props: {
    value: {
    }
  },
  methods: {
    setValue(e) {
      this.$emit('input',  +e.target.value)
    },
    setValByClick(val){
      this.$emit('input', +val)
    }
  }

}
</script>

<style scoped>
.input_range{
  background-color: #002137;
  color: #BBBBBB;
  min-height: 150px;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}

.input_range__current_value {
  font-size: 20px;
  padding: 5px 0px 0px 10px ;
  justify-self: start;
}

.input_range__changer {
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 15px;
  padding: 10px 0px 20px 0
}

.input_range__changer > div {
  background-color: #62639B;
  border-radius: 20px;
  width: 60px;
  height: 35px;
  color: #fff;
  font-weight: 700;
  line-height: 35px;
  cursor: pointer;
}

.input_range__range {
  align-self: center;
}
.slider {
    -webkit-appearance: none;
    width: 97%;
    border-radius: 20px;
    height: 35px;
    background: linear-gradient(to right, #40E0D0,#40E0D0,#FCE883, #E66761);
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 25px;
    background: #fff;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border-radius: 25px;
    background: #fff;
    cursor: pointer;
}
</style>