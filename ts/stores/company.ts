import { defineStore } from 'pinia'

export const useCompanyStore = defineStore('companyStore', {
  state: () => ({
    ogrn: '',
    inn: '',
    mainOkved: {
      code: '',
      name: '',
    },
    okvedContactPerson: '',
    okpo: '',
    active: 0,
  }),

  actions: {
    async fetchUserData(ogrn: string) {
      const url = `/api/getCompanyData?ogrn=${ogrn}`

      try {
        const data = await $fetch(url);
        this.ogrn = data.ogrn;
        this.inn = data.inn;
        this.mainOkved.code = data.main_okved_code;
        this.mainOkved.name = data.main_okved_name;
        this.okvedContactPerson = data.okved_contact_person;
        this.okpo = data.okved_contact_person;
        this.active = data.active;

      } catch (error) {
        console.error('Ошибка при получении данных: ', error)
      }
    },
  },
})
