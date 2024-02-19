import Pm1 from '../Assets/images/pm1.jpg'
import Tm from '../Assets/images/tm.jpg'
import Gd from '../Assets/images/gd.jpg'
import Fg from '../Assets/images/fg.jpg'
import Ids from '../Assets/images/ids.jpg'
import Ppm from '../Assets/images/15ppm.jpg'
import Odme from '../Assets/images/odme.jpg'
import Fgd from '../Assets/images/fgd.jpg'
import Vm from '../Assets/images/vm.jpg'
import fire from '../Assets/images/fire-alarm.jpg'

export default function DataFile() {
    const data = [
      {
        id: "tab1",
        imageUrl:  [`${Pm1}`],
        title: "PRESSURE EQUIPMENTS",
        description:
          "Calibration of Pressure Calibrator || Pressure Gauge || Compound Gauge || Pressure Transmitters.",
      },
      {
        id: "tab2",
        imageUrl: [`${Tm}`],
        title: "TEMPERATURE EQUIPMENTS",
        description:
          "Temperature Calibrator || Temperature Gauge || Temperature Thermometer || Temperature Transmitters",
      },
      {
        id: "tab3",
        imageUrl: [`${Gd}`],
        title: "GAS DETECTORS",
        description:
          "Calibration of Single and Multigas Detectors. RKI || HONEYWELL || GMI || CROWCON || SCOTTSAFETY || MSA || etc",
      },
      {
        id: "tab4",
        imageUrl: [`${Fg}`],
        title: "FIXED GAS DETECTION SYSTEM",
        description:
          "Calibration of Fixed Gas Detection System. RKI || TOKA SEIKI || HONEYWELL || CONSILIUM || etc",
      },
      {
        id: "tab5",
        imageUrl: [`${Ids}`],
        title: "ULLAGE TEMPERATURE INTERFACE",
        description: "MMC || HERMATIC || TANKTECH || etc",
      },
      {
        id: "tab6",
        imageUrl: [`${Ppm}`],
        title: "OWS OR 15 PPM BILGE ALARM MONITOR SYSTEM",
        description:
          "Oily water separator(OWS) 15PPM BILGE ALARM MONITOR SYSTEM. Rivertrace || Fellow Kogyo|| Deckma Hamburg GmbH || Bilgemon",
      },
      {
        id: "tab7",
        imageUrl: [`${Odme}`],
        title: "ODME SYSTEM",
        description:
          "Oil Discharge Monitoring Equipment (ODME) Calibration and Funtional Test of ODME. Brannstrom Sweden || Jowa || VAF Instruments",
      },
      {
        id: "tab8",
        imageUrl: [`${Fgd}`],
        title: "FIXED OXYGEN ANALYZER",
        description: "",
      },
      {
        id: "tab9",
        imageUrl: [`${Vm}`],
        title: "VAPOUR MONITORING SYSTEM",
        description: "",
      },
      {
        id:"tab10",
        imageUrl:[`${fire}`],
        title:"Firm Alarm System",
        description:"The fire alarm panel monitors and indicates what state the system is in at all times.",
      }
    ];
  
    return data;
  }
  