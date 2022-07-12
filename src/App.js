import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import './theme/variables.css';

/* Pages */
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';
import OrderPending from './pages/order-pending/OrderPending';
import Withdraw from './pages/withdraw/Withdraw';
import Invite from './pages/invite/Invite';
import Rules from './pages/rules/Rule';
import CompanyProfile from './pages/company-profile/CompanyProfile';
import AgencyCooperation from './pages/agency-cooperation/AgencyCooperation';
import BonusApplication from './pages/bonus-application/BonusApplication';
import CompanyQualification from './pages/company-qualification/CompanyQualification';
import Laundering from './pages/laundering/Laundering';
import Testmodal from './pages/Testmodal';
import OrderCompleted from './pages/order-completed/OrderCompleted';
import OrderFreezed from './pages/order-freezed/OrderFreezed';
import Support from './pages/support/Support';
import Account from './pages/account/Account';
import Recharge from './pages/recharge/Recharge';
import WithdrawRecord from './pages/withdraw-record/WithdrawRecord';
import AccountDetails from './pages/account-details/AccountDetails';
import Notification from './pages/notification/Notification';
import Shipping from './pages/shipping/Shipping';
import Bank from './pages/bank/Bank';
import Password from './pages/password/Password';
import Language from './pages/language/Language';

const App = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>

				<Route exact path="/home">
					<Home />
				</Route>


				<Route exact path="/signup">
					<Signup />
				</Route>

				<Route exact path="/login">
					<Login />
				</Route>

				<Route exact path="/">
					<Redirect to="/signup" />
				</Route>

				<Route exact path="/cart">
					<Cart />
				</Route>

				<Route exact path="/account">
					<Account />
				</Route>

				<Route exact path="/language">
					<Language />
				</Route>

				<Route exact path="/recharge">
					<Recharge />
				</Route>

				<Route exact path="/order-pending">
					<OrderPending />
				</Route>

				<Route exact path="/withdraw-record">
					<WithdrawRecord />
				</Route>

				<Route exact path="/notification">
					<Notification />
				</Route>

				<Route exact path="/shipping">
					<Shipping />
				</Route>

				<Route exact path="/bank">
					<Bank />
				</Route>

				<Route exact path="/password">
					<Password />
				</Route>

				<Route exact path="/account-detail">
					<AccountDetails />
				</Route>

				<Route exact path="/order-completed">
					<OrderCompleted />
				</Route>

				<Route exact path="/order-freezed">
					<OrderFreezed />
				</Route>

				<Route exact path="/support">
					<Support />
				</Route>

				<Route exact path="/withdraw">
					<Withdraw />
				</Route>

				<Route exact path="/invite">
					<Invite />
				</Route>

				<Route exact path="/rules">
					<Rules />
				</Route>

				<Route exact path="/laundering">
					<Laundering />
				</Route>

				<Route exact path="/company-profile">
					<CompanyProfile />
				</Route>

				<Route exact path="/agency-cooperation">
					<AgencyCooperation />
				</Route>

				<Route exact path="/bonus-application">
					<BonusApplication />
				</Route>

				<Route exact path="/company-qualification">
					<CompanyQualification />
				</Route>

				<Route exact path="/Testmodal">
					<Testmodal />
				</Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;
