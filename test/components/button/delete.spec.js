// Libraries
import Vuetify from 'vuetify'
import Vuex from 'vuex'

// Components
import deleteBtn from '@/components/button/delete'

// Utilities
import { mount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(new Vuetify())

describe('components/button/delete', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(deleteBtn, {
      localVue,
      mocks: {
        $t: (msg) => msg,
      },
      propsData: {
        path: 'todos',
        id: 1,
      },
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
