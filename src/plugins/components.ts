import Vue from 'vue'
import { Notify } from '../components/Notify'
import VueCookies from 'vue-cookies'
import { HeaderMobile } from '../layout/HeaderMobile'
import { DrawerMobile } from '../layout/DrawerMobile'
import { Footer } from '../layout/Footer'
import { DialogConfirm } from '../components/DialogConfirm'
import { LoadingComponent } from '../components/Loading'
import { DialogComponent } from '../components/DialogComponent'
import { ButtonMenuComponent } from '../components/ButtonMenuComponent'

Vue.use(VueCookies)
Vue.component('HeaderMobile', HeaderMobile)
Vue.component('DrawerMobile', DrawerMobile)
Vue.component('FooterLayout', Footer)

Vue.component('NotifyComponent', Notify)
Vue.component('DialogConfirm', DialogConfirm)
Vue.component('LoadingComponent', LoadingComponent)

Vue.component('DialogComponent', DialogComponent)

Vue.component('ButtonMenu', ButtonMenuComponent)
