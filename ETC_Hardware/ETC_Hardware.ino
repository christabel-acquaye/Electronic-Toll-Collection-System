#include <SPI.h>
#include <MFRC522.h>
 #include <Servo.h>

Servo servo;
#define SS_PIN 15
#define RST_PIN 5
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.
int failPin = 4;
int successPin = 16;
void setup() 
{
  servo.attach(2); //D4

servo.write(0);
  pinMode(failPin, OUTPUT);
   pinMode(successPin, OUTPUT);
  Serial.begin(9600);   // Initiate a serial communication
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
  Serial.println("Approximate your card to the reader...");
  Serial.println();

}
void loop() 
{
  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
  //Show UID on serial monitor
  Serial.print("UID tag :");
  String content= "";
  byte letter;
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
     Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  Serial.println();
  Serial.print("Message : ");
  content.toUpperCase();
  if (content.substring(1) == "0B CF 6D 8B") //change here the UID of the card/cards that you want to give access
  {
    Serial.println("Authorized access");
    Serial.println();
    servo.write(180);

delay(1000);

    digitalWrite(successPin, HIGH);
    digitalWrite(failPin, LOW);
    delay(3000);
  }
 
 else   {
    Serial.println(" Access denied");
    servo.write(0);

delay(1000);
     digitalWrite(successPin, LOW);
    digitalWrite(failPin, HIGH);
  delay(3000);
  }
}
