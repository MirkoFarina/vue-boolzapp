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
            now: new Date(),
            lastHour: '',
            minutes: '',
            day: '',
            year: '',
            searchInChat: '',
            isDropdown: false,
            isOnline: false,
            isOpen: false
        }
    },
    methods: {
        thumbnailClick(index){
            this.isOpen = false;
            this.contacts[this.counter].visible = false;
            this.counter = index;
            this.contacts[index].visible = true; 
        },
        sendMsg(){
            this.loopHour();
            if(this.newMsgUser === '') return;
            const newMsgObj = {
                date: this.day + '/' + (this.month + 1) + '/' + this.year,
                hour: this.lastHour + ':' + this.minutes,
                message: this.newMsgUser,
                status: 'sent'
            }
            this.contacts[this.counter].messages.push(newMsgObj);
            this.newMsgUser = '';
            setTimeout(this.replyBot, 1000);
            this.newLastAccess(true)
        },
        replyBot(){
            this.loopHour();
            this.newLastAccess(false);
            const msgReplyBot = {
                date: this.day + '/' + (this.month + 1) + '/' + this.year,
                hour: this.lastHour + ':' + this.minutes,
                message: 'ok',
                status: 'received'
            }
            this.contacts[this.counter].messages.push(msgReplyBot);
        },
        searchTheLetters () {
            if(this.searchInChat.length > 0){
                this.contacts.forEach(contact => {
                contact.search = contact.name.includes(this.searchInChat.toLowerCase());
            })
            }else {
                this.contacts.forEach(contact => contact.search = true);
            }       
        },
        deleteMessage(message){
            if(this.contacts[this.counter].messages.length !== 1){
                this.contacts[this.counter].messages.splice(message,1)
            }else {
                const newEmptyArray = [];
                this.contacts[this.counter].messages = newEmptyArray;
            }
        },
        newHour(contact){
            if(contact.messages.length !== 0) {
                return  contact.messages[contact.messages.length - 1].hour;
            }else {
                return "";
            }
        },
        lastMessage(contact){
            if(contact.messages.length !== 0) {
                return contact.messages[contact.messages.length - 1].message
            }else {
                return "";
            }
        },
        loopHour (){
                this.now = new Date();
                this.lastHour = this.now.getHours();
                this.minutes = this.now.getMinutes();
                if(this.lastHour < 10) this.lastHour = '0'+ this.lastHour;
                if(this.minutes < 10) this.minutes = '0'+ this.minutes;
        },
        newLastAccess (isOnline){
            this.day = this.now.getDate();
            this.month = this.now.getMonth();
            this.year= this.now.getFullYear();
            if(this.day < 10) this.day = '0' + this.day;
            if((this.month + 1) < 10) this.month = '0' + this.month;
            
            if(isOnline) {
                this.isOnline = !this.isOnline;
                this.contacts[this.counter].lastAccess = 'online';
            }else {
                this.isOnline = !this.isOnline;
                this.contacts[this.counter].lastAccess = this.day + '/' + (this.month + 1) + '/' + this.year + '  ' + this.lastHour + ':' + this.minutes ;
            }
        },
         firstLetterUp(){
            return this.contacts[this.counter].name[0].toUpperCase() + this.contacts[this.counter].name.toLowerCase().substring(1, this.contacts[this.counter].name.length);
         }
    }
}).mount('#app')
