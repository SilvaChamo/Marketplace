
import React from 'react';
import { Category } from './types';

export const CATEGORIES: Category[] = [
  { 
    id: '1', 
    name: 'Comércio Geral', 
    icon: '🛍️', 
    count: 150,
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800',
    description: 'Produtos diversificados para o consumo diário e retalho em grande escala.'
  },
  { 
    id: '2', 
    name: 'Ferragens & Construção', 
    icon: '🛠️', 
    count: 85,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    description: 'Materiais de construção e ferramentas para obras civis e industriais.'
  },
  { 
    id: '3', 
    name: 'Venda de Roupas', 
    icon: '👕', 
    count: 210,
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800',
    description: 'Tendências de moda masculina, feminina e infantil para todas as ocasiões.'
  },
  { 
    id: '4', 
    name: 'Electrodomésticos', 
    icon: '📺', 
    count: 45,
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800',
    description: 'Equipamentos modernos para facilitar a vida no lar e no escritório.'
  },
  { 
    id: '5', 
    name: 'Restaurantes & Cafés', 
    icon: '🍲', 
    count: 120,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    description: 'O melhor da gastronomia nacional e internacional em ambientes acolhedores.'
  },
  { 
    id: '6', 
    name: 'Serviços Automotivos', 
    icon: '🚗', 
    count: 65,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    description: 'Manutenção, reparação e venda de acessórios para o seu veículo.'
  },
  { 
    id: '7', 
    name: 'Tecnologia & Gadgets', 
    icon: '💻', 
    count: 95,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800',
    description: 'Soluções digitais, computadores e os mais recentes dispositivos tecnológicos.'
  },
  { 
    id: '8', 
    name: 'Beleza & Estética', 
    icon: '✨', 
    count: 130,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800',
    description: 'Cuidados pessoais, salões e spas para o seu bem-estar e autoestima.'
  },
];

export const NAV_LINKS = [
  { name: 'Início', href: '#' },
  { name: 'Categorias', href: '#categories' },
  { name: 'Publicidade', href: '#advertise' },
  { name: 'Sobre Nós', href: '#about' },
];