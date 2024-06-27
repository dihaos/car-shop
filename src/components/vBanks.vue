<template>
  <section class="banks" id="banks">
    <div class="container">
      <h2>Лучшие кредитные предложения для вас</h2>
      <div class="banks__table">
        <div class="banks__thead">
          <div class="banks__th">Банки-партнеры</div>
          <div class="banks__th">Процентная ставка</div>
          <div class="banks__th">Заявка на одобрение</div>
        </div>
        <div class="banks__row">
          <div class="banks__th">
            <img
              :src="require(`@/assets/images/banks/logo-alfa.svg`)"
              alt="Альфа-Банк"
              class="banks__img"
            />
          </div>
          <div class="banks__th">5%</div>
          <div class="banks__th">
            <button class="btn" @click.prevent="show = true">Выбрать</button>
          </div>
        </div>
        <div class="banks__row">
          <div class="banks__th">
            <img
              :src="require(`@/assets/images/banks/ph_bank.svg`)"
              alt="РН Банк"
              class="banks__img"
            />
          </div>
          <div class="banks__th">10.90%</div>
          <div class="banks__th">
            <button class="btn" @click.prevent="show = true">Выбрать</button>
          </div>
        </div>
        <div class="banks__row">
          <div class="banks__th">
            <img
              :src="require(`@/assets/images/banks/Asset-1.svg`)"
              alt="Газпромбанк"
              class="banks__img"
            />
          </div>
          <div class="banks__th">10.90%</div>
          <div class="banks__th">
            <button class="btn" @click.prevent="show = true">Выбрать</button>
          </div>
        </div>
        <div class="banks__row">
          <div class="banks__th">
            <img
              :src="require(`@/assets/images/banks/logo-sovcom.svg`)"
              alt="Совкомбанк"
              class="banks__img"
            />
          </div>
          <div class="banks__th">13.40%</div>
          <div class="banks__th">
            <button class="btn" @click.prevent="show = true">Выбрать</button>
          </div>
        </div>
        <div class="banks__row">
          <div class="banks__th">
            <img
              :src="require(`@/assets/images/banks/loko-bank.svg`)"
              alt="Локо-Банк"
              class="banks__img"
            />
          </div>
          <div class="banks__th">14.90%</div>
          <div class="banks__th">
            <button class="btn" @click.prevent="show = true">Выбрать</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <modal-callback v-model="show" @confirm="confirm" @cancel="cancel">
    <template v-slot:title>Перезвоним через 15 сек.</template>
  </modal-callback>
</template>

<script>
import { ref } from 'vue';
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

    return {
      show,
      confirm,
      cancel,
    };
  },
};
</script>

<style lang="sass">
.banks
	margin-top: 40px
	&__table
		margin-top: 40px
	&__thead
		background: #4C4C4D
		display: flex
		align-items: center
		justify-content: space-between
		color: #fff
		padding: 38px
		border-radius: 10px 10px 0 0
		font-size: 20px
		font-weight: bold
	&__th
		width: 33.33333%
		text-align: center
		img
			display: block
			max-width: 144px
			height: auto
			margin-left: auto
			margin-right: auto
	&__row
		display: flex
		align-items: center
		justify-content: space-between
		padding: 20px
		border-bottom: 1px solid #4C4C4D
		border-left: 1px solid #4C4C4D
		border-right: 1px solid #4C4C4D
		> .banks__th:nth-child(2)
			font-weight: bold
			color: $accent
			font-size: 24px
			background-image: url(../assets/images/arrow__right.svg)
			background-size: 17px
			background-repeat: no-repeat
			background-position: right center
		> .banks__th:nth-child(1)
			background-image: url(../assets/images/arrow__right.svg)
			background-size: 17px
			background-repeat: no-repeat
			background-position: right center

		&:last-child
			border-radius: 0px 0px 10px 10px

@media (max-width: 768px)
	.banks
		&__thead
			padding: 15px
			font-size: 14px
			line-height: 1.2
		&__th
			img
				max-width: 80px
			.btn
				font-size: 12px
				padding: 10px
		&__row
			padding: 10px
			> .banks__th:nth-child(2)
				font-size: 14px
				background-size: 14px
			> .banks__th:nth-child(1)
				background-size: 14px
</style>
