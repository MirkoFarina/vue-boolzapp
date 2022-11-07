const { createApp } = Vue;

createApp ({
    data(){
        return {
            contacts: [
                {
                    name: 'Michele',
                    profilePic: '_1',
                    visible: true,
                    lastAccess: '07/11/2022 18:30',
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
                    name: 'Piergiorgio',
                    profilePic: '_2',
                    visible: false,
                    lastAccess: '07/11/2022 17:30',
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
                    name: 'Marco',
                    profilePic: '_3',
                    visible: false,
                    lastAccess: '07/11/2022 16:22',
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
            newMsgUser: ''
        }
    },
    methods: {
        thumbnailClick(index){
            this.contacts[this.counter].visible = false;
            this.counter = index;
            this.contacts[index].visible = true; 
        },
        sendMsg(){
            const newMsgObj = {
                date: '07/11/2022',
                hour: '15:30',
                message: this.newMsgUser,
                status: 'sent'
            }
            this.contacts[this.counter].messages.push(newMsgObj);
            this.newMsgUser = '';
            setTimeout(this.replyBot, 1000);
        },
        replyBot(){
            const msgReplyBot = {
                date: '07/11/2022',
                hour: '15:30',
                message: 'ok',
                status: 'received'
            }
            this.contacts[this.counter].messages.push(msgReplyBot);
        }
    }
}).mount('#app')


/*
Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo. */