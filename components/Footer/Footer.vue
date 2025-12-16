<template>
  <footer class="footer">
    <v-container>
      <v-row>
        <v-col
          class="pa-4 px-lg-10"
          md="3"
          cols="12"
        >
          <logo type="portrait" />
          <p
            v-if="isDesktop"
            class="body-2 text-center"
          >
            &copy;&nbsp;
            {{ brand.starter.footerText }}
          </p>
        </v-col>
        <v-col
          class="pa-4"
          md="6"
          cols="12"
        >
          <v-expansion-panels v-if="isMobile">
            <v-expansion-panel
              v-for="(footer, index) in footers"
              :key="index"
              class="accordion-content"
            >
              <v-expansion-panel-title>
                <h6 class="text-h5 mb-4 text-capitalize">
                  {{ $t('common.footer_'+footer.title) }}
                </h6>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <ul>
                  <li
                    v-for="(item, indexDesc) in footer.description"
                    :key="indexDesc"
                  >
                    <router-link :to="footer.link[indexDesc]">
                      {{ item }}
                    </router-link>
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row
            v-if="isDesktop"
            justify="space-around"
          >
            <v-col
              v-for="(footer, index) in footers"
              :key="index"
              class="pa-4 site-map-item"
            >
              <h6 class="text-h6 mb-4">
                {{ $t('common.footer_'+footer.title) }}
              </h6>
              <ul>
                <li
                  v-for="(item, indexDesc) in footer.description"
                  :key="indexDesc"
                >
                  <router-link :to="footer.link[indexDesc]">
                    {{ item }}
                  </router-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          md="3"
          cols="12"
          class="pa-4"
        >
          <div class="socmed">
            <v-btn
              text
              icon="mdi-facebook"
              class="button"
              size="x-small"
              variant="outlined"
              color="indigo"
            />
            <v-btn
              text
              icon="mdi-twitter"
              class="button"
              size="x-small"
              variant="outlined"
              color="blue"
            />
            <v-btn
              text
              icon="mdi-instagram"
              class="button"
              size="x-small"
              variant="outlined"
              color="purple"
            />
            <v-btn
              text
              icon="mdi-linkedin"
              class="button"
              size="x-small"
              variant="outlined"
              color="blue"
            />
          </div>
          <v-select
            v-model="lang"
            :items="langList"
            :value="curLang"
            label=""
            outlined
            class="select-lang"
            @update:model-value="switchLang(lang)"
          />
          <p
            v-if="isMobile"
            class="body-2 text-center"
          >
            &copy;&nbsp;
            {{ brand.starter.footerText }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@use'./footer';
</style>

<script>
import { useSwitchLocalePath } from '#i18n';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { setRtl } from '@/composables/uiTheme';
import brand from '@/assets/text/brand';
import { navigateTo } from '#app';
import Logo from '../Logo';

export default {
  components: {
    Logo,
  },
  setup() {
  
    const i18n = useI18n();
    const curLang = i18n.locale.value;
    const lang = ref(curLang);
    const switchLocalePath = useSwitchLocalePath();

    function switchLang(locale){
      navigateTo(switchLocalePath(locale));
      
      // Set RTL and Document attr
      document.documentElement.setAttribute('lang', locale);

      if (locale === 'ar') {
        setRtl(true);
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        setRtl(false);
        document.documentElement.setAttribute('dir', 'ltr');
      }
    }

    return {
      curLang,
      lang,
      switchLang,
    };
  },
  data() {
    return {
      brand,
      footers: [
        {
          title: 'company',
          description: ['Team', 'History', 'Contact us', 'Locations'],
          link: ['#', '#', '#', '#'],
        },
        {
          title: 'resources',
          description: [
            'Resource',
            'Resource name',
            'Another resource',
            'Final resource',
          ],
          link: ['#', '#', '#', '#'],
        },
        {
          title: 'legal',
          description: ['Privacy policy', 'Terms of use'],
          link: ['#', '#'],
        },
      ],
    };
  },
  computed: {
    langList() {
      const list = [];
      const i18n = this.$i18n.availableLocales;

      i18n.map((locale) => {
        list.push({ title: this.$t('common.' + locale), value: locale });
        return false;
      });
      return list;
    },
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
};
</script>
