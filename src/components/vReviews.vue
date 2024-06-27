<template>
  <div class="container">
    <div class="service-raiting">
      <div class="container-small">
        <h2>Независимые отзывы о наших салонах</h2>
      </div>
      <div class="service-raiting--list">
        <div
          class="raiting-item"
          onclick="window.open('https://yandex.ru/maps/org/gn_service_probeg/209211021686/reviews/?ll=37.514598%2C55.613077&z=16', '_blank')"
        >
          <div class="raiting-top">
            <span class="raiting-text">5.0 из 5</span>
            <div class="stars">
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
            </div>
          </div>
          <div class="raiting-logo yandex">
            <img :src="require(`@/assets/images/yandex.svg`)" alt="Яндекс" />
          </div>
        </div>

        <!-- <div
          class="raiting-item"
          onclick="window.open('https://www.google.ru/search?q=отзывы+сервис+дженсер+Ясенево&amp;newwindow=1&amp;tbm=lcl&amp;sxsrf=ALeKk01oh-2hQSpj05qli8E6eqZQ-LTZ4w%3A1620980471840&amp;ei=9zKeYIXYMsiGrwS3jLOABw&amp;oq=отзывы+сервис+дженсер+Ясенево&amp;gs_l=psy-ab.3...8002.8002.0.8804.1.1.0.0.0.0.75.75.1.1.0....0...1c.1.64.psy-ab..0.0.0....0.IhBLftj5rxE', '_blank')"
        >
          <div class="raiting-top">
            <span class="raiting-text">4.2 из 5</span>
            <div class="stars">
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span></span>
            </div>
          </div>
          <div class="raiting-logo google">
            <img :src="require(`@/assets/images/google.png`)" alt="Google" />
          </div>
        </div> -->
        <div
          class="raiting-item"
          onclick="window.open('https://zoon.ru/msk/autoservice/avtosalon_po_prodazhe_avtomobilei_s_probegom_gn_service_na_novoyasenevskom_prospekte/', '_blank')"
        >
          <div class="raiting-top">
            <span class="raiting-text">4.9 из 5</span>
            <div class="stars">
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
            </div>
          </div>
          <div class="raiting-logo zoon">
            <img :src="require(`@/assets/images/zoon.svg`)" alt="Zoon" />
          </div>
        </div>
        <div
          class="raiting-item"
          onclick="window.open('https://2gis.ru/moscow/firm/70000001064224572?m=37.515207%2C55.613351%2F1', '_blank')"
        >
          <div class="raiting-top">
            <span class="raiting-text">5.0 из 5</span>
            <div class="stars">
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
            </div>
          </div>
          <div class="raiting-logo gis">
            <img :src="require(`@/assets/images/2gis.svg`)" alt="2ГИС" />
          </div>
        </div>
      </div>
      <div class="service-reviews">
        <div class="reviews-item">
          <div class="reviews-info">
            <div class="reviews-name">12/01/2023 - Никита К.</div>
            <!-- <div class="reviews-title">Покупка авто</div> -->
            <div class="reviews-raitong">
              <div class="stars">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
              </div>
            </div>
          </div>
          <div class="reviews-text">
            Поменяли тут свою старую машину на более свежую. Оценили нашу
            хорошо, немного добавили кредита и у нас очень замечательный авто.
          </div>
        </div>
        <div class="reviews-item">
          <div class="reviews-info">
            <div class="reviews-name">27/12/2022 - Дарья. Аккерман.</div>
            <!-- <div class="reviews-title">Покупка авто</div> -->
            <div class="reviews-raitong">
              <div class="stars">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
              </div>
            </div>
          </div>
          <div class="reviews-text">
            Удобное расположение, парковка есть бесплатная. Консультанты
            приличные. чай, кофе, все дела. Не впаривают. по машине говорят как
            есть. Ставлю 5
          </div>
        </div>
        <div class="reviews-item">
          <div class="reviews-info">
            <div class="reviews-name">25/12/2022 - Екатерина Миронова</div>
            <!-- <div class="reviews-title">Покупка авто</div> -->
            <div class="reviews-raitong">
              <div class="stars">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
              </div>
            </div>
          </div>
          <div class="reviews-text">
            Долго искали машину по Москве, просто один хлам. Хороший вариант
            нашли только тут.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
.service-raiting {
  margin-top: 65px;
}
.service-raiting h2 {
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
}

.service-raiting--list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 60px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.raiting-item {
  max-width: 260px;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 27.3px 1.7px rgba(6, 0, 1, 0.22);
  box-shadow: 0 0 27.3px 1.7px rgba(6, 0, 1, 0.22);
  overflow: hidden;
  cursor: pointer;
}

.raiting-top {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ededed),
    to(white)
  );
  background: -o-linear-gradient(bottom, #ededed 0%, white 100%);
  background: linear-gradient(0deg, #ededed 0%, white 100%);
  padding: 25px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.raiting-text {
  font-weight: bold;
  font-size: 18px;
  line-height: 1.2;
  padding-right: 8px;
}

.stars {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.stars span {
  width: 20px;
  height: 20px;
  background-image: url('../assets/images/star.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0px 1px;
}
.stars span.active {
  background-image: url('../assets/images/star-active.svg');
}

.raiting-logo {
  height: 71px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 8px;
}
.raiting-logo img {
  display: block;
  max-height: 100%;
  width: auto;
}
.raiting-logo.yandex img {
  height: 55px;
}
.raiting-logo.google img {
  height: 44px;
}
.raiting-logo.zoon img {
  height: 36px;
}
.raiting-logo.gis img {
  height: 49px;
}

.service-reviews {
  margin-top: 60px;
}

.reviews-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 40px;
}
.reviews-item .stars {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.reviews-info {
  max-width: 300px;
  width: 100%;
  text-align: right;
  margin-right: 30px;
}

.reviews-text {
  font-size: 15px;
  line-height: 1.2;
  padding: 20px 60px 20px 30px;
  background-color: #f4f4f4;
  width: 100%;
  border-radius: 0px 10px 10px 10px;
}

.reviews-name {
  font-size: 15px;
}

.reviews-title {
  font-weight: bold;
  font-size: 22px;
  margin: 10px 0;
}

/* Large Devices, Wide Screens */
@media only screen and (max-width: 1400px) {
  /**/
}

/* Medium Devices, Desktops */
@media only screen and (max-width: 1200px) {
  /**/
  .service-raiting--list {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .raiting-item {
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 760px) {
  .service-raiting {
    margin-top: 30px;
  }
  .service-raiting h2 {
    font-size: 18px;
    text-align: center;
  }
  .raiting-item {
    max-width: 140px;
    margin-bottom: 5px;
  }
  .raiting-text {
    font-size: 12px;
  }
  .stars span {
    width: 10px;
    height: 10px;
    margin: 0px 1px;
  }
  .raiting-top {
    padding: 10px;
  }
  .raiting-logo {
    height: 33px;
    padding: 7px;
  }
  .reviews-item {
    display: block;
    border-radius: 0px 10px 10px 10px;
    background-color: #f4f4f4;
    padding: 10px;
    margin-bottom: 15px;
  }
  .reviews-info {
    text-align: left;
  }
  .reviews-name {
    font-size: 12px;
  }
  .reviews-title {
    font-size: 14px;
    margin: 5px 0;
  }
  .reviews-item .stars {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .reviews-raitong {
    margin-bottom: 8px;
  }
  .reviews-text {
    font-size: 12px;
    padding: 0;
  }
}
</style>
