export const categories = ["Todos", "Crochê", "Tapetes", "Jogos de banheiro", "Infantil", "Sandálias"] as const;
export type Category = typeof categories[number];
export interface Product { id: string; name: string; price: number; category: string; each: boolean; image: string; thumbnail: string; width: number; height: number; description: string; source: string; tags: string[]; }
export const products: Product[] = [
  {
    "id": "peca-06",
    "name": "Jogo de banheiro verde-água e rosa com flores",
    "price": 250,
    "category": "Jogos de banheiro",
    "each": false,
    "image": "/images/peca-06.webp",
    "thumbnail": "/images/peca-06-small.webp",
    "width": 720,
    "height": 886,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "3edf8c04-daf8-4501-b6d9-bfa73d22475f.jpeg",
    "tags": [
      "Jogos de banheiro",
      "Crochê"
    ]
  },
  {
    "id": "peca-17",
    "name": "Tapetes florais rosa",
    "price": 45,
    "category": "Tapetes",
    "each": true,
    "image": "/images/peca-17.webp",
    "thumbnail": "/images/peca-17-small.webp",
    "width": 540,
    "height": 675,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "9e6be7cc-cf95-426f-afd3-39cf6d5309d4 (1).jpeg",
    "tags": [
      "Tapetes",
      "Crochê"
    ]
  },
  {
    "id": "peca-03",
    "name": "Chinelo branco decorado com flores rosa",
    "price": 80,
    "category": "Sandálias",
    "each": false,
    "image": "/images/peca-03.webp",
    "thumbnail": "/images/peca-03-small.webp",
    "width": 1050,
    "height": 1000,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "174d3453-3b41-4ab4-96f1-7426d6d317a9.jpeg",
    "tags": [
      "Sandálias"
    ]
  },
  {
    "id": "peca-09",
    "name": "Conjunto de crochê para sofá",
    "price": 400,
    "category": "Crochê",
    "each": false,
    "image": "/images/peca-09.webp",
    "thumbnail": "/images/peca-09-small.webp",
    "width": 733,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "5c5561b7-6d76-483e-bf55-7053049a119b.jpeg",
    "tags": [
      "Crochê",
      "Crochê"
    ]
  },
  {
    "id": "peca-10",
    "name": "Jogo de banheiro rosa e cru",
    "price": 150,
    "category": "Jogos de banheiro",
    "each": false,
    "image": "/images/peca-10.webp",
    "thumbnail": "/images/peca-10-small.webp",
    "width": 929,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "6ed43bde-505d-48de-bd54-bfc84c690e42.jpeg",
    "tags": [
      "Jogos de banheiro",
      "Crochê"
    ]
  },
  {
    "id": "peca-15",
    "name": "Tapete infantil de ursinha rosa",
    "price": 300,
    "category": "Infantil",
    "each": false,
    "image": "/images/peca-15.webp",
    "thumbnail": "/images/peca-15-small.webp",
    "width": 939,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "8c5dd7dc-7bb1-4d93-94dd-113873759cc3.jpeg",
    "tags": [
      "Infantil",
      "Crochê"
    ]
  },
  {
    "id": "peca-16",
    "name": "Jogo de tapetes azul-marinho, cru e marrom",
    "price": 150,
    "category": "Tapetes",
    "each": false,
    "image": "/images/peca-16.webp",
    "thumbnail": "/images/peca-16-small.webp",
    "width": 738,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "8d9fa020-5540-4f9a-b1d2-13c8bacb66dd.jpeg",
    "tags": [
      "Tapetes",
      "Crochê"
    ]
  },
  {
    "id": "peca-01",
    "name": "Jogo de crochê floral verde, rosa e cru",
    "price": 180,
    "category": "Crochê",
    "each": false,
    "image": "/images/peca-01.webp",
    "thumbnail": "/images/peca-01-small.webp",
    "width": 973,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "028fe654-db07-4372-9120-ebc37d595450.jpeg",
    "tags": [
      "Crochê",
      "Crochê"
    ]
  },
  {
    "id": "peca-00",
    "name": "Jogo de banheiro rosa",
    "price": 150,
    "category": "Jogos de banheiro",
    "each": false,
    "image": "/images/peca-00.webp",
    "thumbnail": "/images/peca-00-small.webp",
    "width": 985,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "0166f21b-0c33-469b-b983-e959090862a0.jpeg",
    "tags": [
      "Jogos de banheiro",
      "Crochê"
    ]
  },
  {
    "id": "peca-14",
    "name": "Jogo de cozinha rosa floral",
    "price": 170,
    "category": "Tapetes",
    "each": false,
    "image": "/images/peca-14.webp",
    "thumbnail": "/images/peca-14-small.webp",
    "width": 1029,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "837e89dc-0549-4047-8f05-e3466fb47a21.jpeg",
    "tags": [
      "Tapetes",
      "Crochê"
    ]
  },
  {
    "id": "peca-04",
    "name": "Jogo de banheiro verde com flores vermelhas",
    "price": 250,
    "category": "Jogos de banheiro",
    "each": false,
    "image": "/images/peca-04.webp",
    "thumbnail": "/images/peca-04-small.webp",
    "width": 862,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "2534f45c-0900-4b3f-b13a-a9203b887f06.jpeg",
    "tags": [
      "Jogos de banheiro",
      "Crochê"
    ]
  },
  {
    "id": "peca-13",
    "name": "Tapete infantil de ursinho azul",
    "price": 300,
    "category": "Infantil",
    "each": false,
    "image": "/images/peca-13.webp",
    "thumbnail": "/images/peca-13-small.webp",
    "width": 947,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "820023f1-224b-4f11-bb1a-90d5c765bf35.jpeg",
    "tags": [
      "Infantil",
      "Crochê"
    ]
  },
  {
    "id": "peca-20",
    "name": "Tapetes rosa, cinza e branco",
    "price": 45,
    "category": "Tapetes",
    "each": true,
    "image": "/images/peca-20.webp",
    "thumbnail": "/images/peca-20-small.webp",
    "width": 947,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "b58d4b5a-9ca8-4a70-b1cf-ac66b5545a62.jpeg",
    "tags": [
      "Tapetes",
      "Crochê"
    ]
  },
  {
    "id": "peca-05",
    "name": "Chinelo decorado com pérolas — adulto e infantil",
    "price": 80,
    "category": "Sandálias",
    "each": true,
    "image": "/images/peca-05.webp",
    "thumbnail": "/images/peca-05-small.webp",
    "width": 969,
    "height": 1200,
    "description": "Decoração com pérolas em versões adulta e infantil. A versão infantil acompanha tiara. Valor por par; consulte tamanhos com a Selma.",
    "source": "26d493af-7fdb-4c6a-958a-ed413ba2d4ec.jpeg",
    "tags": [
      "Sandálias",
      "Infantil"
    ]
  },
  {
    "id": "peca-07",
    "name": "Chinelo azul-claro com flores rosa e amarelas",
    "price": 80,
    "category": "Sandálias",
    "each": false,
    "image": "/images/peca-07.webp",
    "thumbnail": "/images/peca-07-small.webp",
    "width": 845,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "40accff6-e518-4d4a-8dab-91c212157a36.jpeg",
    "tags": [
      "Sandálias"
    ]
  },
  {
    "id": "peca-11",
    "name": "Chinelo rosa decorado com flores",
    "price": 80,
    "category": "Sandálias",
    "each": false,
    "image": "/images/peca-11.webp",
    "thumbnail": "/images/peca-11-small.webp",
    "width": 1050,
    "height": 988,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "749eaccc-82ae-41c6-af2f-688056b234f3.jpeg",
    "tags": [
      "Sandálias"
    ]
  },
  {
    "id": "peca-12",
    "name": "Chinelo vermelho decorado com pérolas",
    "price": 80,
    "category": "Sandálias",
    "each": false,
    "image": "/images/peca-12.webp",
    "thumbnail": "/images/peca-12-small.webp",
    "width": 1024,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "779f5e27-ba2f-48ca-a66c-a8d20aaa4bb8.jpeg",
    "tags": [
      "Sandálias"
    ]
  },
  {
    "id": "peca-08",
    "name": "Chinelo com detalhes rosa + tiara",
    "price": 80,
    "category": "Sandálias",
    "each": false,
    "image": "/images/peca-08.webp",
    "thumbnail": "/images/peca-08-small.webp",
    "width": 777,
    "height": 899,
    "description": "Chinelo com decoração em tons de rosa e tiara, conforme a fotografia. Consulte tamanhos e disponibilidade com a Selma.",
    "source": "5590b541-c35e-4b26-a959-e8131719e2a0.jpeg",
    "tags": [
      "Sandálias",
      "Infantil"
    ]
  },
  {
    "id": "peca-19",
    "name": "Jogo de banheiro lilás com flores",
    "price": 150,
    "category": "Jogos de banheiro",
    "each": false,
    "image": "/images/peca-19.webp",
    "thumbnail": "/images/peca-19-small.webp",
    "width": 842,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "b341bbea-4fad-4085-b8af-bb525151c422.jpeg",
    "tags": [
      "Jogos de banheiro",
      "Crochê"
    ]
  },
  {
    "id": "peca-21",
    "name": "Jogo de crochê azul com flores rosa",
    "price": 180,
    "category": "Crochê",
    "each": false,
    "image": "/images/peca-21.webp",
    "thumbnail": "/images/peca-21-small.webp",
    "width": 720,
    "height": 916,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "c41e039e-d820-48d1-b9d9-7e29b42d1f2e.jpeg",
    "tags": [
      "Crochê",
      "Crochê"
    ]
  },
  {
    "id": "peca-22",
    "name": "Jogo de banheiro roxo e lilás",
    "price": 150,
    "category": "Jogos de banheiro",
    "each": false,
    "image": "/images/peca-22.webp",
    "thumbnail": "/images/peca-22-small.webp",
    "width": 949,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "d18549b3-9f89-4788-a097-7dd3c5eac048.jpeg",
    "tags": [
      "Jogos de banheiro",
      "Crochê"
    ]
  },
  {
    "id": "peca-23",
    "name": "Jogo de crochê marrom e cru com flores",
    "price": 180,
    "category": "Crochê",
    "each": false,
    "image": "/images/peca-23.webp",
    "thumbnail": "/images/peca-23-small.webp",
    "width": 936,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "d89df053-cc47-4ba8-85c1-b7ff35c59a72.jpeg",
    "tags": [
      "Crochê",
      "Crochê"
    ]
  },
  {
    "id": "peca-24",
    "name": "Chinelo branco com flores vermelhas",
    "price": 80,
    "category": "Sandálias",
    "each": false,
    "image": "/images/peca-24.webp",
    "thumbnail": "/images/peca-24-small.webp",
    "width": 1050,
    "height": 933,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "ed0791b0-7062-4da1-832a-f5d38b583c92.jpeg",
    "tags": [
      "Sandálias"
    ]
  },
  {
    "id": "peca-25",
    "name": "Jogo de banheiro azul e rosa",
    "price": 150,
    "category": "Jogos de banheiro",
    "each": false,
    "image": "/images/peca-25.webp",
    "thumbnail": "/images/peca-25-small.webp",
    "width": 979,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "eeb90b1d-3008-4f9e-9d24-7ff47f112dfb.jpeg",
    "tags": [
      "Jogos de banheiro",
      "Crochê"
    ]
  },
  {
    "id": "peca-26",
    "name": "Jogo de banheiro azul",
    "price": 150,
    "category": "Jogos de banheiro",
    "each": false,
    "image": "/images/peca-26.webp",
    "thumbnail": "/images/peca-26-small.webp",
    "width": 940,
    "height": 1200,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "f05760f1-45f5-44c3-8553-20b457891f86.jpeg",
    "tags": [
      "Jogos de banheiro",
      "Crochê"
    ]
  },
  {
    "id": "peca-27",
    "name": "Jogo de tapetes preto e caramelo",
    "price": 180,
    "category": "Tapetes",
    "each": false,
    "image": "/images/peca-27.webp",
    "thumbnail": "/images/peca-27-small.webp",
    "width": 1050,
    "height": 1144,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "f955f92a-a73f-401b-b842-8ef15ab65a02.jpeg",
    "tags": [
      "Tapetes",
      "Crochê"
    ]
  },
  {
    "id": "peca-28",
    "name": "Chinelo bege com flores e pérolas",
    "price": 60,
    "category": "Sandálias",
    "each": false,
    "image": "/images/peca-28.webp",
    "thumbnail": "/images/peca-28-small.webp",
    "width": 1050,
    "height": 910,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "fd895e4a-82de-4119-a4a3-cc90e82797fd.jpeg",
    "tags": [
      "Sandálias"
    ]
  },
  {
    "id": "peca-29",
    "name": "Tapetes ovais coloridos com flores",
    "price": 45,
    "category": "Tapetes",
    "each": true,
    "image": "/images/peca-29.webp",
    "thumbnail": "/images/peca-29-small.webp",
    "width": 1035,
    "height": 1187,
    "description": "Peça artesanal feita com carinho e atenção aos detalhes. Consulte disponibilidade e possibilidades de personalização pelo WhatsApp.",
    "source": "fedba93f-38e7-4379-b109-eba77502c0c6.jpeg",
    "tags": [
      "Tapetes",
      "Crochê"
    ]
  }
];
