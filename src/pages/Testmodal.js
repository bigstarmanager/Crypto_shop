/* Using with IonModal Component */

import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';

export const Testmodal: React.FC = () => {
	const [showSheetModal, setshowSheetModal] = useState(true);

	return (
		<IonContent>
			<IonModal isOpen={showSheetModal} cssClass="my-custom-class">
				<p>This is modal content</p>
				<IonButton onClick={() => setshowSheetModal(false)}>Close Modal</IonButton>
			</IonModal>
			<IonButton onClick={() => setshowSheetModal(true)}>Show Modal</IonButton>
		</IonContent>
	);
};

export default Testmodal;
