
void setup() {
  //Starte eine Serielle Verbindung mit 115200 Baud.
  Serial.begin(115200);
  //Warte bis die Verbindung aufgebaut ist. Damit ist sichergestellt, dass wir danach die Serielle Kommunikation nutzen können.
  while (!Serial) {
    ;
  }
  //Schreibe Text auf den seriellen Monitor.
  Serial.println("Welcome!");
  Serial.println("Options: ");
  Serial.println("o -- get options");
}

// Wird immer dann aufgerufen wenn der Arduino Uno ein neues Zeichen empfangen hat.
void serialEvent(){
  // Unterscheidet die verschiedenen Zeichen und erledigt danach Aktionen.
  switch (Serial.read()) {
    case 'o':
      Serial.println("Options: ");
      Serial.println("o -- get options");
      break;
    default: 
      //Weise den Nutzer daraufhin, dass seine letzte eingabe Ungültig war.
      Serial.println("Error: unknwon command");
      Serial.println("Type in 'o' to get all valid options.");
    break;
  }
}
void loop() {
  }
