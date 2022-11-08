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
                    name: 'Piergiorgio',
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
                    name: 'Marco',
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
                }
            ],
            counter: 0,
            newMsgUser: '',
            now: new Date(),
            searchInChat: ''
        }
    },
    methods: {
        thumbnailClick(index){
            this.contacts[this.counter].visible = false;
            this.counter = index;
            this.contacts[index].visible = true; 
        },
        sendMsg(){
            if(this.newMsgUser === '') return;
            const newMsgObj = {
                date: '07/11/2022',
                hour: this.now.getHours() + ':' + this.now.getMinutes(),
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
                hour: this.now.getHours() + ':' + this.now.getMinutes(),
                message: 'ok',
                status: 'received'
            }
            this.contacts[this.counter].messages.push(msgReplyBot);
        },
        searchTheLetters () {
            if(this.searchInChat.length > 0){
                const newWord =  this.searchInChat[0].toUpperCase() + this.searchInChat.toLowerCase().substring(1, this.searchInChat.length) ;
            
                this.contacts.forEach(contact => {
                contact.search = contact.name.includes(newWord);
            })
            }else {
                this.contacts.forEach(contact => contact.search = true);
            }       
        }   
    }
}).mount('#app')


