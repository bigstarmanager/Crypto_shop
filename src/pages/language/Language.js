import { IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Language.module.scss';

import { arrowForwardOutline, earthOutline, arrowBack } from "ionicons/icons";


const Language = () => {

    return (
        <IonPage className={styles.languagePage}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>

                    <IonButtons slot="end">

                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.languageContainer}>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.languageContent}`}>
                        <p className='ion-text-center'>Select Language</p>
                        <IonRouterLink routerLink="/app/home">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.languageLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.languageLinkTabTitle}`}>
                                    <IonIcon icon={earthOutline} />
                                    <span>
                                        English
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.languageLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/app/home">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.languageLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.languageLinkTabTitle}`}>
                                    <IonIcon icon={earthOutline} />
                                    <span>
                                        简体中文
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.languageLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/app/home">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.languageLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.languageLinkTabTitle}`}>
                                    <IonIcon icon={earthOutline} />
                                    <span>
                                        日本語
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.languageLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/app/home">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.languageLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.languageLinkTabTitle}`}>
                                    <IonIcon icon={earthOutline} />
                                    <span>
                                        ภาษาไทย
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.languageLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/app/home">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.languageLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.languageLinkTabTitle}`}>
                                    <IonIcon icon={earthOutline} />
                                    <span>
                                        Việt Nam
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.languageLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Language;