import { createStore } from "vuex";
import Axios from "axios";

export default createStore({
  state: {
    marks: [
      "Mercedes-Benz",
      "Audi",
      "SsangYong",
      "KIA",
      "Nissan",
      "Skoda",
      "Volvo",
      "Ford",
      "Hyundai",
      "Mitsubishi",
      "Volkswagen",
      "Mazda",
      "Toyota",
      "Lexus",
      "Chevrolet",
      "Fiat",
      "Honda",
      "Jeep",
      "Land Rover",
      "Jaguar",
    ],
    cars: [],
    filteredCars: [],
    filters: {
      mark: "",
      model: "",
      compl: "",
      kpp: "",
      priceFrom: 0,
      priceTo: 9999999,
      carsView: 6,
      priceFromLimit: 100000,
      priceToLimit: 9999999,
      sorted: "",
    },
    loaded: false,
    phone: "+74957809393", //Телефон во всех ссылках
    time_work_from: 9, // Начало работы колл-центра (в часах)
    time_work_to: 21, // Конец работы колл-центра (в часах)
    icons: [
      [
        [59.993622, 30.244632],
        "г. Санкт-Петербург, Стародеревенская ул., 11к2",
      ],
    ],
    mapZoom: 9,
    months: [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
  },
  mutations: {
    SET_CARS_TO_STATE: (state, cars) => {
      state.cars = cars;
    },
    SET_FILTERS: (
      state,
      {
        compl = "",
        priceFrom = 0,
        priceTo = 9999999,
        mark = "",
        model = "",
        kpp = "",
        carsView = 6,
        priceFromLimit,
        priceToLimit,
        sorted = "",
      }
    ) => {
      state.filters.compl = compl;
      state.filters.mark = mark;
      state.filters.model = model;
      state.filters.kpp = kpp;
      state.filters.priceFrom = priceFrom;
      state.filters.priceTo = priceTo;
      state.filters.carsView = carsView;
      state.filters.sorted = sorted;
      if (priceFromLimit) state.filters.priceFromLimit = priceFromLimit;
      if (priceToLimit) state.filters.priceToLimit = priceToLimit;
    },
    SET_LOADED: (state) => {
      state.loaded = true;
    },
    SET_FILTERED_CARS: (state) => {
      let cars = state.cars;
      if (state.filters.mark)
        cars = cars.filter((car) => car.mark_id === state.filters.mark);
      if (state.filters.model)
        cars = cars.filter((car) => car.model === state.filters.model);
      if (state.filters.kpp)
        cars = cars.filter((car) => car.kpp === state.filters.kpp);
      if (state.filters.compl)
        cars = cars.filter(
          (car) => car.modification_id === state.filters.compl
        );
      cars = cars.filter(
        (car) =>
          +state.filters.priceFrom <= +car.price &&
          +car.price <= +state.filters.priceTo
      );
      if (state.filters.sorted === "asc") {
        cars = cars.sort((a, b) => (+a.price < +b.price ? -1 : 1));
      }
      if (state.filters.sorted === "desc") {
        cars = cars.sort((a, b) => (+a.price > +b.price ? -1 : 1));
      }

      state.filteredCars = cars;
    },
  },
  actions: {
    GET_CARS_FROM_STOCK({ commit, dispatch }) {
      return Axios(window.location.origin + "/backend/data.json", {
        method: "GET",
        headers: { "Access-Control-Allow-Origin": "*" },
      })
        .then((res) => {
          commit("SET_CARS_TO_STATE", res.data);
          const priceFromLimit =
            Math.floor(+res.data[0].price / 100000) * 100000;
          const priceToLimit =
            Math.round(+res.data[res.data.length - 1].price / 100000) * 100000;
          dispatch("GET_FILTERS", {
            mark: "",
            model: "",
            compl: "",
            kpp: "",
            priceFromLimit,
            priceToLimit,
            carsView: 6,
            sorted: "",
          });
          dispatch("GET_LOADED");
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_FILTERS(
      { commit, dispatch },
      {
        mark,
        model,
        compl,
        kpp,
        carsView,
        priceFrom,
        priceTo,
        priceFromLimit,
        priceToLimit,
        sorted,
      }
    ) {
      commit("SET_FILTERS", {
        mark,
        model,
        compl,
        kpp,
        carsView,
        priceFrom,
        priceFromLimit,
        priceToLimit,
        priceTo,
        sorted,
      });
      dispatch("GET_FILTERED_CARS");
    },
    GET_FILTERED_CARS({ commit }) {
      commit("SET_FILTERED_CARS");
    },
    GET_LOADED({ commit }) {
      commit("SET_LOADED");
    },
  },
  getters: {
    CARS: (s) => s.cars,
    // CARS_COMPLS: (s) => s.car_compls,
    CAR: (s) => (id) => s.cars.find((car) => car.id === id),
    MODELS: (s) => {
      let cars = s.cars;
      if (s.filters.mark)
        cars = s.cars.filter((car) => car.mark_id === s.filters.mark);
      return [...new Set(Array.from(cars, ({ model }) => model))];
      // const uniques = {};
      // return cars.reduce((result, car) => {
      //   if (uniques[car.model]) return result;
      //   uniques[car.model] = car;
      //   return [...result, car];
      // }, []);
    },
    MARKS: (s) => {
      return [...new Set(Array.from(s.cars, ({ mark_id }) => mark_id))];
    },
    VYKUP_MARKS: (s) => {
      return s.marks;
    },
    PHONE: (s) => s.phone,
    TIME_WORK_FROM: (s) => s.time_work_from,
    TIME_WORK_TO: (s) => s.time_work_to,
    INTERESTED_CARS:
      (s) =>
      ({ price, id }) =>
        s.cars.filter(
          (car) =>
            +car.price >= +price &&
            +car.price <= +price + 200000 &&
            car.id !== id
        ),

    COMPLS: (s) => {
      let marks = s.cars;
      if (s.filters.mark)
        marks = s.cars.filter(
          (car) => car.mark_id === s.filters.mark && car.modification_id
        );
      if (s.filters.model)
        marks = s.cars.filter(
          (car) => car.model === s.filters.model && car.model
        );

      const uniques = {};
      return marks.reduce((result, car) => {
        if (uniques[car.modification_id]) return result;
        uniques[car.modification_id] = car;
        return [...result, car.modification_id];
      }, []);
    },
    FILTERED_CARS: (s) => s.filteredCars,
    FILTERS: (s) => s.filters,
    LOADED: (s) => s.loaded,
  },
});
