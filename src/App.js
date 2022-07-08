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
import Withdraw from './pages/withdraw/Withdraw';
import Invite from './pages/invite/Invite';
import Rules from './pages/rules/Rule';
import CompanyProfile from './pages/company-profile/CompanyProfile';
import AgencyCooperation from './pages/agency-cooperation/AgencyCooperation';
import BonusApplication from './pages/bonus-application/BonusApplication';
import CompanyQualification from './pages/company-qualification/CompanyQualification';
import Laundering from './pages/laundering/Laundering';
import Testmodal from './pages/Testmodal';

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
