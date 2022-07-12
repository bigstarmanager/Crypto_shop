import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	//   setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from 'ionicons/icons';
import Home from '../pages/home/Home';
import OrderPending from '../pages/order-pending/OrderPending';
import Cart from '../pages/cart/Cart';
import Support from '../pages/support/Support';
import Account from '../pages/account/Account';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';

// setupIonicReact();

const Testmodal: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/order-pending">
						<OrderPending />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route exact path="/support">
						<Support />
					</Route>
					<Route exact path="/account">
						<Account />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="home" href="/home">
						<IonIcon icon={home} />
					</IonTabButton>
					<IonTabButton tab="order-pending" href="/order-pending">
						<IonIcon icon={checkbox} />
					</IonTabButton>
					<IonTabButton tab="cart" href="/cart">
						<IonIcon icon={rocket} />
					</IonTabButton>
					<IonTabButton tab="support" href="/support">
						<IonIcon icon={mail} />
					</IonTabButton>
					<IonTabButton tab="account" href="/account">
						<IonIcon icon={personCircle} />
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default Testmodal;