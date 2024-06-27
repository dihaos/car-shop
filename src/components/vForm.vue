<template>
  <form
    method="POST"
    action="#"
    v-on:submit.prevent="sendForm($event), $emit('sended')"
  >
    <div class="form-elements">
      <div class="input-block">
        <input
          type="tel"
          name="phone"
          v-mask="'+7 (###) ###-##-##'"
          placeholder="+7 (___) ___-__-__"
          @focus="focusPhone"
          @click="clickPhone"
          class="input"
        />
        <div class="circle-loader">
          <div class="checkmark draw"></div>
        </div>
      </div>
      <div class="submit">
        <button
          type="submit"
          v-bind:class="[phoneSended == 'sending' ? 'sending' : '', 'btn']"
        >
          <span class="text">{{ button ? button : 'ЗАКАЗАТЬ ЗВОНОК' }}</span>
          <span class="progress"></span>
        </button>
      </div>
    </div>
    <div class="checkbox_wrapper">
      <input type="checkbox" id="check1" name="checkbox" checked required />
      <label for="check1"
        >Я согласен с
        <a href="https://www.genser.ru/politika/" target="_blank"
          >условиями обработки персональных данных</a
        ></label
      >
    </div>
  </form>
</template>

<script>
import { mask } from 'vue-the-mask';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import Axios from 'axios';
export default {
  directives: { mask },
  props: ['id', 'button'],
  setup(props) {
    const route = useRoute();
    const inputtedPhone = ref('');
    const phoneSended = ref('not');

    const sendForm = (e) => {
      const checking = e.target.querySelector('.circle-loader');
      const phoneInput = e.target.querySelector('input[name="phone"]');
      if (phoneInput.value.length === 18) {
        checking.classList.remove('checking');
        phoneSended.value = 'sending';
        Axios.post(
          window.location.origin + '/send.php?phone=' + phoneInput.value
        )
          .then((response) => {
						console.log(response)
            document.activeElement.blur();

            let phone_ct = phoneInput.value,
              cb_phone = '';
            if (phone_ct) {
              phone_ct = phone_ct.replace(/[^0-9]/gim, '');
              cb_phone =
                phone_ct.length == 10
                  ? '7' + phone_ct
                  : phone_ct.length == 11
                  ? '7' + phone_ct.substring(1)
                  : false;
              const ct_fields = [];
              if (props.id) {
                ct_fields.push({ name: 'ID', value: props.id });
              } else if (route.params.id) {
                ct_fields.push({ name: 'ID', value: route.params.id });
              }
              window.ctw.createRequest(
                'default',
                cb_phone,
                ct_fields,
                function (success, data) {
                  console.log(success, data);
                  if (success) {
                    console.log(
                      'Создана заявка на колбек, идентификатор: ' +
                        data.callbackRequestId
                    );
                  } else {
                    switch (data.type) {
                      case 'request_throttle_timeout':
                      case 'request_throttle_count':
                        console.log(
                          'Достигнут лимит создания заявок, попробуйте позже'
                        );
                        break;
                      case 'request_phone_blacklisted':
                        console.log('номер телефона находится в черном списке');
                        break;
                      case 'validation_error':
                        console.log('были переданы некорректные данные');
                        break;
                      default:
                        console.log(
                          'Во время выполнения запроса произошла ошибка: ' +
                            data.type
                        );
                    }
                  }
                }
              );
            }
            phoneInput.value = '';
            phoneSended.value = 'sended';
            window.ym(
              window.location.pathname.indexOf('all') === -1
                ? 90956756
                : 91455889,
              'reachGoal',
              'send_all_form'
            );
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      }
    };
    window.addEventListener('load', () => {
      const forms = document.querySelectorAll('form');
      if (forms.length) {
        forms.forEach((item) => {
          const circleLoader = item.querySelector('.circle-loader');
          const checkmark = item.querySelector('.checkmark');

          const phoneInput = item.querySelector('input[name="phone"]');

          phoneInput.addEventListener('input', () => {
            inputtedPhone.value = phoneInput.value;
            circleLoader.classList.add('checking');
            if (inputtedPhone.value.length !== 18) {
              circleLoader.classList.remove('load-complete');
              checkmark.classList.remove('checked');
              circleLoader.classList.remove('wrong');
              phoneInput.classList.add('redput');
            } else {
              circleLoader.classList.add('load-complete');
              checkmark.classList.add('checked');
              circleLoader.classList.remove('wrong');
              phoneInput.classList.remove('redput');
            }
            phoneInput.addEventListener('focusout', () => {
              circleLoader.classList.remove('checking');
            });
          });
        });
      }
    });
    const focusPhone = (e) => {
      if (!e.target.value.length) {
        e.target.value = '+7';
      }
    };
    const clickPhone = (e) => {
      if (e.target.setSelectionRange) {
        e.target.setSelectionRange(
          e.target.value.length,
          e.target.value.length
        );
      }
    };

    return {
      focusPhone,
      clickPhone,
      sendForm,
      phoneSended,
    };
  },
};
</script>

<style lang="sass"></style>
