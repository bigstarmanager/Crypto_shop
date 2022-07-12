import { IonBackButton, IonSelect, IonSelectOption, IonButton, IonButtons, IonCheckbox, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Bank.module.scss';

import { arrowBack, chatbubbleEllipses } from "ionicons/icons";
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from "ionicons/icons";


const Bank = () => {

    return (
        <IonPage className={styles.bankPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol>
                            <IonButtons>
                                <IonBackButton icon={arrowBack} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h5 className='ion-text-center ion-no-margin'>BIND BANK CARD</h5>
                        </IonCol>
                        <IonCol>
                            <IonButtons className='ion-justify-content-end'>
                                <IonRouterLink className='ion-text-right' href="https://direct.lc.chat/14101083/">
                                    <IonIcon icon={chatbubbleEllipses} />
                                </IonRouterLink>
                            </IonButtons>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.bankContainer}>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.bankContent}`}>
                        <div className={styles.bankItems}>
                            <p>
                                Your identity information
                            </p>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input Real name</IonLabel>
                                <IonInput color="primary" type='text' value="Bill Star"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input Phone number</IonLabel>
                                <IonInput color="primary" type='text' value="***2341523"></IonInput>
                            </IonItem>
                        </div>
                        <div className={styles.bankItems}>
                            <p>
                                Your bank card information
                            </p>
                            <IonLabel className={styles.selectLabel}>Please select option</IonLabel>
                            <IonItem>
                                <IonSelect value="1">
                                    <IonSelectOption value="1">USDT TRC20</IonSelectOption>
                                    <IonSelectOption value="2">MayBank</IonSelectOption>
                                    <IonSelectOption value="3">UOB</IonSelectOption>
                                    <IonSelectOption value="4">PublickBank</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input Bank Account Number</IonLabel>
                                <IonInput color="primary" type='text' value="人民路236号"></IonInput>
                            </IonItem>
                        </div>
                        <div className={styles.bankItems}>
                            <p>
                                More information
                            </p>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input Email</IonLabel>
                                <IonInput color="primary" type='text' value="****@gmail.com"></IonInput>
                            </IonItem>
                        </div>
                        <IonButton expand='block' className='ion-margin-top'>
                            Modify Information
                        </IonButton>
                        <p>
                            Dear user, in order to protect your funds, please do not enter your bank card password. Our staff will not ask you to enter your bank card password.
                        </p>
                    </IonCard>
                </div>
            </IonContent>

            <IonFooter className='ion-padding-top ion-padding-bottom'>
                <IonGrid className='ion-no-padding' >
                    <IonRow className='ion-justify-content-around'>
                        <IonRouterLink routerLink="/home">
                            <IonIcon icon={home} />
                        </IonRouterLink>
                        <IonRouterLink routerLink="/order-pending">
                            <IonIcon icon={checkbox} />
                        </IonRouterLink>
                        <IonRouterLink routerLink="/cart">
                            <IonIcon icon={rocket} />
                        </IonRouterLink>
                        <IonRouterLink routerLink="/support">
                            <IonIcon icon={mail} />
                        </IonRouterLink>
                        <IonRouterLink routerLink="/account">
                            <IonIcon icon={personCircle} />
                        </IonRouterLink>
                    </IonRow>
                </IonGrid>
            </IonFooter>
        </IonPage>
    );
};

export default Bank;