import { IonApp, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

import BiorhythmCard from './components/BiorhythmCard';

function App() {

  const getToday = () => {
    return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length);
  }

  const [birthDate, setBirthDate] = useState('');
  const [targetDate, setTargetDate] = useState(getToday);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        {Boolean(birthDate) && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate}/>
        )}

        <IonList>
          <IonItem>

            <IonLabel position='stacked'>
              Birth date:
            </IonLabel>
            <IonInput type="date"
              value={birthDate}
              onIonChange={(event) => setBirthDate(event.detail.value)}
            />
          </IonItem>

          <IonItem>

            <IonLabel position='stacked'>
              Target Date:
            </IonLabel>
            <IonInput type="date"
              value={targetDate}
              onIonChange={(event) => setTargetDate(event.detail.value)}
            />
          </IonItem>
        </IonList>

        
        

      </IonContent>
    </IonApp>
  );
}

export default App;
