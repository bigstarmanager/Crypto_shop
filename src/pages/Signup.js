import { IonBackButton, IonButton, IonButtons, IonCardTitle, IonImg, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Signup.module.scss';

import { arrowBack, earthOutline } from "ionicons/icons";
import CustomField from '../components/CustomField';
import { useSignupFields } from '../data/fields';
import { Action } from '../components/Action';
import { Wave } from '../components/Wave';
import { useEffect, useState } from 'react';
import { validateForm } from '../data/utils';
import { useParams } from 'react-router';
import { useIonRouter } from "@ionic/react";

const Signup = () => {
    const router = useIonRouter();
    const params = useParams();
    const fields = useSignupFields();
    const [errors, setErrors] = useState(false);

    const createAccount = () => {

        const errors = validateForm(fields);
        setErrors(errors);

        if (!errors.length) {
            router.push("/login");
            //  Submit your form here
        }
    }

    useEffect(() => {

        return () => {

            fields.forEach(field => field.input.state.reset(""));
            setErrors(false);
        }
    }, [params]);

    return (
        <IonPage className={styles.signupPage} id="signup-page">
            <IonHeader>
                <IonToolbar>

                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton className="custom-button">
                            <IonIcon icon={earthOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid className="ion-padding">
                    <IonRow>
                        <IonCol size="12" className={styles.headingText}>
                            <IonImg src="/assets/img/app-logo2.png" />
                            <h5 className='ion-text-center'>The poor and middle class work for money, and the rich let money work for them.</h5>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-top ion-padding-top">
                        <IonCol size="12">

                            {fields.map(field => {

                                return <CustomField field={field} errors={errors} />;
                            })}

                            <IonButton className="custom-button" expand="block" onClick={createAccount}>Create account</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <IonFooter>
                <IonGrid className="ion-no-margin ion-no-padding">
                    <Action message="Already got an account?" text="Login" link="/login" />
                    <IonRow>
                        <IonCol size='12' class='ion-text-center'>
                            <a href='https://a6yj.org/RyyJ.app' target="blank">Download APP</a>
                        </IonCol>
                    </IonRow>
                    <Wave />
                </IonGrid>
            </IonFooter>
        </IonPage>
    );
};

export default Signup;