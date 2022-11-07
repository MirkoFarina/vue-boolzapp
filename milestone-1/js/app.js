const { createApp } = Vue;

createApp ({
    data(){
        return {
            contacts: [
                {
                    name: 'Michele',
                    profilePic: '_1',
                    messages: [
                        {
                            date: '07/11/2022',
                            hour: '15:30:55',
                            message: 'Vai a comprare le medicine',
                            status: 'sent'
                        },
                        {
                            date: '07/11/2022',
                            hour: '15:35:35',
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
            ]
        }
    }
}).mount('#app')
