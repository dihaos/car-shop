<template>
  <section id="compl-list">
    <div class="container">
      <h2>ВЫ МОЖЕТЕ УТОЧНИТЬ</h2>
      <p>НАЛИЧИЕ И СТОИМОСТЬ ОПРЕДЕЛЕННОЙ КОМПЛЕКТАЦИИ ONLINE</p>
      <ul class="copl-list-item">
        <li v-for="(car, index) in cars" :id="car.id + '_compls'" :key="car.id">
          <div>
            <p class="compl-car-name">
              LADA <span class="accent">{{ car.name }}</span>
            </p>
            <div class="car-image">
              <img :src="require(`@/assets/images/${car.image}.png`)" />
            </div>
          </div>
          <div class="compl-info">
            <p class="title">найди свою <br />выгодную комплектацию.</p>
            <select
              :name="'compl_' + car.id"
              :id="'compl_' + car.id"
              @change="complChange(car.id, index)"
            >
              <option value="">Выберите комплектацию</option>
              <option
                v-for="compl in car.compl"
                :value="compl.name"
                :key="compl.name"
              >
                {{ compl.name }}
              </option>
            </select>
            <select
              :name="'compl_' + car.id"
              :id="'power_' + car.id"
              disabled="true"
            >
              <option value="">Выберите двигатель</option>
            </select>
            <a href="#" @click.prevent="show = true" class="btn"
              >Запросить наличие и стоимость
            </a>
            <a href="#" @click.prevent="show = true" class="btn btn-black"
              >Все комплектации в наличии
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <modal-callback v-model="show" @confirm="confirm" @cancel="cancel">
    <template v-slot:title>Перезвоним через 15 сек.</template>
  </modal-callback>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import modalCallback from '@/components/modalCallback';
export default {
  components: { modalCallback },
  setup() {
    const show = ref(false);
    const confirm = () => {
      show.value = false;
    };
    const cancel = (close) => {
      close();
    };
    const store = useStore();
    const cars = computed(() => store.getters.CARS_COMPLS);
    const complChange = (car, key) => {
      const cars = store.getters.CARS_COMPLS;
      var compl = document.getElementById('compl_' + car).value;
      var optionsHTML = '<option value="">Выберите двигатель</options>';
      if (compl != '') {
        for (var i = cars[key].compl.length - 1; i >= 0; i--) {
          if (cars[key].compl[i].name == compl) {
            for (var l = cars[key].compl[i].engines.length - 1; l >= 0; l--) {
              optionsHTML +=
                '<option value="' +
                cars[key].compl[i].engines[l] +
                '">' +
                cars[key].compl[i].engines[l] +
                '</options>';
            }
            document.getElementById('power_' + car).innerHTML = optionsHTML;
            document.getElementById('power_' + car).disabled = false;
          }
        }
      } else {
        document.getElementById('power_' + car).disabled = true;
        document.getElementById('power_' + car).innerHTML = optionsHTML;
      }
    };
    return {
      cars,
      show,
      confirm,
      complChange,
      cancel,
    };
  },
};
</script>

<style lang="sass">
#compl-list
	margin-top: 50px
#compl-list h2
	font-size: 36px
	font-weight: 700
	letter-spacing: 0.36px
	line-height: 1.2em
#compl-list h2 .container > p
	font-size: 24px
	text-transform: uppercase
	letter-spacing: 0.24px
	line-height: 1.2em
	margin-top: 15px
#compl-list .copl-list-item
	margin-top: 106px
	list-style-type: none
#compl-list .copl-list-item li
	display: flex
	justify-content: space-between
	border-bottom: 1px solid #ccc
	padding-bottom: 26px
	margin-bottom: 60px
#compl-list .copl-list-item li .compl-car-name
	text-align: right
	font-size: 30px
	font-weight: 700
	letter-spacing: 0.3px
#compl-list .copl-list-item li .car-image
	max-width: 630px
	width: 100%
	margin-top: 10px
#compl-list .copl-list-item li .car-image img
	display: block
	width: 100%
	height: auto
#compl-list .copl-list-item li .compl-info
	width: 375px
	margin-left: 50px
#compl-list .copl-list-item li .compl-info .btn
	width: 100%
	margin-bottom: 18px
#compl-list .copl-list-item li .compl-info .btn.btn-black
	margin-bottom: 0
#compl-list .copl-list-item li .compl-info p.title
	font-size: 18px
	letter-spacing: 0.18px
	text-transform: uppercase
	line-height: 1.2em
	margin-bottom: 20px
#compl-list .copl-list-item li .compl-info select
	margin-bottom: 20px
	display: block
	width: 100%
	height: 45px
	border: 0
	outline: none
	border-bottom: 1px solid #999
	color: #999
	transition: 0.3s ease
#compl-list .copl-list-item li .compl-info select:disabled
	opacity: 0.5
@media only screen and (max-width: 996px)
	#compl-list .copl-list-item li
		flex-wrap: wrap
	#compl-list .copl-list-item li .car-image
		max-width: 100%
		margin-top: 25px
	#compl-list .copl-list-item li > div
		width: 100%
	#compl-list .copl-list-item li .compl-car-name
		text-align: left
	#compl-list .copl-list-item li .compl-info
		display: flex
		flex-wrap: wrap
		justify-content: space-around
		margin-top: 25px
		margin-left: 0
		width: 100%
	#compl-list .copl-list-item li .compl-info p.title
		display: none
	#compl-list .copl-list-item li .compl-info select
		width: 275px
	#compl-list .copl-list-item li .compl-info .btn
		max-width: 400px
@media only screen and (max-width: 760px)
	#compl-list h2
		font-size: 24px
	#compl-list .copl-list-item li .compl-car-name
		font-size: 24px
		line-height: 1.2em
	#compl-list .copl-list-item
		margin-top: 44px
</style>
