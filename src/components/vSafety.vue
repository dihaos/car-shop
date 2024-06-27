<template>
  <section id="safety">
    <div class="container">
      <div class="safety-wrapper">
        <figure>
          <img
            :src="require(`@/assets/images/car.png`)"
            alt="ГАРАНТИРУЕМ БЕЗОПАСНУЮ СДЕЛКУ"
            class="img-responsive"
          />
        </figure>
        <div class="safety-wrapper-info">
          <p class="title accent">САМЫЙ БЫСТРЫЙ ПОДБОР АВТО С ПРОБЕГОМ</p>
          <p class="main-title">
            ЗА <span class="accent"> 3 МИНУТЫ ПО ТЕЛЕФОНУ</span> АВТОМОБИЛЬ ИЗ
            НАЛИЧИЯ
          </p>
          <!-- <p class="sub-title">
            Отправьте заявку или позвоните <v-phone></v-phone> и мы предложим
            максимальную цену.
          </p> -->
          <!-- <div class="safety__form">
            <div class="safety__form-title">
              Подобрать авто из категории B <br /><span class="green"
                >в "Хорошем состоянии"</span
              >
            </div>
            <v-form @sended="sended" button="ПОДОБРАТЬ СЕЙЧАС"></v-form>
          </div> -->

          <div class="safety__form">
            <div class="safety__form-title">
              СЕЙЧАС СВОБОДНО <b class="accent blink">2</b> ЛИНИИ <br /><small>
                ВВЕДИТЕ ВАШ НОМЕР</small
              >
            </div>
            <v-form @sended="sended" button="ПОДОБРАТЬ СЕЙЧАС"></v-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
// import vPhone from '@/components/vPhone';
import vForm from '@/components/vForm';
export default {
  components: { vForm },
  setup() {
    const isSended = ref(false);
    const show = ref(false);
    const sended = () => {
      isSended.value = true;
      show.value = true;
      setTimeout(() => {
        show.value = false;
        isSended.value = false;
      }, 2000);
    };
    return {
      show,
      isSended,
      sended,
    };
  },
};
</script>

<style lang="css">
#safety {
  padding: 50px 0;
  position: relative;
  z-index: 1;
  margin-top: 70px;
}
#safety:after {
  content: '';
  position: absolute;
  left: auto;
  width: 100%;
  top: 110px;
  height: 320px;
  background-color: #f9f9f9;
  z-index: -1;
}
.safety-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.safety-wrapper figure {
  width: 254px;
}
.safety-wrapper-info {
  width: calc(100% - 254px);
  padding-left: 25px;
  padding-top: 25px;
  text-align: center;
}
.safety-wrapper-info p.title {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
}
.safety-wrapper-info p.main-title {
  font-size: 46px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  padding: 20px 0;
  text-align: center;
}
.safety__form {
  border: 4px solid #000;
  display: inline-block;
  padding: 20px;
  /* margin-right: 10px; */
  margin-bottom: 10px;
}
.safety__form-title {
  text-transform: uppercase;
  font-size: 20px;
  line-height: 1.2;
  max-width: 400px;
  width: 100%;
  text-align: center;
}
.safety__form-title b {
  font-size: 24px;
}
.safety-wrapper-info .sub-title {
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.45px;
  font-weight: 300;
  text-align: center;
}
.safety-wrapper-info .sub-title span a {
  color: #1f1f1f;
  font-weight: 700;
}
.safety-wrapper-info form {
  margin-top: 10px;
}
.safety-wrapper-info form .form-elements {
  /* display: flex; */
  max-width: 400px;
  width: 100%;
}
.safety-wrapper-info form .form-elements .btn {
  width: 100%;
}
.safety-wrapper-info form .form-elements .input-block {
  margin-right: 15px;
  height: 44px;
  margin-bottom: 15px;
  max-width: 100%;
}
.safety-wrapper-info form .form-elements .input-block input {
  border-radius: 0;
  width: 100%;
  border: 1px solid #000;
}
.safety-wrapper-info form .checkbox_wrapper {
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-size: 12px;
}
.safety-wrapper-info form .checkbox_wrapper input {
  margin-right: 10px;
}
@media only screen and (max-width: 1200px) {
  .safety-wrapper-info p.main-title {
    font-size: 36px;
    line-height: 1.2;
  }
}
@media only screen and (max-width: 996px) {
  .safety-wrapper-info p.title {
    font-size: 18px;
    line-height: 1.2;
  }
  .safety-wrapper-info p.main-title {
    font-size: 30px;
  }
}
@media only screen and (max-width: 760px) {
  #safety {
    margin-top: 0;
  }
  .safety-wrapper figure {
    width: 141px;
    margin-left: -70px;
  }
  .safety-wrapper-info {
    padding-left: 0;
    width: calc(100% - 70px);
  }
  .safety-wrapper-info p.title {
    font-size: 16px;
  }
  .safety-wrapper-info p.main-title {
    font-size: 24px;
    padding: 15px 0;
  }
  .safety-wrapper-info .sub-title {
    font-size: 14px;
  }
  #safety:after {
    top: 108px;
    height: 292px;
  }
  .safety-wrapper-info form .form-elements {
    display: block;
  }
  .safety-wrapper-info form .form-elements .input-block {
    margin-bottom: 15px;
  }
  .safety-wrapper-info form .form-elements .btn {
    width: 100%;
  }
  .safety__form-title {
    font-size: 16px;
  }
  .safety-wrapper figure {
    display: none;
  }
  .safety-wrapper-info {
    width: 100%;
  }
}
</style>
