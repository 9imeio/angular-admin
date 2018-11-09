export const configuration = {
    menu: {
        navMenu: [
            { title: 'Home', classActive: 'home', routerLink: '\Home' },
            { title: 'Services', classActive: 'service', routerLink: '\Services' },
            { title: 'Gallery', classActive: 'gallery', routerLink: '\Gallery' },
            { title: 'Events', classActive: 'events', routerLink: '\Events' },
            { title: 'Login', classActive: 'login', routerLink: '\Login' },
        ]
    },
    header: {
        heading: 'Título Principal',
        headingText: 'Chamada Principal',
        buttonText: 'View Demo',
        buttonTextLink: '\Home'
    },
    services: {
        heading: 'Título Principal dos Serviços',
        headingText: 'Chamada Principal dos Serviços',
        buttonText: 'View Demo',
        buttonTextLink: '\Home',
        imgCard: ' ',
        typeCard: ' ',
        titleCard: 'Get Inspired',
        textCard: 'Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.',
        dateCard: '11/11/2018',
        userCard: 'Cindy Jefferson',
        features: [
            { id:1, icon: 'heart', title: '1º Título', description: 'Descrição do primeiro conteudo' },
            { id:2, icon: 'gallery', title: '2º Título', description: 'Descrição do segundo conteudo' },
            { id:3, icon: 'envelope', title: '3º Título', description: 'Descrição do terceiro conteudo' },
            { id:4, icon: 'cup', title: '4º Título', description: 'Descrição do quarto conteudo' },
            { id:5, icon: 'user', title: '5º Título', description: 'Descrição do quinto conteudo' },
            { id:6, icon: 'bubble', title: '6º Título', description: 'Descrição do sexto conteudo' }
        ]
    },
    gallery: {
        heading: 'Titulo Principal da Galeria',
        headingText: 'Chamada Principal da Galeria',
        buttonText: 'Browse all',
        buttonTextLink: '\Home',
        imgCard: '',
        typeCard: '',
        titleCard: '',
        textCard: '',
        dateCard: '',
        userCard: '',
        features: [
            { icon: '', img: 'img-1.jpg', title: '1º Título', description: 'Descrição do primeiro conteudo' },
            { icon: '', img: 'img-2.jpg', title: '2º Título', description: 'Descrição do primeiro conteudo' },
            { icon: '', img: 'img-3.jpg', title: '3º Título', description: 'Descrição do primeiro conteudo' },
            { icon: '', img: 'img-4.jpg', title: '4º Título', description: 'Descrição do primeiro conteudo' },
            { icon: '', img: 'img-5.jpg', title: '5º Título', description: 'Descrição do primeiro conteudo' },
            { icon: '', img: 'img-6.jpg', title: '6º Título', description: 'Descrição do primeiro conteudo' }

        ]
    },
    events: {
        heading: 'OUR LATEST NEWS & ARTICLES',
        headingText: 'Global Grand Event on Digital Design',
        buttonText: 'Read more news',
        buttonTextLink: '\Home',
        features: [
            { icon: '', img: 'img-1.jpg', title: '1º Título', description: 'Descrição do primeiro conteudo', date: 'Jan 20, 2018', user: 'Matheus Souza' },
            { icon: '', img: 'img-2.jpg', title: '2º Título', description: 'Descrição do primeiro conteudo', date: 'Fev 18, 2018', user: 'Lucas Alves' },
            { icon: '', img: 'img-3.jpg', title: '3º Título', description: 'Descrição do primeiro conteudo', date: 'Abr 25, 2018', user: 'Cindy Jefferson' },
        ]
    }
}