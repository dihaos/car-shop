<template>
  <footer id="footer">
    <div class="container">
      <div class="footer-flex">
        <div class="footer-content">
          <div class="copyright">© ООО «Техно Авто»</div>
          <p>
            Обращаем Ваше внимание на то, что вся представленная на сайте
            информация, носит информационный характер и ни при каких условиях не
            является публичной офертой, определяемой положениями Статьи 437 (2)
            Гражданского кодекса Российской Федерации. Для получения подробной
            информации, пожалуйста, обращайтесь в наш салон по телефону: +7
            (495) 780-93-93
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const year = new Date().getFullYear();
    return {
      year,
    };
  },
};
</script>

<style lang="sass">
footer
	background-color: #000
	padding: 16px 0
.footer-flex
	display: flex
	justify-content: space-between
	width: 100%
.copyright
	color: #ffffff
	font-size: 12px
	font-weight: 300
	letter-spacing: -0.18px
.footer-content
	text-align: center
	// max-width: 745px
	width: 100%
	img
		margin-left: auto
		margin-right: auto
	p
		color: #ffffff
		font-size: 10px
		font-weight: 300
		letter-spacing: -0.15px
		margin-top: 20px
		a
			color: #fff
.tandem
	width: 100px
	span
		color: #ffffff
		font-size: 12px
		font-weight: 400
		line-height: 1.2em
		letter-spacing: -0.18px
	b
		letter-spacing: -0.18px
		text-transform: uppercase
		font-size: 12px
		line-height: 1.2em
		color: #fff
		display: block
@include sm-tablets
	.footer-flex
		flex-wrap: wrap
		justify-content: center
		text-align: center
	.footer-content
		margin-top: 15px
</style>
