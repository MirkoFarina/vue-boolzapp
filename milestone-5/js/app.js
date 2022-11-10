const DateTime = luxon.DateTime;



const { createApp } = Vue;

createApp ({
    data(){
        return {
            contacts: [
                {
                    name: 'michele',
                    profilePic: '_1',
                    visible: true,
                    lastAccess: '07/11/2022 18:30',
                    search: true,
                    messages: [
                        {
                            date: '07/11/2022',
                            hour: '15:30',
                            message: 'Vai a comprare le medicine',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Comprami anche le sigarette',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '18:20',
                            message: 'Fatto tutto!',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'piergiorgio',
                    profilePic: '_2',
                    visible: false,
                    lastAccess: '07/11/2022 17:30',
                    search: true,
                    messages: [
                        {
                            date: '07/11/2022',
                            hour: '15:30',
                            message: 'Vai a comprare le medicine',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Comprami anche le sigarette',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '16:45',
                            message: 'Mi dispiace non sono riuscito ad andare',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'marco',
                    profilePic: '_3',
                    visible: false,
                    lastAccess: '07/11/2022 16:22',
                    search: true,
                    messages: [
                        {
                            date: '07/11/2022',
                            hour: '15:30',
                            message: 'Vai a comprare le medicine',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Comprami anche le sigarette',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '16:20',
                            message: 'Guarda stavo per chiedertelo io',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'eleonora',
                    profilePic: '_io',
                    visible: false,
                    lastAccess: '08/11/2022 16:22',
                    search: true,
                    messages: [
                        {
                            date: '07/11/2022',
                            hour: '15:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Bene tu?',
                            status: 'received'
                        },
                        {
                            date: '07/11/2022',
                            hour: '16:20',
                            message: 'Bene bene',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '16:20',
                            message: 'Cosa fai stasera?',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Niente, penso di stare a casa',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'ugo',
                    profilePic: '_5',
                    visible: false,
                    lastAccess: '07/11/2022 17:30',
                    search: true,
                    messages: [
                        {
                            date: '07/11/2022',
                            hour: '15:30',
                            message: 'Vai a comprare le medicine',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Comprami anche le sigarette',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '16:45',
                            message: 'Mi dispiace non sono riuscito ad andare',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'lello',
                    profilePic: '_4',
                    visible: false,
                    lastAccess: '07/11/2022 17:30',
                    search: true,
                    messages: [
                        {
                            date: '07/11/2022',
                            hour: '15:30',
                            message: 'Vai a comprare le medicine',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Comprami anche le sigarette',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '16:45',
                            message: 'Mi dispiace non sono riuscito ad andare',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'luca',
                    profilePic: '_8',
                    visible: false,
                    lastAccess: '08/11/2022 16:22',
                    search: true,
                    messages: [
                        {
                            date: '07/11/2022',
                            hour: '15:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Bene tu?',
                            status: 'received'
                        },
                        {
                            date: '07/11/2022',
                            hour: '16:20',
                            message: 'Bene bene',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '16:20',
                            message: 'Cosa fai stasera?',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Niente, penso di stare a casa',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'luna',
                    profilePic: '_6',
                    visible: false,
                    lastAccess: '07/11/2022 16:22',
                    search: true,
                    messages: [
                        {
                            date: '07/11/2022',
                            hour: '15:30',
                            message: 'Vai a comprare le medicine',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Comprami anche le sigarette',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '16:20',
                            message: 'Guarda stavo per chiedertelo io',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'pino',
                    profilePic: '_7',
                    visible: false,
                    lastAccess: '07/11/2022 16:22',
                    search: true,
                    messages: [
                        {
                            date: '07/11/2022',
                            hour: '15:30',
                            message: 'Vai a comprare le medicine',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35',
                            message: 'Comprami anche le sigarette',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '16:20',
                            message: 'Guarda stavo per chiedertelo io',
                            status: 'received'
                        }
                    ]
                }
            ],
            counter: 0,
            isDesk: false,
            newMsgUser: '',
            now: '',
            lastHour: '',
            minutes: '',
            day: '',
            year: '',
            searchInChat: '',
            isDropdown: false,
            isOnline: false,
            isOpen: false,
            isEmoji: false
        }
    },
    methods: {
        /**
         * al click delle thumb, e al click nella rubrica mi apre quella chat 
         * @param {number} index 
         */
        thumbnailClick(index){
            this.isOpen = false;
            this.contacts[this.counter].visible = false;
            this.counter = index;
            this.contacts[index].visible = true; 
        },
        /**
         * al click del tasto invio da parte dell'utente invia un messaggio inserendolo nei dati principali, e facendo partire la risposta automatica.
         * @returns se l'utente non inserisce nessun carattere ma solo spazi, blocca la funzione e annulla l'invio
         */
        sendMsg(){
            if(this.newMsgUser === '') return;
            const newMsgObj = {
                date:this.now.setLocale('it').toFormat("dd '/' MM '/' kkkk"),
                hour: this.now.setLocale('it').toFormat("HH ':' mm"),
                message: this.newMsgUser,
                status: 'sent'
            }
            this.contacts[this.counter].messages.push(newMsgObj);
            this.newMsgUser = '';
            setTimeout(this.replyBot, 1000);
            this.newLastAccess(true)
        },
        /**
         * dopo che l'utente invia il messaggio richiama questa funzione con seTimeout e dopo 1 secondo aggiungo ai dati principali la risposta da parte del bot, che è un semplice ok 
         */
        replyBot(){
            this.newLastAccess(false);
            const msgReplyBot = {
                date: this.now.setLocale('it').toFormat("dd '/' MM '/' kkkk"),
                hour: this.now.setLocale('it').toFormat("HH ':' mm"),
                message: 'ok',
                status: 'received'
            }
            this.contacts[this.counter].messages.push(msgReplyBot);
        },
        /**
         * questa funzione mi ricerca le lettere che io sto impostando nel mio input text, e mi fa visualizzare solo quelli che contengono le lettere che io sto cercando 
         */
        searchTheLetters () {
            if(this.searchInChat.length > 0){
                this.contacts.forEach(contact => {
                contact.search = contact.name.includes(this.searchInChat.toLowerCase());
            })
            }else {
                this.contacts.forEach(contact => contact.search = true);
            }       
        },
        /**
         *  quando premo su deleteMessage mi cancella il messaggio dai miei dati principali e alla fine quando non ci sono piu' messaggi sostituisce il mio array di messaggi con uno vuoto
         * @param {messaggio} message 
         */
        deleteMessage(message){
            if(this.contacts[this.counter].messages.length !== 1){
                this.contacts[this.counter].messages.splice(message,1)
            }else {
                const newEmptyArray = [];
                this.contacts[this.counter].messages = newEmptyArray;
            }
        },
        /**
         * quando arrivo a cancellare l'ultimo messaggio per evitare un messaggio di errore mi restituisce stringa vuota cosi' che non ricerchi qualcosa nel mio array vuoto.
         * @param {contatto} contact 
         * @returns 
         */
        newHour(contact){
            if(contact.messages.length !== 0) {
                return  contact.messages[contact.messages.length - 1].hour;
            }else {
                return "";
            }
        },
        /**
         * quando arrivo a cancellare l'ultimo messaggio per evitare un messaggio di errore mi restituisce stringa vuota cosi' che non ricerchi qualcosa nel mio array vuoto.
         * @param {contatto} contact 
         * @returns 
         */
        lastMessage(contact){
            if(contact.messages.length !== 0) {
                return contact.messages[contact.messages.length - 1].message
            }else {
                return "";
            }
        },
        /**
         * quando il mio bot mi risponde, cambia il suo stato in online e subito dopo il suo ultimo accesso si aggiorna all'ultimo messaggio inviato.
         * @param {*} isOnline 
         */
        newLastAccess (isOnline){
            if(isOnline) {
                this.isOnline = !this.isOnline;
                this.contacts[this.counter].lastAccess = 'online';
            }else {
                this.isOnline = !this.isOnline;
                this.contacts[this.counter].lastAccess = this.now.setLocale('it').toFormat("dd '/' MM '/' kkkk ' ' HH ':' mm");
            }
        },
        /**
         * 
         * @returns mi ritorna la strigna con la prima lettera maiuscola
         */
         firstLetterUp(){
            return this.contacts[this.counter].name[0].toUpperCase() + this.contacts[this.counter].name.toLowerCase().substring(1, this.contacts[this.counter].name.length);
         },
         /**
          * mi aggiorna di secondo in secondo la mia data e la mia ora al momento dell'avvio dell'applicazione
          */
         refreshTime(){
            setInterval(() => {
                this.now = DateTime.now();
            }, 1000);
         },
         /* grazie a queste funzioni (anche se so che non è il metodo giusto) aggiungo l'emoji al mio testo, cosi' da poter inviare messaggi più carini */
         emSmile(){
            this.newMsgUser = `${this.newMsgUser} 😀`
         },
         emSuperSmile(){
            this.newMsgUser = `${this.newMsgUser} 😁`
         },
         emCryToSmile(){
            this.newMsgUser = `${this.newMsgUser} 😂`
         },
         emSmileWithHorns(){
            this.newMsgUser = `${this.newMsgUser} 😈`
         },
         emToEat(){
            this.newMsgUser = `${this.newMsgUser} 😋`
         },
         emScared(){
            this.newMsgUser = `${this.newMsgUser} 😱`
         },
         emFire(){
            this.newMsgUser = `${this.newMsgUser} 🔥`
         }
    },
    mounted(){
       this.refreshTime()
    }
}).mount('#app')


