// questions.js
// Array com todas as 280 questões e gabarito
const allQuestions = [
    {
        id: 1,
        question: "Is the DPVM Scheme an entirely new training and certification scheme? O Esquema DPVM é um esquema de treinamento e certificação totalmente novo?",
        options: [
            "It's a new training scheme.",
            "This scheme has been always existed.",
            "No, it exist since 2000.",
            "All the options."
        ],
        correctAnswer: 0
    },
    {
        id: 2,
        question: "What does the acronym DPVM stand for? O que significa a sigla DPVM?",
        options: [
            "Disgusting Person Vessel Member.",
            "Dynamic Positioning Vessel Maintainer.",
            "Dynamic Positioning Vessel Motion.",
            "Dynamic Positioning Vessel Manager."
        ],
        correctAnswer: 1
    },
    {
        id: 3,
        question: "Does the DP Vessel Maintainer receives a logbook after the online exam? O mantenedor da embarcação DP recebe um diário de bordo após o exame online?",
        options: [
            "No, the DPVM doesn't need a Logbook.",
            "Yes, If pass on the NI online exam.",
            "If the DPVM wish for, yes.",
            "Yes, doesn't matter if pass or not in the online exam."
        ],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "Why is it important for the engine room DP key personnel to enter in this new scheme? Por que é importante que o pessoal-chave de DP da sala de máquinas entre nesse novo esquema?",
        options: [
            "To became a DP Operator on the bridge.",
            "Just curiosity.",
            "To get knowledge enough to understand the redundancy concept for DP operation.",
            "To know how to do maintenance during DP Operation."
        ],
        correctAnswer: 2
    },
    {
        id: 5,
        question: "What can be logged in the DPVM Logbook? O que pode ser registrado no Logbook DPVM?",
        options: [
            "Join Vessel, DP Trial and Emergency DP Drill.",
            "FMEA, ROV Support and DP audits.",
            "Date leaving Vessel and Total days vessel was on DP operation.",
            "All the options."
        ],
        correctAnswer: 3
    },
    {
        id: 6,
        question: "Who was the first to idealize the working principles of a DP vessel? Quem foi o primeiro a idealizar os principios de funcionamento de uma embarcação DP?",
        options: [
            "Galileu Galilei",
            "Nostradamus",
            "Jules Verne",
            "Aristóteles"
        ],
        correctAnswer: 2
    },
    {
        id: 7,
        question: "Select bellow the 3 main organisations involved in the publishing of guidance related to DP operations? Selecione abaixo as 3 principais organizações envolvidas na publicação de orientações relacionadas às operações de DP?",
        options: [
            "FMEA, OCIMF, DPC",
            "NI, IMO, ABS",
            "IMO, IMCA, MTS",
            "DPC, NI, ABS"
        ],
        correctAnswer: 2
    },
    {
        id: 8,
        question: "Choose the right option about advantages of using DP vessels: Escolha a opção certa sobre as vantagens de usar embarcações DP",
        options: [
            "All the options.",
            "Can change location very quickly.",
            "Can work in any water depth.",
            "The vessel is fully self-propelled."
        ],
        correctAnswer: 0
    },
    {
        id: 9,
        question: "Choose the right option about disadvantages of using DP vessels: Escolha a opção certa sobre as desvantagens do uso de embarcações DP",
        options: [
            "All the options.",
            "In strong tides, shallow waters or extreme weather can lose position",
            "It can fail to keep position if the equipment has a failure.",
            "Higher fuel consumption."
        ],
        correctAnswer: 0
    },
    {
        id: 10,
        question: "Mark the option whose shows DP Vessels. Marque a opção que mostra Embarcações DP",
        options: [
            "OSV, DSV AND RSV.",
            "FPSO with turret.",
            "All the options.",
            "AHTS without a DP System."
        ],
        correctAnswer: 0
    },
    {
        id: 11,
        question: "What is the correct concept for 'Dynamic Positioning System' for DP vessels? Qual é o conceito correto para 'Sistema de Posicionamento Dinâmico' para embarcações DP",
        options: [
            "It is a system which automatically controls a vessel's heading and position, exclusively, by means of active thrust.",
            "It is a system which automatically controls only the vessel's heading, exclusively, by means of active thrust.",
            "It is a system which controls a vessel's heading and position, exclusively, by the DPO instincts.",
            "It is a system which automatically controls only the vessel's position, exclusively, by means of active thrust."
        ],
        correctAnswer: 0
    },
    {
        id: 12,
        question: "What options shows some of the 6 degrees of freedom of a vessel? Quais opções mostram alguns dos 6 graus de liberdade de uma embarcação?",
        options: [
            "Surge, Pitch and Yaw.",
            "None of them.",
            "Heading and drift.",
            "Latitude and longitude."
        ],
        correctAnswer: 0
    },
    {
        id: 13,
        question: "What are the 3 controlled degrees of freedom of a DP vessel? Quais são os 3 graus de liberdade controlados de uma embarcação DP",
        options: [
            "Up, down and behind.",
            "Pitch, Roll and Heave.",
            "Latitude, Longitude and Heading.",
            "Surge, Sway and Yaw."
        ],
        correctAnswer: 3
    },
    {
        id: 14,
        question: "What are the horizontal movements controlled by the DP System. Quais são os movimentos horizontais controlados pelo Sistema DP.",
        options: [
            "Up, down and behind.",
            "Latitude, Longitude and Heading.",
            "Surge, Sway and Yaw.",
            "Pitch, Roll and Heave."
        ],
        correctAnswer: 2
    },
    {
        id: 15,
        question: "What are the 3 uncontrolled degrees of freedom of a DP vessel? Quais são os 3 graus de liberdade não controlados de uma embarcação DP",
        options: [
            "DPO, Captain and Chief mate.",
            "Equality, fraternity and liberty.",
            "Pitch, Roll and Heave.",
            "Torque, RPM and Pitch propeller."
        ],
        correctAnswer: 2
    },
    {
        id: 16,
        question: "Select the option that corresponds to the axis known as heading. Seleciona a opção que corresponde ao eixo conhecido como cabeçalho.",
        options: [
            "Surge.",
            "Pitch.",
            "Roll.",
            "Sway.",
            "Heave.",
            "Yaw."
        ],
        correctAnswer: 5
    },
    {
        id: 17,
        question: "Which of the following axis is the sideways motion (atwarth) controlled by the DP system? Qual dos eixos a seguir é o movimento lateral (na direção oposta) controlado pelo sistema DP?",
        options: [
            "Roll.",
            "Sway.",
            "Yaw.",
            "Pitch.",
            "Heave.",
            "Surge."
        ],
        correctAnswer: 1
    },
    {
        id: 18,
        question: "What is the main axis controlled by the DP system that when on DP mode has priority over position control? Qual é o eixo principal controlado pelo sistema DP que quando no modo DP tem prioridade sobre o controle de posição?",
        options: [
            "Surge.",
            "Heave.",
            "Yaw.",
            "Sway.",
            "Roll.",
            "Pitch."
        ],
        correctAnswer: 2
    },
    {
        id: 19,
        question: "Mark the options with 2 main components of a DP system: Marque as opções com 2 componentes principais de um sistema DP",
        options: [
            "DPO and Captain.",
            "Operator Station (OS) and Control Computer (CC).",
            "DP System and Redundancy.",
            "Operation Manager and Coordinator."
        ],
        correctAnswer: 1
    },
    {
        id: 20,
        question: "What component has installed the main program for the DP system to calculate thrust required to hold the vessel in position. Qual componente instalou o programa principal para o sistema de DP para calcular o empuxo necessário para manter a embarcação na posição.",
        options: [
            "CC - Control Computer.",
            "OS - Operator Station.",
            "Thruster Allocation.",
            "Engine room."
        ],
        correctAnswer: 0
    },
    {
        id: 21,
        question: "Can the DP vessel maintainer reboot a CC or any other DP System critical component during a DP critical activity? O mantenedor da embarcação DP pode reiniciar um CC ou qualquer outro componente crítico do sistema DP durante uma atividade crítica de DP",
        options: [
            "No. Just if Captain decide for.",
            "Yes, anytime if necessary.",
            "Is not allowed reboot any DP System during critical activity.",
            "Yes ! If not the engineer will be considered regardless."
        ],
        correctAnswer: 2
    },
    {
        id: 22,
        question: "What happens if all CCs are lost and then are restarted by the DPO? O que acontece se todos os CCs forem perdidos e reiniciados pelo DPO?",
        options: [
            "At a first the DP system will lose auto position and heading control of the vessel. After restarted the CC will return to default settings.",
            "The CCs will restart at the same time, with the same settings as before.",
            "The DP system will not lose auto position and heading control of the vessel. After restarted the CC will return to previous settings.",
            "The DPO will get in Panic mode, and after rebooted the DPO will get more free time to dedicate to other things."
        ],
        correctAnswer: 0
    },
    {
        id: 23,
        question: "How important is the VRU? Qual a importância do VRU?",
        options: [
            "This sensor is not important. Just indicate the vessel's vertical movements.",
            "Is important because without it will not be possible de DP system control the vertical movements (Pitch, Roll and Heave).",
            "Is important because is impossible to be on DP without VRU.",
            "The informations from this sensor, helps de CC to compensate PRSs false deviations due to pitch and roll."
        ],
        correctAnswer: 3
    },
    {
        id: 24,
        question: "What happens if all VRUs are lost during a DP operation? O que acontece se todos os VRUs forem perdidos durante uma operação DP",
        options: [
            "Nothing.",
            "The PRS won't be compensated for vertical movements Pitch and Roll.",
            "The vessel will sink.",
            "The PRS will assume the responsibility to indicate the the vessel vertical movements."
        ],
        correctAnswer: 1
    },
    {
        id: 25,
        question: "What is the most important sensor in the DP System? Qual é o sensor mais importante no Sistema DP?",
        options: [
            "VRU.",
            "Gyrocompass.",
            "Position Reference System (PRS).",
            "Temperature Sensor."
        ],
        correctAnswer: 1
    },
    {
        id: 26,
        question: "Is it possible for the DP system to automatically control heading without having any Gyro enabled? Why? É possível que o sistema DP controle automaticamente o rumo sem ter nenhum giroscópio ativado? Por que?",
        options: [
            "Yes. Because the vessel still have the Magnetic Compass.",
            "No. Because it is the only one capable of providing heading and ROT input.",
            "Yes. Because the DP system doesn't need a Gyrocompass.",
            "No. Because it is the only one capable of providing the vessel position."
        ],
        correctAnswer: 1
    },
    {
        id: 27,
        question: "Which movement does the Gyro Compass monitor? Qual movimento o Giroscópio monitora?",
        options: [
            "Surge",
            "Sway",
            "Yaw",
            "Heave"
        ],
        correctAnswer: 2
    },
    {
        id: 28,
        question: "What do you check on when you cannot select a gyro into the DP system? O que você verifica quando não consegue selecionar um giroscópio no sistema DP?",
        options: [
            "Check if there is a difference between the gyros.",
            "Check if the Gyro is On or Off.",
            "Check if the Gyro is working.",
            "All the options."
        ],
        correctAnswer: 3
    },
    {
        id: 29,
        question: "What information does the gyro provides? Quais informações o giroscópio fornece?",
        options: [
            "Enviroment.",
            "Weather.",
            "How fast is the internet on board.",
            "Vessel heading."
        ],
        correctAnswer: 3
    },
    {
        id: 30,
        question: "What would you check if there is no input from a Gyro on the DP? O que você verificaria se não houvesse entrada de um giroscópio no DP?",
        options: [
            "Check if there are too much clouds in the sky.",
            "Check if the Gyro is working.",
            "Check if the company is paying the gyro's bills.",
            "Check if is too dark outside."
        ],
        correctAnswer: 1
    },
    {
        id: 31,
        question: "Why does the DP system need PRS input? Por que o sistema DP precisa de entrada PRS?",
        options: [
            "The DP System doesn't need. The system already have the MRU.",
            "To the system be able to control Pitch, Roll and Heave.",
            "To provide to the DP controller with both geographical and relative based data in which it uses to maintain position set points specified by the operator.",
            "To know the vessel heading."
        ],
        correctAnswer: 2
    },
    {
        id: 32,
        question: "What is the purpose of the Network? Qual é o propósito da Rede?",
        options: [
            "The purpose is connect all components of the DP System and allows them to communicate with each other.",
            "Test if all electrical cables are working properly.",
            "To improve the internet speed on board.",
            "To make the communication between engine and bridge get better."
        ],
        correctAnswer: 0
    },
    {
        id: 33,
        question: "What is the standard communication protocol used by the DP Network? Qual é o protocolo de comunicação padrão usado pela Rede DP?",
        options: [
            "NMEA 0183.",
            "Company protocol.",
            "Safety protocol.",
            "TCP/IP."
        ],
        correctAnswer: 3
    },
    {
        id: 34,
        question: "Why is it important to keep the DP network free of viruses? Por que é importante manter a rede DP livre de vírus?",
        options: [
            "Because an antivirus on the DP system, affect the proper functioning of the system.",
            "Because a virus on the system will probably cause a big trouble.",
            "All the options.",
            "Because the DP system is not protected by antivirus."
        ],
        correctAnswer: 2
    },
    {
        id: 35,
        question: "Do Network Interface Cards (NIC) work wired or wireless? As placas de interface de rede (NIC) funcionam com ou sem fio?",
        options: [
            "No, just wired.",
            "None of them.",
            "The NIC can work wired or wireless.",
            "No, just wireless."
        ],
        correctAnswer: 2
    },
    {
        id: 36,
        question: "What is the purpose of the Power System? Qual é o propósito do Sistema de Energia?",
        options: [
            "The purpose is to generate power supply to the DP System.",
            "The purpose is to generate, provide and ensure the continuity of the power supply to the DP System.",
            "The purpose is to generate, provide and ensure the continuity of the power supply to the crew members.",
            "The purpose is to generate, provide and ensure the continuity of the power supply only to the thruster system."
        ],
        correctAnswer: 1
    },
    {
        id: 37,
        question: "Choose the option that best describes what the Mathematical Model is. Escolha a opção que melhor descreve o que é o Modelo Matemático.",
        options: [
            "A precise description of the vessel's thrusters hydrodinamics.",
            "It is the measurements that matches the precise vessel's position, heading and speed values.",
            "All the options.",
            "It is the description of how the vessel reacts or moves as a function of the forces acting upon it."
        ],
        correctAnswer: 3
    },
    {
        id: 38,
        question: "Who is responsible for calculating the thrust level required to hold the vessel in position? Quem é responsável por calcular o nível de empuxo necessário para manter a embarcação em posição?",
        options: [
            "The mathematical model.",
            "Is the vessel stability calculation.",
            "The Chief Engineer.",
            "The ETO on duty."
        ],
        correctAnswer: 0
    },
    {
        id: 39,
        question: "Why is the Vessel Model important for the DP System? Por que o Modelo de Embarcação é importante para o Sistema DP?",
        options: [
            "Vessel model information is not important to the DP system.",
            "Because the vessel stability calculation can be affected if the vessel model is wrong.",
            "Because with this information is possible to estimate the influence of external forces against the vessel.",
            "Because without this information, the shipyard can make mistakes during vessel construction."
        ],
        correctAnswer: 2
    },
    {
        id: 40,
        question: "Why is it important to have a correct draft input in the DP system? Por que é importante ter uma entrada de calado correta no sistema de DP?",
        options: [
            "Because with the draft we can estimate the drift.",
            "To know if is possible navigate into shallow water.",
            "To the DP system calculate considering the correct aerodynamic and hydrodynamic model.",
            "The draft do not have any kind of influence on the DP System."
        ],
        correctAnswer: 2
    },
    {
        id: 41,
        question: "What is the Calculated Current (DP Current)? Qual é a Corrente Calculada (DP Current)?",
        options: [
            "It is a DP calculation that indicates the wind influence.",
            "It is an information that shows to the DPO, to what direction the vessel will drift.",
            "Is a resulting vector from all unknown external forces.",
            "It is how the the DP system indicate the real current."
        ],
        correctAnswer: 2
    },
    {
        id: 42,
        question: "How is the DP Current obtained (determined)? Como a Corrente DP é obtida (determinada)?",
        options: [
            "Determined by the Mathematical Model.",
            "Determined by an estimated DPO calculation.",
            "Determined by a currentmeter.",
            "Determined by a eco sounder."
        ],
        correctAnswer: 0
    },
    {
        id: 43,
        question: "What could cause potential mutual interference on the thruster efficiency, when operating close to another DP vessel. O que poderia causar potencial interferencia mútua na eficiencia do propulsor, ao operar próximo a outra embarcação DP.",
        options: [
            "Installation thrusters discharge.",
            "Multipath on the DGPS signal.",
            "Radar X interference on the relative PRS (Microwave).",
            "Same VHF channel being used."
        ],
        correctAnswer: 0
    },
    {
        id: 44,
        question: "What could cause the thrusters of a DP vessel to become ineffective? O que poderia fazer com que os propulsores de uma embarcação DP se tornassem ineficazes?",
        options: [
            "All the options.",
            "The proximity of another DP vessel.",
            "Vessel speed over 4 knots.",
            "High Trim."
        ],
        correctAnswer: 0
    },
    {
        id: 45,
        question: "Why is the value of the DP Current on the DP Operator Station likely different from the true tidal stream or current? Por que o valor da corrente de DP na estação do operador de DP provavelmente é diferente do verdadeiro fluxo de maré ou corrente?",
        options: [
            "Because the DP Current is a product of the Mathematical Model.",
            "Because the sensor responsible to measure the current is unregulated.",
            "Because the tidal or current is too much fast.",
            "Because the DP system, for some reason, is making a calculation mistake."
        ],
        correctAnswer: 0
    },
    {
        id: 46,
        question: "Why should we wait for the DP current to stabilize for 30 minutes? Por que devemos esperar que a corrente DP se estabilize por 30 minutos?",
        options: [
            "Because the DP Current is the same as real current.",
            "Because longer is the time, more reliable and accurate the calculated current value will be.",
            "Because this is the minimum time necessary for stabilize.",
            "This condition is false. Is not necessary wait to stabilize."
        ],
        correctAnswer: 1
    },
    {
        id: 47,
        question: "According to IMO MSC Circ. 1580, how long should we allow stabilization of the mathematical model? De acordo com IMO MSC Circ. 1580, por quanto tempo devemos permitir a estabilização do modelo matemático",
        options: [
            "30 minutes.",
            "15 minutes.",
            "10 minutes.",
            "3 minutes."
        ],
        correctAnswer: 0
    },
    {
        id: 48,
        question: "What could cause very high loads on engines/generators every time the vessel goes into DP? O que poderia causar cargas muito altas nos motores/geradores toda vez que a embarcação entra em DP?",
        options: [
            "While the model is settling down, the vessel must be 'into' wind and current and at low speed (lower than 0.2kts).",
            "A Chief engineer mistake.",
            "A calm weather.",
            "If the DPO manually chance pitch propellers."
        ],
        correctAnswer: 0
    },
    {
        id: 49,
        question: "Why is it so important for the DPO to monitor the Command and Feedback of thrusters while operating in DP Mode? Por que é tão importante para o DPO monitorar o comando e o feedback dos propulsores durante a operação no modo DP?",
        options: [
            "Is important just check the Feedback, because this is the information read by DP System.",
            "To check if the chief engineer is doing a good job.",
            "Because , this is the best way to detect a thruster malfunction.",
            "Is important just check the Command."
        ],
        correctAnswer: 2
    },
    {
        id: 50,
        question: "How can the DPVM do to best detect a thruster malfunction? Como o DPVM pode fazer para detectar melhor o mau funcionamento do propulsor?",
        options: [
            "Calling to the bridge and asking to the DPO.",
            "Going outside and checking the thruster discharge.",
            "Checking Command and Feedback trends.",
            "Listen the sound of the thrusters, trying to find any strange noise."
        ],
        correctAnswer: 2
    },
    {
        id: 51,
        question: "What resource is available to DPVM staff that allows them to monitor all inputs and outputs in real time, looking for patterns or signs of malfunction? Que recurso está disponível para a equipe do DPVM que permite monitorar todas as entradas e saídas em tempo real, procurando padrões ou sinais de mau funcionamento?",
        options: [
            "Breathing Apparatus.",
            "Thermometer.",
            "Multimeter.",
            "Trends."
        ],
        correctAnswer: 3
    },
    {
        id: 52,
        question: "What should be the DPO's first action after noticing that a thruster failed to full force during a DP class 2 operation? Qual deve ser a primeira ação do DPO após perceber que um propulsor falhou em força total durante uma operação DP classe 2?",
        options: [
            "Call to Captain.",
            "Press Emergency Button.",
            "Disable thruster on DP system.",
            "Call to Chief Engineer."
        ],
        correctAnswer: 1
    },
    {
        id: 53,
        question: "What is data timeout? O que é tempo limite de dados?",
        options: [
            "It is a term that is common used to indicate an extra time job.",
            "Is an Alarm that indicates a delay on the maneuver.",
            "Is an Alarm that indicates an intermittence on the input signal.",
            "Is an Alarm that indicates a wrong information on the date and time on the DP System configuration."
        ],
        correctAnswer: 2
    },
    {
        id: 54,
        question: "What is voting? O que é votação?",
        options: [
            "It is a system philosophy used primary/secondary option is used.",
            "It is a logic system that continuously compares sensor inputs with mathematical model.",
            "It is a logic system that continuously compares sensor inputs searching for discrepancies between them.",
            "It is a management process to decide how will be the duty on board."
        ],
        correctAnswer: 2
    },
    {
        id: 55,
        question: "What is a 'frozen sensor' alarm? O que é um alarme de 'sensor congelado'?",
        options: [
            "Is a kind of inaccurate.",
            "Is a kind of Data Timeout.",
            "An alarm to indicate that the refrigerator on board is frozen.",
            "An alarm to indicate that a sensor is completely broken."
        ],
        correctAnswer: 1
    },
    {
        id: 56,
        question: "What does an 'inaccurate' alarm represent? O que representa um alarme 'impreciso'?",
        options: [
            "Represent that the vessel is not on the setpoint pre determined by the DPO.",
            "A Frozen Data.",
            "Represent that the system found a discrepancy between a sensor data and Mathematical Model.",
            "Represent that the DPO maneuver is completely wrong."
        ],
        correctAnswer: 2
    },
    {
        id: 57,
        question: "What does a 'disagree' alarm represent? O que representa um alarme de 'discordo'?",
        options: [
            "Represent that the system found a discrepancy between the readings of 2 sensors is greater than the predefined limit.",
            "Represent that the DP system disagrees with the DPO's decision.",
            "Represent that the Chief engineer disagrees with Captain's decision.",
            "Represent that the system found a discrepancy between the readings of 3 sensors is greater than the predefined limit."
        ],
        correctAnswer: 0
    },
    {
        id: 58,
        question: "Why does IMO class standard requires 3 gyros for a DP Class 2 vessel? Por que o padrão da classe IMO requer 3 giroscópios para uma embarcação DP Classe 2?",
        options: [
            "Is not right consider that is a obligation to have 3 Gyros on a DP Class 2 vessel. Only 2 gyros is enough.",
            "Only DP Class 3 requires at least 3 Gyros.",
            "Because will be possible keep one Gyro on standby during DP operation, just in case.",
            "Because with 3 gyros the DP system will be able to alarm and reject the gyro that has the wrong reading (Voted out)."
        ],
        correctAnswer: 3
    },
    {
        id: 59,
        question: "What test does the DP system use to reject a drifting PRS because of a position discrepancy among three or more PRS? Que teste o sistema de DP usa para rejeitar um PRS à deriva devido a uma discrepância de posição entre três ou mais PRS?",
        options: [
            "Weighting test.",
            "Voting test.",
            "Disagree test.",
            "Inaccurate test."
        ],
        correctAnswer: 1
    },
    {
        id: 60,
        question: "What PRS philosophy does the DP System use to calculate confidence (relative spread of fixes) for each Position Reference System? Qual filosofia PRS o Sistema DP usa para calcular a confiança (dispersão relativa de correções) para cada Sistema de Referência de Posição?",
        options: [
            "Primary/Secondary.",
            "Weighting.",
            "Voting.",
            "Disagree."
        ],
        correctAnswer: 1
    },
    {
        id: 61,
        question: "Correctly describes what the Kalman Filter is. Descreve corretamente o que é o Filtro de Kalman",
        options: [
            "It is an algorithm that aims to reduce noise in the input of data.",
            "It is a specific filter used to prepare coffee.",
            "Is a filter system that indicates to the DPO what is the best heading to operate.",
            "Is a filter that makes the thrusters works in a calm way."
        ],
        correctAnswer: 0
    },
    {
        id: 62,
        question: "What is the purpose of the Kalman Filter algorithm? Qual é o objetivo do algoritmo do Filtro de Kalman?",
        options: [
            "All the options.",
            "The purpose is to make the DP system calculate de Current DP with more and more precision.",
            "The purpose is to make the DP Station keeping more precise.",
            "The purpose of reducing noise in the input of data from PRSs, sensors and in the construction of the Mathematical Model."
        ],
        correctAnswer: 3
    },
    {
        id: 63,
        question: "Correctly describe the 'Wind Feed Forward' function in the DP System. Descreva corretamente a função 'Wind Feed Forward' no Sistema DP.",
        options: [
            "Is another name to anemometer.",
            "Is a system that predict the wind to the next 6 hours.",
            "Is a function that 'by-passes' the Mathematical Model and generates demand for thrusters (extra thrust).",
            "Is a system that take the last 6 hours information and calculate the average."
        ],
        correctAnswer: 2
    },
    {
        id: 64,
        question: "What is the purpose of the 'Wind Feed Forward? Qual é o propósito do 'Wind Feed Forward?",
        options: [
            "The purpose is generates demand for thrusters (extra thrust) for immediate compensation of measured wind force.",
            "Indicate to the DPO the direction and speed of real wind.",
            "As the name says, the purpose is indicate the wind in the forward part of the vessel.",
            "The purpose is feed the DPO with the average information of wind to be aware about what could happen in the future."
        ],
        correctAnswer: 0
    },
    {
        id: 65,
        question: "What is the environmental force that has a major effect upon the 'sail area' and its disposition? What function does the DP system have to compensate for this? Qual é a força ambiental que tem maior efeito sobre a 'área de navegação' e sua disposição? Que função o sistema DP tem para compensar isso?",
        options: [
            "Current. Current meter.",
            "Wind. Wind Feed Forward.",
            "Depth. Eco Sounder.",
            "Swell. VRU/MRU."
        ],
        correctAnswer: 1
    },
    {
        id: 66,
        question: "Regarding wind feed forward function, what happens if the DPO disables all wind sensors? Em relação à função de alimentação de vento, o que acontece se o DPO desabilitar todos os sensores de vento?",
        options: [
            "The wind feed forward still works usually.",
            "The Wind Feed Forward will alarm.",
            "The system will automatically swap from DP do Manual.",
            "The Wind Feed Forward will not produce extra thrust, if necessary."
        ],
        correctAnswer: 3
    },
    {
        id: 67,
        question: "How important is the 'Wind Feed Forward' function for the DP system? qual a importância da função 'Wind Feed Forward' para o sistema DP?",
        options: [
            "Because the Independent Joystick System depends on it.",
            "This function makes the vessel react immediately, if the wind suddenly changes direction and speed.",
            "Wind Feed Forward is not important to the DP system.",
            "Is important because without this, is impossible to put the vessel on DP."
        ],
        correctAnswer: 1
    },
    {
        id: 68,
        question: "In what situations is it advisable for the DPO to disable wind sensors while operating in DP Mode? Em que situações é aconselhável que o DPO desabilite os sensores de vento enquanto estiver operando no modo DP?",
        options: [
            "When the wind is too weak.",
            "When the Captain wishes.",
            "When the wind is too strong.",
            "When a Helicopter Operation is about to happen."
        ],
        correctAnswer: 3
    },
    {
        id: 69,
        question: "What happens if a DP vessel with 3 wind sensors enabled is exposed to wind shear? O que acontece se uma embarcação DP com 3 sensores de vento ativados for exposta ao cisalhamento do vento?",
        options: [
            "All the options.",
            "Voting and innacurance alarms.",
            "Probable instability of the mathematical model.",
            "Extra thrust to fight against relative wind."
        ],
        correctAnswer: 0
    },
    {
        id: 70,
        question: "What happens if a DP vessel with 2 wind sensors enabled is exposed to wind shadow? O que acontece se uma embarcação DP com 2 sensores de vento ativados for exposta a sombra do vento?",
        options: [
            "Extra thrust to counter react the measured wind.",
            "All the options.",
            "Disagree alarm.",
            "Improved stability of the mathematical model."
        ],
        correctAnswer: 1
    },
    {
        id: 71,
        question: "What happens if a DP vessel with 1 wind sensor enabled is exposed to wind false reading due to discharge of turbines? O que acontece se uma embarcação DP com 1 sensor de vento ativado for exposta a leituras falsas de vento devido a descarga de turbinas?",
        options: [
            "A relative wind input will feed the DP System inducing thruster to work against him.",
            "Voting alarm.",
            "The wind sensor will became unavailable.",
            "Disagree alarm."
        ],
        correctAnswer: 0
    },
    {
        id: 72,
        question: "What happens if a DP vessel without any wind sensors enabled is exposed to helicopter flyover? O que acontece se uma embarcação DP sem nenhum sensor de vento ativado for exposta a um sobrevoo de helicóptero?",
        options: [
            "Nothing.",
            "The vessel will lose position.",
            "The DP system will alarm.",
            "The thrusters will work extra."
        ],
        correctAnswer: 0
    },
    {
        id: 73,
        question: "List what effects can cause wind model errors? Liste quais efeitos podem causar erros no modelo de vento?",
        options: [
            "Wind Shear.",
            "Discharge of turbines.",
            "Helicopter operation.",
            "All the options."
        ],
        correctAnswer: 3
    },
    {
        id: 74,
        question: "How will a tension sensor interfaced to the DP control system work? Como funcionará um sensor de tensão conectado ao sistema de controle de DP?",
        options: [
            "Just like Wind Feed Forward function.",
            "The tension sensor will make drum pay out automatically.",
            "Tension sensor do not have any kind of influence on the DP System.",
            "The Tension Sensor only will feed the system with this information and nothing more."
        ],
        correctAnswer: 0
    },
    {
        id: 75,
        question: "What axis can the operator control using the joystick when in Joystick mode? Qual eixo o operador pode controlar usando o joystick no modo Joystick?",
        options: [
            "Yaw (Heading).",
            "Surge (Along).",
            "Sway (Athwart).",
            "All the options."
        ],
        correctAnswer: 3
    },
    {
        id: 76,
        question: "Properly define what IJS - Backup Joystick is. Defina corretamente o que é IJS - Backup Joystick",
        options: [
            "Is a complete DP System, outside the bridge, that can be used in a emergency.",
            "It is a vessel control system that is completely dependent of the DP System.",
            "Is another name to Joystick Mode.",
            "It is a vessel control system independent of the rest of the DP."
        ],
        correctAnswer: 3
    },
    {
        id: 77,
        question: "According to IMO class requirements, which DP class needs to have the Backup Joystick? De acordo com os requisitos da classe IMO, qual classe DP precisa ter o joystick de backup?",
        options: [
            "All DP Classes (1, 2 and 3).",
            "Only DP 2.",
            "DP 2 and 3.",
            "Only DP 3."
        ],
        correctAnswer: 2
    },
    {
        id: 78,
        question: "Will the independent joystick (IJS) work if the DP system network is not working? O joystick independente (IJS) funcionará se a rede do sistema DP não estiver funcionando?",
        options: [
            "No.",
            "Yes, only on DP Class 3 vessel.",
            "Just if the Chief Engineer press the IJS Button on the ECR.",
            "Yes, it is a vessel control system independent of the rest of the DP."
        ],
        correctAnswer: 3
    },
    {
        id: 79,
        question: "How should the DPO set up the vessel on DP? Como o DPO deve configurar a embarcação em DP?",
        options: [
            "According Captain order.",
            "When the environmental conditions are affecting the vessel through the beams and vessel speed is over 0,2 kt.",
            "When the vessel is moving more than 1 Kt. ON this way the vessel will stop movement quickly.",
            "The vessel must be into wind and current and at low speed (lower than 0,2 Kts)."
        ],
        correctAnswer: 3
    },
    {
        id: 80,
        question: "What does the expression 'the vessel is in Full DP' mean? O que significa a expressão 'a embarcação está em Full DP'?",
        options: [
            "Means that all DP equipments are working properly.",
            "Means that the changeover button was changed from Manual to DP Mode.",
            "Means that all axis (Surge, Sway and Yaw) are being controlled by the DP System.",
            "Means that all DPOs on board has a Full DP certificate."
        ],
        correctAnswer: 2
    },
    {
        id: 81,
        question: "What should the DPO check if a vessel, once stable, has very high thruster demands when a position move is entered? O que o DPO deve verificar se uma embarcação, uma vez estável, tem demandas de propulsor muito altas quando um movimento de posição é inserido?",
        options: [
            "Gain setup.",
            "Kalman Filter setup.",
            "Vessel Speed setup.",
            "Thruster Allocation setup."
        ],
        correctAnswer: 2
    },
    {
        id: 82,
        question: "What happens when a DPO enters a setpoint speed that is too high? O que acontece quando um DPO entra em uma velocidade nominal muito alta?",
        options: [
            "The vessel redundancy will be affected.",
            "The vessel will move faster with low thruster demand.",
            "Engine and thruster demand can be too high.",
            "The DP system will alarm."
        ],
        correctAnswer: 2
    },
    {
        id: 83,
        question: "What are some of the items to check when the vessel is hunting around on auto DP? Quais são alguns dos itens a serem verificados quando a embarcação está navegando em auto DP?",
        options: [
            "Speed setup.",
            "Check if the OOW is sleeping on the ECR.",
            "Gain level.",
            "It happens because the Joystick configuration is wrong."
        ],
        correctAnswer: 0
    },
    {
        id: 84,
        question: "What is Thruster Allocation? O que é Alocação do Propulsor?",
        options: [
            "It is the term whose indicate where the thruster is (Bow or stern).",
            "Another name to azimuth thruster.",
            "It is the forces distribution between active thrusters according to DPO criteria.",
            "Technical name used to indicate that the thruster is Lock with 100% Pitch."
        ],
        correctAnswer: 2
    },
    {
        id: 85,
        question: "When talking about thruster allocation, does the DP system prioritizes any axis control when in DP mode? Ao falar sobre a alocação do propulsor, o sistema DP prioriza qualquer controle de eixo quando está no modo DP?",
        options: [
            "No.",
            "Yes. The along (Surge).",
            "Yes. The position (Surge+Sway).",
            "Yes. The heading (Yaw)."
        ],
        correctAnswer: 3
    },
    {
        id: 86,
        question: "Describe 'Thruster Bias' allocation and when to use it. Descrever a alocação de 'Propulsor Viés' e quando usá-la.",
        options: [
            "Function that evaluate which thruster is better to use according weather condition. Used when bad weather.",
            "Function where a FPP becomes a CPP. Used when the DPO doesn't has enough experience.",
            "function used to prevent the Azimuth Thruster continuously hunt for direction in low environmental conditions.",
            "Function used to tunnel thruster only and set a constant direction to where the thruster should work. Used when the captain decide to."
        ],
        correctAnswer: 2
    },
    {
        id: 87,
        question: "Describe 'Thruster Prohibited Azimuth Zone' allocation. Descrever a alocação da 'Zona de Azimute Proibida do Propulsor'",
        options: [
            "Function that determine a thruster exclusion zone.",
            "It is a term that determines in which zone (Green, Yellow or Red), is forbidden use Az Thruster.",
            "It is a term used on FMEA document that means that is forbidden use Az Thruster.",
            "Function that determine what thruster is prohibited to be used on DP Mode."
        ],
        correctAnswer: 0
    },
    {
        id: 88,
        question: "Describe 'Thruster Fixed Azimuth Mode' allocation. Descrever a alocação do 'Modo de Azimute Fixo do Propulsor'",
        options: [
            "Mode where the thruster operates acting as a tunnel thruster.",
            "Mode where a fixed propeller works as a Az Thruster.",
            "This term is used when the vessel is on Critical Activity with a Thruster AZ being fixed.",
            "The term indicates the location of the Az Thruster at the vessel."
        ],
        correctAnswer: 0
    },
    {
        id: 89,
        question: "Describe what DP Gain Controls are. Descrever o que são os controles de ganho de DP.",
        options: [
            "Function that control the DP Gain on the PRS system.",
            "It is the aggressiveness of thrusters to counter react to deviations according to environmental conditions.",
            "Function of DP system that estimate the gain diesel consumption, according predetermined generator configuration.",
            "Control that standardizes the vessel's operational efficiency gain."
        ],
        correctAnswer: 1
    },
    {
        id: 90,
        question: "What is the Op. Point of a DP vessel is? O que é o Op. O ponto de uma embarcação DP é?",
        options: [
            "Is the place where the vessel will work (Oil Platform, Field, etc).",
            "Another name to DP Operator Station.",
            "Is the name used to indicate the target used to use the sub system Follow Target.",
            "Is the reference point about which the vessel rotates."
        ],
        correctAnswer: 3
    },
    {
        id: 91,
        question: "Can the DPO change the Op. Point to a point other than the CG? O DPO pode alterar o Op. Aponte para um ponto diferente do CG?",
        options: [
            "Sometimes. It depends of vessel operation.",
            "Yes, according captain's order.",
            "Yes, it is possible.",
            "All the options."
        ],
        correctAnswer: 3
    },
    {
        id: 92,
        question: "What name is also known Center of Rotation? Que nome também é conhecido Centro de Rotação?",
        options: [
            "Operation Point and Pivot Point.",
            "Turn Point.",
            "Bridge.",
            "Rotation Place."
        ],
        correctAnswer: 0
    },
    {
        id: 93,
        question: "About what point does a DP vessel rotate when changing heading? Sobre que ponto uma embarcação DP gira ao mudar de direção?",
        options: [
            "Operation Point.",
            "All options.",
            "Pivot Point.",
            "Center of Rotation."
        ],
        correctAnswer: 3
    },
    {
        id: 94,
        question: "Why is it important to check the center of rotation prior to using the DP system? Por que é importante verificar o centro de rotação antes de usar o sistema DP?",
        options: [
            "To know what is the Center of Gravity.",
            "To know to where the vessel has to go.",
            "This is information is not important.",
            "To know where the vessel will rotate."
        ],
        correctAnswer: 3
    },
    {
        id: 95,
        question: "What are the requirements for PRSs to be possible to use DP Follow Target submode? Quais são os requisitos para que os PRSs possam usar o submodo DP Follow Target?",
        options: [
            "The system should use just one kind of PRS for this.",
            "All PRS must be Relative only.",
            "All PRS must be Global, only.",
            "To have enabled at least 1 PRS Global and 1 Relative."
        ],
        correctAnswer: 3
    },
    {
        id: 96,
        question: "Describe what the 'Follow Target' Submode is. Descreva o que é o submodo 'Follow Target'.",
        options: [
            "A function that makes the DP vessel get position using the PRS from the target.",
            "A DP Submode where the DP Vessel moves according to a target movement.",
            "A DP function that makes the target move together with DP Vessel.",
            "A submode, on board DP vessel that works when the vessel is not on DP."
        ],
        correctAnswer: 1
    },
    {
        id: 97,
        question: "What PRS should be used when in Follow ROV? Qual PRS deve ser usado quando estiver em Follow ROV?",
        options: [
            "At least 1 DGNSS and 1 Fanbeam.",
            "At least 1 Cyscan and 1 Radascan.",
            "At least 1 Radius and one Taut wire.",
            "At least 1 DGNSS and 1 HPR."
        ],
        correctAnswer: 3
    },
    {
        id: 98,
        question: "Why does the Follow Rig submode require at least one Relative PRS and one Global PRS Enabled? Por que o submodo Follow Rig requer pelo menos um PRS Relativo e um PRS Global Habilitado?",
        options: [
            "To the DPO have an option to choose what PRS use at the target.",
            "Because the Captain wants!",
            "To get Redundancy.",
            "Because the Global PRS indicated the DP Vessel position and the Relative PRS indicates the Target position."
        ],
        correctAnswer: 3
    },
    {
        id: 99,
        question: "What system may be useful in keeping the marine riser entry angle within limits at the lower marine riser package for drilling operations? Que sistema pode ser útil para manter o ángulo de entrada do riser marítimo dentro dos limites no pacote do riser marítimo inferior para operações de perfuração?",
        options: [
            "Auto Track.",
            "Follow ROV.",
            "Follow Target.",
            "Riser Management System."
        ],
        correctAnswer: 3
    },
    {
        id: 100,
        question: "What is a riser management system? O que é um sistema de gerenciamento de riser?",
        options: [
            "System used by Chief Engineer to check how heavy is the Riser.",
            "System to control and maintain the Riser angle of a Drill Ship.",
            "System that manager the Riser position.",
            "System used by the Chief Mate to calculate the influence of Riser on the vessel stability."
        ],
        correctAnswer: 1
    },
    {
        id: 101,
        question: "What is a riser angle beacon? O que é um baliza de ângulo do riser?",
        options: [
            "Transponder that measure the angle of riser at the Lower and Upper ball joint.",
            "Beacon that measure how is the pressure inside the Riser.",
            "Beacon, located at the ROV, that monitored that riser angle and indicate to the ROV pilot where the Riser is.",
            "Transponder responsible to indicate what is the maximum angle between risers that this equipment is able to support."
        ],
        correctAnswer: 0
    },
    {
        id: 102,
        question: "What differentiates DGPS from GPS? O que diferencia o DGPS do GPS?",
        options: [
            "The satellites used are different.",
            "DGPS use a microwave signal and GPS a Laser signal.",
            "DGPS has a better accuracy on the position indication.",
            "DGPS is used by vessel that are on the Atlantic Ocean and GPS on the Pacific Ocean."
        ],
        correctAnswer: 2
    },
    {
        id: 103,
        question: "How many satellites consist of the GPS core constellation? Quantos satélites consistem na constelação central do GPS",
        options: [
            "24 satellites.",
            "32 satellites.",
            "12 satellites.",
            "36 satellites."
        ],
        correctAnswer: 0
    },
    {
        id: 104,
        question: "What is the minimum number of visible satellites necessary for a reliable position fix for GPS? Qual é o número mínimo de satélites visíveis necessários para uma posição confiável para o GPS?",
        options: [
            "4 satellites.",
            "1 satellite.",
            "2 satellites.",
            "3 satellites."
        ],
        correctAnswer: 0
    },
    {
        id: 105,
        question: "When working close to big surface installations, what PRSs are unlikely to be unavailable due to shadowing? Ao trabalhar perto de grandes instalações de superfície, quais PRSs provavelmente não estarão disponíveis devido ao sombreamento?",
        options: [
            "Cyscan.",
            "Radascan.",
            "All options.",
            "HPR."
        ],
        correctAnswer: 3
    },
    {
        id: 106,
        question: "What the option below is an environmental factor that would affect reception of Global satellite data? Qual opção abaixo é um fator ambiental que afetaria a recepção de dados globais de satélite?",
        options: [
            "Earthquake Heavy Rain.",
            "Strong Wind Sun spot Activity.",
            "Sun spot Activity.",
            "Heavy Rain."
        ],
        correctAnswer: 2
    },
    {
        id: 107,
        question: "What needs to be checked if you have no SNR on a DGNSS alongside of an Offshore structure? O que precisa ser verificado se você não tiver SNR em um DGNSS ao lado de uma estrutura offshore?",
        options: [
            "Check if the wind direction is correctly indicated at the anemometer.",
            "Check if the Gain configuration is according weather condition.",
            "Check if satellite signal is blocked by the offshore structure.",
            "Check if DPO choose the better reflector to use Cyscan."
        ],
        correctAnswer: 2
    },
    {
        id: 108,
        question: "What needs to be checked if you have no SNR clear of any structures? O que precisa ser verificado se você não tiver SNR livre de nenhuma estrutura?",
        options: [
            "All options.",
            "Check if an ionospheric interference is happening.",
            "Check if a sun spot activity event is happening.",
            "Check Hardware problem or wrong correction satellite selected."
        ],
        correctAnswer: 0
    },
    {
        id: 109,
        question: "What kind of PRS is a Fanbeam? And a CyScan? Que tipo de PRS é um Fanbeam? E um CyScan?",
        options: [
            "Laser.",
            "Radio.",
            "Hydroacoustic.",
            "Microwave."
        ],
        correctAnswer: 0
    },
    {
        id: 110,
        question: "List what kind of PRS principle should be avoided in case of dense fog. Liste que tipo de principio PRS deve ser evitado em caso de neblina densa.",
        options: [
            "Radar.",
            "Hydroacoustic.",
            "Microwave.",
            "Laser."
        ],
        correctAnswer: 3
    },
    {
        id: 111,
        question: "Why, in fog conditions, at a range of 100m or more are you unlikely to be able to use the CyScan or the Fanbeam? Por que, em condições de nevoeiro, a uma distância de 100m ou mais, é improvável que você consiga usar o CyScan ou o Fanbeam?",
        options: [
            "Because the distance is too far.",
            "Because the Cyscan and Fanbeam has to work together, always.",
            "The sentence is wrong. In fog condition the better choice is Cyscan.",
            "Because fog can cause diffused reflections on the laser signal from Cyscan or Fanbeam."
        ],
        correctAnswer: 3
    },
    {
        id: 112,
        question: "What is the Scene Scan PRS? O que é o PRS de Varredura de Cena?",
        options: [
            "Also know as Targetless, is a kind of PRS Laser that works without a target reflector.",
            "Also Know as Gloass. Kind of PRS that face problem when heavy rain happens.",
            "A kind of PRS that use microwave signal to works.",
            "Is a PRS that needs communication with at least 4 satellites."
        ],
        correctAnswer: 0
    },
    {
        id: 113,
        question: "What is the main difference in how Radascan works compared to CyScan? Qual é a principal diferença em como o Radascan funciona em comparação com o CyScan?",
        options: [
            "Radascan works better when close to a Radar, Cyscan no.",
            "Cyscan has microwave principle and Radascan has laser principle.",
            "Cyscan has optical principle and Radascan has microwave principle.",
            "Radascan is used to AHTS and Cyscan ROV."
        ],
        correctAnswer: 2
    },
    {
        id: 114,
        question: "What could be a reason to Microwave PRS stop picking up a transponder? Qual poderia ser um motivo para o Microwave PRS parar de captar um transponder?",
        options: [
            "Cargo operation.",
            "All options.",
            "Battery is flat.",
            "Carbon from flare."
        ],
        correctAnswer: 1
    },
    {
        id: 115,
        question: "Does FMCW (i.e. Radius, Artemis etc) suffer interference from X-band Radar? O FMCW (ou seja, Radius, Artemis etc) sofre interferência do radar de banda X?",
        options: [
            "Yes.",
            "Sometimes.",
            "No.",
            "Only S- Band."
        ],
        correctAnswer: 0
    },
    {
        id: 116,
        question: "What is an INS? How can it be useful? O que é um INS? Como pode ser útil?",
        options: [
            "Integrated National System. System that creates a behavioral standard for all DP Vessels.",
            "Inertial Navigation System. To improve station keeping accuracy.",
            "International Navigation Scheme. Guide key DP personnel how to act in case of emergency.",
            "Intern Support System. Check and inform to DPO any kind of problem."
        ],
        correctAnswer: 1
    },
    {
        id: 117,
        question: "Describe a HPR Responder Beacon. Descreva um sinalizador de resposta HPR.",
        options: [
            "Transponder where the interrogating signal is conducted by hard wire rather than through water (Electrical Triggering).",
            "Is an equipment used on the Hydroacoustic PRS and is also knows as Transceiver.",
            "A Transponder that respond to a signal sent by the Radascan.",
            "A Transponder that respond to a signal sent by the Cyscan."
        ],
        correctAnswer: 0
    },
    {
        id: 118,
        question: "A Pinger may be described as: Um Pinger pode ser descrito como",
        options: [
            "A microwave beacon set to transmit signal at a fixed and regular interval.",
            "The signal transmitted from satellite that the vessel GPS aerial detect.",
            "An acoustic beacon set to transmit hydroacoustic signal at a fixed and regular interval.",
            "A kind of reflector that works together with a Radascan."
        ],
        correctAnswer: 2
    },
    {
        id: 119,
        question: "What option below indicate a condition that can cause a negative effect on HPR range measurements? Qual opção abaixo indica uma condição que pode causar um efeito negativo nas medições da faixa de HPR?",
        options: [
            "Marine life.",
            "Salinity.",
            "All options.",
            "Thruster activity."
        ],
        correctAnswer: 2
    },
    {
        id: 120,
        question: "A major reason for the loss of hydro-acoustic signals is: Uma das principais razões para a perda de sinais hidroacústicos é:",
        options: [
            "Soliton.",
            "Rain.",
            "Sun spot activity.",
            "Beacon battery lost."
        ],
        correctAnswer: 3
    },
    {
        id: 121,
        question: "What system can improve station-keeping accuracy in deep waters when coupled with DGNSS and HPR? Que sistema pode melhorar a precisão de manutenção da estação em águas profundas quando combinado com DGNSS e HPR?",
        options: [
            "Inertial Navigation System.",
            "Riser Management System.",
            "Wind Feed Forward.",
            "Kalman Filter."
        ],
        correctAnswer: 0
    },
    {
        id: 122,
        question: "Describe the Taut Wire PRS working principle. Descrever o principio de funcionamento do Taut Wire PRS.",
        options: [
            "The position of the vessel is defined relative to the location of the transponder obtained from measurements of wire angle and water depth.",
            "The position of the vessel is defined relative to the location of the satellite obtained from measurements of wire angle and water depth.",
            "The position of the vessel is defined relative to the location of the weight obtained from measurements of wire angle and water depth.",
            "The position of the vessel is defined relative to the location of the reflector obtained from measurements of wire angle and water depth."
        ],
        correctAnswer: 2
    },
    {
        id: 123,
        question: "What option indicate a problem that can affect Taut Wire efficiency? Qual opção indica um problema que pode afetar a eficiência do Taut Wire?",
        options: [
            "Water depth and/or angle of wire increases.",
            "Dense Fog.",
            "Shadowing effect.",
            "Heavy Rain."
        ],
        correctAnswer: 0
    },
    {
        id: 124,
        question: "Why is it important to have an effective DP alarm system? Por que é importante ter um sistema de alarme de DP eficaz?",
        options: [
            "It is not important. Just too much noise.",
            "To get intervention and post incident analysis.",
            "To the insurance company pay the bill if an accident happen.",
            "To DPO Know what is happening and inform to the company by email."
        ],
        correctAnswer: 1
    },
    {
        id: 125,
        question: "What DP function provides the correct interpretation of the message? Qual função DP fornece a interpretação correta da mensagem?",
        options: [
            "Alarm Explanation.",
            "Redundancy.",
            "Power Management System.",
            "Follow Target."
        ],
        correctAnswer: 0
    },
    {
        id: 126,
        question: "How is possible to get a print screen from the OS monitor? Como é possível obter uma tela de impressão do monitor do sistema operacional?",
        options: [
            "Connecting the mobile to the OS using a USB connection.",
            "Calling to the Remote Monitoring Center and asking for.",
            "By pressing a dedicated button on the operator pannel.",
            "Taking a picture from a personnel camera."
        ],
        correctAnswer: 2
    },
    {
        id: 127,
        question: "What should be checked if there was a problem transferring control from DP to Manual? O que deve ser verificado se houver algum problema ao transferir o controle de DP para Manual?",
        options: [
            "Check if the ready digital signal is working properly.",
            "Check if changeover switch has been changed to Manual.",
            "All options.",
            "Check if the DPO change the command to a different option."
        ],
        correctAnswer: 2
    },
    {
        id: 128,
        question: "What are the circulars of the IMO Maritime Safety Committee dealing with the design of DP vessels? Quais são as circulares do Comité de Segurança Marítima da IMO que tratam do projeto de embarcações DP?",
        options: [
            "MSC.1- Circ.1580 - Guidelines For Vessels And Units With Dynamic Positioning (Dp) Systems (Secretariat) (1).",
            "MSC.1- Circ.738- Rev.2 - Guidelines For Dynamic Positioning System (Dp) Operator Training (Secretariat).",
            "M 125 - Safety Interface Document for A DP Vessel Working Near an Offshore Platform.",
            "M 220 - Guidance on Operational Activity Planning."
        ],
        correctAnswer: 0
    },
    {
        id: 129,
        question: "Describe the concept of Redundancy. Descrever o conceito de Redundância",
        options: [
            "It is the ability of the DP System to automatically control the heading and position of the vessel after the occurrence of a Single Point Failure.",
            "It is the ability of the DPO to automatically control the heading and position of the vessel after the occurrence of a Single Point Failure.",
            "It is the ability of the DP Authority to automatically control the heading and position of the vessel after the occurrence of a Single Point Failure.",
            "It is the ability of the Engine room to automatically control the heading and position of the vessel after the occurrence of a Single Point Failure."
        ],
        correctAnswer: 0
    },
    {
        id: 130,
        question: "What is the simplest way to get Redundancy? Qual é a maneira mais simples de obter redundância?",
        options: [
            "By installation of multiple components, systems or alternative means of performing the function.",
            "To get redundancy, the company just need has at least 2 same vessels.",
            "Just need have equipment equivalent to that on board, in the company's warehouse.",
            "To keep at the bridge at least 2 DPO while Critical Activity."
        ],
        correctAnswer: 0
    },
    {
        id: 131,
        question: "What are Single point failures? O que são falhas de ponto único?",
        options: [
            "Is the nomenclature given to a type of simple failure, which does not cause any type of problem for the vessel.",
            "Is a failure that don't affect the DP system.",
            "A failure of a single component that will not cause the loss of the system's capacity to fulfill its purpose - automatic heading and vessel position control.",
            "A failure that if happen, will never cause any problem to the vessel."
        ],
        correctAnswer: 2
    },
    {
        id: 132,
        question: "What will happen with the position keeping ability of the DP vessel when a single thruster fails on a class 2 DP operation? O que acontecerá com a capacidade de manter a posição da embarcação DP quando um único propulsor falhar em uma operação DP classe 2?",
        options: [
            "The ship still retains the ability to hold position.",
            "The vessel will just keep position, but will start to lose the heading.",
            "The ship will start to lose position immediately.",
            "The ship will start to lose position because it is not a Class 3 DP."
        ],
        correctAnswer: 0
    },
    {
        id: 133,
        question: "How can a loss of position be prevented if a DP system component fails? Como uma perda de posição pode ser evitada se um componente do sistema DP falhar?",
        options: [
            "Changing the vessel command to Manual.",
            "With the provision of redundancy.",
            "Changing the vessel command to UJS.",
            "Using the subnode Follow target."
        ],
        correctAnswer: 1
    },
    {
        id: 134,
        question: "What is the main purpose of the redundancy concept in a DP system? Qual é o objetivo principal do conceito de redundância em um sistema DP?",
        options: [
            "Provide safe DP operations without main thruster group.",
            "To make a ship more reliable for the customer.",
            "Providing the possibility of abandoning a DP operation controlling the vessel position and heading after a Single Point Failure.",
            "To be able to continue the operation after the WCF occurs."
        ],
        correctAnswer: 2
    },
    {
        id: 135,
        question: "What is the reason PRSs cannot be based on the same principles? Qual é a razão pela qual os PRSs não podem ser baseados nos mesmos princípios?",
        options: [
            "to one of the PRS stays on standby, as a backup.",
            "To avoid a Common Point Failure.",
            "These sentence is wrong! Because the vessel position is different when we have more than one PRS."
        ],
        correctAnswer: 1
    },
    {
        id: 136,
        question: "How can a 'Common Mode Failure' be prevented in the vessel design? Como uma 'falha de modo comum' pode ser evitada no projeto da embarcação?",
        options: [
            "Using single working principle equipment.",
            "Placing redundant groups in different compartments (DP class 3).",
            "Repeating equipment redundancy in same areas.",
            "All the options are correct."
        ],
        correctAnswer: 1
    },
    {
        id: 137,
        question: "What is Worst Case Failure Design Intent - WCFDI? O que é Intenção de Projeto de Falha no Pior Caso - WCFDI?",
        options: [
            "Is a blackout.",
            "Is all mistakes made during vessel project.",
            "Is the biggest mistake that a DPO can made.",
            "Means the specified minimum DP system capabilities to be maintained following the worst- case failure."
        ],
        correctAnswer: 3
    },
    {
        id: 138,
        question: "What is the Worst Case Failure - WCF? Qual é o Pior Caso de Falha - WCF?",
        options: [
            "Is the identified single fault in the vessel's company resulting in maximum detrimental capacity of the company to take any kind of action.",
            "Is the identified single fault in the DP system resulting in maximum detrimental effect on DP capability.",
            "Is when one of the UPS don't feed the thrusters more than 30 minutes.",
            "Is the WCF that can occur in a specific DP Operation."
        ],
        correctAnswer: 1
    },
    {
        id: 139,
        question: "Why should all vessel officers know the WCF? Por que todos os oficiais de embarcação devem conhecer o WCF?",
        options: [
            "To be able to calculate a Footprint plot of the vessel, considering a WCF.",
            "To be able to test if the vessel will control position and heading after a WCF.",
            "All the options.",
            "To know when the ship will not be able to control position and heading after a WCF."
        ],
        correctAnswer: 3
    },
    {
        id: 140,
        question: "How to conduct, in a simple way, a WCF test? Como conduzir, de forma simples, um teste WCF?",
        options: [
            "Calling to Remote Monitoring Center and ask to them to test the vessel behaviour, after a WCF.",
            "Causing the failures, in case of a WCF, according FMEA.",
            "Simulating, in a theoretical maneuver, a WCF.",
            "Put the vessel on DP and disable the thrusters that would be lose after a WCF."
        ],
        correctAnswer: 3
    },
    {
        id: 141,
        question: "What is a Capability Diagram/Plot? O que é um diagrama/trama de capacidade?",
        options: [
            "Is the capability of the network to transfer communication throw the system.",
            "A estimated position keeping capability of a DP vessel.",
            "Is a Diagram to indicate the electrical variation on the switchboard.",
            "Is a study to show what is the capability of all generators."
        ],
        correctAnswer: 1
    },
    {
        id: 142,
        question: "What factors will affect the Capability Plots, i.e. reduce/change the environmental envelope? Quais fatores afetarão os Capability Plots, ou seja, reduzir/alterar o envelope ambiental?",
        options: [
            "The company Policy.",
            "As per customer's requirement.",
            "The Captain standing orders.",
            "The amount of generators available."
        ],
        correctAnswer: 3
    },
    {
        id: 143,
        question: "Is the Footprint Plot the same as Capability Plot? O gráfico de pegada é o mesmo que o gráfico de capacidade?",
        options: [
            "Sometimes yes.",
            "No.",
            "As captain's desire.",
            "Yes."
        ],
        correctAnswer: 1
    },
    {
        id: 144,
        question: "Describe what the footprint plot is. Descreva o que é o gráfico de pegada.",
        options: [
            "Measurement of the actual position- keeping performance of the vessel in intact and degraded conditions and in various environmental conditions.",
            "Is the position plotted on the navigation chart, according OS print screen.",
            "Same as Capability plot.",
            "Print to show how many meters the vessel drift off."
        ],
        correctAnswer: 0
    },
    {
        id: 145,
        question: "What is 'Consequence Analysis'? O que é 'Análise de Consequências'?",
        options: [
            "Is a action that belongs only to Captain to check the consequence if a policy company is disrespected.",
            "Is a simulation to determine whether the vessel will be able to maintain position and/or heading if the case of WCF occur in the prevailing environmental condition.",
            "Is a kind of risk assessment.",
            "Is one of the steps when a Management of Change is being evaluated."
        ],
        correctAnswer: 1
    },
    {
        id: 146,
        question: "According to IMO DP Class notation, which DP classes must have the Consequence Analysis program? De acordo com a notação IMO DP Class, quais classes DP devem ter o programa Consequence Analysis?",
        options: [
            "All DP classes.",
            "Only on DP Class 1.",
            "This function is not necessary on DP Class 2 and 3.",
            "Only on DP Class 3.",
            "DP Class 2 and 3."
        ],
        correctAnswer: 4
    },
    {
        id: 147,
        question: "Is it correct to the DPO to assume there is a thruster/generator problem and call the ER when a Consequence Analysis warning occurs? Why? É correto para o DPO assumir que há um problema no propulsor/gerador e chamar o ER quando ocorrer um aviso de Análise de Consequência? Por que?",
        options: [
            "No. Because the consequence analysis check if the ASOG is being followed.",
            "Yes. The Consequence Analysis is made for this.",
            "No. The Consequence Analysis will alarm just if a problem happen on the PRSs.",
            "No. Because de Consequence Analysis evaluates the vessel capability according weather condition."
        ],
        correctAnswer: 3
    },
    {
        id: 148,
        question: "The Consequence Analysis will continually performs an analysis on the vessel's ability to: A Análise de Consequências realizará continuamente uma análise sobre a capacidade da embarcação de:",
        options: [
            "Use all thrusters available.",
            "Maintain position.",
            "Use all PRS available.",
            "Maintain Position and Heading."
        ],
        correctAnswer: 3
    },
    {
        id: 149,
        question: "On a DP 2 or 3 vessel, which part of the DP system will warn the DPO if there will be insufficient thrust/power in the event of WCF? Em uma embarcação DP 2 ou 3, qual parte do sistema DP avisará o DPO se houver impulso/potência insuficiente no caso de WCF?",
        options: [
            "Worst Case Failure.",
            "Alarm Explanation.",
            "Consequence Analysis.",
            "Lost of Redundancy."
        ],
        correctAnswer: 2
    },
    {
        id: 150,
        question: "What is a cross connection? O que é uma conexão cruzada?",
        options: [
            "Is a kind of connection that if happen, can propagate a fault across an otherwise redundant system or sub system.",
            "A connection that can defeating part of, or the overall, redundancy concept of a DP system.",
            "All the options.",
            "It is a physical connection across the boundary between redundant groups."
        ],
        correctAnswer: 2
    },
    {
        id: 151,
        question: "Why is a 24V cross connection so critical? Por que uma conexão cruzada de 24 V é tão crítica?",
        options: [
            "Because a fault can be transferred to another and if it happen, all generators fed by 24V, will be lost.",
            "It is not critical, because 24V equipments a not important to DP system.",
            "Because the fault can affect the other system and lode all thusters.",
            "Because the fault in one system can affect the other redundancy 24V system."
        ],
        correctAnswer: 3
    },
    {
        id: 152,
        question: "What will happen with the vessel ability to control position and heading, if an event of a single point failure occur in a DP system class 1? O que acontecerá com a capacidade da embarcação de controlar a posição e o rumo, se ocorrer um evento de falha de ponto único em um sistema DP classe 1?",
        options: [
            "The vessel will lose ability to control position and heading.",
            "The vessel will be able to just keep the heading.",
            "Nothing.",
            "Just the heading will be lost."
        ],
        correctAnswer: 0
    },
    {
        id: 153,
        question: "What will happen with the vessel ability to control position and heading, if an event of a single point failure occur in a DP system class 2 and 3? O que acontecerá com a capacidade da embarcação de controlar a posição e o rumo, se ocorrer um evento de falha de ponto único em um sistema de DP classe 2 e 3?",
        options: [
            "The vessel will lose position and heading immediately.",
            "The vessel will be able to control position and heading.",
            "Only position will be lost.",
            "Only heading will be lost."
        ],
        correctAnswer: 1
    },
    {
        id: 154,
        question: "When conducting DP class 2 operations, in the event of a failure causing the DP system to be degraded, can the DPO finish the operation or should he/she abort the activity and move the vessel outside the 500m zone? Ao realizar operações DP classe 2, no caso de uma falha que cause a degradação do sistema DP, o DPO pode terminar a operação ou deve abortar a atividade e mover a embarcação para fora da zona de 500m?",
        options: [
            "As a Class 2, the operation must stopped. If was a DP Class 3, the operation should continue until the end.",
            "Stop operation and move away to outside 500m zone.",
            "Because de system is degraded, the operation must continue.",
            "The operation must be stopped, just in case of lost of redundancy. If the vessel still able to control position and heading, the operation must continue."
        ],
        correctAnswer: 1
    },
    {
        id: 155,
        question: "In 2008 new constructed vessels had to comply with new design requirements. What were the major changes made to the rules for DP class 2 vessels? Em 2008, as novas embarcações construídas tiveram que cumprir novos requisitos de projeto. Quais foram as principais mudanças feitas nas regras para embarcações DP classe 2?",
        options: [
            "3 VRUs.",
            "3 Gyrocompass.",
            "3 Anemometers.",
            "All the options are correct."
        ],
        correctAnswer: 3
    },
    {
        id: 156,
        question: "How many UPS should have each of the DP classes? Quantos no-breaks devem ter cada uma das classes DP?",
        options: [
            "1 UPS.",
            "2 UPSs.",
            "3 UPSs.",
            "2 UPSs + 1 UPS."
        ],
        correctAnswer: 1
    },
    {
        id: 157,
        question: "For a DP Class 2 vessel, in the event of failure of one sub-system, should at least one other system remain in operation and provide sufficient power for station keeping? Para uma embarcação DP Classe 2, no caso de falha de um subsistema, pelo menos um outro sistema deve permanecer em operação e fornecer energia suficiente para manutenção da estação?",
        options: [
            "A fail of one Sub system is not important.",
            "No.",
            "No for DP Class 2. Just if DP Class 3.",
            "Yes."
        ],
        correctAnswer: 3
    },
    {
        id: 158,
        question: "Why is a DP 2 vessel a preferable choice to charterers, when compared to DP 1? Por que uma embarcação DP 2 é uma escolha preferível aos afretadores, quando comparada a DP 1?",
        options: [
            "Because a DP2 is safer than a DP1.",
            "Because a DP2 will keep ability to control position and heading even after a WCF.",
            "All the options.",
            "Because DP 2 has redundancy and a DP1 no."
        ],
        correctAnswer: 2
    },
    {
        id: 159,
        question: "What does the acronym FMEA stand for? O que significa a sigla FMEA?",
        options: [
            "Failure Modes Engineer Analysis.",
            "Failure Maritime Engine Analysis.",
            "Failure Modes Effects Analysis.",
            "Fast Mechanic Express Action."
        ],
        correctAnswer: 2
    },
    {
        id: 160,
        question: "What document will the DPVM use as reference to better understand the consequences of failures in any redundant part of a DP system for DP 2 or 3 vessel? Qual documento o DPVM usará como referência para entender melhor as consequências de falhas em alguma parte redundante de um sistema DP para embarcação DP 2 ou 3?",
        options: [
            "ASOG.",
            "DP Manual.",
            "FMEA."
        ],
        correctAnswer: 2
    },
    {
        id: 161,
        question: "Why is it important for the DPVM to know the vessel's FMEA? Por que é importante para o DPVM conhecer o FMEA da embarcação?",
        options: [
            "To Know how many engineers should be on board and at duty.",
            "To know the company policy.",
            "To Know the vessel's WCF and WCFDI.",
            "It is not important to Know."
        ],
        correctAnswer: 2
    },
    {
        id: 162,
        question: "Describe in simple words what is the FMEA? Descreva em palavras simples o que é FMEA?",
        options: [
            "A document that explain the ship's contract.",
            "A document to explain how to do a safety Critical Activity.",
            "A systematic process for identifying potential design and process failures before they occur.",
            "A guide to know how to behaviour on board."
        ],
        correctAnswer: 2
    },
    {
        id: 163,
        question: "What is the main purpose of the FMEA? Qual é o principal objetivo do FMEA?",
        options: [
            "Give instructions of how to fix a problem on generators.",
            "Guide the DPVM how to prepare a Permit Work.",
            "To identify simple failures that, if they occurred, would cause the loss of the ability to automatically control the vessel's position.",
            "Indicate to Key DP Personnel on board how to do a safety Job."
        ],
        correctAnswer: 2
    },
    {
        id: 164,
        question: "For which DP classes is it mandatory to have FMEA? Para quais classes de DP é obrigatório ter FMEA?",
        options: [
            "Only Class 3.",
            "DP Class 2 and 3.",
            "Only Class 1.",
            "All DP classes."
        ],
        correctAnswer: 1
    },
    {
        id: 165,
        question: "What is the main intention of performing the FMEA tests? qual é a principal intenção de realizar os testes de FMEA?",
        options: [
            "To confirm the system's redundancy.",
            "To check if the vessel is tolerance to a single point failure in all DP components, systems and subsystems.",
            "All the options.",
            "Ensure that the theoretical analysis is correct on the FMEA document."
        ],
        correctAnswer: 1
    },
    {
        id: 166,
        question: "What is a FMEA Proving Trials? O que é um FMEA Proving Trials?",
        options: [
            "It is when the company that owns the vessel tries to prove in a meeting that the vessel meets the client's requirements.",
            "It is a document to guide the captain on how to receive outsourced companies on board.",
            "A series of controlled failure mode tests that are intended to prove the findings of the FMEA document, and eliminate any doubts about any theoretical analysis failure modes.",
            "Is a revision on the FMEA document."
        ],
        correctAnswer: 2
    },
    {
        id: 167,
        question: "When is it necessary to 'Retest' the FMEA? Quando é necessário 'Retestar' o FMEA?",
        options: [
            "When crew members change.",
            "When the vessel contractor change.",
            "When upon discovery of a fallout or the occurrence of an accident.",
            "Every 5 years a retest should be done."
        ],
        correctAnswer: 2
    },
    {
        id: 168,
        question: "Which organization and which document regulates the requirements for periodically testing the DP system? Qual organização e qual documento regula os requisitos para testar periodicamente o sistema de DP?",
        options: [
            "Circ.IMO1580.",
            "ASOG.",
            "IMCA M 182.",
            "IMCA M 166."
        ],
        correctAnswer: 3
    },
    {
        id: 169,
        question: "What is the name of the FMEA section that contain any information about how the vessel should be setup and operated for the best performance? Qual é o nome da seção FMEA que contém informações sobre como a embarcação deve ser configurada e operada para o melhor desempenho?",
        options: [
            "CAMO.",
            "DP Manual.",
            "Provin Trial.",
            "Retesting."
        ],
        correctAnswer: 0
    },
    {
        id: 170,
        question: "How often are the FMEA Proving Trials to be completed? Com que frequência os Testes de Prova de FMEA devem ser concluídos?",
        options: [
            "Every 5 months.",
            "Every 10 years.",
            "Every 5 years.",
            "Every year."
        ],
        correctAnswer: 2
    },
    {
        id: 171,
        question: "According to IMO MSC. 1/Circ. 1580, what means a 'Power System'? De acordo com IMO MSC. 1/Circ. 1580, o que significa um 'Sistema de Energia'?",
        options: [
            "Means all components and systems necessary to supply the DP system with power.",
            "Means only the Generators group.",
            "When we talk about Power System, we are talking about UPS.",
            "Power System is another name to Power Management System (PMS)."
        ],
        correctAnswer: 0
    },
    {
        id: 172,
        question: "According to IMO MSC. 1/Circ. 1580, what are the redundancy requirements for a DP Class 1 power system? De acordo com IMO MSC. 1/Circ. 1580, quais são os requisitos de redundância para um sistema de energia DP Classe 1?",
        options: [
            "the power system need be redundant with bus tie to split the switchboard.",
            "The power system need not be redundant, but in the engine room the generators must be separated by a A- 60 wall.",
            "The power system need not be redundant.",
            "The power system need be redundant."
        ],
        correctAnswer: 2
    },
    {
        id: 173,
        question: "According to IMO MSC. 1/Circ. 1580, what are the redundancy requirements for a DP Class 2 power system? De acordo com IMO MSC. 1/Circ. 1580, quais são os requisitos de redundância para um sistema de energia DP Classe 2?",
        options: [
            "The power system should be divisible into two or more systems.",
            "The power system need not be redundant, but in the engine room the generators must be separated by a A- 60 wall.",
            "The power system need not be redundant.",
            "The divided power system should be located in different spaces separated by A- 60 class divisions."
        ],
        correctAnswer: 0
    },
    {
        id: 174,
        question: "According to IMO MSC. 1/Circ. 1580, what are the redundancy requirements for a DP Class 3 power system? De acordo com IMO MSC. 1/Circ. 1580, quais são os requisitos de redundância para um sistema de energia DP Classe 3?",
        options: [
            "The power system need not be redundant.",
            "The divided power system should be located in different spaces separated by A- 60 class divisions.",
            "The power system(s) may be run as one (closed bus- tie) system during operation.",
            "The power system need not be redundant but the power system should be divisible into two or more systems."
        ],
        correctAnswer: 1
    },
    {
        id: 175,
        question: "By IMO MSC Circ 1580 requirements, is it mandatory that DP2 vessels operate with the 'open bus'? Pelas exigências da IMO MSC Circ 1580, é obrigatório que as embarcações DP2 operem com o 'ônibus aberto'?",
        options: [
            "No.",
            "The only vessel that has a Bus Tie Breaker is a DP Class 1.",
            "A DP Class 2 don't have a Bus Tie Breaker.",
            "Yes."
        ],
        correctAnswer: 0
    },
    {
        id: 176,
        question: "Why is it not recommended to close the bus tie breaker after a partial blackout on a DP class 2 vessel? Por que não é recomendado fechar o disjuntor de barramento após um blecaute parcial em uma embarcação DP classe 2?",
        options: [
            "Because the vessel is not a DP Class 1.",
            "Because a failures could be transferred from one system to another, including, but not limited to, overloading and short circuits.",
            "This recommendation doesn't exist. Chief engineer decide what is the right to do.",
            "Because this action is just recommended on DP Class 3."
        ],
        correctAnswer: 1
    },
    {
        id: 177,
        question: "What would be a reasonable startup order of generators after a partial blackout? Qual seria uma ordem razoável de partida dos geradores após um blecaute parcial?",
        options: [
            "At the remaining switchboard, start standby generators to guarantee enough power available.",
            "Wait the blackout recovery take action.",
            "Call the Captain and Chief engineer.",
            "Close the bus tie breaker."
        ],
        correctAnswer: 0
    },
    {
        id: 178,
        question: "Ventilation and HVAC for spaces containing equipment essential to DP should: Ventilação e HVAC para espaços contendo equipamentos essenciais para DP devem",
        options: [
            "Be designed to comply with the redundancy concept.",
            "Respect the company policy.",
            "Work just when necessary.",
            "Respect the client requirement only."
        ],
        correctAnswer: 0
    },
    {
        id: 179,
        question: "What should have inside a critical space where a cooling temperature is desired to the correct operation of equipments? O que deve ter dentro de um espaço crítico onde se deseja uma temperatura de resfriamento para o correto funcionamento dos equipamentos?",
        options: [
            "A portable air conditioning backup.",
            "A sensor to open the door automatically when high temperature happens.",
            "A temperature alarm and a backup temperature control system should be provided.",
            "All the time a engineer checking the temperature."
        ],
        correctAnswer: 2
    },
    {
        id: 180,
        question: "According to IMO requirements for DP equipment Class 2 and 3, what should be the consequences of a single failure in the engine room ventilation arrangements? De acordo com os requisitos da IMO para equipamentos de DP Classe 2 e 3, quais devem ser as consequências de uma única falha nos arranjos de ventilação da casa de máquinas?",
        options: [
            "If a ventilation fail nothing will occur on the engine room.",
            "It is not important.",
            "Probably will be the WCF of the DP Vessel.",
            "No single failure in the engine room ventilation arrangement should cause a loss of position or heading."
        ],
        correctAnswer: 3
    },
    {
        id: 181,
        question: "About the SW cooling system, should it comply with redundancy requirements for DP class 2 and 3 vessels? Sobre o sistema de resfriamento do SW, ele deve atender aos requisitos de redundância para embarcações DP classes 2 e 3?",
        options: [
            "No, cooling system is not part of redundancy system.",
            "No. Only for DP Class 1.",
            "Yes.",
            "Sometimes."
        ],
        correctAnswer: 2
    },
    {
        id: 182,
        question: "According IMO MSC Circ. 645 and 1580, for DP class 2 design, should SW and FW cooling pumps be supplied from different switchboards? De acordo com IMO MSC Circ. 645 e 1580, para projeto DP classe 2, as bombas de resfriamento SW e FW devem ser alimentadas por quadros diferentes?",
        options: [
            "No. That's not an IMO requirement, but a MTS requirement.",
            "No. Cooling pumps for generators main and backup should be powered from different redundancy groups as the generators.",
            "Yes. Cooling pumps for generators main and backup should be powered from the same redundancy groups as the generators.",
            "No. Cooling pumps for generators main and backup should be crossover- powered from the same redundancy groups as the generators."
        ],
        correctAnswer: 2
    },
    {
        id: 183,
        question: "What is to be installed in every SW cooling system to retain their efficiency and avoid sea chest fouling? O que deve ser instalado em cada sistema de resfriamento SW para manter sua eficiência e evitar incrustações no baú?",
        options: [
            "An effective anti bio fouling system should be installed.",
            "A pump to suck out the fouling.",
            "A sensor to lock the valve reducing the quantity on sea chest fouling.",
            "A Kalman Filter."
        ],
        correctAnswer: 0
    },
    {
        id: 184,
        question: "Does a partial blockage of the plate coolers for the SW cooling system affect redundancy? Um bloqueio parcial dos resfriadores de placa para o sistema de resfriamento do SW afeta a redundância?",
        options: [
            "Yes, because an overheating will be leading to a reduction of power available and effect on redundancy.",
            "No. There is no relationship.",
            "On a complete blockage."
        ],
        correctAnswer: 0
    },
    {
        id: 185,
        question: "What is included as a Compressed Air System? O que está incluso como Sistema de Ar Comprimido?",
        options: [
            "All the options.",
            "Service air.",
            "Control air.",
            "Starting air."
        ],
        correctAnswer: 0
    },
    {
        id: 186,
        question: "About the design of the Compressed Air System for a DP class 2 or 3 vessel, can a single failure result in consequences worse than the WCFDI? Sobre o projeto do Sistema de Ar Comprimido para uma embarcação DP classe 2 ou 3, uma única falha pode resultar em consequências piores do que o WCFDI?",
        options: [
            "No.",
            "Yes, If the vessel is DP Class 3.",
            "Yes, if the vessel is DP Class 2.",
            "Yes, if the vessel is DP Class 1."
        ],
        correctAnswer: 0
    },
    {
        id: 187,
        question: "It can be considered that the FO system has two main sections. What are they? Pode-se considerar que o sistema FO possui duas seções principais. O que eles são?",
        options: [
            "Fuel Oil Transfer system and Fuel Oil Service system.",
            "Filters and Pipes system, and Tanks and pumps system.",
            "Static FO system and Dynamic FO system.",
            "Pumps and Valves system, and Pipes and Tanks system."
        ],
        correctAnswer: 0
    },
    {
        id: 188,
        question: "It is well known by every vessel maintainer that many vessels' WCF are associated with the fuel oil system. What option best explains why contaminated fuel oil is a major problem? É bem conhecido por todos os mantenedores de embarcações que o WCF de muitas embarcações está associado ao sistema de óleo combustível. Qual opção melhor explica por que o óleo combustível contaminado é um grande problema?",
        options: [
            "Because it can affect the reliability of main engines.",
            "Because it can defeat the redundancy concept.",
            "All options are correct.",
            "Because it can affect the reliability of generators."
        ],
        correctAnswer: 2
    },
    {
        id: 189,
        question: "Can there be crossover valves connecting both day tanks? Should they be open or closed during DP class 2 and 3 operations? Pode haver válvulas cruzadas conectando os dois tanques diurnos? Eles devem estar abertos ou fechados durante as operações DP classe 2 e 3?",
        options: [
            "No. Close.",
            "Yes. Closed.",
            "No. Open.",
            "Yes. Open."
        ],
        correctAnswer: 1
    },
    {
        id: 190,
        question: "Can 2 engines share the same closing fuel valve actuator? 2 motores podem compartilhar o mesmo atuador da válvula de combustível de fechamento?",
        options: [
            "Quick closing fuel valve actuators must be installed per switchboard.",
            "Quick closing fuel valve actuators must be installed per engine.",
            "Yes, it is not a problem.",
            "Just on DP Class 1."
        ],
        correctAnswer: 1
    },
    {
        id: 191,
        question: "Can a single LO system be shared with 2 engines? Um único sistema LO pode ser compartilhado com 2 motores?",
        options: [
            "Sometimes. If the company procedure agree with it.",
            "No. Lube oil systems for engines should be associated with one engine only.",
            "Yes. A single Lub Oil System can be associated with all engines.",
            "Yes. Just on Vessel DP Class 1."
        ],
        correctAnswer: 1
    },
    {
        id: 192,
        question: "Why cross connections between engines using common LO systems are not allowed? Por que conexões cruzadas entre motores usando sistemas LO comuns não são permitidas?",
        options: [
            "All the options.",
            "It is allowed and is recommended do this to make the system be more versatile.",
            "It is allowed to use less Lub oil all over the system.",
            "Because a cross connection can lead to condition worst that WCF."
        ],
        correctAnswer: 3
    },
    {
        id: 193,
        question: "What is the worst problem that can be caused by loss of LO pressure? Qual é o pior problema que pode ser causado pela perda de pressão I.O?",
        options: [
            "A pressure reduction on the system.",
            "Nothing wrong will happen.",
            "Stop the engine.",
            "Sound a low pressure alarm."
        ],
        correctAnswer: 2
    },
    {
        id: 194,
        question: "What option best completes the table? Category: Speed Range / Application: High Speed 300 - 1400 rpm / Auxiliary and emergency generator; Low Speed < 300 rpm / Mains, auxiliary and emergency generators or Main propulsion engines",
        options: [
            "> 1000rpm / Lower Speed / Tunnel Thruster Engines.",
            "> 1090rpm / Over Speed / Main Propulsion Engines.",
            "> 1400rpm / Medium Speed / Main Propulsion Engines.",
            "> 1400rpm / Medium Speed / Auxiliary Engines."
        ],
        correctAnswer: 3
    },
    {
        id: 195,
        question: "What are the class notation redundancy requirements? Quais são os requisitos de redundância de notação de classe?",
        options: [
            "Fuly fault tolerant in relation to the defined failure criteria.",
            "All the options.",
            "Main machinery is independent to the maximum extent feasible.",
            "Redundant systems are clearly defined and well separated."
        ],
        correctAnswer: 1
    },
    {
        id: 196,
        question: "What is the highest risk of a power generation system designed with a large number of shared components or connections? Qual é o maior risco de um sistema de geração de energia projetado com um grande número de componentes ou conexões compartilhadas?",
        options: [
            "The vessel with this redundancy concept will have less chance to get a contract.",
            "The vessel has more chance to lose a equipment.",
            "Higher fuel consumption.",
            "The system is susceptible to failures that could exceed Worst Case Failure Design Intent (WCFDI)."
        ],
        correctAnswer: 3
    },
    {
        id: 197,
        question: "What voltages are typically generated by a DP power plant, LVS and MVS? Quais tensões são tipicamente geradas por uma usina DP, LVS e MVS?",
        options: [
            "6.6 kV and 11 kV.",
            "220V and 11kV.",
            "24V and 220V.",
            "440V,480V,4160V,6600V."
        ],
        correctAnswer: 3
    },
    {
        id: 198,
        question: "Can a DP Class 2 vessel have a single bus- tie breaker between switchboards? Uma embarcação DP Classe 2 pode ter um único disjuntor de barramento entre quadros de distribuição?",
        options: [
            "Yes.",
            "No, on a Class 2 has to be 2 Bus tie.",
            "No, Bus tie breaker is necessary only on DP Class 3.",
            "Sometimes. It is a vessel owner decision."
        ],
        correctAnswer: 1
    },
    {
        id: 199,
        question: "Select the option that better describes what is 'spinning reserve'? Selecione a opção que melhor descreve o que é 'reserva giratória'?",
        options: [
            "Is a device that makes the state of two or more mechanisms or functions mutually dependent.",
            "Is the reserve generating capacity in an electrical power system that can be available immediately.",
            "Is the total amount of power available with the generators online.",
            "Is the most basic function of a PMS, where it will start or stop generators accordingly to the load needed."
        ],
        correctAnswer: 1
    },
    {
        id: 200,
        question: "Select the option that better describes the concept of 'power available'. Selecione a opção que melhor descreve o conceito de 'potência disponível'.",
        options: [
            "Is the total amount of power available with the generators online.",
            "Is the reserve of power at any given time.",
            "Is the reserve generating capacity in an electrical power system that can be available immediately.",
            "Is the power that the vessel is able to make available."
        ],
        correctAnswer: 0
    },
    {
        id: 201,
        question: "What is the PMS function that continually monitors the Available Power? Qual é a função do PMS que monitora continuamente a Potência Disponível?",
        options: [
            "Load Dependent Start/Stop.",
            "Load Shedding.",
            "Power Monitoring.",
            "Phaseback."
        ],
        correctAnswer: 2
    },
    {
        id: 202,
        question: "Why in most of DP class 2 systems each bus load is limited to 90%? Por que na maioria dos sistemas DP classe 2 cada carga de barramento é limitada a 90%?",
        options: [
            "To prevent damage of generators.",
            "To reduce the fuel consumption.",
            "To became more operational.",
            "To make the client happy."
        ],
        correctAnswer: 0
    },
    {
        id: 203,
        question: "Is the capability plot affected by the number of generators online? Why? O gráfico de capacidade é afetado pelo número de geradores online? Por que?",
        options: [
            "Yes, because less generator means less Power Available.",
            "No. There is no relationship between Capability Plot and Generators available.",
            "Yes, because the vessel will consume less fuel and reduce the gas emission.",
            "No. The Capability plot is only affected by weather condition."
        ],
        correctAnswer: 0
    },
    {
        id: 204,
        question: "What is Load Shedding? What is the other name used to define it? O que é Redução de Carga? Qual é o outro nome usado para defini lo?",
        options: [
            "Load Shedding or Available Power. Is the reserve generating capacity in an electrical power system that can be available immediately.",
            "Load Shedding or Auto Start/Stop. Is the most basic function of a PMS, where it will start or stop generators accordingly to the load needed.",
            "Load Shedding or Preferential Tipping. Is the action to reduce the load, to avoid excessive load, on the generating plant by tripping non- essential consumers.",
            "Load Shedding or PMS. Is a function that ensures the correct number of generators connected to the bus according to the load demand required by the DP system."
        ],
        correctAnswer: 2
    },
    {
        id: 205,
        question: "What is a Switchboard by definition? O que é um Painel de Controle por definição?",
        options: [
            "Is a component which provide a protective circuit breaker or fuse for each circuit in a common enclosure.",
            "Is a component which divides an electrical power feed into branch circuits.",
            "Is a component of an electrical distribution system.",
            "All the options."
        ],
        correctAnswer: 3
    },
    {
        id: 206,
        question: "What is an interlock? O que é um bloqueio?",
        options: [
            "Is a dispositive whose provide an alternate source of AC power to equipment at various voltage levels.",
            "Is all keys that lock the doors inside superstructure.",
            "Is a system that lock the DP buttons to avoid mistake action from DPO.",
            "Is a device that makes the state of two or more mechanisms or functions mutually dependent."
        ],
        correctAnswer: 3
    },
    {
        id: 207,
        question: "What option indicate a type of interlock? Que opção indica um tipo de intertravamento?",
        options: [
            "Mechanical.",
            "Logical.",
            "Hardwired.",
            "All the options."
        ],
        correctAnswer: 3
    },
    {
        id: 208,
        question: "What is the Automatic Changeover purpose? Qual é a finalidade da Mudança Automática?",
        options: [
            "To provide an alternate source of AC power to equipment at various voltage levels.",
            "A system that automatically swap the vessel from DP to manual mode.",
            "The purpose is to makes any change easier and faster.",
            "It is a Kind of company policy that determine how to change a Captain or chief engineer automatically if one of this leaders makes a big mistake."
        ],
        correctAnswer: 0
    },
    {
        id: 209,
        question: "Define in simple words what is the Load Balance Study. Defina em palavras simples o que é o Estudo de Balanceamento de Carga.",
        options: [
            "Is a study to shows the power consumed under various operating conditions.",
            "Is a study to know the vessel load line.",
            "Is a study to find what is the best position of cargo on deck to get a good vessel stability.",
            "Is the study to check the electrical cargo on the UPS."
        ],
        correctAnswer: 0
    },
    {
        id: 210,
        question: "Why is it important to use thermal imaging to inspect a switchboard? Por que é importante usar imagens térmicas para inspecionar um quadro de distribuição?",
        options: [
            "To verify is the Bus tie breaker is open or close.",
            "Thermal imaging inspections can show heat dissipations in the system components indicating areas which could cause failures.",
            "Because is possible to check the hot spots and find where is the best part of a switchboard.",
            "To check if the temperature on the compartment is inside a acceptable parameters."
        ],
        correctAnswer: 1
    },
    {
        id: 211,
        question: "What is the main Bus-tie breaker? Qual é o disjuntor principal do Bus tie?",
        options: [
            "Is any kind of fault on the analogue interface.",
            "Is the main circuit breaker between the main sections of the switchboard.",
            "Is a Breaker selectivity study.",
            "Is the section of the switchboards, also known as Bus Bar."
        ],
        correctAnswer: 1
    },
    {
        id: 212,
        question: "What IMO MSC. 1/Circ. 1580 item 3.2.3 says about bus tie breaker on DP Class 2? O que IMO MSC. 1/Circ. 1580 item 3.2.3 diz sobre disjuntor de interligação de barramento em DP Classe 2?",
        options: [
            "Should not be arranged by bus-tie breaker(s), just on DP class 3.",
            "Should be arranged by bus-tie breaker(s) to separate the systems automatically upon failures which could be transferred from one system to another.",
            "Should be arranged by bus-tie breaker(s) to separate the systems automatically and must be kept open while on DP operation.",
            "Should have at least 2 Bus tie Breakers."
        ],
        correctAnswer: 1
    },
    {
        id: 213,
        question: "According to IMO guidelines (IMO MSC/Circ. 1580) What DP class vessels should operate with main bus-tie breakers be open? De acordo com as diretrizes da IMO (IMO MSC/Circ. 1580) Quais embarcações da classe DP devem operar com os disjuntores principais abertos?",
        options: [
            "All options are correct.",
            "DP Class 3."
        ],
        correctAnswer: 0
    },
    {
        id: 214,
        question: "Why is it safer to operate with open bus- tie instead of closed bus- tie? Por que é mais seguro operar com conexões de barramento abertas em vez de conexões de barramento fechadas?",
        options: [
            "Because will reduce the fuel consumption.",
            "Because if a fault happens, it won't propagate to another switchboard.",
            "Because the ship will sail faster than if closed.",
            "Because on this you have more power at the system."
        ],
        correctAnswer: 1
    },
    {
        id: 215,
        question: "How/where the DP Vessel Maintainer can check if the vessel should operated with open or closed Bus- tie? Como/onde o mantenedor da embarcação DP pode verificar se a embarcação deve operar com barramento aberto ou fechado?",
        options: [
            "According to offshore unit decision.",
            "In the DP Operators Manual.",
            "In the CAMO of the FMEA document.",
            "Asking to the captain for guidance."
        ],
        correctAnswer: 2
    },
    {
        id: 216,
        question: "How the Bus- tie of a DP class 3 vessel should be setup prior to enter the 500 meter zone? Como deve ser configurado o Bus- tie de uma embarcação DP classe 3 antes de entrar na zona de 500 metros?",
        options: [
            "Open.",
            "With load dependent function (Auto Start - Stop) enabled.",
            "Closed.",
            "According to Client requirements."
        ],
        correctAnswer: 0
    },
    {
        id: 217,
        question: "When conducting DP class 2 operations next to a surface installation, can the engineer close the main bus- tie after the occurrence of the WCF? Ao realizar operações de DP classe 2 próximo a uma instalação de superfície, o engenheiro pode fechar o barramento principal após a ocorrência do WCF?",
        options: [
            "No.",
            "Follow up FMEA document.",
            "According captain's standing orders.",
            "Yes."
        ],
        correctAnswer: 0
    },
    {
        id: 218,
        question: "What option better describes the Breaker Selectivity Study and where can it be found? Qual opção melhor descreve o estudo de seletividade do disjuntor e onde ele pode ser encontrado?",
        options: [
            "It is a computer simulation that identifies the order the major breakers will trip during different fault scenarios and should be part of the FMEA.",
            "A study to determine the position sequence of all bus tie breakers on board. DP Manual.",
            "A study to determine when the vessel should stop a operation and move away. Company Procedure.",
            "Is a study to determine what is the best bus tie breaker. Found on the ASOG."
        ],
        correctAnswer: 0
    },
    {
        id: 219,
        question: "Correctly indicate what kind of Power Plant Topology is represented by the image bellow. *(Asymmetric Two-way Split)*",
        options: [
            "Combined Mechanical and Electric DP Power Plant - Hybrid.",
            "Asymmetric Two-way Split.",
            "Three- way Split.",
            "Transferable or Dual Fed Thrusters."
        ],
        correctAnswer: 1
    },
    {
        id: 220,
        question: "Correctly indicate what kind of Power Plant Topology is represented by the image bellow. *(Three-way Split)*",
        options: [
            "Combined Mechanical and Electric DP Power Plant - Hybrid.",
            "Asymmetric Two- way Split.",
            "Three- way Split.",
            "Transferable or Dual Fed Thrusters."
        ],
        correctAnswer: 2
    },
    {
        id: 221,
        question: "Correctly indicate what kind of Power Plant Topology is represented by the image bellow. *(Transferable or Dual Fed Thrusters)*",
        options: [
            "Three- way Split.",
            "Combined Mechanical and Electric DP Power Plant - Hybrid.",
            "Asymmetric Two- way Split.",
            "Transferable or Dual Fed Thrusters."
        ],
        correctAnswer: 3
    },
    {
        id: 222,
        question: "Correctly indicate what kind of Power Plant Topology is represented by the image bellow. *(Combined Mechanical and Electric DP Power Plant - Hybrid)*",
        options: [
            "Asymmetric Two- way Split.",
            "Transferable or Dual Fed Thrusters.",
            "Combined Mechanical and Electric DP Power Plant - Hybrid.",
            "Three- way Split."
        ],
        correctAnswer: 2
    },
    {
        id: 223,
        question: "What option below is an purpose of an UPS in the DP System? Qual opção abaixo é uma finalidade de um UPS no Sistema DP?",
        options: [
            "Split the main switchboard to guarantee redundancy.",
            "Continuity of power during main power system outage for at least 30min.",
            "All the options.",
            "Feed heavy consumers as Thrusters and Generators."
        ],
        correctAnswer: 1
    },
    {
        id: 224,
        question: "For what purpose the UPS has a bypass function? Para que finalidade a UPS tem uma função de bypass?",
        options: [
            "Tool used to bypass the system and feed the 24V equipments directly from the MVS.",
            "System to give to the engineer the option to choice with UPS use when necessary.",
            "To supply the load from the mains if the UPS system needs to be isolated for repairs or maintenance works.",
            "Bypass the ECR to the Bridge."
        ],
        correctAnswer: 2
    },
    {
        id: 225,
        question: "A DP Control System (Control Computers, Operator Stations, etc) is protected against a main power failure or fluctuations of the ship's main power supply by: Um Sistema de Controle de DP (Computadores de Controle, Estações do Operador, etc.) é protegido contra uma falha de energia principal ou flutuações da fonte de alimentação principal do navio por:",
        options: [
            "PMS.",
            "PRS.",
            "UPS.",
            "HPR."
        ],
        correctAnswer: 2
    },
    {
        id: 226,
        question: "According to IMO MSC/Circ. 645 of 1994, for what time period should an Uninterruptible Power Supply (UPS) battery system power the DP computer system following a mains supply failure? De acordo com IMO MSC/Circ. 645 de 1994, por quanto tempo um sistema de bateria de fonte de alimentação ininterrupta (UPS) deve alimentar o sistema de computador DP após uma falha de energia elétrica?",
        options: [
            "30 minutes.",
            "30 days.",
            "30 seconds.",
            "30 hours."
        ],
        correctAnswer: 0
    },
    {
        id: 227,
        question: "Exemplify what components of a DP system will be powered by the an UPS in case of blackout. Exemplifique quais componentes de um sistema DP serão alimentados por um UPS em caso de blackout.",
        options: [
            "Control Computers and Operator Stations.",
            "All the options.",
            "PRS systems.",
            "Gyrocompass."
        ],
        correctAnswer: 1
    },
    {
        id: 228,
        question: "How is possible improve the reliability of a field station? Como é possível melhorar a confiabilidade de uma estação de campo?",
        options: [
            "By providing a infinite supply.",
            "By providing a single supply.",
            "It is reasonable to want to improve the reliability of the field station by providing dual supplies.",
            "É razoável querer melhorar a confiabilidade da estação de campo fornecendo suprimentos duplos."
        ],
        correctAnswer: 2
    },
    {
        id: 229,
        question: "What option indicate a category of UPS applications. Qual opção indica uma categoria de aplicativos UPS.",
        options: [
            "All the options.",
            "Control System.",
            "Safety and emergency systems.",
            "Communication system."
        ],
        correctAnswer: 0
    },
    {
        id: 230,
        question: "What is the risk of having cross connections in the 24V system of a DP Vessel? Qual o risco de haver conexões cruzadas no sistema 24V de uma embarcação DP?",
        options: [
            "A fault in one system can contaminate all 24v supplies and thruster controls.",
            "There is no risk.",
            "Will be possible feed all DP equipments with one UPS, reducing the owner coast."
        ],
        correctAnswer: 0
    },
    {
        id: 231,
        question: "What is Network Storm - 'Netstorm'? O que é Network Storm - 'Netstorm'?",
        options: [
            "Is a kind of viruses that contaminate the DP System.",
            "Is when the captain receive a note of storm by email.",
            "Is a high flow of information throw the network system.",
            "Is when the network stops working due to overload."
        ],
        correctAnswer: 2
    },
    {
        id: 232,
        question: "Azimuth thruster ready signal received in DP controller is of the following type: O sinal pronto do propulsor azimutal recebido no controlador DP é do seguinte tipo:",
        options: [
            "Digital input.",
            "Digital output.",
            "Analog output.",
            "Analog input."
        ],
        correctAnswer: 0
    },
    {
        id: 233,
        question: "How many digital signal input is possible to have? Quantas entradas de sinal digital é possível ter?",
        options: [
            "-10V to 10V.",
            "4 to 20 mA.",
            "0V to 10V.",
            "0 or 1."
        ],
        correctAnswer: 3
    },
    {
        id: 234,
        question: "What option below indicate an example of digital input. Qual opção abaixo indica um exemplo de entrada digital.",
        options: [
            "Pump running.",
            "Ready Signal.",
            "Bus tie breaker.",
            "All the options."
        ],
        correctAnswer: 3
    },
    {
        id: 235,
        question: "What is Interface Unit? O que é Unidade de Interface?",
        options: [
            "Is component which independent and often unrelated systems meet and act on or communicate with each other.",
            "Is the interface on the Engine room between two different pumps.",
            "Is a Unit that connect the the seachest to the pipes.",
            "Is the interface between engine room and bridge to bring a unit on board."
        ],
        correctAnswer: 0
    },
    {
        id: 236,
        question: "How many Ethernet networks does a Class DP1 have? Quantas redes Ethernet tem um Classe DP1?",
        options: [
            "None.",
            "At least 2.",
            "At least 3.",
            "At least 1."
        ],
        correctAnswer: 3
    },
    {
        id: 237,
        question: "How many Ethernet networks a Class DP2 or 3 have? Quantas redes Ethernet tem uma Classe DP2 ou 3?",
        options: [
            "At least 1.",
            "None.",
            "At least 3.",
            "At least 2."
        ],
        correctAnswer: 3
    },
    {
        id: 238,
        question: "What is an Analog Signal? O que é um sinal analógico?",
        options: [
            "Is any continuous signal for which the time- varying feature of the signal is a representation of some other time- varying quantity.",
            "Is the Signal transmitted by the internal telephone.",
            "Is internet signal on board.",
            "Is the kind of signal transmitted by a PRS Laser (Cyscan or Fanbeam)."
        ],
        correctAnswer: 0
    },
    {
        id: 239,
        question: "What kind of different analogue signals associated with DP control systems can be used? Que tipos de sinais analógicos diferentes associados aos sistemas de controle DP podem ser usados?",
        options: [
            "All the options.",
            "0 to + 10V.",
            "4 to 20mA.",
            "- 10 to +10V."
        ],
        correctAnswer: 0
    },
    {
        id: 240,
        question: "Write down 3 examples of Analog signal input in the DP system: Anote 3 exemplos de entrada de sinal analógico no sistema DP:",
        options: [
            "Rotation feedback.",
            "All the options.",
            "Pitch feedback.",
            "Generators load (kw)."
        ],
        correctAnswer: 1
    },
    {
        id: 241,
        question: "RPM feedback signal to the DP controller/process station is? O sinal de feedback de RPM para o controlador DP/estação de processo é?",
        options: [
            "Digital input.",
            "Analog input.",
            "Analog output.",
            "Digital output."
        ],
        correctAnswer: 1
    },
    {
        id: 242,
        question: "KW load on the switchboard to the DP system is an Analog or Digital signal? Carga de KW na central para o sistema DP é um sinal Analógico ou Digital?",
        options: [
            "Analog input.",
            "Analog output.",
            "Digital input.",
            "Digital output."
        ],
        correctAnswer: 0
    },
    {
        id: 243,
        question: "What is serial communication: O que é comunicação serial:",
        options: [
            "Is the communication made by the captain to the crew explaining that some thing wrong happened.",
            "Is a sequence of communication sent to the office every day, as a daily report.",
            "Is the process of sending data one bit at a time, sequentially, over a communication channel or computer bus.",
            "Is the communication between bridge and offshore structure."
        ],
        correctAnswer: 2
    },
    {
        id: 244,
        question: "What is NMEA? O que é NMEA?",
        options: [
            "Navigation Maritime Echosonder Auxiliar.",
            "National Marine Electronics Association. Defines the various internal message formats transmitted.",
            "November Mike Echo Alpha. Nautical Marine Evidence Association. Is a procedure to register any kind of accident."
        ],
        correctAnswer: 1
    },
    {
        id: 245,
        question: "What is the 'Baud Rate' in a NMEA string? Qual é a 'taxa de transmissão' em uma string NMEA?",
        options: [
            "Is the frequency of wrong strings happen.",
            "Is the band used in a communication.",
            "Is the barrier of a communication.",
            "Is the speed of the communication between the transmitter and the receiver (4800)."
        ],
        correctAnswer: 3
    },
    {
        id: 246,
        question: "Should the DP system provide means to the DPO / DPVM to monitor Digital and Analog signals (inputs and outputs)? O sistema DP deve fornecer meios para que o DPO/DPVM monitore sinais digitais e analógicos (entradas e saídas)?",
        options: [
            "Yes, the DPOs can monitor those informations.",
            "No, the Remote Monitoring System (RMC), on shore are the responsible to check this.",
            "No, it is not necessary.",
            "No, the responsible person to check this is the engineer using a multimeter."
        ],
        correctAnswer: 0
    },
    {
        id: 247,
        question: "What is a PMS? O que é um PMS?",
        options: [
            "Power Management System.",
            "Propulsion Main System.",
            "Power Master Superior.",
            "Power Marine System."
        ],
        correctAnswer: 0
    },
    {
        id: 248,
        question: "What is the purpose of a PMS? Qual é o propósito de um PMS?",
        options: [
            "Generate, provide, and guarantee the continuity of the energy supply to the DP System.",
            "Reduce the fuel consumption.",
            "Control the vessel main propulsion.",
            "Generate, provide, and guarantee the continuity of the energy supply to the Thrusters, only."
        ],
        correctAnswer: 0
    },
    {
        id: 249,
        question: "For DP Class 2 and 3, how many PMS should be provided? Para DP Class 2 e 3, quantos PMS devem ser fornecidos?",
        options: [
            "At least 3.",
            "As much as possible.",
            "At least 2.",
            "At least one."
        ],
        correctAnswer: 3
    },
    {
        id: 250,
        question: "What are two class requirements for DP Class 2 vessels to guarantee the redundancy concept remains intact, guarding the vessel against power shortages, blackouts and preventing vessel driftoff in case of WCF occurs? Quais são dois requisitos de classe para embarcações DP Classe 2 para garantir que o conceito de redundância permaneça intacto, protegendo a embarcação contra escassez de energia, blecautes e prevenindo a deriva da embarcação em caso de WCF?",
        options: [
            "Power Management Systems and Consequence Analysis.",
            "At least 4 PRS with different principle.",
            "A very good Alarm System.",
            "A competente Chief engineer on the engine room."
        ],
        correctAnswer: 0
    },
    {
        id: 251,
        question: "What is the main function of the Power Management System? Qual é a função principal do Sistema de Gerenciamento de Energia?",
        options: [
            "Reduce fuel consumption.",
            "Avoid overload and prevent blackout.",
            "Makes the critical operation run faster.",
            "Make the Chief engineer rest in peace."
        ],
        correctAnswer: 1
    },
    {
        id: 252,
        question: "In order to perform its primary functions, the PMS must interact with many different systems and subsystems on the vessel. That said, PMS can be divide into two different main groups: Para realizar suas funções primárias, o PMS deve interagir com muitos sistemas e subsistemas diferentes na embarcação. Dito isso, o PMS pode ser dividido em dois grupos principais diferentes:",
        options: [
            "The PMS integration with Cooling system.",
            "The PMS integration with the DP system.",
            "The PMS integration with Alarms systems.",
            "The PMS integration with Main FO system.",
            "The PMS integration with Main switchboard system.",
            "The PMS integration with FMEA.",
            "The PMS integration with the ship's Automation system.",
            "The PMS integration with Position Reference systems."
        ],
        correctAnswer: 1
    },
    {
        id: 253,
        question: "What is Thruster Phaseback? O que é Thruster Phaseback?",
        options: [
            "Nothing to be worried about.",
            "It is a method utilised to stabilise the power plant following an event, avoiding a black- out. It will temporarily reduce electrical power for thrusters, until additional generators are brought online.",
            "A blackout.",
            "The OOW will call do chief engineer to inform the event a swap the ASOG status to blue."
        ],
        correctAnswer: 1
    },
    {
        id: 254,
        question: "What is a Load Dependent - Start/Stop? O que é um Load Dependent - Start/Stop?",
        options: [
            "Is system the estimate how the system depends from the DP System.",
            "Is a kind of Risk Assessment to check if is safe or not, start a maintenance.",
            "A PMS function that automatically start or stop a generator if necessary.",
            "A function on the stability program to verify if is possible or not, load more cargo on deck."
        ],
        correctAnswer: 2
    },
    {
        id: 255,
        question: "What is a Load Shedding? O que é um Load Shedding?",
        options: [
            "Also know as preferential tripping. Is the action to reduce the load, especially the interruption of an electricity supply to non essential loads such as hotel load.",
            "Is the estimated load on the main deck.",
            "A function on the stability program to verify if is possible or not, discharge water ballast.",
            "Is a kind of Risk Assessment to check if is possible start another generator."
        ],
        correctAnswer: 0
    },
    {
        id: 256,
        question: "What are the three potential fail safe conditions for thrusters? Quais são as três condições de fail safe potenciais para propulsores?",
        options: [
            "Fail to zero thrust.",
            "motor stop.",
            "Fail as set.",
            "All the options."
        ],
        correctAnswer: 3
    },
    {
        id: 257,
        question: "Is it acceptable that a Controllable Pitch Propeller fails to full force? É aceitável que uma Hélice de Passo Controlável falhe em força total?",
        options: [
            "Is not acceptable, but can happen.",
            "Sometimes is acceptable.",
            "Just when the vessel is a DP Class 2."
        ],
        correctAnswer: 0
    },
    {
        id: 258,
        question: "Should there be an individual emergency stop for each thruster? Is that a class requirement according to IMO MSC.1/Circ. 1580 or just an IMCA guideline? Deve haver uma parada de emergência individual para cada propulsor? Isso é um requisito de classe de acordo com IMO MSC.1/Circ. 1580 ou apenas uma diretriz IMCA?",
        options: [
            "Yes. It is an IMO class requirement.",
            "No. It is an IMO class requirement.",
            "Yes. It is an IMCA guideline.",
            "No. It is an IMCA guideline."
        ],
        correctAnswer: 0
    },
    {
        id: 259,
        question: "According to IMO MSC.1/Circ. 1580, should the E-Stop work: De acordo com IMO MSC.1/Circ. 1580, o E-Stop deve funcionar:",
        options: [
            "In any mode of operation except Joystick mode.",
            "Only when in Manual mode.",
            "In any mode of operation.",
            "Only when on DP."
        ],
        correctAnswer: 2
    },
    {
        id: 260,
        question: "Is it mandatory to every DP vessel to have a maintenance manual for the DP system and PRS? É obrigatório que toda embarcação DP tenha um manual de manutenção para o sistema DP e PRS?",
        options: [
            "Yes, all equipment must have a maintenance manual.",
            "Only if vessel equipped with PRS Relative.",
            "No, it is not necessary.",
            "Only if vessel equipped with PRS Global."
        ],
        correctAnswer: 0
    },
    {
        id: 261,
        question: "Is it mandatory to have a DP Operator Manual for each DP vessel? É obrigatório ter um Manual do Operador DP para cada embarcação DP?",
        options: [
            "Yes all vessel must have a DP operator manual.",
            "Just if the client require.",
            "Just if the company require.",
            "A DP vessel doesn't need a DP Operator Manual. The DPO is the Manual."
        ],
        correctAnswer: 0
    },
    {
        id: 262,
        question: "What is Management of change (MOC)? O que é Gerenciamento de Mudanças (MOC)?",
        options: [
            "A planned approach for evaluating and managing temporary or permanent changes to ensure that safety, environmental and quality standards are not compromised.",
            "Is how the DPO managed a change command from Manual to DP.",
            "Is a procedure given when a duty handover happen.",
            "Is a planned action to be taken every time the DP Vessel changes position."
        ],
        correctAnswer: 0
    },
    {
        id: 263,
        question: "Which documents have to be revised if the original configuration of DP System is changed? Quais documentos devem ser revisados se a configuração original do Sistema DP for alterada?",
        options: [
            "ASOG.",
            "All the options.",
            "FMEA.",
            "DP Manual."
        ],
        correctAnswer: 1
    },
    {
        id: 264,
        question: "According to IMO MSC.1/Circ. 1580, what are the ER manning recommendations? De acordo com IMO MSC.1/Circ. 1580, quais são as recomendações de pessoal da casa de máquinas?",
        options: [
            "Is recommended that the chief engineer never leaves the ER, even during rest time.",
            "Engine Room can be unguarded any time.",
            "The Engine Room should be manned at all times.",
            "The OOW has to be at the bridge and an oiler in the engine room."
        ],
        correctAnswer: 2
    },
    {
        id: 265,
        question: "Why is so important that equipment maintenance shall not be conducted during DP operations? Por que é tão importante que a manutenção de equipamentos não seja conduzida durante as operações de DP?",
        options: [
            "Because the chief engineer need to be on the main deck.",
            "Because the captain forbade.",
            "There is no problem to do an equipment maintenance during DP Operation.",
            "Because the maintenance can lead to loss of redundancy."
        ],
        correctAnswer: 3
    },
    {
        id: 266,
        question: "According to IMCA guidelines, what is the procedure if you must conduct urgent maintenance in a DP equipment while the vessel is on DP? De acordo com as diretrizes IMCA, qual é o procedimento se você deve conduzir manutenção urgente em um equipamento DP enquanto a embarcação está em DP?",
        options: [
            "Disable DP System and work manually.",
            "Send a email to Manage Operation.",
            "Call the captain.",
            "Open a permit work for maintenance when on DP."
        ],
        correctAnswer: 3
    },
    {
        id: 267,
        question: "What is Remote Monitoring? O que é Monitoramento Remoto?",
        options: [
            "Is a system that makes the Chief engineer monitor the engine room from the cabin.",
            "A system that monitor the performance, status and location of the vessel, in addition to identifying and generating electronic notifications.",
            "Are all the cameras installed on board to monitor.",
            "Is the remote control used to change the channel on the TV."
        ],
        correctAnswer: 1
    },
    {
        id: 268,
        question: "Can shore DPVM staff use remote access to fix a problem on the DP system or PMS during a DP operation? A equipe DPVM em terra pode usar acesso remoto para corrigir um problema no sistema DP ou PMS durante uma operação DP?",
        options: [
            "Yes, anytime.",
            "Just with captain's authorization.",
            "Just with captain's and engineer's authorization.",
            "Not during DP operation inside 500m."
        ],
        correctAnswer: 3
    },
    {
        id: 269,
        question: "The acronym or term ASOG stands for: O acrônimo ou termo ASOG significa:",
        options: [
            "Activity Source Of Guide.",
            "Action Specific Over Guideline.",
            "All Search Of Guide.",
            "Activity Specific Operating Guideline."
        ],
        correctAnswer: 3
    },
    {
        id: 270,
        question: "Which of the following are documents used by the DP Assurance department to create an ASOG? Select as many options as necessary. Quais dos seguintes são documentos usados pelo departamento de Garantia DP para criar um ASOG? Selecione quantas opções forem necessárias.",
        options: [
            "IMCA and MTS publications and guidances.",
            "Client needs, contract and specifications.",
            "DPC requirements for outlaws.",
            "TSA requirements for taxes and fees.",
            "The Vessel DP Particular Operations Manual.",
            "Lessons learned from DP Station Keeping Events.",
            "The DP FMEA, Proving Trials, and Annual Trials.",
            "The Company DP Operations Manual."
        ],
        correctAnswer: 0
    },
    {
        id: 271,
        question: "Where must the ASOG be displayed on board? Onde deve o ASOG ser exibido a bordo?",
        options: [
            "At the office.",
            "Bridge and ECR.",
            "On main deck.",
            "Just at the bridge."
        ],
        correctAnswer: 1
    },
    {
        id: 272,
        question: "What is the acronym CAMO? O que significa o acrônimo CAMO?",
        options: [
            "Critical Activity Mode of Operation.",
            "Critical Activity Master Orders.",
            "Compressor Air Machine Oil.",
            "Combustion Air Main Option."
        ],
        correctAnswer: 0
    },
    {
        id: 273,
        question: "Select the items of essential procedures when planning a DP operation? Selecione os itens de procedimentos essenciais ao planejar uma operação DP?",
        options: [
            "Use the DP setup checklist as guidance and aid to memory.",
            "Setup PMS according to CAMO.",
            "Test all equipments.",
            "Conduct a full hazard identification and risk assessment.",
            "Plan a reliable Scape Route."
        ],
        correctAnswer: 0
    },
    {
        id: 274,
        question: "According to IMCA M 220 guidelines what is the proper action of the DPO if a failure that cause loss of redundancy occurs? De acordo com as diretrizes IMCA M 220, qual é a ação adequada do DPO se ocorrer uma falha que cause perda de redundância?",
        options: [
            "Call the captain.",
            "Change the mode to Joystick and control the vessel position and heading.",
            "Change the ASOG status to yellow and move out of the 500m zone.",
            "Prepare a Risk Analysis to check is possible continuous operation."
        ],
        correctAnswer: 2
    },
    {
        id: 275,
        question: "What are the three categories of DP Station Keeping Events? Describe them. Quais são as três categorias de Eventos de Manutenção de Estação DP? Descreva-as.",
        options: [
            "DP incident.",
            "All the options.",
            "DP undesired event.",
            "DP Observation."
        ],
        correctAnswer: 1
    },
    {
        id: 276,
        question: "What organization provides a DP Station Keeping Events Reporting Scheme? Qual organização fornece um Esquema de Relatório de Eventos de Manutenção de Estação DP?",
        options: [
            "IMCA.",
            "Bram.",
            "IMO."
        ],
        correctAnswer: 0
    },
    {
        id: 277,
        question: "What is the purpose of having a DP Emergency Response Plan? Qual é o propósito de ter um Plano de Resposta de Emergência DP?",
        options: [
            "To familiarize Key DP personnel in responding to various emergencies on DP.",
            "Provide guidance to DPOs to respond to emergency situations when conducting DP operations.",
            "All the options.",
            "To avoid any lack of understanding what should be done in case of emergency."
        ],
        correctAnswer: 2
    },
    {
        id: 278,
        question: "Whose responsibility is it to ensure that the DP Emergency Response Plan is reviewed and understood by all key DP personnel? De quem é a responsabilidade de garantir que o Plano de Resposta de Emergência DP seja revisado e compreendido por todo o pessoal-chave de DP?",
        options: [
            "Captain.",
            "Fiscal on board.",
            "Chief engineer.",
            "Company Owner."
        ],
        correctAnswer: 0
    },
    {
        id: 279,
        question: "When should a full blackout drill be conducted? Quando um exercício de blecaute total deve ser conduzido?",
        options: [
            "As soon as possible after a New C/E or Captain joins the vessel.",
            "Always before any critical activity.",
            "Every week.",
            "Never."
        ],
        correctAnswer: 0
    },
    {
        id: 280,
        question: "Why are DP Drills important? Por que os Exercícios de DP são importantes?",
        options: [
            "It is not important. Just a waste of time.",
            "To follow the company instructions.",
            "To prepare DP key personnel for potential DP emergency situations.",
            "To find any kind of fault on the DP System."
        ],
        correctAnswer: 2
    }
];